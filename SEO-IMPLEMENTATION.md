# ملاحظات تنفيذ SEO

يعتمد الموقع صفحات HTML ثابتة ذات محتوى فريد، وعنوان ووصف ووسم canonical ذاتي لكل صفحة. توصي Google باستعمال روابط canonical كاملة ومطلقة داخل قسم `head`، ويستعمل الموقع هذا النهج لكل عنوان قابل للفهرسة [1].

سيُنشأ ملف `sitemap.xml` في جذر الموقع ويضم الروابط الأساسية المطلقة للصفحات التي يراد ظهورها في نتائج البحث. تذكر Google أن ملف XML في الجذر يجب أن يستخدم UTF-8 وروابط كاملة، وأنه ينبغي أن يتضمن العناوين المراد ظهورها في البحث [2]. كما سيشير `robots.txt` إلى خريطة الموقع.

تستخدم القوالب JSON-LD من Schema.org يصف المؤسسة التعليمية ومحتوى الصفحة. توصي Google بـ JSON-LD عندما يسمح إعداد الموقع بذلك، مع ضرورة أن يصف الترميز محتوى ظاهراً للمستخدم وأن تكون البيانات دقيقة وكاملة [3].

## المراجع

[1] [Google Search Central — تحديد الرابط الأساسي](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

[2] [Google Search Central — إنشاء وإرسال Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

[3] [Google Search Central — مقدمة البيانات المنظمة](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
