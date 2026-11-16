// THE ZOOM MAGAZINE: digital editions and secure checkout.
// Set each edition's checkoutUrl to its fixed-price Flutterwave Payment Link.
// Create each link for RWF 10,000. Enable Card and Rwanda Mobile Money.
// Paid PDF files must stay in private storage and must NOT be committed to this public repo.
const NEXT = '2026-11-20';
const EDITIONS = [
  { n: 7, date: 'October 2026', title: 'The Close-Up Issue', pages: 84, online: false, price: '10,000 RWF', checkoutUrl: '', blurb: 'Eighty-four pages of stories told up close: the builders, sellers and players shaping the city.' },
  { n: 6, date: 'September 2026', title: 'Night Shift', pages: 80, online: false, price: '10,000 RWF', checkoutUrl: '' },
  { n: 5, date: 'August 2026', title: 'Made Here', pages: 76, online: false, price: '10,000 RWF', checkoutUrl: '' },
  { n: 4, date: 'July 2026', title: 'Pitch Perfect', pages: 80, online: false, price: '10,000 RWF', checkoutUrl: '' },
  { n: 3, date: 'June 2026', title: 'Pocket Money', pages: 72, online: false, price: '10,000 RWF', checkoutUrl: '' },
  { n: 2, date: 'May 2026', title: 'Sound of the City', pages: 68, online: false, price: '10,000 RWF', checkoutUrl: '' },
  { n: 1, date: 'April 2026', title: 'First Look', pages: 64, online: false, price: '10,000 RWF', checkoutUrl: '' }
];

const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const pdf = i => 'assets/magazine/pdfs/issue-' + pad(i.n) + '.pdf';
const cover = i => `<div class="cover"><img src="assets/images/magazine/covers/issue-${pad(i.n)}.jpg" alt="Cover of Magazine ${pad(i.n)}: ${i.title}" loading="lazy" onerror="this.remove()"></div>`;
const buy = (i, label, cls = 'primary') => `<button class="btn ${cls}" type="button" disabled aria-disabled="true" title="Digital purchases are coming soon">Coming soon</button>`;
const read = (i, label) => i.online ? `<button class="btn" data-read="${i.n}">${label}</button>` : '';

const latest = EDITIONS[0];
$('latest').innerHTML = cover(latest) + `<div><span class="badge">Latest edition</span><h1>${latest.title}</h1>` +
  `<p class="imeta">Magazine ${pad(latest.n)} · ${latest.date} · ${latest.pages} pages</p><p>${latest.blurb || ''}</p><ul class="opts">` +
  (latest.online ? `<li class="opt"><div><b>Read online</b><span>Open the PDF in your browser</span></div>${read(latest, 'Read now')}</li>` : '') +
  `<li class="opt"><div><b>Digital edition</b><span>${latest.price} · PDF delivered by email after payment confirmation</span></div>${buy(latest, 'Buy digital')}</li></ul>` +
  `<p class="next" id="next"></p></div>`;

$('shelf').innerHTML = EDITIONS.slice(1).map(i =>
  `<article class="issue">${cover(i)}<h3>Magazine ${pad(i.n)}: ${i.title}</h3><p class="imeta">${i.date}</p>` +
  `<div class="mini">${read(i, 'Read')}${buy(i, 'Buy ' + i.price, '')}</div></article>`).join('');

const nd = new Date(NEXT + 'T00:00:00'), days = Math.ceil((nd - new Date()) / 864e5);
$('next').textContent = days > 0
  ? 'Next edition: ' + nd.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ' (' + days + (days === 1 ? ' day' : ' days') + ' to go)'
  : 'The next edition is due any day now.';
$('year').textContent = new Date().getFullYear();

const viewer = $('viewer');
let selected = null;
document.addEventListener('click', e => {
  const readButton = e.target.closest('[data-read]');
  if (!readButton) return;
  const item = EDITIONS.find(x => x.n === +readButton.dataset.read);
  $('vt').textContent = 'Magazine ' + pad(item.n) + ': ' + item.title;
  $('vo').href = pdf(item); $('vf').src = pdf(item); viewer.showModal();
});
$('vc').addEventListener('click', () => viewer.close());
$('oc').addEventListener('click', () => order.close());
viewer.addEventListener('close', () => { $('vf').src = 'about:blank'; });
[viewer, order].forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));
