(function () {
  var root = document.documentElement, KEY = 'zoomTheme', saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  function apply() {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    var b = document.getElementById('theme'), m = document.querySelector('meta[name=theme-color]');
    if (b) b.setAttribute('aria-checked', dark);
    if (m) m.content = dark ? '#0b1220' : '#2540ff';
  }
  apply();
  document.addEventListener('DOMContentLoaded', function () {
    apply();
    var b = document.getElementById('theme');
    if (b) b.addEventListener('click', function () {
      dark = !dark; apply();
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
    });
  });
})();
