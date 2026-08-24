const quizzes = {
  warning: {
    title: 'اختبار إشارات التحذير',
    questions: [
      { q: 'ماذا يطلب منك مثلث التحذير عند رؤية منعطف؟', o: ['زيادة السرعة قبل المنعطف', 'تخفيف السرعة والاستعداد لتغيير المسار', 'التوقف دائماً في مكانك', 'تجاوز المركبات'], a: 1, e: 'إشارة التحذير تنبهك إلى خطر محتمل؛ خفف السرعة مبكراً وتجنب المناورات المفاجئة.' },
      { q: 'كيف تتعامل مع إشارة تحذير من عبور أطفال؟', o: ['تستمر بالسرعة نفسها', 'تخفض السرعة وتراقب جانبي الطريق', 'تطلق المنبه فقط', 'تتجاوز المركبة الأمامية'], a: 1, e: 'قد يظهر أطفال بشكل مفاجئ، لذلك خفف السرعة وكن مستعداً للتوقف.' },
      { q: 'ما الذي يجب تجنبه قرب إشارة طريق زلق؟', o: ['القيادة الهادئة', 'زيادة مسافة الأمان', 'الفرملة أو الانعطاف المفاجئ', 'مراقبة الطريق'], a: 2, e: 'الحركات المفاجئة تزيد احتمال فقدان التماسك؛ استخدم الدواسات والمقود بسلاسة.' }
    ]
  },
  prohibition: {
    title: 'اختبار إشارات المنع',
    questions: [
      { q: 'ما معنى إشارة ممنوع الدخول؟', o: ['يمكن الدخول ببطء', 'لا تدخل الطريق من هذا الاتجاه', 'مكان مخصص للوقوف', 'طريق سريع'], a: 1, e: 'تمنع الإشارة دخول المركبات من الجهة التي تواجهها، ويجب اختيار مسار قانوني بديل.' },
      { q: 'عند ظهور رقم داخل إشارة دائرية محاطة بالأحمر، ماذا يمثل؟', o: ['السرعة الدنيا', 'المسافة المتبقية', 'السرعة القصوى المسموح بها', 'عدد المركبات'], a: 2, e: 'يشير الرقم إلى الحد الأقصى للسرعة في المقطع الذي تبدأ فيه الإشارة.' },
      { q: 'ماذا تفعل عند إشارة منع التجاوز؟', o: ['تتجاوز بسرعة أكبر', 'تلتزم بمسارك وتنتظر نهاية المنع', 'تغيّر المسار دون مؤشر', 'تتوقف وسط الطريق'], a: 1, e: 'تمنع الإشارة التجاوز في هذا المقطع بسبب خطر أو ضعف في الرؤية.' }
    ]
  },
  mandatory: {
    title: 'اختبار إشارات الإلزام',
    questions: [
      { q: 'ماذا تعني الإشارة الزرقاء الدائرية ذات السهم؟', o: ['تحذيراً عاماً', 'اتجاهاً أو سلوكاً إلزامياً', 'مكاناً مخصصاً للوقوف', 'نهاية الطريق'], a: 1, e: 'الإشارات الدائرية الزرقاء تشير عادة إلى التزام يجب اتباعه كما هو موضح.' },
      { q: 'كيف تتصرف عند سهم إلزامي إلى اليمين؟', o: ['تنعطف يساراً إن كان الطريق خالياً', 'تتبع الاتجاه المحدد عند التقاطع', 'تتوقف فوراً', 'تتجاوز الإشارة'], a: 1, e: 'يجب اتباع الاتجاه المحدد؛ خطط للمسار قبل الوصول إلى التقاطع.' },
      { q: 'لماذا لا تكفي رؤية السهم وحدها لاتخاذ القرار؟', o: ['لأن اللون لا يهم', 'يجب أيضاً مراقبة الطريق والمشاة', 'لأن الاتجاه اختياري', 'لأنها إشارة منع'], a: 1, e: 'اتباع الإشارة لا يلغي ضرورة المراقبة ومنح الأولوية عند الحاجة.' }
    ]
  },
  information: {
    title: 'اختبار الإشارات الإرشادية',
    questions: [
      { q: 'ما الهدف الأساسي من إشارات الاتجاهات؟', o: ['فرض عقوبة', 'مساعدة السائق على اختيار المسار والوجهة', 'إجبار المركبات على التوقف', 'منع المشاة من العبور'], a: 1, e: 'تعرض إشارات الاتجاهات معلومات تساعدك على التخطيط للمسار والوجهة.' },
      { q: 'ماذا تشير لوحة موقف السيارات غالباً؟', o: ['طريق ممنوع', 'مكان أو خدمة مخصصة للوقوف وفق الشروط المرافقة', 'ضرورة التوقف الكامل', 'منع جميع المركبات'], a: 1, e: 'تحقق دائماً من اللوحات الإضافية والتوقيت حتى تعرف شروط الوقوف.' },
      { q: 'كيف تتعامل مع لوحة اتجاهات قبل المفترق؟', o: ['تقرأها بعد عبور المفترق', 'تختار المسار المناسب مبكراً وبهدوء', 'تغير المسار فجأة', 'تتجاهلها'], a: 1, e: 'قراءة اللوحات مبكراً تمنحك وقتاً كافياً لاختيار المسار دون مناورة مفاجئة.' }
    ]
  }
};

