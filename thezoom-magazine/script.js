const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const A = [
  { id: 1, img: 'images/story-1.jpg', alt: 'Learners sharing laptops at a weekend coding meetup', cat: 'Tech', m: 6, t: 'The city that taught itself to code', d: 'Study groups, shared laptops and weekend hackathons are turning curious beginners into builders.', c: ['#2540ff', '#0b1426', '#ffd23f'],
    b: ['It starts in a borrowed room with one power strip: ten people, three laptops and a very patient mentor.', 'Weeks later the first small apps appear, from a bus timetable to a market price tracker.'] },
  { id: 2, img: 'images/story-2.jpg', alt: 'A shop owner photographing products to sell online', cat: 'Business', m: 5, t: 'Small shops, big ambitions', d: 'Neighbourhood sellers are using phones, good photos and word of mouth to reach customers far from home.', c: ['#ff7a59', '#7a1f5c', '#ffd23f'],
    b: ['A clear photo and a fast reply do more than a big budget. That is the lesson many new sellers learn first.', 'The next step is trust: reviews, reliable delivery and a story people want to share.'] },
  { id: 3, img: 'images/story-3.jpg', alt: 'A colourful street mural at dusk', cat: 'Culture', m: 4, t: 'Murals, markets and a skyline in motion', d: 'A walk through the places where the city shows its colour after dark.', c: ['#8f3bff', '#12102b', '#ff3d7f'],
    b: ['Evening is when the streets change character: lights come on, stalls open and the music gets louder.', 'Follow the murals and you will find the people who painted them, usually nearby and happy to talk.'] },
  { id: 4, img: 'images/story-4.jpg', alt: 'Young players on a neighbourhood football pitch', cat: 'Sport', m: 5, t: 'Every weekend pitch is a talent pipeline', d: 'Local leagues, school teams and neighbourhood coaches are shaping the next generation of players.', c: ['#1fbf75', '#0b3d2e', '#ffd23f'],
    b: ['The best scouts rarely sit in stadiums. They stand on the touchline of a muddy pitch on a Saturday morning.', 'Good coaching is patient, simple and consistent, and it shows in how the youngest players move.'] },
  { id: 5, img: 'images/story-5.jpg', alt: 'Paying with a phone at a market stall', cat: 'Tech', m: 4, t: 'Pocket-sized money: how mobile payments changed daily life', d: 'From market stalls to taxi rides, paying with a phone has become the quiet default.', c: ['#2de2c4', '#0b1426', '#2540ff'],
    b: ['Paying with a phone is faster than counting change, and it leaves a record that makes budgeting easier.', 'Small businesses benefit most, because every sale becomes data they can learn from.'] },
  { id: 6, img: 'images/story-6.jpg', alt: 'Headphones and a mug by a window at sunrise', cat: 'Culture', m: 3, t: 'Playlists that sound like the city at dawn', d: 'Six moods, six soundtracks, and the early-morning routines that go with them.', c: ['#ffd23f', '#ff7a59', '#2540ff'],
    b: ['Mornings have their own sound: a kettle, a radio, a street waking up slowly.', 'Build a playlist around that feeling and the commute becomes the best part of the day.'] },
  { id: 7, img: 'images/story-7.jpg', alt: 'A freelancer at a laptop with an invoice', cat: 'Business', m: 5, t: 'The freelancer’s guide to getting paid on time', d: 'Clear terms, friendly reminders and a simple invoice go a long way.', c: ['#0b1426', '#2540ff', '#2de2c4'],
    b: ['Agree the price, the deadline and the payment date in writing before any work starts.', 'Send invoices the same day, remind politely, and keep every message in one place.'] }
];

const grid = $('#grid'), count = $('#count'), search = $('#q');
let cat = 'All', query = '';
const matches = a => (cat === 'All' || a.cat === cat) && (a.t + ' ' + a.d + ' ' + a.cat + ' ' + a.b.join(' ')).toLowerCase().includes(query);
const photo = a => `<img src="${a.img}" alt="${a.alt}" loading="lazy" onerror="this.remove()">`;
function render() {
  const list = A.filter(matches);
  grid.innerHTML = list.length ? list.map((a, i) =>
    `<article class="card${i === 0 ? ' feat' : ''}"><div class="art" style="--a:${a.c[0]};--b:${a.c[1]};--c:${a.c[2]}"><i></i>${photo(a)}</div>` +
    `<div class="meta"><span class="cat">${a.cat}</span><span>${a.m} min read</span></div>` +
    `<h3><a href="#story-${a.id}" data-id="${a.id}">${a.t}</a></h3><p>${a.d}</p></article>`).join('')
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

const reader = $('#reader');
grid.addEventListener('click', e => {
  const a = e.target.closest('a[data-id]');
  if (!a) return;
  e.preventDefault();
  const s = A.find(x => x.id === +a.dataset.id);
  const art = $('#rart');
  art.style.setProperty('--a', s.c[0]); art.style.setProperty('--b', s.c[1]); art.style.setProperty('--c', s.c[2]);
  art.innerHTML = '<i></i>' + photo(s);
  $('#rc').textContent = s.cat; $('#rm').textContent = s.m + ' min read'; $('#rt').textContent = s.t;
  $('#rb').innerHTML = '<p><strong>' + s.d + '</strong></p>' + s.b.map(p => '<p>' + p + '</p>').join('');
  reader.showModal(); reader.scrollTop = 0;
});
$('#close').addEventListener('click', () => reader.close());
reader.addEventListener('click', e => { if (e.target === reader) reader.close(); });

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

// newsletter (front-end only: connect a form service to collect emails)
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#email').value.trim(), ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  $('#note').textContent = ok ? 'Thanks! You’re on the list for the next issue.' : 'Enter a valid email address, like name@example.com.';
  if (ok) e.target.reset();
});
$('#year').textContent = new Date().getFullYear();
