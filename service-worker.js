const CACHE_NAME = 'driving-school-dz-v8';
const OFFLINE_PAGE = './offline.html';
const PRECACHE_URLS = [
  './',
  './index.html', './signals.html', './warning-signs.html', './prohibition-signs.html', './mandatory-signs.html', './information-signs.html',
  './rules.html', './safety.html', './quiz.html', './quiz-warning.html', './quiz-prohibition.html', './quiz-mandatory.html', './quiz-information.html',
  './exam-simulation.html', './faq-road-law.html', './about.html', './contact.html', './privacy.html', './disclaimer.html', './sources.html', './offline.html',
  './css/style.css', './js/site.js', './js/site-tags.js', './assets/favicon.svg', './assets/icon-192.png', './assets/icon-512.png', './assets/social-cover.png',
  './assets/images/algerian-stop-sign.jpg', './assets/images/rules-driving-hero.webp', './assets/images/safety-driving-hero.webp',
  './assets/signs/algeria-road-sign-e1.svg', './assets/signs/warning-a1a.svg', './assets/signs/regulatory-c11a-50.svg', './assets/signs/regulatory-d1a.svg',
  './assets/illustrations/rules-distance.svg', './assets/illustrations/rules-focus.svg', './assets/illustrations/rules-lane.svg', './assets/illustrations/rules-night.svg',
  './assets/illustrations/rules-pedestrian.svg', './assets/illustrations/rules-ready.svg', './assets/illustrations/rules-seatbelt.svg', './assets/illustrations/rules-speed.svg',
  './assets/illustrations/safety-before.svg', './assets/illustrations/safety-defensive.svg', './assets/illustrations/safety-fatigue.svg', './assets/illustrations/safety-highway.svg', './assets/illustrations/safety-night.svg', './assets/illustrations/safety-rain.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return response;
    }).catch(async () => (await caches.match(request)) || (await caches.match(OFFLINE_PAGE))));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
    if (!response || response.status !== 200 || response.type !== 'basic') return response;
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    return response;
  })));
});
