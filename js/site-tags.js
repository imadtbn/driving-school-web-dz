/*
 * محمّل الوسوم المركزي — دليل السياقة DZ
 * املأ GTM أو GA4 وClarity عند توفرها. عند تهيئة GA4 وClarity داخل GTM،
 * اترك حقليهما فارغين حتى لا يُرسل القياس مرتين.
 */
(() => {
  'use strict';

  const CONFIG = Object.freeze({
    gtmId: '',
    ga4Id: '',
    clarityId: '',
    adsenseClient: 'ca-pub-5656416032906373',
    adSlots: {
      'feed-01': { slot: '7867079394', format: 'fluid', layoutKey: '-fr+56+4k-d4+74' },
      'display-01': { slot: '3143411927', format: 'auto', responsive: true },
      'feed-02': { slot: '8546947691', format: 'fluid', layoutKey: '-h9-h+8-jr+r8' },
      'display-02': { slot: '1760836049', format: 'auto', responsive: true },
      'feed-03': { slot: '6152718642', format: 'fluid', layoutKey: '-h6-l+d-jc+qd' },
      'display-03': { slot: '5508509362', format: 'auto', responsive: true },
      'article-01': { slot: '6118497380', format: 'fluid', layout: 'in-article' },
      'article-02': { slot: '7319898418', format: 'fluid', layout: 'in-article' },
      'related-01': { slot: '6528123169', format: 'autorelaxed' }
    }
  });

  const state = window.__drivingSchoolTags = window.__drivingSchoolTags || {};
  const valid = {
    gtm: (value) => /^GTM-[A-Z0-9]+$/i.test(value || ''),
    ga4: (value) => /^G-[A-Z0-9]+$/i.test(value || ''),
    clarity: (value) => /^[a-z0-9]{6,}$/i.test(value || ''),
    adsense: (value) => /^ca-pub-\d+$/i.test(value || '')
  };

  function loadExternalScript(id, src) {
    if (state[id] || document.getElementById(id)) return document.getElementById(id);
    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    state[id] = true;
    return script;
  }

  function initGtm() {
    if (!valid.gtm(CONFIG.gtmId) || state.gtmStarted) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadExternalScript('site-gtm', `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(CONFIG.gtmId)}`);
    state.gtmStarted = true;
  }

  function initGa4() {
    // لا نحمل GA4 مباشرة عندما توجد حاوية GTM؛ GTM هو المسار الوحيد حينئذ.
    if (valid.gtm(CONFIG.gtmId) || !valid.ga4(CONFIG.ga4Id) || state.ga4Started) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', CONFIG.ga4Id, { anonymize_ip: true });
    loadExternalScript('site-ga4', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(CONFIG.ga4Id)}`);
    state.ga4Started = true;
  }

  function initClarity() {
    if (!valid.clarity(CONFIG.clarityId) || state.clarityStarted) return;
    loadExternalScript('site-clarity', `https://www.clarity.ms/tag/${encodeURIComponent(CONFIG.clarityId)}`);
    state.clarityStarted = true;
  }

  function configureAdUnit(unit) {
    const key = unit.dataset.adsenseSlot;
    const slot = CONFIG.adSlots[key];
    if (!slot || unit.dataset.siteAdConfigured === 'true') return false;
    unit.setAttribute('data-ad-client', CONFIG.adsenseClient);
    unit.setAttribute('data-ad-slot', slot.slot);
    unit.setAttribute('data-ad-format', slot.format);
    if (slot.layoutKey) unit.setAttribute('data-ad-layout-key', slot.layoutKey);
    if (slot.layout) unit.setAttribute('data-ad-layout', slot.layout);
    if (slot.responsive) unit.setAttribute('data-full-width-responsive', 'true');
    unit.dataset.siteAdConfigured = 'true';
    return true;
  }

  function initAdsense() {
    const units = [...document.querySelectorAll('ins.adsbygoogle[data-adsense-slot]')];
    if (!valid.adsense(CONFIG.adsenseClient) || !units.length) return;
    const configuredUnits = units.filter(configureAdUnit);
    if (!configuredUnits.length) return;
    const script = loadExternalScript(
      'site-adsense',
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(CONFIG.adsenseClient)}`
    );
    const initialize = () => configuredUnits.forEach((unit) => {
      if (unit.dataset.siteAdInitialized === 'true') return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        unit.dataset.siteAdInitialized = 'true';
      } catch (error) {
        // لا نسمح لفشل إعلان واحد بتعطيل محتوى الصفحة أو تفاعلها.
        console.warn('تعذر تهيئة وحدة إعلان في هذه الصفحة.', error);
      }
    });
    if (window.adsbygoogle) initialize();
    else script.addEventListener('load', initialize, { once: true });
  }

  function init() {
    initGtm();
    initGa4();
    initClarity();
    initAdsense();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