const examQuestionBank = [
  ...Object.entries(quizzes).flatMap(([category, quiz]) => quiz.questions.map((question) => ({ ...question, category }))),
  { category: 'warning', q: 'عند رؤية إشارة أشغال على الطريق، ما التصرف الأكثر أماناً؟', o: ['تزيد السرعة لتجاوز المنطقة', 'تخفف السرعة وتنتبه إلى العمال والتحويلات', 'تتوقف في وسط المسار', 'تتجاوز الحواجز'], a: 1, e: 'إشارة الأشغال تعني تغيراً محتملاً في المسار أو وجود عمال ومعدات، لذلك خفف السرعة واتبع التحويلات.' },
  { category: 'warning', q: 'كيف تتصرف قرب إشارة عبور حيوانات؟', o: ['تستمر بالسرعة نفسها', 'تخفض السرعة وتراقب جانبي الطريق', 'تطلق المنبه باستمرار', 'تتجاوز المركبات'], a: 1, e: 'قد تظهر الحيوانات فجأة؛ خفض السرعة يمنحك وقتاً للتوقف أو تفادي الخطر بهدوء.' },
  { category: 'warning', q: 'ماذا تفعل عند علامة تنبه إلى رياح جانبية؟', o: ['تمسك المقود بثبات وتخفف السرعة', 'تغير المسار بسرعة', 'تفتح النوافذ كلها', 'تزيد السرعة لتقليل التأثير'], a: 0, e: 'الرياح الجانبية قد تدفع المركبة عن مسارها، فثبت المقود وقلل السرعة تدريجياً.' },
  { category: 'warning', q: 'ما الفائدة من تحذير منحدر خطير؟', o: ['إلغاء استعمال المكابح تماماً', 'الاستعداد للتحكم بالسرعة قبل النزول', 'رفع السرعة قبل المنحدر', 'التوقف في المنحدر دون ضرورة'], a: 1, e: 'التحكم المبكر بالسرعة يمنع فقدان السيطرة ويقلل الحاجة إلى مناورات أو كبح مفاجئ.' },
  { category: 'prohibition', q: 'عند وجود إشارة تمنع الوقوف، ما الخيار السليم؟', o: ['توقف لدقائق إن كان الطريق فارغاً', 'ابحث عن مكان مسموح ولا تعطل حركة السير', 'قف قرب الإشارة نفسها', 'ضع أضواء التحذير واستمر في الوقوف'], a: 1, e: 'علامة المنع يجب احترامها؛ أضواء التحذير لا تحول الوقوف غير المسموح إلى وقوف قانوني.' },
  { category: 'prohibition', q: 'ما الذي يعنيه منع استعمال المنبه في منطقة حساسة؟', o: ['إطلاق المنبه لتنبيه الجميع', 'تجنب استعماله إلا عند وجود خطر حقيقي', 'إيقاف المحرك فوراً', 'القيادة في المسار المعاكس'], a: 1, e: 'المنبه وسيلة تحذير من الخطر وليس وسيلة للتعبير عن الاستعجال أو الضيق.' },
  { category: 'prohibition', q: 'عندما تنتهي إشارة منع التجاوز، ما الذي يجب التحقق منه قبل التجاوز؟', o: ['أن الطريق والرؤية والمسافة تسمح جميعاً بالمناورة', 'أن تكون المركبة التي أمامك بطيئة فقط', 'أن تستخدم المنبه مرات كثيرة', 'أن يكون المسار المقابل فارغاً لثانية واحدة'], a: 0, e: 'انتهاء المنع لا يجعل التجاوز آمناً تلقائياً؛ يجب تقييم الرؤية والمسافة وحركة المرور.' },
  { category: 'prohibition', q: 'كيف تتعامل مع حد سرعة معلن عند تغيّر الطقس؟', o: ['تلتزم بالحد أو تخفض عنه عندما تضعف الظروف', 'تزيد السرعة إذا كان الطريق واسعاً', 'تتجاهله إن لم توجد مركبات', 'تتبعه فقط في النهار'], a: 0, e: 'الحد المعلن هو سقف وليس هدفاً؛ الرؤية والمطر وحالة الطريق قد تقتضي سرعة أقل.' },
  { category: 'mandatory', q: 'ماذا تفعل عند وجود مسار إلزامي مخصص للدراجات؟', o: ['تسير فيه بالسيارة عند الازدحام', 'تحترم تخصيصه ولا تعيقه', 'تتوقف داخله للاتصال', 'تستخدمه للتجاوز'], a: 1, e: 'المسارات المخصصة تحمي مستخدميها وتساعد على تنظيم الحركة، فلا تستخدمها بغير الغرض المحدد.' },
  { category: 'mandatory', q: 'عند سهم إلزامي متجه إلى الأمام، كيف تخطط لمسارك؟', o: ['تتأكد مبكراً من وجودك في المسار الصحيح', 'تنعطف في آخر لحظة', 'تتوقف قبل التقاطع بلا سبب', 'تتبع المركبة أمامك من دون ملاحظة الإشارة'], a: 0, e: 'قراءة الإشارة مبكراً تسمح لك باختيار المسار الصحيح من دون مناورة مفاجئة.' },
  { category: 'mandatory', q: 'لماذا يجب احترام اتجاه الدوران المفروض في ملتقى الطرق؟', o: ['لأنه ينظم تدفق المركبات ويقلل تعارض المسارات', 'لأنه اختياري عندما لا توجد شرطة', 'لأنه خاص بالشاحنات فقط', 'لأنه يلغي مراقبة المشاة'], a: 0, e: 'الاتجاهات الإلزامية تنظّم حركة التقاطع، لكنها لا تلغي واجب المراقبة ومنح الأولوية عند الحاجة.' },
  { category: 'mandatory', q: 'بعد اتباع إشارة إلزامية، ما الواجب الذي يبقى مستمراً؟', o: ['إهمال المرايا', 'مراقبة الطريق والمشاة والمركبات المحيطة', 'إيقاف المؤشر دائماً قبل المناورة', 'زيادة السرعة تلقائياً'], a: 1, e: 'الالتزام بالإشارة جزء من القرار الآمن، ويجب أن يرافقه انتباه مستمر للمحيط.' },
  { category: 'information', q: 'كيف تستفيد من لوحة خدمات قبل الطريق؟', o: ['تخطط للتوقف في المكان المناسب إن احتجت خدمة', 'تتوقف على الحافة فوراً لقراءتها', 'تتجاهلها لأنها ليست إلزامية', 'تغيّر المسار فجأة'], a: 0, e: 'لوحات الخدمات تساعد على التخطيط المسبق وتجنب البحث المتأخر أو التوقف غير الآمن.' },
  { category: 'information', q: 'ماذا تفعل عندما تعرض لوحة اتجاهات عدة وجهات؟', o: ['تقرأها مبكراً وتختار المسار قبل المفترق', 'تنتظر حتى تصل إلى المفترق ثم تقطع المسارات', 'تتوقف في المسار لقراءتها', 'تتبع أي مركبة أمامك'], a: 0, e: 'التخطيط المبكر يمنحك وقتاً كافياً لاختيار المسار بطريقة هادئة وقانونية.' },
  { category: 'information', q: 'هل تعني لوحة موقف سيارات إمكانية الوقوف في كل وقت؟', o: ['نعم دائماً', 'لا، يجب قراءة الشروط واللوحات المرافقة', 'نعم إذا شغلت أضواء التحذير', 'فقط في الليل'], a: 1, e: 'قد تحدد اللوحات المرافقة أوقاتاً أو فئات أو شروطاً للوقوف، لذلك تحقق منها قبل القرار.' },
  { category: 'information', q: 'ما الغرض من علامات مخرج الطريق السريع؟', o: ['مساعدتك على الاستعداد للخروج واختيار المسار بوقت كافٍ', 'إجبارك على الخروج فوراً', 'السماح بالرجوع للخلف', 'إلغاء حدود السرعة'], a: 0, e: 'تمنحك لوحة المخرج وقتاً للتخطيط واختيار المسار من دون قطع المسارات أو مفاجأة الآخرين.' },
  { category: 'safety', q: 'ما أفضل تصرف عندما تصبح الرؤية محدودة بسبب الضباب؟', o: ['تزيد السرعة للخروج من الضباب', 'تخفف السرعة وتزيد المسافة وتستخدم الإضاءة المناسبة', 'تتجاوز المركبات القريبة', 'توقف في مسار السير العادي'], a: 1, e: 'ضعف الرؤية يقلل وقت رد الفعل؛ خفف السرعة واترك مساحة أكبر وتجنب المناورات المفاجئة.' },
  { category: 'safety', q: 'ماذا تفعل إذا شعرت بالنعاس أثناء القيادة؟', o: ['تفتح النافذة وتواصل لمسافة طويلة', 'تتوقف في مكان آمن وتأخذ استراحة', 'تزيد سرعة الموسيقى فقط', 'تتجاوز المركبات للوصول أسرع'], a: 1, e: 'التعب يضعف الانتباه ورد الفعل؛ الاستراحة في مكان آمن هي الخيار المسؤول.' },
  { category: 'safety', q: 'قبل الانطلاق، ما التسلسل الأكثر فائدة؟', o: ['المقعد والمرايا والحزام ثم التحقق من محيط المركبة', 'تشغيل الهاتف وضبطه أثناء السير', 'الانطلاق ثم تعديل المقعد', 'اختبار المنبه باستمرار'], a: 0, e: 'الاستعداد قبل التحرك يقلل التشتيت ويساعدك على اتخاذ قرار آمن منذ اللحظة الأولى.' },
  { category: 'safety', q: 'لماذا تزداد مسافة الأمان عند المطر؟', o: ['لأن التماسك ومسافة التوقف قد يتأثران', 'لأن الإشارات تختفي', 'لأن المركبة لا تحتاج إلى مكابح', 'لأن المسار يصبح أقصر'], a: 0, e: 'الطريق المبلل قد يقلل التماسك؛ المسافة الإضافية تمنحك هامشاً للتوقف أو الاستجابة.' },
  { category: 'conduct', q: 'كيف تتعامل مع الهاتف أثناء القيادة؟', o: ['تمسكه لفترة قصيرة فقط', 'تضعه بعيداً وتتعامل معه قبل الانطلاق أو بعد التوقف الآمن', 'تقرأ الرسائل عند الإشارة', 'تستخدمه مع تشغيل المنبه'], a: 1, e: 'استعمال الهاتف باليد يشتت الانتباه؛ جهّز الوجهة والتواصل قبل الحركة أو بعد التوقف الآمن.' },
  { category: 'conduct', q: 'ما التصرف السليم قرب ممر مشاة منظم؟', o: ['تخفض السرعة وتستعد لمنح الأولوية وفق الوضع القائم', 'تسرّع لعبور الممر أولاً', 'تتجاوز المركبات المتوقفة قربه', 'تتجاهل المشاة إن لم يبدؤوا العبور'], a: 0, e: 'ممر المشاة منطقة تتطلب يقظة عالية؛ خفض السرعة والاستعداد للتوقف يحمي الجميع.' },
  { category: 'conduct', q: 'متى يستعمل شريط التوقف الاستعجالي؟', o: ['عند الحاجة أو الطوارئ فقط', 'لتجاوز الازدحام', 'لإجراء مكالمة عادية', 'للقيادة البطيئة باستمرار'], a: 0, e: 'الشريط الاستعجالي مخصص للضرورة؛ استعماله بغير حاجة يعرقل النجدة ويعرض الآخرين للخطر.' },
  { category: 'conduct', q: 'ما المبدأ الذي يساعد في الحفاظ على مسافة أمان؟', o: ['ترك وقت ومساحة كافيين للتوقف أو المناورة', 'السير قريباً من المركبة أمامك', 'متابعة أضواء المكابح فقط', 'التجاوز عند كل تباطؤ'], a: 0, e: 'المسافة الكافية تمنحك هامشاً للتصرف إذا توقفت المركبة أمامك أو تغيرت الظروف.' }
];

