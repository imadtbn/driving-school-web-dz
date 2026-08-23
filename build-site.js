const fs = require('fs');
const path = require('path');

const root = __dirname;
const siteUrl = 'https://imadtbn.github.io/driving-school-web-dz';
const year = new Date().getFullYear();

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content.trimStart(), 'utf8');
}

function header(active = '') {
  const nav = [
    ['index.html', 'الرئيسية', 'home'],
    ['signals.html', 'الإشارات', 'signals'],
    ['rules.html', 'قواعد السير', 'rules'],
    ['safety.html', 'السلامة', 'safety'],
    ['quiz.html', 'الاختبارات', 'quiz'],
    ['about.html', 'عن الدليل', 'about']
  ].map(([href, label, key]) => `<li><a href="${href}"${key === active ? ' class="is-active" aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `<a class="skip-link" href="#main-content">انتقل إلى المحتوى</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="index.html" aria-label="دليل السياقة DZ، الصفحة الرئيسية"><span class="brand-mark" aria-hidden="true">د</span><span><strong class="brand-title">دليل السياقة</strong><small class="brand-subtitle">DZ</small></span></a>
    <button class="menu-toggle" type="button" aria-label="فتح القائمة" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button>
    <nav id="primary-navigation" class="primary-nav" aria-label="التنقل الرئيس"><ul>${nav}</ul></nav>
    <a class="header-cta" href="quiz.html">ابدأ اختباراً</a>
  </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <section><p class="footer-brand">دليل السياقة <span>DZ</span></p><p>منصة عربية تعليمية لفهم إشارات المرور ومبادئ القيادة الآمنة في الجزائر.</p><p>المحتوى للتوعية والتدريب ولا يغني عن اللوائح والتنبيهات الصادرة من الجهات المختصة.</p></section>
    <section><h2>تعلّم</h2><ul><li><a href="signals.html">تصنيفات الإشارات</a></li><li><a href="rules.html">قواعد السير</a></li><li><a href="safety.html">نصائح السلامة</a></li><li><a href="quiz.html">اختبارات الفئات</a></li></ul></section>
    <section><h2>الموقع</h2><ul><li><a href="about.html">من نحن</a></li><li><a href="contact.html">اتصل بنا</a></li><li><a href="privacy.html">سياسة الخصوصية</a></li><li><a href="disclaimer.html">إخلاء المسؤولية</a></li><li><a href="sources.html">مصادر الصور</a></li></ul></section>
  </div>
  <div class="container footer-bottom"><p>© ${year} دليل السياقة DZ. طريق أكثر أماناً يبدأ بمعرفة أوضح.</p></div>
</footer>`;
}

function head({ title, description, file, type = 'website' }) {
  const canonical = file === 'index.html' ? `${siteUrl}/` : `${siteUrl}/${file}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteUrl}/#organization`,
        name: 'دليل السياقة DZ',
        url: `${siteUrl}/`,
        description: 'منصة عربية تعليمية لإشارات المرور وقواعد السياقة الآمنة في الجزائر.',
        inLanguage: 'ar-DZ',
        areaServed: 'DZ'
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: 'ar-DZ',
        isPartOf: { '@id': `${siteUrl}/#organization` }
      }
    ]
  });
  return `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#063d29">
  <meta name="author" content="دليل السياقة DZ">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="assets/favicon.svg">
  <link rel="manifest" href="site.webmanifest">
  <meta property="og:locale" content="ar_DZ">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="دليل السياقة DZ">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/assets/social-cover.png">
  <meta property="og:image:alt" content="دليل السياقة DZ — تعلّم الإشارات وقواعد السير بأمان">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${siteUrl}/assets/social-cover.png">
  <title>${title}</title>
  <link rel="stylesheet" href="css/style.css">
  <script type="application/ld+json">${schema}</script>
</head>`;
}

function page({ title, description, file, active, body, type }) {
  return `${head({ title, description, file, type })}
<body>
${header(active)}
<main id="main-content" tabindex="-1">${body}</main>
${footer()}
<script src="js/site.js"></script>
</body>
</html>`;
}

function hero({ eyebrow, title, text, actions = '', image = false }) {
  return `<section class="page-hero"><div class="container ${image ? 'hero-grid' : ''}"><div class="hero-copy"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p>${actions ? `<div class="hero-actions">${actions}</div>` : ''}</div>${image ? `<figure class="hero-media"><img src="assets/images/algerian-stop-sign.jpg" alt="إشارة توقف حقيقية في الجزائر" width="500" height="825"><figcaption class="hero-media__caption"><strong>تعلّم الإشارة، ثم اتخذ القرار.</strong><span>صورة واقعية لإشارة توقف جزائرية.</span></figcaption></figure>` : ''}</div></section>`;
}

