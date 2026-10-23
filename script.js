const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const grid = $('#grid'), count = $('#count'), search = $('#q');
let cat = 'All', query = '';
const matches = a => (cat === 'All' || a.cat === cat) && (a.title + ' ' + a.dek + ' ' + a.cat + ' ' + a.body.join(' ')).toLowerCase().includes(query);
function render() {
  const list = STORIES.filter(matches);
  grid.innerHTML = list.length ? list.map((a, i) => storyCard(a, i === 0)).join('')
    : '<p class="empty">No stories match your search. Try another word or topic.</p>';
  count.textContent = list.length + (list.length === 1 ? ' story' : ' stories');
}
render();

document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(b => b.setAttribute('aria-pressed', b === btn));
  grid.classList.add('swap');
  setTimeout(() => { cat = btn.dataset.f; render(); grid.classList.remove('swap'); }, reduce ? 0 : 180);
}));
search.addEventListener('input', () => { query = search.value.trim().toLowerCase(); render(); });
addEventListener('keydown', e => {
  if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { e.preventDefault(); search.focus(); }
});

// most read: ranked by the "reads" number in stories.js
$('#top').innerHTML = [...STORIES].sort((a, b) => b.reads - a.reads).slice(0, 4).map((a, i) =>
  `<li><a href="story.html?id=${a.id}"><b>${String(i + 1).padStart(2, '0')}</b><span class="cat">${a.cat}</span><strong>${a.title}</strong></a></li>`).join('');

// header hides on scroll down, progress bar follows the page
const head = $('#head'), bar = $('#bar');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  head.classList.toggle('hide', y > lastY && y > 120);
  bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
  lastY = y;
}, { passive: true });

// the zoom lens in the hero
const hero = $('#hero');
let tx = 0, ty = 0, x = 0, y = 0, r = 0, tr = 0, active = false;
hero.addEventListener('pointermove', e => {
  const b = hero.getBoundingClientRect();
  tx = e.clientX - b.left; ty = e.clientY - b.top; tr = Math.min(150, Math.max(90, b.width * 0.14));
  active = true; $('#hint').classList.add('gone');
});
hero.addEventListener('pointerleave', () => { active = false; });
function frame(t) {
  const b = hero.getBoundingClientRect();
  if (b.bottom > 0 && b.top < innerHeight) {
    if (!active) {
      if (reduce) tr = 0;
      else { tx = b.width * (0.5 + 0.3 * Math.sin(t / 1800)); ty = b.height * (0.5 + 0.22 * Math.sin(t / 1300)); tr = Math.min(130, b.width * 0.14); }
    }
    const k = reduce ? 1 : 0.12;
    x += (tx - x) * k; y += (ty - y) * k; r += (tr - r) * k;
    hero.style.setProperty('--x', x + 'px'); hero.style.setProperty('--y', y + 'px'); hero.style.setProperty('--r', r + 'px');
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// newsletter
$('#form').addEventListener('submit', async e => {
  e.preventDefault();
  const v = $('#email').value.trim();
  if (!isEmail(v)) { $('#note').textContent = 'Enter a valid email address, like name@example.com.'; return; }
  const res = await subscribe(v);
  $('#note').textContent = res.msg;
  if (res.ok) e.target.reset();
});
$('#year').textContent = new Date().getFullYear();