const contentCatalog = {
  signals: 11,
  tests: () => Object.keys(quizzes).length + 1,
  questions: () => examQuestionBank.length
};

function renderDynamicStats() {
  const metrics = {
    categories: Object.keys(quizzes).length,
    signals: contentCatalog.signals,
    tests: contentCatalog.tests(),
    questions: contentCatalog.questions()
  };
  const formatter = new Intl.NumberFormat('ar-DZ');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-stat]').forEach((element) => {
    const target = metrics[element.dataset.stat];
    if (typeof target !== 'number') return;
    if (reduceMotion) {
      element.textContent = formatter.format(target);
      return;
    }
    const duration = 560;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      element.textContent = formatter.format(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function renderQuiz(type) {
  const config = quizzes[type];
  const target = document.querySelector('[data-quiz]');
  if (!config || !target) return;
  let index = 0;
  let score = 0;
  let answered = false;

  const render = () => {
    if (index >= config.questions.length) {
      const percentage = Math.round((score / config.questions.length) * 100);
      const note = percentage >= 80 ? 'نتيجة ممتازة. حافظ على المراجعة والقيادة الهادئة.' : 'راجع الدروس المرتبطة بالإجابات ثم أعد الاختبار لتثبيت الفهم.';
      target.innerHTML = `<section class="quiz-card quiz-result"><div class="quiz-result__score">${percentage}%</div><p class="eyebrow">اكتمل الاختبار</p><h1>نتيجتك ${score} من ${config.questions.length}</h1><p>${note}</p><button class="button" type="button" data-restart>أعد الاختبار</button></section>`;
      target.querySelector('[data-restart]').addEventListener('click', () => { index = 0; score = 0; answered = false; render(); });
      return;
    }
    const question = config.questions[index];
    const progress = Math.round(((index + 1) / config.questions.length) * 100);
    target.innerHTML = `<section class="quiz-card"><div class="quiz-card__top"><span>السؤال ${index + 1} من ${config.questions.length}</span><span>${progress}%</span></div><div class="progress" aria-label="تقدم الاختبار"><span style="width:${progress}%"></span></div><h1 class="quiz-question">${question.q}</h1><div class="quiz-options">${question.o.map((option, answerIndex) => `<button class="quiz-option" type="button" data-answer="${answerIndex}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + answerIndex)}</span><span>${option}</span></button>`).join('')}</div><div data-feedback aria-live="polite"></div></section>`;
    target.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => answer(Number(button.dataset.answer))));
  };

  const answer = (choice) => {
    if (answered) return;
    answered = true;
    const question = config.questions[index];
    target.querySelectorAll('[data-answer]').forEach((button) => {
      const answerIndex = Number(button.dataset.answer);
      button.disabled = true;
      if (answerIndex === question.a) button.classList.add('is-correct');
      if (answerIndex === choice && choice !== question.a) button.classList.add('is-incorrect');
    });
    if (choice === question.a) score += 1;
    const state = choice === question.a ? 'إجابة صحيحة.' : 'إجابة غير صحيحة.';
    target.querySelector('[data-feedback]').innerHTML = `<div class="quiz-feedback"><strong>${state}</strong> ${question.e}</div><div class="quiz-next"><button class="button" type="button" data-next>${index === config.questions.length - 1 ? 'عرض النتيجة' : 'السؤال التالي'}</button></div>`;
    target.querySelector('[data-next]').addEventListener('click', () => { index += 1; answered = false; render(); });
  };
  render();
}