const categoryData = {
  warning: { title: 'إشارات التحذير', intro: 'تنبهك إلى خطر أو تغير محتمل في الطريق حتى تعدّل سرعتك وسلوكك قبل الوصول إليه.', image: 'assets/signs/warning-a1a.svg', page: 'warning-signs.html', count: '3 إشارات تدريبية', bg: '#fff4db' },
  prohibition: { title: 'إشارات المنع والتنظيم', intro: 'توضح ما لا يُسمح به على الطريق مثل الدخول المخالف أو تجاوز الحد الأقصى للسرعة.', image: 'assets/signs/regulatory-c11a-50.svg', page: 'prohibition-signs.html', count: '3 إشارات تدريبية', bg: '#feeeee' },
  mandatory: { title: 'إشارات الإلزام', intro: 'تحدد اتجاهاً أو سلوكاً يجب اتباعه، مثل اختيار مسار أو اتجاه محدد عند التقاطع.', image: 'assets/signs/regulatory-d1a.svg', page: 'mandatory-signs.html', count: '3 إشارات تدريبية', bg: '#eaf4fb' },
  information: { title: 'الإشارات الإرشادية', intro: 'تساعدك على الوصول إلى الوجهات والخدمات واختيار المسار بهدوء قبل المفترق.', image: 'assets/signs/algeria-road-sign-e1.svg', page: 'information-signs.html', count: '2 إشارتان تدريبيتان', bg: '#e9f5ee' }
};

function categoryCard(key) {
  const item = categoryData[key];
  return `<a class="category-card" href="${item.page}" style="--category-bg:${item.bg}"><div class="category-card__visual"><img src="${item.image}" alt="${item.title}" loading="lazy"></div><div class="category-card__body"><h2>${item.title}</h2><p>${item.intro}</p><span class="category-card__count">${item.count} ←</span></div></a>`;
}

function signalCard(image, title, summary, details) {
  return `<article class="signal-card"><div class="signal-card__image"><img src="${image}" alt="${title}" loading="lazy"></div><span class="tag">إشارة تعليمية جزائرية</span><h2>${title}</h2><p>${summary}</p><ul class="key-points">${details.map((item) => `<li>${item}</li>`).join('')}</ul></article>`;
}

const homeBody = `${hero({ eyebrow: 'تعلّم بوضوح، قد بثقة', title: 'دليلك العملي لفهم إشارات المرور في الجزائر.', text: 'اكتشف تصنيفات الإشارات، راجع قواعد الطريق، ثم اختبر معلوماتك في اختبارات قصيرة مخصصة لكل فئة.', actions: '<a class="button" href="signals.html">استكشف الإشارات</a><a class="button button--secondary" href="quiz.html">ابدأ اختباراً</a>', image: true })}
<section class="stats-band"><div class="container stats-grid"><div class="stat"><strong>4</strong><span>تصنيفات رئيسة</span></div><div class="stat"><strong>11</strong><span>إشارة تعليمية</span></div><div class="stat"><strong>4</strong><span>اختبارات مستقلة</span></div><div class="stat"><strong>100%</strong><span>متجاوب مع الهاتف</span></div></div></section>
<section class="section section--white"><div class="container"><div class="section-heading"><p class="eyebrow">ابدأ من الفئة</p><h2>تعلّم الإشارات كما تراها على الطريق</h2><p>لكل فئة صفحة مستقلة، وصور واضحة، ونقاط عملية تساعدك على ربط الإشارة بالتصرف الصحيح.</p></div><div class="category-grid">${['warning', 'prohibition', 'mandatory', 'information'].map(categoryCard).join('')}</div></div></section>
<section class="section"><div class="container"><div class="card-grid card-grid--4"><article class="content-card"><div class="card-icon">1</div><h3>تعرّف</h3><p>ابدأ بشكل الإشارة ولونها وما الذي تنبهك إليه أو تلزمك به.</p></article><article class="content-card"><div class="card-icon">2</div><h3>افهم</h3><p>راجع السلوك الآمن المرتبط بكل علامة بدل حفظ شكلها فقط.</p></article><article class="content-card"><div class="card-icon">3</div><h3>اختبر</h3><p>أجب عن أسئلة قصيرة تظهر لك التفسير فوراً بعد الاختيار.</p></article><article class="content-card"><div class="card-icon">4</div><h3>راجع</h3><p>ارجع إلى الصفحة المناسبة عند الحاجة قبل موعد التدريب أو الامتحان.</p></article></div></div></section>`;

