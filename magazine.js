// THE ZOOM MAGAZINE: online reader + future print/digital ordering.
// READ NOW opens the edition PDF in the on-page reader (no forced download).
// BUY PRINT + DOWNLOAD remains disabled until ordering is officially launched.
const NEXT = '2026-11-20';
const EDITIONS = [
  { n: 7, date: 'October 2026', title: 'The Close-Up Issue', pages: 84, online: true, blurb: 'Eighty-four pages of stories told up close: the builders, sellers and players shaping the city.' },
  { n: 6, date: 'September 2026', title: 'Night Shift', pages: 80, online: true },
  { n: 5, date: 'August 2026', title: 'Made Here', pages: 76, online: true },
  { n: 4, date: 'July 2026', title: 'Pitch Perfect', pages: 80, online: true },
  { n: 3, date: 'June 2026', title: 'Pocket Money', pages: 72, online: true },
  { n: 2, date: 'May 2026', title: 'Sound of the City', pages: 68, online: true },
  { n: 1, date: 'April 2026', title: 'First Look', pages: 64, online: true }
];

const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const pdf = i => 'assets/magazine/pdfs/issue-' + pad(i.n) + '.pdf';
const cover = i => `<div class="cover"><img src="assets/images/magazine/covers/issue-${pad(i.n)}.jpg" alt="Cover of Magazine ${pad(i.n)}: ${i.title}" loading="lazy" onerror="this.remove()"></div>`;
const read = i => i.online ? `<button class="btn primary" type="button" data-read="${i.n}">Read now</button>` : '';
const buyComingSoon = () => `<button class="btn" type="button" disabled aria-disabled="true" title="Print and PDF orders are coming soon">Buy print + download <span class="soon-label">· Coming soon</span></button>`;

const latest = EDITIONS[0];
$('latest').innerHTML = cover(latest) + `<div><span class="badge">Latest edition</span><h1>${latest.title}</h1>` +
  `<p class="imeta">Magazine ${pad(latest.n)} · ${latest.date} · ${latest.pages} pages</p><p>${latest.blurb || ''}</p><ul class="opts">` +
  `<li class="opt"><div><b>Read the magazine</b><span>Open the full edition here and read it online</span></div>${read(latest)}</li>` +
  `<li class="opt"><div><b>Print + PDF edition</b><span>Order a printed copy and receive the PDF · Coming soon</span></div>${buyComingSoon()}</li></ul>` +
  `<p class="next" id="next"></p></div>`;

$('shelf').innerHTML = EDITIONS.slice(1).map(i =>
  `<article class="issue">${cover(i)}<h3>Magazine ${pad(i.n)}: ${i.title}</h3><p class="imeta">${i.date} · ${i.pages} pages</p>` +
  `<div class="mini">${read(i)}${buyComingSoon()}</div></article>`).join('');

const nd = new Date(NEXT + 'T00:00:00'), days = Math.ceil((nd - new Date()) / 864e5);
$('next').textContent = days > 0
  ? 'Next edition: ' + nd.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ' (' + days + (days === 1 ? ' day' : ' days') + ' to go)'
  : 'The next edition is due any day now.';
$('year').textContent = new Date().getFullYear();

const viewer = $('viewer');
document.addEventListener('click', e => {
  const readButton = e.target.closest('[data-read]');
  if (!readButton) return;
  const item = EDITIONS.find(x => x.n === Number(readButton.dataset.read));
  if (!item) return;
  const file = pdf(item);
  $('vt').textContent = 'Magazine ' + pad(item.n) + ': ' + item.title;
  $('vo').href = file;
  $('vf').src = file;
  if (typeof viewer.showModal === 'function') viewer.showModal();
  else window.open(file, '_blank', 'noopener');
});

$('vc').addEventListener('click', () => viewer.close());
viewer.addEventListener('close', () => { $('vf').src = 'about:blank'; });
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
