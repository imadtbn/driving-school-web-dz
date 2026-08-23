const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'assets', 'illustrations');
fs.mkdirSync(outDir, { recursive: true });

const frame = (title, art) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110" role="img" aria-labelledby="title">
  <title id="title">${title}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eff8f2"/><stop offset="1" stop-color="#dcefe3"/></linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#3d5b4d"/><stop offset="1" stop-color="#213a2e"/></linearGradient>
  </defs>
  <rect width="160" height="110" rx="16" fill="url(#bg)"/>
  <circle cx="135" cy="22" r="25" fill="#087346" opacity=".08"/>
  ${art}
</svg>`;

const car = (x, y, color = '#087346') => `<g transform="translate(${x} ${y})"><path d="M5 25h50v-16l-9-9H20l-8 9H5Z" fill="${color}"/><path d="M17 9h28l5 7H12Z" fill="#d7eef2"/><circle cx="16" cy="26" r="6" fill="#173528"/><circle cx="45" cy="26" r="6" fill="#173528"/><circle cx="16" cy="26" r="2" fill="#f5f7f6"/><circle cx="45" cy="26" r="2" fill="#f5f7f6"/></g>`;
const road = `<path d="M12 110 57 42h46l45 68Z" fill="url(#road)"/><path d="M80 54v56" stroke="#efbd50" stroke-width="4" stroke-dasharray="9 6"/>`;

const icons = {
  'safety-before.svg': frame('الاستعداد قبل الانطلاق', `${road}${car(55, 56)}<path d="M30 28l8 8 17-19" fill="none" stroke="#087346" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`),
  'safety-rain.svg': frame('القيادة الآمنة تحت المطر', `${road}${car(56, 63)}<g stroke="#1f80ad" stroke-width="3" stroke-linecap="round"><path d="M32 15l-4 8M53 9l-4 8M79 14l-4 8M106 8l-4 8M129 15l-4 8"/></g><path d="M19 91q10-8 20 0t20 0" fill="none" stroke="#4aa1c4" stroke-width="3"/>`),
  'safety-night.svg': frame('القيادة ليلاً', `${road}${car(56, 63, '#0a5273')}<path d="M35 25a15 15 0 1 0 11-23 13 13 0 1 1-11 23Z" fill="#efbd50"/><path d="M70 79l-22-12M91 79l22-12" stroke="#f7e5a8" stroke-width="4" stroke-linecap="round" opacity=".9"/>`),
  'safety-highway.svg': frame('السلامة على الطريق السريع', `${road}${car(56, 63)}<path d="M28 49 52 28M132 49 108 28" stroke="#087346" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M28 49l2-10 9 5M132 49l-2-10-9 5" fill="#087346"/>`),
  'safety-fatigue.svg': frame('تجنب القيادة عند التعب', `<circle cx="82" cy="54" r="28" fill="#f2c95f" opacity=".7"/><path d="M57 53q9-9 18 0M89 53q9-9 18 0" fill="none" stroke="#173528" stroke-width="4" stroke-linecap="round"/><path d="M72 73q10 6 20 0" fill="none" stroke="#173528" stroke-width="4" stroke-linecap="round"/><path d="M116 29l4 6 7 1-5 5 1 7-7-3-6 3 1-7-5-5 7-1Z" fill="#087346" opacity=".7"/>`),
  'safety-defensive.svg': frame('القيادة الدفاعية', `${road}${car(56, 63)}<path d="M80 10 104 19v19c0 16-10 28-24 34-14-6-24-18-24-34V19Z" fill="#087346" opacity=".88"/><path d="m68 37 8 8 15-17" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`),
  'rules-speed.svg': frame('السرعة المناسبة', `<path d="M34 83a47 47 0 0 1 92 0" fill="none" stroke="#087346" stroke-width="10" stroke-linecap="round"/><path d="M80 77 106 42" stroke="#d98c16" stroke-width="6" stroke-linecap="round"/><circle cx="80" cy="77" r="7" fill="#173528"/><path d="M41 59l8 5M57 42l5 8M102 42l-5 8M119 59l-8 5" stroke="#173528" stroke-width="3" stroke-linecap="round"/>`),
  'rules-distance.svg': frame('مسافة الأمان', `${road}${car(35, 63, '#0a5273')}${car(85, 48, '#087346')}<path d="M68 70h20" stroke="#efbd50" stroke-width="4" stroke-dasharray="5 4"/><path d="m68 70 6-4v8Zm20 0-6-4v8Z" fill="#efbd50"/>`),
  'rules-seatbelt.svg': frame('ربط حزام الأمان', `<path d="M55 85V35q0-16 25-16t25 16v50" fill="#0a5273" opacity=".9"/><path d="M52 25 105 90" stroke="#efbd50" stroke-width="11" stroke-linecap="round"/><path d="M96 82h20v14H96Z" fill="#173528"/><path d="M98 84h12v8H98Z" fill="#f2f5f3"/>`),
  'rules-focus.svg': frame('التركيز أثناء القيادة', `<path d="M33 55s18-22 47-22 47 22 47 22-18 22-47 22-47-22-47-22Z" fill="#fff" stroke="#087346" stroke-width="5"/><circle cx="80" cy="55" r="12" fill="#0a5273"/><circle cx="80" cy="55" r="5" fill="#f2f5f3"/><rect x="113" y="20" width="16" height="28" rx="3" fill="#d98c16"/><path d="m111 48 21-27" stroke="#b93332" stroke-width="4"/>`),
  'rules-lane.svg': frame('تغيير المسار بأمان', `${road}${car(42, 62, '#0a5273')}${car(86, 44, '#087346')}<path d="M50 40q22-18 42 0" fill="none" stroke="#d98c16" stroke-width="4" stroke-linecap="round"/><path d="m92 40-8-4 1 9Z" fill="#d98c16"/>`),
  'rules-pedestrian.svg': frame('أولوية المشاة', `<path d="M34 85h92" stroke="#f6fbf8" stroke-width="15" stroke-dasharray="10 7"/><circle cx="80" cy="25" r="9" fill="#173528"/><path d="M80 35v24l-15 13m15-13 16 13m-16-24-12 8m12-8 12 8" fill="none" stroke="#087346" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 92h114" stroke="#3d5b4d" stroke-width="8"/>`),
  'rules-night.svg': frame('الرؤية الجيدة ليلاً', `${road}${car(56, 63, '#0a5273')}<path d="M35 24a14 14 0 1 0 11-21 12 12 0 1 1-11 21Z" fill="#efbd50"/><path d="M72 78 45 63M89 78l27-15" stroke="#fff7d1" stroke-width="5" stroke-linecap="round"/>`),
  'rules-ready.svg': frame('جاهزية المركبة', `${car(53, 55)}<circle cx="80" cy="46" r="29" fill="none" stroke="#087346" stroke-width="6"/><path d="m66 47 10 10 20-24" fill="none" stroke="#d98c16" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`)
};

for (const [file, content] of Object.entries(icons)) fs.writeFileSync(path.join(outDir, file), content, 'utf8');
console.log(`Generated ${Object.keys(icons).length} SVG illustrations.`);