write('index.html', page({ title: 'دليل السياقة DZ | تعلّم إشارات المرور وقواعد السير', description: 'منصة عربية لتعلم إشارات المرور وقواعد السياقة الآمنة في الجزائر، مع تصنيفات واضحة واختبارات مستقلة لكل فئة.', file: 'index.html', active: 'home', body: homeBody }));

write('signals.html', page({ title: 'تصنيفات إشارات المرور في الجزائر | دليل السياقة DZ', description: 'استعرض تصنيفات إشارات المرور: التحذير، المنع، الإلزام، والإرشاد، ثم افتح الدرس والاختبار المناسبين لكل فئة.', file: 'signals.html', active: 'signals', body: `${hero({ eyebrow: 'مكتبة الإشارات', title: 'تصنيفات إشارات المرور', text: 'تتغير الرسالة حسب الشكل واللون. اختر فئة لتشاهد صوراً تعليمية ونصائح عملية واختباراً مخصصاً.' })}<section class="section section--white"><div class="container"><div class="category-grid">${['warning', 'prohibition', 'mandatory', 'information'].map(categoryCard).join('')}</div></div></section><section class="section"><div class="container signal-layout"><div><p class="eyebrow">كيف تقرأ الإشارة؟</p><h2>ثلاث خطوات قبل أن تتصرف</h2><div class="card-grid"><article class="content-card"><div class="card-icon">أ</div><h3>راقب الشكل</h3><p>المثلث عادةً ينبه إلى خطر؛ الدائرة قد تعبر عن منع أو إلزام بحسب اللون.</p></article><article class="content-card"><div class="card-icon">ب</div><h3>اربطها بالمكان</h3><p>انظر إلى الطريق والمشاة واللوحات المرافقة قبل اتخاذ قرارك.</p></article><article class="content-card"><div class="card-icon">ج</div><h3>تصرف بسلاسة</h3><p>خفف السرعة مبكراً وتجنب تغيير المسار أو الكبح المفاجئ.</p></article></div></div><aside class="info-panel"><h2>مصدر الصور</h2><p>تستخدم الدروس صورة واقعية لإشارة توقف ورسومات إشارات جزائرية منشورة في ويكيميديا كومنز، مع توثيق المصدر.</p><a class="button button--quiet" href="ATTRIBUTION.md">عرض النسب</a></aside></div></section>` }));

const warningBody = `${hero({ eyebrow: 'درس الفئة الأولى', title: 'إشارات التحذير', text: 'هذه الإشارات لا تمنعك مباشرة، لكنها تنبهك إلى خطر أو تغير محتمل حتى تمنح نفسك وقتاً ومسافة آمنة للتصرف.' })}<section class="section section--white"><div class="container signal-layout"><div class="signal-grid">${signalCard('assets/signs/warning-a1a.svg', 'منعطف خطير', 'يشير إلى تغير في اتجاه الطريق يستدعي تخفيف السرعة قبل الدخول إلى المنعطف.', ['خفف السرعة قبل المنعطف', 'ثبت المركبة في مسارك', 'تجنب التجاوز عند ضعف الرؤية'])}${signalCard('assets/signs/warning-a3.svg', 'منحدر خطير', 'تنبهك إلى انحدار قد يؤثر في سرعة المركبة ومسافة التوقف.', ['اختر سرعة مناسبة مبكراً', 'حافظ على مسافة الأمان', 'راقب الطريق ولا تستخدم الكبح بعنف'])}${signalCard('assets/signs/warning-a13.svg', 'تنبيه إلى خطر بالطريق', 'مثال من فئة التحذير؛ اقرأ دائماً الرمز داخل المثلث مع وضع الطريق المحيط.', ['راقب الرمز الظاهر بدقة', 'استعد لخفض السرعة', 'اتبع أي لوحة إضافية مرافقة'])}</div><aside class="info-panel"><h2>قاعدة التحذير</h2><p>عندما ترى مثلث تحذير، لا تنتظر حتى تصبح قريباً من الخطر. خفف السرعة واستعد لتغيير سلوكك بهدوء.</p><a class="button" href="quiz-warning.html">اختبر إشارات التحذير</a></aside></div></section>`;
write('warning-signs.html', page({ title: 'إشارات التحذير | دليل السياقة DZ', description: 'تعلّم إشارات التحذير في الجزائر، مثل المنعطف والمنحدر، واعرف كيف تعدّل سرعتك وسلوكك بأمان.', file: 'warning-signs.html', active: 'signals', body: warningBody }));

