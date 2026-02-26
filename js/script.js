// ============================================
// مدرسة السياقة - ملف JavaScript الرئيسي
// ============================================

// البيانات الأساسية
const app = {
  currentPage: 'home',
  currentQuestion: 0,
  score: 0,
  testStarted: false,
  testCompleted: false,
  selectedAnswers: {},

  // الأسئلة
  questions: [
    {
      id: 1,
      question: 'ما معنى إشارة التوقف الحمراء الثمانية الأضلاع؟',
      options: [
        'تقليل السرعة',
        'التوقف الكامل',
        'الانتظار',
        'المتابعة بحذر',
      ],
      correctAnswer: 1,
      explanation: 'إشارة التوقف تعني التوقف الكامل قبل خط التوقف والتحقق من خلو الطريق.',
    },
    {
      id: 2,
      question: 'ما هي المسافة الآمنة بين مركبتك والمركبة الأمامية عند السرعة 100 كم/س؟',
      options: [
        '20 متر',
        '30 متر',
        '50 متر',
        '70 متر',
      ],
      correctAnswer: 2,
      explanation: 'المسافة الآمنة = السرعة ÷ 2، أي 100 ÷ 2 = 50 متر.',
    },
    {
      id: 3,
      question: 'هل يمكنك استخدام الهاتف أثناء القيادة؟',
      options: [
        'نعم، بدون مشكلة',
        'فقط للرسائل',
        'لا، إلا بأجهزة يدوية حرة',
        'فقط في حالات الطوارئ',
      ],
      correctAnswer: 2,
      explanation: 'استخدام الهاتف أثناء القيادة ممنوع إلا بأجهزة البلوتوث أو السماعات اللاسلكية.',
    },
    {
      id: 4,
      question: 'ما الذي يجب فعله عند رؤية إشارة معبر المشاة؟',
      options: [
        'الاستمرار بنفس السرعة',
        'تقليل السرعة والاستعداد للتوقف',
        'زيادة السرعة للعبور بسرعة',
        'استخدام البوق',
      ],
      correctAnswer: 1,
      explanation: 'يجب تقليل السرعة والاستعداد للتوقف وإعطاء الأفضلية للمشاة.',
    },
    {
      id: 5,
      question: 'ما معنى الخطوط البيضاء المزدوجة على الطريق؟',
      options: [
        'يمكن التجاوز',
        'ممنوع التجاوز من الجانبين',
        'تقليل السرعة',
        'الانعطاف إلى اليمين',
      ],
      correctAnswer: 1,
      explanation: 'الخطوط البيضاء المزدوجة تشير إلى منع التجاوز من كلا الجانبين.',
    },
    {
      id: 6,
      question: 'هل يجب ارتداء حزام الأمان في المقاعد الخلفية؟',
      options: [
        'لا، فقط السائق',
        'لا، المقاعد الخلفية آمنة',
        'نعم، إلزامي لجميع الركاب',
        'فقط للأطفال',
      ],
      correctAnswer: 2,
      explanation: 'ارتداء حزام الأمان إلزامي لجميع ركاب المركبة بما فيهم المقاعد الخلفية.',
    },
    {
      id: 7,
      question: 'ما السرعة المسموح بها في المناطق السكنية؟',
      options: [
        '100 كم/س',
        '80 كم/س',
        '40-60 كم/س',
        '120 كم/س',
      ],
      correctAnswer: 2,
      explanation: 'السرعة المسموح بها في المناطق السكنية هي 40-60 كم/س.',
    },
    {
      id: 8,
      question: 'ماذا تفعل إذا فشلت الفرامل أثناء القيادة؟',
      options: [
        'استخدم فرامل اليد بحذر',
        'اصطدم بشيء لإيقاف السيارة',
        'استخدم الفرامل بقوة',
        'اترك السيارة تتوقف بنفسها',
      ],
      correctAnswer: 0,
      explanation: 'في حالة فشل الفرامل، استخدم فرامل اليد بحذر تدريجي.',
    },
    {
      id: 9,
      question: 'ما معنى الإشارة الزرقاء المستديرة؟',
      options: [
        'ممنوع الدخول',
        'إجباري الاتجاه المشار إليه',
        'تحذير من خطر',
        'موقف سيارات',
      ],
      correctAnswer: 1,
      explanation: 'الإشارة الزرقاء المستديرة تشير إلى اتجاه إجباري يجب اتباعه.',
    },
    {
      id: 10,
      question: 'هل يمكن القيادة تحت تأثير الكحول؟',
      options: [
        'نعم، بكميات قليلة',
        'لا، ممنوع تماماً',
        'فقط في الطرق الآمنة',
        'فقط في النهار',
      ],
      correctAnswer: 1,
      explanation: 'القيادة تحت تأثير الكحول ممنوعة تماماً وتعاقب بغرامات كبيرة.',
    },
  ],

  // تهيئة التطبيق
  init() {
    this.setupEventListeners();
    this.loadPage('home');
  },

  // إعداد مستمعي الأحداث
  setupEventListeners() {
    // الملاحة
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').substring(1) || 'home';
        this.loadPage(page);
      });
    });

    // البحث
    const searchBtn = document.querySelector('.search-bar button');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value;
        this.handleSearch(query);
      });
    }
  },

  // تحميل الصفحة
  loadPage(page) {
    this.currentPage = page;
    const main = document.querySelector('main');
    main.innerHTML = '';

    switch (page) {
      case 'home':
        this.renderHome();
        break;
      case 'signals':
        this.renderSignals();
        break;
      case 'rules':
        this.renderRules();
        break;
      case 'safety':
        this.renderSafety();
        break;
      case 'tests':
        this.renderTests();
        break;
      default:
        this.renderHome();
    }

    window.scrollTo(0, 0);
  },

  // الصفحة الرئيسية
  renderHome() {
    const main = document.querySelector('main');
    main.innerHTML = `
      <section class="hero">
        <div class="container">
          <h1>مرحباً بك في مدرسة السياقة</h1>
          <p>منصة تعليمية شاملة لتعليم قوانين المرور والسياقة الآمنة. تعلم، افهم، والتزم بالقوانين لسلامتك وسلامة الآخرين.</p>
          <div class="hero-buttons">
            <button class="btn btn-primary btn-lg" onclick="app.loadPage('signals')">ابدأ التعلم الآن</button>
            <button class="btn btn-secondary btn-lg" onclick="app.loadPage('tests')">اختبر معلوماتك</button>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">إشارة مرور</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">قانون وقاعدة</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">مستخدم سعيد</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">متاح دائماً</div>
            </div>
          </div>
        </div>
      </section>

      <section class="container mt-4">
        <h2 style="text-align: center; color: var(--primary); margin-bottom: 2rem; font-size: 2rem;">ما الذي نقدمه</h2>
        <div class="cards-grid">
          <div class="card">
            <div class="card-icon">🚦</div>
            <h3>إشارات المرور</h3>
            <p>تعرف على جميع إشارات المرور وفهم معانيها بشكل صحيح.</p>
            <a href="#" onclick="app.loadPage('signals')" class="card-link">اكتشف المزيد →</a>
          </div>
          <div class="card">
            <div class="card-icon">📚</div>
            <h3>قوانين السياقة</h3>
            <p>تعلم قوانين المرور والقيادة الآمنة والالتزام بها.</p>
            <a href="#" onclick="app.loadPage('rules')" class="card-link">اكتشف المزيد →</a>
          </div>
          <div class="card">
            <div class="card-icon">🛡️</div>
            <h3>نصائح الأمان</h3>
            <p>احصل على نصائح عملية لقيادة آمنة وتجنب الحوادث.</p>
            <a href="#" onclick="app.loadPage('safety')" class="card-link">اكتشف المزيد →</a>
          </div>
          <div class="card">
            <div class="card-icon">⚡</div>
            <h3>اختبر معلوماتك</h3>
            <p>قيم معرفتك من خلال اختبارات تفاعلية وشاملة.</p>
            <a href="#" onclick="app.loadPage('tests')" class="card-link">اكتشف المزيد →</a>
          </div>
        </div>
      </section>

      <section style="background: linear-gradient(135deg, #f0fdf4 0%, #dbeafe 100%); padding: 3rem 0; margin-top: 3rem; border-top: 1px solid var(--border);">
        <div class="container text-center">
          <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 2rem;">هل أنت مستعد للقيادة الآمنة؟</h2>
          <p style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem;">ابدأ رحلتك التعليمية الآن واحصل على المعرفة الكاملة لقيادة آمنة والالتزام بجميع قوانين المرور.</p>
          <button class="btn btn-primary btn-lg" onclick="app.loadPage('signals')">ابدأ الآن</button>
        </div>
      </section>
    `;
  },

  // صفحة إشارات المرور
  renderSignals() {
    const main = document.querySelector('main');
    const signals = [
      {
        emoji: '🛑',
        name: 'إشارة التوقف',
        description: 'توقف كامل قبل خط التوقف',
        details: ['التوقف الإجباري', 'التحقق من خلو الطريق', 'الأفضلية للمشاة'],
        color: 'bg-red'
      },
      {
        emoji: '⚠️',
        name: 'إشارة تحذير',
        description: 'تحذير من خطر على الطريق',
        details: ['تقليل السرعة', 'الانتباه للخطر', 'الحذر من المشاة'],
        color: 'bg-yellow'
      },
      {
        emoji: '🔵',
        name: 'إشارة إجبارية',
        description: 'اتجاه إجباري يجب اتباعه',
        details: ['اتباع الاتجاه المشار', 'عدم الانحراف', 'الالتزام بالمسار'],
        color: 'bg-blue'
      },
      {
        emoji: '🚫',
        name: 'إشارة ممنوع الدخول',
        description: 'ممنوع الدخول من هذا الطريق',
        details: ['عدم الدخول', 'البحث عن طريق آخر', 'احترام الإشارة'],
        color: 'bg-red'
      },
      {
        emoji: '🅿️',
        name: 'إشارة موقف السيارات',
        description: 'موقف مخصص للسيارات',
        details: ['الوقوف المسموح', 'احترام التوقيت', 'عدم الحجز'],
        color: 'bg-blue'
      },
      {
        emoji: '🚸',
        name: 'إشارة معبر الأطفال',
        description: 'منطقة تعليمية أو ملعب',
        details: ['تقليل السرعة', 'الانتباه للأطفال', 'الحذر الشديد'],
        color: 'bg-yellow'
      },
      {
        emoji: '🚗',
        name: 'إشارة ممنوع التجاوز',
        description: 'ممنوع تجاوز المركبات',
        details: ['عدم التجاوز', 'الالتزام بالمسار', 'الانتظار للفرصة'],
        color: 'bg-red'
      },
      {
        emoji: '🛣️',
        name: 'إشارة طريق سريع',
        description: 'طريق سريع للمركبات السريعة',
        details: ['السرعة المسموح بها', 'عدم الوقوف', 'الالتزام بالحارة'],
        color: 'bg-blue'
      },
      {
        emoji: '🚲',
        name: 'إشارة ممنوع الدراجات',
        description: 'ممنوع دخول الدراجات الهوائية',
        details: ['عدم دخول الدراجات', 'احترام الإشارة', 'البحث عن طريق آخر'],
        color: 'bg-red'
      },
      {
        emoji: '💧',
        name: 'إشارة انزلاق الطريق',
        description: 'احذر من انزلاق الطريق',
        details: ['تقليل السرعة', 'الحذر من الانزلاق', 'المسافة الآمنة'],
        color: 'bg-yellow'
      }
    ];

    let html = `
      <section class="container mt-4">
        <h1 style="color: var(--primary); text-align: center; margin-bottom: 1rem;">إشارات المرور</h1>
        <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          تعرف على جميع إشارات المرور المهمة وفهم معانيها بشكل صحيح لضمان قيادة آمنة والالتزام بقوانين المرور.
        </p>
        <div class="cards-grid">
    `;

    signals.forEach(signal => {
      html += `
        <div class="signal-card ${signal.color}">
          <div class="signal-image">${signal.emoji}</div>
          <h3>${signal.name}</h3>
          <p>${signal.description}</p>
          <div class="signal-details">
            <ul>
              ${signal.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;

    main.innerHTML = html;
  },

  // صفحة قوانين السياقة
  renderRules() {
    const main = document.querySelector('main');
    const rules = [
      {
        title: 'السرعة المسموح بها',
        description: 'الالتزام بحدود السرعة المحددة',
        items: ['الطرق السريعة: 120 كم/س', 'الطرق العادية: 80 كم/س', 'المناطق السكنية: 40-60 كم/س'],
        icon: '⚡'
      },
      {
        title: 'حزام الأمان',
        description: 'ارتداء حزام الأمان إلزامي',
        items: ['السائق والركاب الأمامية', 'المقاعد الخلفية', 'الأطفال في مقاعد خاصة'],
        icon: '🛡️'
      },
      {
        title: 'المسافة الآمنة',
        description: 'الحفاظ على مسافة آمنة',
        items: ['المسافة = السرعة ÷ 2', 'زيادة المسافة في الطقس السيء', 'عدم الاقتراب من المركبات'],
        icon: '📏'
      },
      {
        title: 'استخدام الهاتف',
        description: 'ممنوع استخدام الهاتف أثناء القيادة',
        items: ['استخدام أجهزة يدوية حرة', 'عدم الكتابة أو الرسائل', 'فقط في حالات الطوارئ'],
        icon: '📱'
      },
      {
        title: 'الكحول والمخدرات',
        description: 'ممنوع القيادة تحت التأثير',
        items: ['ممنوع تماماً', 'عقوبات قانونية صارمة', 'خطر على الحياة'],
        icon: '🚫'
      },
      {
        title: 'الإضاءة الليلية',
        description: 'استخدام الأضواء بشكل صحيح',
        items: ['الأضواء الأمامية في الليل', 'عدم الإزعاج بالأضواء القوية', 'الأضواء الخلفية'],
        icon: '💡'
      },
      {
        title: 'أولويات الطريق',
        description: 'احترام أولويات المرور',
        items: ['إعطاء الأفضلية للمشاة', 'احترام إشارات المرور', 'احترام الشرطة المرورية'],
        icon: '👮'
      },
      {
        title: 'الصيانة الدورية',
        description: 'صيانة المركبة بشكل دوري',
        items: ['فحص الفرامل والإطارات', 'تغيير الزيت بانتظام', 'فحص البطارية والأضواء'],
        icon: '🔧'
      }
    ];

    let html = `
      <section class="container mt-4">
        <h1 style="color: var(--primary); text-align: center; margin-bottom: 1rem;">قوانين السياقة</h1>
        <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          تعرف على أهم قوانين المرور والسياقة الآمنة. الالتزام بهذه القوانين يحمي حياتك وحياة الآخرين.
        </p>
        <div class="cards-grid">
    `;

    rules.forEach(rule => {
      html += `
        <div class="card">
          <div class="card-icon">${rule.icon}</div>
          <h3>${rule.title}</h3>
          <p>${rule.description}</p>
          <div style="background: var(--light); border-radius: 0.5rem; padding: 1rem; text-align: right;">
            <ul style="list-style: none;">
              ${rule.items.map(item => `<li style="padding: 0.5rem 0; color: var(--text-dark);">✓ ${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;

    main.innerHTML = html;
  },

  // صفحة نصائح الأمان
  renderSafety() {
    const main = document.querySelector('main');
    const tips = [
      {
        title: 'قبل بدء القيادة',
        icon: '✅',
        items: ['افحص الإطارات والفرامل', 'تأكد من عمل الأضواء', 'اضبط المرايا والمقاعد', 'تحقق من السوائل']
      },
      {
        title: 'القيادة في الطقس السيء',
        icon: '🌧️',
        items: ['قلل السرعة بشكل كبير', 'زيادة المسافة الآمنة', 'استخدم الأضواء', 'تجنب الفرملة المفاجئة']
      },
      {
        title: 'القيادة الليلية',
        icon: '🌙',
        items: ['تشغيل الأضواء الأمامية', 'تقليل السرعة', 'زيادة المسافة الآمنة', 'أخذ فترات راحة']
      },
      {
        title: 'القيادة على الطرق السريعة',
        icon: '🛣️',
        items: ['الالتزام بحدود السرعة', 'عدم تغيير الحارات فجأة', 'استخدام المؤشرات', 'الحفاظ على المسافة']
      },
      {
        title: 'سلامة المشاة',
        icon: '🚶',
        items: ['الانتباه عند المعابر', 'عدم التجاوز بالقرب من المشاة', 'إعطاء الأفضلية للأطفال', 'احترام حقوق الجميع']
      },
      {
        title: 'الحالات الطارئة',
        icon: '🚨',
        items: ['الهدوء والتركيز', 'استخدام الفرامل بحذر', 'الاتصال بالطوارئ', 'عدم مغادرة الموقع']
      },
      {
        title: 'صيانة المركبة',
        icon: '🔧',
        items: ['تغيير الزيت بانتظام', 'فحص الفرامل والإطارات', 'تنظيف النوافذ', 'فحص البطارية']
      },
      {
        title: 'القيادة الدفاعية',
        icon: '🛡️',
        items: ['توقع تصرفات الآخرين', 'الحفاظ على مسافة آمنة', 'عدم الثقة العمياء', 'البقاء منتبهاً']
      }
    ];

    let html = `
      <section class="container mt-4">
        <h1 style="color: var(--primary); text-align: center; margin-bottom: 1rem;">نصائح الأمان</h1>
        <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          نصائح عملية وفعالة لقيادة آمنة وتجنب الحوادث. اتبع هذه النصائح لحماية نفسك والآخرين على الطريق.
        </p>
        <div class="cards-grid">
    `;

    tips.forEach(tip => {
      html += `
        <div class="card">
          <div class="card-icon">${tip.icon}</div>
          <h3>${tip.title}</h3>
          <div style="background: var(--light); border-radius: 0.5rem; padding: 1rem; text-align: right;">
            <ul style="list-style: none;">
              ${tip.items.map(item => `<li style="padding: 0.5rem 0; color: var(--text-dark);">✓ ${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    });

    html += `
        </div>
        <div style="background: #dcfce7; border-left: 4px solid var(--success); padding: 2rem; border-radius: 0.5rem; margin-top: 2rem;">
          <h3 style="color: var(--success); margin-bottom: 1rem;">تذكر دائماً:</h3>
          <p style="color: #166534; margin-bottom: 1rem;">السياقة الآمنة ليست فقط عن معرفة القوانين، بل عن الالتزام بها والاهتمام بسلامتك وسلامة الآخرين.</p>
          <ul style="list-style: none; color: #166534;">
            <li style="padding: 0.5rem 0;">• كن مسؤولاً عن أفعالك على الطريق</li>
            <li style="padding: 0.5rem 0;">• احترم حقوق جميع مستخدمي الطريق</li>
            <li style="padding: 0.5rem 0;">• تذكر أن حياتك أهم من الوقت</li>
          </ul>
        </div>
      </section>
    `;

    main.innerHTML = html;
  },

  // صفحة الاختبارات
  renderTests() {
    const main = document.querySelector('main');

    if (!this.testStarted) {
      main.innerHTML = `
        <section class="container mt-4">
          <div class="test-container" style="max-width: 600px; margin: 2rem auto; text-align: center;">
            <h1 style="color: var(--primary); margin-bottom: 1rem;">اختبر معرفتك</h1>
            <p style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem;">
              اختبر معرفتك حول قوانين المرور والسياقة الآمنة. يتكون الاختبار من 10 أسئلة متنوعة.
            </p>
            <div class="alert alert-info">
              <strong>معلومات الاختبار:</strong>
              <ul style="list-style: none; text-align: right; margin-top: 1rem;">
                <li>• عدد الأسئلة: 10</li>
                <li>• الوقت: غير محدد</li>
                <li>• النتيجة: ستظهر بعد انتهاء الاختبار</li>
                <li>• التفسير: كل سؤال له شرح للإجابة الصحيحة</li>
              </ul>
            </div>
            <button class="btn btn-primary btn-lg" onclick="app.startTest()" style="margin-top: 2rem;">ابدأ الاختبار الآن</button>
          </div>
        </section>
      `;
    } else if (this.testCompleted) {
      const percentage = Math.round((this.score / this.questions.length) * 100);
      let resultMessage = '';
      let resultClass = '';

      if (percentage >= 90) {
        resultMessage = '🎉 ممتاز جداً! أنت تمتلك معرفة عميقة بقوانين المرور. استمر في هذا المستوى الرائع!';
        resultClass = 'alert-success';
      } else if (percentage >= 70) {
        resultMessage = '👍 جيد جداً! معرفتك بقوانين المرور جيدة. حاول تحسين النقاط الضعيفة.';
        resultClass = 'alert-info';
      } else if (percentage >= 50) {
        resultMessage = '📚 متوسط. تحتاج إلى مراجعة المزيد من قوانين المرور والإشارات.';
        resultClass = 'alert-warning';
      } else {
        resultMessage = '⚠️ يجب عليك مراجعة جميع قوانين المرور بعناية قبل القيادة.';
        resultClass = 'alert-danger';
      }

      main.innerHTML = `
        <section class="container mt-4">
          <div class="test-container" style="max-width: 600px; margin: 2rem auto; text-align: center;">
            <h1 style="color: var(--primary); margin-bottom: 2rem;">انتهى الاختبار</h1>
            <div style="font-size: 3rem; margin-bottom: 1rem;">${percentage >= 70 ? '✅' : '❌'}</div>
            <p style="font-size: 1.5rem; color: var(--primary); margin-bottom: 1rem;">نتيجتك: ${this.score} من ${this.questions.length}</p>
            <p style="font-size: 2.5rem; font-weight: bold; color: var(--primary); margin-bottom: 2rem;">${percentage}%</p>
            <div class="alert ${resultClass}">
              ${resultMessage}
            </div>
            <button class="btn btn-primary btn-lg" onclick="app.restartTest()" style="margin-top: 2rem;">أعد الاختبار</button>
          </div>
        </section>
      `;
    } else {
      const question = this.questions[this.currentQuestion];
      const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;

      main.innerHTML = `
        <section class="container mt-4">
          <div class="test-container">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span style="font-weight: bold;">السؤال ${this.currentQuestion + 1} من ${this.questions.length}</span>
              <span style="font-weight: bold; color: var(--primary);">${Math.round(progress)}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <div class="question">
              <h3>${question.question}</h3>
              <div class="options" id="options-container">
                ${question.options.map((option, index) => `
                  <div class="option" onclick="app.selectAnswer(${index})">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <span>${option}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div id="explanation-container"></div>
            <div id="next-button-container"></div>
          </div>
        </section>
      `;
    }
  },

  // بدء الاختبار
  startTest() {
    this.testStarted = true;
    this.testCompleted = false;
    this.currentQuestion = 0;
    this.score = 0;
    this.selectedAnswers = {};
    this.renderTests();
  },

  // إعادة الاختبار
  restartTest() {
    this.startTest();
  },

  // اختيار الإجابة
  selectAnswer(answerIndex) {
    const question = this.questions[this.currentQuestion];
    const optionsContainer = document.getElementById('options-container');
    const options = optionsContainer.querySelectorAll('.option');

    // تعطيل جميع الخيارات
    options.forEach(opt => opt.style.pointerEvents = 'none');

    // تحديث الخيارات
    options.forEach((opt, index) => {
      if (index === answerIndex) {
        if (index === question.correctAnswer) {
          opt.classList.add('correct');
        } else {
          opt.classList.add('incorrect');
        }
      }
      if (index === question.correctAnswer) {
        opt.classList.add('correct');
      }
    });

    // تحديث النقاط
    if (answerIndex === question.correctAnswer) {
      this.score++;
    }

    // عرض الشرح
    const explanationContainer = document.getElementById('explanation-container');
    explanationContainer.innerHTML = `
      <div class="explanation">
        <strong>الشرح:</strong> ${question.explanation}
      </div>
    `;

    // عرض زر التالي
    const nextButtonContainer = document.getElementById('next-button-container');
    nextButtonContainer.innerHTML = `
      <button class="btn btn-primary btn-lg" onclick="app.nextQuestion()" style="width: 100%; margin-top: 2rem;">
        ${this.currentQuestion === this.questions.length - 1 ? 'انتهى الاختبار' : 'السؤال التالي'}
      </button>
    `;
  },

  // السؤال التالي
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.renderTests();
    } else {
      this.testCompleted = true;
      this.renderTests();
    }
  },

  // البحث
  handleSearch(query) {
    if (query.trim()) {
      // في تطبيق حقيقي، سيتم البحث في جميع المحتوى
      this.loadPage('signals');
    }
  }
};

// بدء التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
