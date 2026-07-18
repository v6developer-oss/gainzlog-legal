// Language toggle for GainzLog legal pages.
// EN is the base default. Order: ?lang= / #ru|#en / saved choice / EN.
(function () {
  function apply(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    }
    try { localStorage.setItem('gz-lang', lang); } catch (e) {}
  }

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ru' || q === 'en') return q;
    var h = (location.hash || '').replace('#', '');
    if (h === 'ru' || h === 'en') return h;
    var saved;
    try { saved = localStorage.getItem('gz-lang'); } catch (e) {}
    if (saved === 'ru' || saved === 'en') return saved;
    return 'en';
  }

  apply(pick());

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-lang-btn]') : null;
    if (btn) { e.preventDefault(); apply(btn.getAttribute('data-lang-btn')); }
  });
})();