const prohibitionBody = `${hero({ eyebrow: 'درس الفئة الثانية', title: 'إشارات المنع والتنظيم', text: 'تخبرك هذه الفئة بما لا يُسمح به أو تحدد لك قيداً تنظيمياً يجب احترامه في المقطع الذي تبدأ عنده الإشارة.' })}<section class="section section--white"><div class="container signal-layout"><div class="signal-grid">${signalCard('assets/images/algerian-stop-sign.jpg', 'التوقف الإجباري', 'تعني التوقف التام عند خط التوقف أو قبل التقاطع ثم التأكد من أن الطريق آمن.', ['توقف تماماً، لا تباطؤ فقط', 'راقب المشاة وحركة المرور', 'انطلق عندما يتوفر الأمان'])}${signalCard('assets/signs/regulatory-c11a-50.svg', 'حد السرعة 50', 'يشير الرقم داخل الإشارة إلى السرعة القصوى المسموح بها في ذلك المقطع.', ['راقب تغيّر الحد حسب اللوحات', 'خفف السرعة بسلاسة', 'زد الحذر مع المطر أو ضعف الرؤية'])}${signalCard('assets/signs/regulatory-b1.svg', 'إشارة تنظيمية من فئة المنع', 'مثال لإشارة تنظيمية؛ راقب الرمز واللوحات المرافقة كي تفهم القيد المطلوب.', ['لا تفترض أن القيد اختياري', 'اتبع بداية ونهاية القيد', 'انتبه للمسار والاتجاه'])}</div><aside class="info-panel"><h2>قاعدة المنع</h2><p>إشارة المنع واضحة في رسالتها: لا تتجاوز القيد حتى لو بدا الطريق خالياً. اختر مساراً قانونياً أو انتظر نهاية المنع.</p><a class="button" href="quiz-prohibition.html">اختبر إشارات المنع</a></aside></div></section>`;
write('prohibition-signs.html', page({ title: 'إشارات المنع وحدود السرعة | دليل السياقة DZ', description: 'افهم إشارات المنع والتنظيم، مثل التوقف الإجباري وحد السرعة، وتدرّب على التصرف الصحيح عند رؤيتها.', file: 'prohibition-signs.html', active: 'signals', body: prohibitionBody }));

const mandatoryBody = `${hero({ eyebrow: 'درس الفئة الثالثة', title: 'إشارات الإلزام', text: 'تحدد هذه الإشارات الاتجاه أو السلوك الواجب اتباعه. اقرأ السهم مبكراً، واختر المسار قبل أن تصل إلى التقاطع.' })}<section class="section section--white"><div class="container signal-layout"><div class="signal-grid">${signalCard('assets/signs/regulatory-d1a.svg', 'اتجاه إلزامي', 'تطلب منك اتباع الاتجاه الموضح بدلاً من اختيار اتجاه مخالف عند النقطة المحددة.', ['راقب السهم قبل المفترق', 'اختر المسار المناسب مبكراً', 'لا تغير المسار بصورة مفاجئة'])}${signalCard('assets/signs/regulatory-d1b.svg', 'اتجاه إلزامي بديل', 'نموذج آخر من فئة الاتجاهات الإلزامية؛ اتبع الرمز كما يظهر على الطريق.', ['التزم بالمسار', 'استخدم المؤشر عند الحاجة', 'راقب المشاة والمركبات'])}${signalCard('assets/signs/mandatory-straight.svg', 'مسار مفروض', 'تؤكد إشارات الإلزام أن السلوك المعروض ليس اقتراحاً بل توجيه واجب الاتباع.', ['خطط قبل التقاطع', 'راجع اللوحات الإضافية', 'قد بهدوء واحترم الأولوية'])}</div><aside class="info-panel"><h2>قاعدة الإلزام</h2><p>اتباع الاتجاه لا يعفيك من المراقبة. افحص المرايا، راقب المشاة، ثم نفّذ الحركة بهدوء وفي المسار الصحيح.</p><a class="button" href="quiz-mandatory.html">اختبر إشارات الإلزام</a></aside></div></section>`;
write('mandatory-signs.html', page({ title: 'إشارات الإلزام والاتجاهات | دليل السياقة DZ', description: 'راجع إشارات الاتجاهات الإلزامية وتعلّم اختيار المسار والتصرف بأمان عند التقاطعات.', file: 'mandatory-signs.html', active: 'signals', body: mandatoryBody }));

