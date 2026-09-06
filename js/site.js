let quizzes = {};
let examQuestionBank = [];

async function loadQuizzes() {
  try {
    const res = await fetch("data/quiz.json");
    const data = await res.json();
    quizzes = data.quizzes;
    examQuestionBank = data.examQuestionBank;
  } catch(e) {
    console.error("Failed to load quizzes", e);
  }
}

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

document.addEventListener('DOMContentLoaded', async () => {
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

  await loadQuizzes();
  renderDynamicStats();

  const quiz = document.querySelector('[data-quiz]');
  if (quiz) renderQuiz(quiz.dataset.quiz);

  renderExamSimulation();
  await renderDataSources();
  initSignGallery();
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

async function renderDataSources() {
  const sources = Array.from(document.querySelectorAll('[data-source]'));
  await Promise.all(sources.map(async (container) => {
    const src = container.dataset.source;
    try {
      const res = await fetch(`data/${src}.json`);
      const data = await res.json();
      let html = '';
      if (src === 'rules' || src === 'safety') {
        html = data.map(([image, alt, label, title, text]) =>
          `<article class="visual-card">
            <div class="visual-card__image">
              <img src="${image}" alt="${alt}" width="160" height="110" loading="lazy" decoding="async">
            </div>
            <div class="visual-card__body">
              <span class="tag">${label}</span>
              <h2>${title}</h2>
              <p>${text}</p>
            </div>
          </article>`
        ).join('');
      } else {
        html = data.map(({img, title, desc, points}) =>
          `<article class="signal-card">
            <div class="signal-card__image">
              <img src="${img}" alt="${title}" loading="lazy">
            </div>
            <span class="tag">إشارة تعليمية جزائرية</span>
            <h2>${title}</h2>
            <p>${desc}</p>
            <ul class="key-points">
              ${points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </article>`
        ).join('');
      }
      container.innerHTML = html;
    } catch(e) {
      console.error(`Failed to load data for ${src}`, e);
    }
  }));
}
