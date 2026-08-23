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

const contentCatalog = {
  signals: 11,
  tests: () => Object.keys(quizzes).length + 1,
  questions: () => Object.values(quizzes).reduce((total, quiz) => total + quiz.questions.length, 0)
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
  const questions = Object.entries(quizzes).flatMap(([category, quiz]) => quiz.questions.map((question) => ({ ...question, category })));
  const categoryLabels = { warning: 'التحذير', prohibition: 'المنع', mandatory: 'الإلزام', information: 'الإرشاد' };
  const answers = Array(questions.length).fill(null);
  const formatter = new Intl.NumberFormat('ar-DZ');
  let current = 0;
  let timeLeft = 15 * 60;
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
    target.innerHTML = `<section class="exam-intro"><div class="exam-intro__badge">محاكاة تفاعلية</div><h1>جاهز لجلسة اختبار شاملة؟</h1><p>تضم المحاكاة ${formatter.format(questions.length)} سؤالاً من فئات الإشارات الأربع. لديك 15 دقيقة، ويمكنك العودة إلى أي سؤال قبل إنهاء الجلسة.</p><div class="exam-rules"><span>◷ 15 دقيقة</span><span>◉ ${formatter.format(questions.length)} سؤالاً</span><span>✓ النتيجة والمراجعة في النهاية</span></div><button class="button" type="button" data-start-simulation>ابدأ المحاكاة</button></section>`;
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
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    target.innerHTML = `<section class="exam-result"><div class="quiz-result__score">${formatter.format(percentage)}%</div><p class="eyebrow">${timedOut ? 'انتهى الوقت' : 'اكتملت المحاكاة'}</p><h1>${passed ? 'أحسنت، تجاوزت المستوى التدريبي.' : 'نتيجة تدريبية تحتاج إلى مراجعة.'}</h1><p>أجبت إجابة صحيحة عن ${formatter.format(score)} من ${formatter.format(questions.length)} سؤالاً. النتيجة مرجعية للتدريب ولا تمثل نتيجة امتحان رسمي.</p><div class="exam-review">${questions.map((question, index) => `<article class="exam-review__item ${answers[index] === question.a ? 'is-correct' : 'is-incorrect'}"><span>${index + 1}</span><div><strong>${answers[index] === question.a ? 'إجابة صحيحة' : 'راجع هذه الإجابة'}</strong><p>${question.q}</p><small>الإجابة الصحيحة: ${question.o[question.a]}</small></div></article>`).join('')}</div><button class="button" type="button" data-exam-restart>أعد المحاكاة</button></section>`;
    target.querySelector('[data-exam-restart]').addEventListener('click', () => { answers.fill(null); current = 0; timeLeft = 15 * 60; renderIntro(); });
  };

  renderIntro();
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

  const quiz = document.querySelector('[data-quiz]');
  if (quiz) renderQuiz(quiz.dataset.quiz);

  renderExamSimulation();
});