const informationBody = `${hero({ eyebrow: 'درس الفئة الرابعة', title: 'الإشارات الإرشادية', text: 'تساعدك هذه اللوحات على فهم الوجهات والخدمات واختيار مسارك مبكراً من دون ارتباك أو تغيير مفاجئ للمسار.' })}<section class="section section--white"><div class="container signal-layout"><div class="signal-grid">${signalCard('assets/signs/algeria-road-sign-e1.svg', 'لوحة الاتجاهات', 'توضح وجهات ومسارات متعددة كي تختار الاتجاه الصحيح قبل الوصول إلى المفترق.', ['اقرأ اللوحة من مسافة كافية', 'اختر المسار مبكراً', 'لا تغيّر المسار فجأة'])}${signalCard('assets/signs/algeria-road-sign-e11.svg', 'إرشاد خاص', 'مثال من اللوحات الإرشادية المستخدمة على الطريق؛ اقرأ الرمز والكتابة المرافقة قبل اتخاذ القرار.', ['اربط اللوحة بموقعك', 'راقب الخدمات أو الوجهات', 'اتبع المسار بهدوء'])}</div><aside class="info-panel"><h2>قاعدة الإرشاد</h2><p>اللوحة الإرشادية تمنحك وقتاً للتخطيط. عندما تراها مبكراً، اختر المسار المناسب بهدوء بدلاً من مناورات اللحظة الأخيرة.</p><a class="button" href="quiz-information.html">اختبر الإشارات الإرشادية</a></aside></div></section>`;
write('information-signs.html', page({ title: 'الإشارات الإرشادية والاتجاهات | دليل السياقة DZ', description: 'تعلّم قراءة لوحات الاتجاهات والخدمات واختيار المسار بهدوء قبل التقاطعات في الجزائر.', file: 'information-signs.html', active: 'signals', body: informationBody }));

write('rules.html', page({ title: 'قواعد السياقة الآمنة | دليل السياقة DZ', description: 'مراجعة مبسطة لقواعد السياقة الآمنة: السرعة، مسافة الأمان، الحزام، التركيز، وتغيير المسار.', file: 'rules.html', active: 'rules', body: `${hero({ eyebrow: 'مراجعة يومية', title: 'قواعد السير التي تصنع فرقاً على الطريق', text: 'القواعد لا تُحفظ بمعزل عن الطريق؛ اربط كل قاعدة بموقف واقعي يحافظ على وقتك ومساحتك وهدوئك.' })}<section class="section section--white"><div class="container"><div class="card-grid card-grid--4"><article class="content-card"><div class="card-icon">↯</div><h3>السرعة المناسبة</h3><p>اتبع الحد المعلن وعدّل سرعتك حسب الرؤية والطقس والازدحام، لا حسب إحساسك فقط.</p></article><article class="content-card"><div class="card-icon">↔</div><h3>مسافة الأمان</h3><p>اترك أمامك وقتاً ومسافة كافيين للتوقف أو المناورة، وزدهما عندما يصبح الطريق زلقاً.</p></article><article class="content-card"><div class="card-icon">▣</div><h3>حزام الأمان</h3><p>تأكد من ربط الحزام ووضعية الجلوس والمرايا قبل تحريك المركبة.</p></article><article class="content-card"><div class="card-icon">◫</div><h3>التركيز</h3><p>ضع الهاتف بعيداً عن يدك واضبط وجهتك قبل الانطلاق حتى يبقى انتباهك للطريق.</p></article><article class="content-card"><div class="card-icon">⇆</div><h3>تغيير المسار</h3><p>شغّل المؤشر، افحص المرايا والنقطة العمياء، ثم انتقل بسلاسة عند توفر المساحة.</p></article><article class="content-card"><div class="card-icon">◉</div><h3>المشاة</h3><p>خفف السرعة قرب المعابر والمدارس والأسواق، وكن مستعداً دائماً للتوقف.</p></article><article class="content-card"><div class="card-icon">☼</div><h3>الرؤية ليلاً</h3><p>نظف الزجاج، استخدم الإضاءة المناسبة، ولا تحدق في أضواء المركبات المقابلة.</p></article><article class="content-card"><div class="card-icon">✦</div><h3>جاهزية المركبة</h3><p>افحص الإطارات والأضواء والسوائل بانتظام لأن السلامة تبدأ قبل تشغيل المحرك.</p></article></div></div></section>` }));

