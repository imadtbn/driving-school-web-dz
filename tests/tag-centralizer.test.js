#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const excludedFromLoader = new Set(['offline.html']);
const expectedAdSlots = new Map([
  ['index.html', 'feed-01'],
  ['signals.html', 'display-01'],
  ['rules.html', 'article-01'],
  ['safety.html', 'article-02'],
  ['warning-signs.html', 'feed-02'],
  ['prohibition-signs.html', 'feed-02'],
  ['mandatory-signs.html', 'display-02'],
  ['information-signs.html', 'display-02'],
  ['faq-road-law.html', 'feed-03'],
  ['sources.html', 'related-01'],
]);

const prohibitedDirectPatterns = [
  /<script[^>]+googletagmanager\.com/i,
  /<script[^>]+googletagservices\.com/i,
  /<script[^>]+pagead2\.googlesyndication\.com/i,
  /<script[^>]+clarity\.ms/i,
  /\bgtag\s*\(/i,
  /['"]gtm\.start['"]/i,
];

const pages = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
assert.ok(pages.length > 0, 'لم تُعثر على صفحات HTML للاختبار.');

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  const loaderCount = (html.match(/<script\s+src="js\/site-tags\.js"\s+defer><\/script>/g) || []).length;
  const adSlotMatches = [...html.matchAll(/data-adsense-slot="([a-z]+-\d+)"/g)].map((match) => match[1]);
  const gtmNoscriptCount = (html.match(/<noscript><iframe src="https:\/\/www\.googletagmanager\.com\/ns\.html\?id=GTM-TQDB7NL9"/g) || []).length;

  if (excludedFromLoader.has(page)) {
    assert.equal(loaderCount, 0, `${page}: صفحة عدم الاتصال يجب أن تبقى بلا محمل خارجي.`);
    assert.equal(gtmNoscriptCount, 0, `${page}: صفحة عدم الاتصال يجب أن تبقى بلا إطار GTM.`);
  } else {
    assert.equal(loaderCount, 1, `${page}: يجب استدعاء المحمل المركزي مرة واحدة فقط.`);
    assert.equal(gtmNoscriptCount, 1, `${page}: يجب أن يحتوي على إطار GTM غير البرمجي مرة واحدة فقط.`);
  }

  for (const pattern of prohibitedDirectPatterns) {
    assert.ok(!pattern.test(html), `${page}: وُجد تحميل أو إعداد مباشر محظور (${pattern}).`);
  }

  if (expectedAdSlots.has(page)) {
    assert.deepEqual(adSlotMatches, [expectedAdSlots.get(page)], `${page}: يجب أن يحتوي موضع الإعلان التعليمي المحدد فقط.`);
    assert.match(html, /<p>محتوى إعلاني<\/p>/, `${page}: يجب وسم موضع الإعلان بوضوح.`);
    assert.ok(!html.includes('ca-pub-5656416032906373'), `${page}: يجب أن يبقى معرّف الناشر محصوراً في المحمل المركزي.`);
  } else {
    assert.equal(adSlotMatches.length, 0, `${page}: لا يجوز وضع إعلانات في هذه الصفحة.`);
    assert.ok(!html.includes('class="ad-placement'), `${page}: لا يجوز إنشاء موضع إعلان في هذه الصفحة.`);
  }
}

const tags = fs.readFileSync(path.join(root, 'js', 'site-tags.js'), 'utf8');
assert.match(tags, /gtmId:\s*'GTM-TQDB7NL9'/, 'معرّف GTM غير موجود في المحمل المركزي.');
assert.match(tags, /ga4Id:\s*'G-HCLS25SLPP'/, 'معرّف GA4 غير موجود في المحمل المركزي.');
assert.match(tags, /clarityId:\s*''/, 'يجب أن يبقى Clarity فارغاً وغير مفعّل.');
assert.match(tags, /if \(valid\.gtm\(CONFIG\.gtmId\) \|\| !valid\.ga4\(CONFIG\.ga4Id\)/, 'يجب أن يمنع GTM تحميل GA4 المباشر.');
assert.match(tags, /ca-pub-5656416032906373/, 'معرّف ناشر AdSense غير موجود في المحمل المركزي.');
for (const slot of ['7867079394', '3143411927', '8546947691', '1760836049', '6152718642', '5508509362', '6118497380', '7319898418', '6528123169']) {
  assert.match(tags, new RegExp(slot), `فتحة AdSense ${slot} مفقودة من المحمل المركزي.`);
}
assert.match(tags, /unit\.setAttribute\('data-ad-client',\s*CONFIG\.adsenseClient\)/, 'يجب أن يضيف المحمل المركزي معرّف الناشر إلى الوحدات عند تهيئتها.');

const serviceWorker = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
assert.match(serviceWorker, /driving-school-dz-v9/, 'إصدار ذاكرة PWA لم يُحدّث.');
assert.match(serviceWorker, /'\.\/js\/site-tags\.js'/, 'محمل الوسوم غير موجود في قائمة ذاكرة PWA المسبقة.');
const precacheStart = serviceWorker.indexOf('const PRECACHE_URLS');
const precacheEnd = serviceWorker.indexOf('];', precacheStart);
const precacheSection = serviceWorker.slice(precacheStart, precacheEnd + 2);
const precacheUrls = [...precacheSection.matchAll(/'([^']+)'/g)].map((match) => match[1]);
assert.equal(new Set(precacheUrls).size, precacheUrls.length, 'لا يجوز تكرار مورد في قائمة ذاكرة PWA المسبقة.');

console.log(`نجح اختبار توحيد الوسوم والإعلانات على ${pages.length} صفحة.`);
