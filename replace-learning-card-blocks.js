const fs = require('fs');
const target = 'build-site.js';
const source = fs.readFileSync(target, 'utf8');

const replacement = String.raw`const ruleCards = [
  ['assets/illustrations/rules-speed.svg', 'رسم دلالي لمقياس السرعة', 'سلوك الطريق', 'السرعة المناسبة', 'اتبع الحد المعلن وعدّل سرعتك حسب الرؤية والطقس والازدحام، لا حسب إحساسك فقط.'],
  ['assets/illustrations/rules-distance.svg', 'رسم دلالي لمسافة الأمان بين مركبتين', 'سلوك الطريق', 'مسافة الأمان', 'اترك أمامك وقتاً ومسافة كافيين للتوقف أو المناورة، وزدهما عندما يصبح الطريق زلقاً.'],
  ['assets/illustrations/rules-seatbelt.svg', 'رسم دلالي لحزام الأمان', 'قبل التحرك', 'حزام الأمان', 'تأكد من ربط الحزام ووضعية الجلوس والمرايا قبل تحريك المركبة.'],
  ['assets/illustrations/rules-focus.svg', 'رسم دلالي للتركيز أثناء القيادة', 'انتباه السائق', 'التركيز', 'ضع الهاتف بعيداً عن يدك واضبط وجهتك قبل الانطلاق حتى يبقى انتباهك للطريق.'],
  ['assets/illustrations/rules-lane.svg', 'رسم دلالي لتغيير المسار', 'مناورة آمنة', 'تغيير المسار', 'شغّل المؤشر، افحص المرايا والنقطة العمياء، ثم انتقل بسلاسة عند توفر المساحة.'],
  ['assets/illustrations/rules-pedestrian.svg', 'رسم دلالي لعبور المشاة', 'أولوية الطريق', 'المشاة', 'خفف السرعة قرب المعابر والمدارس والأسواق، وكن مستعداً دائماً للتوقف.'],
  ['assets/illustrations/rules-night.svg', 'رسم دلالي للرؤية ليلاً', 'رؤية آمنة', 'الرؤية ليلاً', 'نظف الزجاج، استخدم الإضاءة المناسبة، ولا تحدق في أضواء المركبات المقابلة.'],
  ['assets/illustrations/rules-ready.svg', 'رسم دلالي لجاهزية المركبة', 'فحص وقائي', 'جاهزية المركبة', 'افحص الإطارات والأضواء والسوائل بانتظام لأن السلامة تبدأ قبل تشغيل المحرك.']
];

const safetyCards = [
  ['assets/illustrations/safety-before.svg', 'رسم دلالي للاستعداد قبل الانطلاق', 'قبل الرحلة', 'قبل الانطلاق', 'اضبط المقعد والمرايا، اربط الحزام، وتأكد من أن الهاتف لا يشتت انتباهك.'],
  ['assets/illustrations/safety-rain.svg', 'رسم دلالي للقيادة تحت المطر', 'طقس متغير', 'تحت المطر', 'خفف السرعة، زد مسافة الأمان، وتجنب الكبح أو الانعطاف المفاجئ على الطريق الزلق.'],
  ['assets/illustrations/safety-night.svg', 'رسم دلالي للقيادة ليلاً', 'رؤية منخفضة', 'في الليل', 'اجعل الرؤية أولوية، واختر سرعة تسمح لك بالتوقف ضمن المسافة التي تراها بوضوح.'],
  ['assets/illustrations/safety-highway.svg', 'رسم دلالي للطريق السريع', 'مسار سريع', 'الطريق السريع', 'خطط للمسار، لا تتوقف إلا عند الضرورة، ولا تغيّر المسار من دون مراقبة كاملة.'],
  ['assets/illustrations/safety-fatigue.svg', 'رسم دلالي للتعب أثناء القيادة', 'استراحة ضرورية', 'التعب', 'عند النعاس أو فقدان التركيز، توقف في مكان آمن وخذ استراحة قبل أن يستمر تأثيره.'],
  ['assets/illustrations/safety-defensive.svg', 'رسم دلالي للقيادة الدفاعية', 'توقع المخاطر', 'القيادة الدفاعية', 'توقع ما قد يفعله الآخرون واترك لنفسك دائماً وقتاً ومساحة للتصرف بأمان.']
];

write('rules.html', page({ title: 'قواعد السياقة الآمنة | دليل السياقة DZ', description: 'مراجعة مبسطة لقواعد السياقة الآمنة: السرعة، مسافة الأمان، الحزام، التركيز، وتغيير المسار.', file: 'rules.html', active: 'rules', body: \`\${hero({ eyebrow: 'مراجعة يومية', title: 'قواعد السير التي تصنع فرقاً على الطريق', text: 'القواعد لا تُحفظ بمعزل عن الطريق؛ اربط كل قاعدة بموقف واقعي يحافظ على وقتك ومساحتك وهدوئك.' })}<section class="section section--white"><div class="container"><div class="section-heading"><p class="eyebrow">سلوك يحميك</p><h2>قاعدة واضحة لكل موقف</h2><p>تربط البطاقات بين قاعدة الطريق وصورتها الدلالية حتى تتذكر التصرف الصحيح بصورة أسرع.</p></div><div class="visual-card-grid">\${ruleCards.map(([image, alt, label, title, text]) => visualCard(image, alt, label, title, text)).join('')}</div></div></section>\` }));

write('safety.html', page({ title: 'نصائح السلامة على الطريق | دليل السياقة DZ', description: 'نصائح عملية للقيادة تحت المطر وليلاً وعلى الطرق السريعة، مع خطوات للاستعداد للحالات الطارئة.', file: 'safety.html', active: 'safety', body: \`\${hero({ eyebrow: 'قيادة أكثر أماناً', title: 'الاستعداد الجيد يمنحك قراراً أفضل.', text: 'تعرّف إلى العادات الصغيرة التي تقلل المخاطر قبل الرحلة وأثناء المطر والليل والطوارئ.' })}<section class="section section--white"><div class="container"><div class="section-heading"><p class="eyebrow">قرارك الآمن</p><h2>صور تذكّرك بالسلوك الصحيح</h2><p>راجع الموقف، ثم طبّق الخطوة المناسبة بهدوء قبل أن يتحول الخطر إلى طارئ.</p></div><div class="visual-card-grid visual-card-grid--three">\${safetyCards.map(([image, alt, label, title, text]) => visualCard(image, alt, label, title, text)).join('')}</div></div></section><section class="section"><div class="container"><div class="notice"><p><strong>عند الطوارئ:</strong> حافظ على هدوئك، شغّل أضواء التحذير عند الحاجة، وتوقف في مكان آمن قدر الإمكان قبل طلب المساعدة من الجهة المختصة.</p></div></div></section>\` }));`;

const pattern = /write\('rules\.html', page\([\s\S]*?\n\nconst quizCards/;
if (!pattern.test(source)) throw new Error('لم يُعثر على كتلة صفحات القواعد والسلامة المتوقعة.');
const cleaned = replacement.replace(/\\([`$])/g, '$1');
const output = source.replace(pattern, `${cleaned}\n\nconst quizCards`);
fs.writeFileSync(target, output, 'utf8');
console.log('Replaced visual card blocks.');