write('safety.html', page({ title: 'نصائح السلامة على الطريق | دليل السياقة DZ', description: 'نصائح عملية للقيادة تحت المطر وليلاً وعلى الطرق السريعة، مع خطوات للاستعداد للحالات الطارئة.', file: 'safety.html', active: 'safety', body: `${hero({ eyebrow: 'قيادة أكثر أماناً', title: 'الاستعداد الجيد يمنحك قراراً أفضل.', text: 'تعرّف إلى العادات الصغيرة التي تقلل المخاطر قبل الرحلة وأثناء المطر والليل والطوارئ.' })}<section class="section section--white"><div class="container"><div class="card-grid"><article class="content-card"><div class="card-icon">✓</div><h3>قبل الانطلاق</h3><p>اضبط المقعد والمرايا، اربط الحزام، وتأكد من أن الهاتف لا يشتت انتباهك.</p></article><article class="content-card"><div class="card-icon">☂</div><h3>تحت المطر</h3><p>خفف السرعة، زد مسافة الأمان، وتجنب الكبح أو الانعطاف المفاجئ على الطريق الزلق.</p></article><article class="content-card"><div class="card-icon">☾</div><h3>في الليل</h3><p>اجعل الرؤية أولوية، واختَر سرعة تسمح لك بالتوقف ضمن المسافة التي تراها بوضوح.</p></article><article class="content-card"><div class="card-icon">⇢</div><h3>الطريق السريع</h3><p>خطط للمسار، لا تتوقف إلا عند الضرورة، ولا تغيّر المسار من دون مراقبة كاملة.</p></article><article class="content-card"><div class="card-icon">!</div><h3>التعب</h3><p>عند النعاس أو فقدان التركيز، توقف في مكان آمن وخذ استراحة قبل أن يستمر تأثيره.</p></article><article class="content-card"><div class="card-icon">◌</div><h3>القيادة الدفاعية</h3><p>توقع ما قد يفعله الآخرون واترك لنفسك دائماً وقتاً ومساحة للتصرف بأمان.</p></article></div></div></section><section class="section"><div class="container"><div class="notice"><p><strong>عند الطوارئ:</strong> حافظ على هدوئك، شغّل أضواء التحذير عند الحاجة، وتوقف في مكان آمن قدر الإمكان قبل طلب المساعدة من الجهة المختصة.</p></div></div></section>` }));

const quizCards = [['warning','إشارات التحذير','اختبار من 3 أسئلة عن المنعطفات والمنحدرات ومواقف الخطر.'],['prohibition','إشارات المنع','اختبار من 3 أسئلة عن التوقف والسرعة والمنع.'],['mandatory','إشارات الإلزام','اختبار من 3 أسئلة عن الاتجاهات والمسارات المفروضة.'],['information','الإشارات الإرشادية','اختبار من 3 أسئلة عن الاتجاهات والخدمات واختيار المسار.']];
write('quiz.html', page({ title: 'اختبارات إشارات المرور حسب الفئة | دليل السياقة DZ', description: 'اختبارات قصيرة منفصلة لإشارات التحذير والمنع والإلزام والإرشاد، مع إجابة صحيحة وشرح مباشر.', file: 'quiz.html', active: 'quiz', body: `${hero({ eyebrow: 'تدريب ذاتي', title: 'اختبر فهمك لكل فئة على حدة.', text: 'اختر اختباراً قصيراً. ستظهر الإجابة الصحيحة والتفسير مباشرة بعد كل اختيار.' })}<section class="section section--white"><div class="container"><div class="quiz-list">${quizCards.map(([key,title,text], i) => `<a class="quiz-row" href="quiz-${key}.html"><span class="quiz-row__icon">${i + 1}</span><span><h2>${title}</h2><p>${text}</p></span><span class="quiz-row__arrow">←</span></a>`).join('')}</div></div></section>` }));

for (const [key, title] of quizCards) {
  write(`quiz-${key}.html`, page({ title: `${quizzesTitle(key)} | دليل السياقة DZ`, description: `اختبار تفاعلي قصير في ${quizzesTitle(key)} مع تصحيح فوري وتفسير لكل إجابة.`, file: `quiz-${key}.html`, active: 'quiz', body: `${hero({ eyebrow: 'اختبار فئة', title: quizzesTitle(key), text: 'أجب عن الأسئلة الثلاثة، ثم راجع التفسير الذي يظهر مباشرة بعد كل اختيار.' })}<section class="section section--white"><div class="container quiz-shell"><div data-quiz="${key}"></div></div></section>` }));
}
function quizzesTitle(key) { return ({ warning:'اختبار إشارات التحذير', prohibition:'اختبار إشارات المنع', mandatory:'اختبار إشارات الإلزام', information:'اختبار الإشارات الإرشادية' })[key]; }