function renderExamSimulation() {
  const target = document.querySelector('[data-exam-simulation]');
  if (!target) return;
  const EXAM_LENGTH = 20;
  const EXAM_MINUTES = 25;
  const categoryLabels = { warning: 'التحذير', prohibition: 'المنع', mandatory: 'الإلزام', information: 'الإرشاد', safety: 'السلامة', conduct: 'السلوك المروري' };
  const formatter = new Intl.NumberFormat('ar-DZ');
  const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
  const createExamSession = () => {
    const categories = Object.keys(categoryLabels);
    const anchorQuestions = categories.map((category) => shuffle(examQuestionBank.filter((question) => question.category === category))[0]).filter(Boolean);
    const remaining = shuffle(examQuestionBank.filter((question) => !anchorQuestions.includes(question)));
    return shuffle([...anchorQuestions, ...remaining.slice(0, Math.max(0, EXAM_LENGTH - anchorQuestions.length))]);
  };
  let questions = createExamSession();
  let answers = Array(questions.length).fill(null);
  let current = 0;
  let timeLeft = EXAM_MINUTES * 60;
  let timer = null;

  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const stopTimer = () => { if (timer) window.clearInterval(timer); timer = null; };
  const tick = () => {
    timeLeft -= 1;
    const clock = target.querySelector('[data-exam-timer]');
    if (clock) clock.textContent = formatTime(Math.max(timeLeft, 0));
    if (timeLeft <= 0) finish(true);
  };
  const startTimer = () => { stopTimer(); timer = window.setInterval(tick, 1000); };

  const renderIntro = () => {
    target.innerHTML = `<section class="exam-intro"><div class="exam-intro__badge">محاكاة موسعة</div><h1>جاهز لجلسة تدريب أقرب إلى الامتحان؟</h1><p>تختار المحاكاة ${formatter.format(questions.length)} سؤالاً متنوعاً عشوائياً من بنك يضم ${formatter.format(examQuestionBank.length)} سؤالاً، مع ضمان حضور فئات الإشارات والسلامة والسلوك المروري. يمكنك العودة إلى أي سؤال قبل إنهاء الجلسة.</p><div class="exam-rules"><span>◷ ${formatter.format(EXAM_MINUTES)} دقيقة</span><span>◉ ${formatter.format(questions.length)} سؤالاً</span><span>▦ ${formatter.format(Object.keys(categoryLabels).length)} فئات تدريبية</span><span>✓ تحليل ومراجعة في النهاية</span></div><button class="button" type="button" data-start-simulation>ابدأ جلسة تدريبية</button></section>`;
    target.querySelector('[data-start-simulation]').addEventListener('click', () => { renderQuestion(); startTimer(); });
  };

  const renderQuestion = () => {
    const question = questions[current];
    const answered = answers.filter((answer) => answer !== null).length;
    const progress = Math.round((answered / questions.length) * 100);
    target.innerHTML = `<section class="exam-card"><div class="exam-card__top"><div><span class="tag">محاكاة الامتحان</span><strong>السؤال ${formatter.format(current + 1)} من ${formatter.format(questions.length)}</strong></div><div class="exam-timer" aria-live="polite">◷ <span data-exam-timer>${formatTime(timeLeft)}</span></div></div><div class="progress" aria-label="نسبة الإجابات"><span style="width:${progress}%"></span></div><div class="exam-layout"><aside class="exam-sidebar"><p>الأسئلة</p><div class="exam-question-map">${questions.map((_, index) => `<button class="exam-map-button ${index === current ? 'is-current' : ''} ${answers[index] !== null ? 'is-answered' : ''}" type="button" data-go-question="${index}" aria-label="الانتقال إلى السؤال ${index + 1}">${index + 1}</button>`).join('')}</div><small>تمت الإجابة عن ${formatter.format(answered)} من ${formatter.format(questions.length)}</small></aside><div class="exam-main"><p class="eyebrow">فئة ${categoryLabels[question.category]}</p><h1 class="quiz-question">${question.q}</h1><div class="quiz-options">${question.o.map((option, answerIndex) => `<button class="quiz-option ${answers[current] === answerIndex ? 'is-selected' : ''}" type="button" data-exam-answer="${answerIndex}" aria-pressed="${answers[current] === answerIndex}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + answerIndex)}</span><span>${option}</span></button>`).join('')}</div><div class="exam-actions"><button class="button button--quiet" type="button" data-exam-previous ${current === 0 ? 'disabled' : ''}>السابق</button>${current === questions.length - 1 ? '<button class="button" type="button" data-exam-finish>إنهاء وعرض النتيجة</button>' : '<button class="button" type="button" data-exam-next>التالي</button>'}</div></div></div></section>`;
    target.querySelectorAll('[data-exam-answer]').forEach((button) => button.addEventListener('click', () => { answers[current] = Number(button.dataset.examAnswer); renderQuestion(); }));
    target.querySelectorAll('[data-go-question]').forEach((button) => button.addEventListener('click', () => { current = Number(button.dataset.goQuestion); renderQuestion(); }));
    const previous = target.querySelector('[data-exam-previous]');
    if (previous) previous.addEventListener('click', () => { current -= 1; renderQuestion(); });
    const next = target.querySelector('[data-exam-next]');
    if (next) next.addEventListener('click', () => { current += 1; renderQuestion(); });
    const finishButton = target.querySelector('[data-exam-finish]');
    if (finishButton) finishButton.addEventListener('click', () => finish(false));
  };

  const finish = (timedOut) => {
    stopTimer();
    const score = questions.reduce((total, question, index) => total + (answers[index] === question.a ? 1 : 0), 0);
    const answered = answers.filter((answer) => answer !== null).length;
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    const breakdown = Object.entries(categoryLabels).map(([category, label]) => {
      const categoryQuestions = questions.filter((question) => question.category === category);
      if (!categoryQuestions.length) return '';
      const categoryScore = categoryQuestions.reduce((total, question) => total + (answers[questions.indexOf(question)] === question.a ? 1 : 0), 0);
      return `<div class="exam-category-score"><strong>${label}</strong><span>${formatter.format(categoryScore)} / ${formatter.format(categoryQuestions.length)}</span></div>`;
    }).join('');
    target.innerHTML = `<section class="exam-result"><div class="quiz-result__score">${formatter.format(percentage)}%</div><p class="eyebrow">${timedOut ? 'انتهى الوقت' : 'اكتملت الجلسة التدريبية'}</p><h1>${passed ? 'أحسنت، تجاوزت المستوى التدريبي.' : 'نتيجة تدريبية تحتاج إلى مراجعة.'}</h1><p>أجبت إجابة صحيحة عن ${formatter.format(score)} من ${formatter.format(questions.length)} سؤالاً، وأكملت ${formatter.format(answered)} سؤالاً. النتيجة مرجعية للتدريب ولا تمثل نتيجة امتحان رسمي.</p><div class="exam-category-summary" aria-label="تحليل النتيجة حسب الفئة">${breakdown}</div><div class="exam-review">${questions.map((question, index) => `<article class="exam-review__item ${answers[index] === question.a ? 'is-correct' : 'is-incorrect'}"><span>${index + 1}</span><div><strong>${answers[index] === question.a ? 'إجابة صحيحة' : 'راجع هذه الإجابة'}</strong><p>${question.q}</p><small>الإجابة الصحيحة: ${question.o[question.a]}</small><small>${question.e}</small></div></article>`).join('')}</div><button class="button" type="button" data-exam-restart>جلسة تدريبية جديدة</button></section>`;
    target.querySelector('[data-exam-restart]').addEventListener('click', () => { questions = createExamSession(); answers = Array(questions.length).fill(null); current = 0; timeLeft = EXAM_MINUTES * 60; renderIntro(); });
  };

  renderIntro();
}