write('about.html', page({ title: 'من نحن | دليل السياقة DZ', description: 'تعرف إلى هدف دليل السياقة DZ وطريقته التعليمية ومحدودية المحتوى المنشور على المنصة.', file: 'about.html', active: 'about', body: `${hero({ eyebrow: 'عن المنصة', title: 'نساعد المتعلم على قراءة الطريق بوضوح.', text: 'دليل السياقة DZ مساحة تعليمية عربية مبسطة تجمع الإشارات الأساسية وقواعد السلوك الآمن والاختبارات القصيرة.' })}<section class="section section--white"><div class="container prose"><h2>هدفنا</h2><p>هدف الدليل هو تبسيط المراجعة الأولية لإشارات المرور ومبادئ القيادة الآمنة. يقدم الموقع معلومات منظمة حسب الفئات لكي يجد المتعلم الدرس والاختبار المناسبين بسرعة.</p><h2>كيف نعمل</h2><p>نقسم المحتوى إلى فئات مرئية، ثم نعرض صورة الإشارة ومعناها وسلوكاً عملياً مقترحاً. بعد ذلك يستطيع الزائر اختبار نفسه في أسئلة قصيرة مع تصحيح فوري.</p><h2>مصادر الصور</h2><p>تظهر الصور الواقعية والرسومات المستخدمة لأغراض تعليمية فقط. يخصص الموقع صفحة لنسب الأصول ومصادرها المتاحة.</p><p><a class="button" href="ATTRIBUTION.md">عرض مصادر الصور</a></p></div></section>` }));

write('contact.html', page({ title: 'اتصل بنا | دليل السياقة DZ', description: 'راسل دليل السياقة DZ لإرسال ملاحظة حول المحتوى أو اقتراح درس أو تصحيح معلومة.', file: 'contact.html', active: '', body: `${hero({ eyebrow: 'تواصل معنا', title: 'ملاحظتك تساعد على تحسين الدليل.', text: 'استخدم النموذج لإرسال اقتراح أو تصحيح يتعلق بالمحتوى التعليمي أو تجربة الموقع.' })}<section class="section section--white"><div class="container contact-grid"><aside class="contact-card"><h2>قبل الإرسال</h2><p>يرجى أن تكون الملاحظة محددة قدر الإمكان، وأن تذكر عنوان الصفحة أو الإشارة التي تتعلق بها.</p><ul class="contact-list"><li>اقتراح درس أو اختبار جديد</li><li>تصحيح محتوى أو رابط</li><li>ملاحظة عن سهولة الاستخدام</li></ul></aside><form class="contact-form" data-contact-form><h2>أرسل ملاحظتك</h2><div class="field"><label for="name">الاسم</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">البريد الإلكتروني</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="message">الرسالة</label><textarea id="message" name="message" required></textarea></div><button class="button" type="submit">إرسال الملاحظة</button><p class="form-message" aria-live="polite">تم استلام رسالتك في واجهة النموذج. يحتاج الإرسال الفعلي إلى ربط خدمة بريد أو نموذج خلفي قبل النشر.</p></form></div></section>` }));