function initSignGallery() {
  const gallery = document.querySelector('[data-sign-gallery]');
  const search = document.querySelector('[data-gallery-search]');
  const filters = [...document.querySelectorAll('[data-gallery-filter]')];
  const count = document.querySelector('[data-gallery-count]');
  const empty = document.querySelector('[data-gallery-empty]');
  if (!gallery || !search || !filters.length || !count || !empty) return;

  const cards = [...gallery.querySelectorAll('[data-sign-card]')];
  let activeCategory = 'all';
  const normalize = (value) => value.toLocaleLowerCase('ar-DZ').trim();
  const refresh = () => {
    const query = normalize(search.value);
    let visible = 0;
    cards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesQuery = !query || normalize(card.dataset.search || '').includes(query);
      const show = matchesCategory && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    });
    count.textContent = new Intl.NumberFormat('ar-DZ').format(visible);
    empty.hidden = visible !== 0;
  };

  search.addEventListener('input', refresh);
  filters.forEach((filter) => filter.addEventListener('click', () => {
    activeCategory = filter.dataset.galleryFilter || 'all';
    filters.forEach((item) => {
      const selected = item === filter;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    refresh();
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    });
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      message.classList.add('is-visible');
      form.reset();
    });
  }

  renderDynamicStats();
  initSignGallery();

  const quiz = document.querySelector('[data-quiz]');
  if (quiz) renderQuiz(quiz.dataset.quiz);

  renderExamSimulation();
});

// Progressive Web App: register only on secure origins and surface the browser install prompt when available.
let deferredInstallPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const header = document.querySelector('.header-inner');
  if (!header || header.querySelector('[data-pwa-install]')) return;
  const installButton = document.createElement('button');
  installButton.type = 'button';
  installButton.className = 'pwa-install';
  installButton.dataset.pwaInstall = 'true';
  installButton.textContent = 'تثبيت التطبيق';
  installButton.setAttribute('aria-label', 'تثبيت دليل السياقة DZ كتطبيق');
  installButton.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.remove();
  });
  header.append(installButton);
});

window.addEventListener('appinstalled', () => {
  document.querySelector('[data-pwa-install]')?.remove();
  deferredInstallPrompt = null;
});

if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js', { scope: './' }).catch(() => {
      // The site stays fully usable online if registration is unavailable.
    });
  });
}