write('privacy.html', page({ title: 'سياسة الخصوصية | دليل السياقة DZ', description: 'سياسة الخصوصية الخاصة بموقع دليل السياقة DZ، بما في ذلك تعامل الموقع مع البيانات والنماذج وروابط الطرف الثالث.', file: 'privacy.html', active: '', body: `${hero({ eyebrow: 'الخصوصية', title: 'سياسة الخصوصية', text: 'يوضح هذا النص كيف يتعامل الموقع مع المعلومات التي قد يقدمها الزائر أثناء استخدامه للمنصة.' })}<section class="section section--white"><div class="container prose"><div class="notice"><p>آخر تحديث: ${year}. هذه صفحة معلومات عامة لموقع تعليمي ثابت، ويجب مراجعتها عند إضافة أي أدوات تحليل أو خدمات نماذج خارجية.</p></div><h2>المعلومات التي يقدمها الزائر</h2><p>لا يخزن الموقع الثابت معلومات شخصية من تلقاء نفسه. إذا جرى ربط نموذج الاتصال بخدمة خارجية لاحقاً، يجب توضيح البيانات المطلوبة والغرض منها في هذه السياسة قبل تفعيل الخدمة.</p><h2>ملفات الارتباط والقياس</h2><p>لا يضم الموقع في نسخته الحالية أداة قياس أو إعلانات أو ملفات ارتباط تحليلية مدمجة. قد تستخدم الاستضافة أو المنصات الخارجية ملفاتها وسياساتها الخاصة.</p><h2>الروابط الخارجية</h2><p>توجد روابط إلى مصادر صور ومراجع خارجية. عند الانتقال إليها تصبح خاضعاً لسياسة الخصوصية الخاصة بتلك المواقع.</p><h2>التحديثات</h2><p>يمكن تعديل هذه الصفحة عند تغيير طريقة تشغيل الموقع أو إضافة خدمات جديدة. استمرار استخدام الموقع بعد النشر يعني الاطلاع على النسخة الأحدث من السياسة.</p></div></section>` }));

write('disclaimer.html', page({ title: 'إخلاء المسؤولية | دليل السياقة DZ', description: 'إخلاء المسؤولية للمحتوى التعليمي في دليل السياقة DZ وحدود استخدام المعلومات والاختبارات المنشورة.', file: 'disclaimer.html', active: '', body: `${hero({ eyebrow: 'تنبيه مهم', title: 'إخلاء المسؤولية', text: 'المحتوى منشور للتوعية والمراجعة التعليمية، ولا يحل محل اللوائح الرسمية أو تعليمات الجهات المختصة.' })}<section class="section section--white"><div class="container prose"><h2>طبيعة المحتوى</h2><p>يقدم الموقع شروحات مبسطة وصوراً واختبارات قصيرة لمساعدة المتعلم على فهم أساسيات إشارات المرور والسلامة. لا يمثل الموقع جهة حكومية أو مدرسة سياقة رسمية.</p><h2>المسؤولية</h2><p>ينبغي للسائقين والمتعلمين اتباع اللوحات الفعلية على الطريق، والتوجيهات الرسمية، وقواعد التدريب والامتحانات السارية. قد تختلف التفاصيل التنظيمية أو تتغير، لذلك لا ينبغي الاعتماد على الموقع وحده لاتخاذ قرار قانوني أو تشغيلي.</p><h2>الصور والمراجع</h2><p>تستخدم صور الإشارات والنصوص لأغراض تعليمية مع توثيق الأصول المتاحة. كل علامة تجارية أو مادة تابعة لطرف ثالث تبقى ملكاً لأصحابها.</p><h2>الطوارئ</h2><p>في أي حالة طارئة، اتصل بالجهة المختصة مباشرة واتبع تعليماتها. لا تستخدم الموقع بديلاً عن خدمات الطوارئ أو الإرشاد الرسمي.</p></div></section>` }));

write('sources.html', page({ title: 'مصادر صور الإشارات | دليل السياقة DZ', description: 'مصادر ونسب الصور والرسومات التعليمية المستخدمة في دليل السياقة DZ.', file: 'sources.html', active: '', body: `${hero({ eyebrow: 'شفافية المصادر', title: 'مصادر صور الإشارات', text: 'نعرض هنا نسب الأصول المستخدمة لأغراض تعليمية داخل الموقع.' })}<section class="section section--white"><div class="container prose"><h2>صورة إشارة التوقف</h2><p>الصورة الواقعية لإشارة التوقف منشورة في <a href="https://commons.wikimedia.org/wiki/File:Algerian_Stop_Sign.jpg" target="_blank" rel="noopener noreferrer">ويكيميديا كومنز</a> للمستخدم Aghiles214 بموجب رخصة CC BY-SA 4.0.</p><h2>رسومات الإشارات</h2><p>تستخدم صفحات الدروس رسومات إرشادية وتحذيرية وتنظيمية من تصنيفات إشارات الطريق الجزائرية في <a href="https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Algeria" target="_blank" rel="noopener noreferrer">ويكيميديا كومنز</a>. انظر ملف <a href="ATTRIBUTION.md">توثيق الأصول</a> لمعرفة المسارات المحلية والملاحظات المرتبطة بها.</p><div class="notice"><p>تظهر الأصول لأغراض التعليم فقط. لا تعني الإحالة أن أصحابها يؤيدون الموقع أو محتواه.</p></div></div></section>` }));

console.log('Generated static pages.');
