// Order requests open in the visitor's email app, using the email address set in config.js.
// To take payments, paste a payment link into du (digital) or pu (print) and the button goes straight to checkout.
const TO = SITE.email;
const NEXT = '2026-11-20'; // date of the next issue
const I = [
  { n: 7, date: 'October 2026', title: 'The Close-Up Issue', pages: 84, online: true, dp: '$4.99', du: '', pp: '$14.00', pu: '', blurb: 'Eighty-four pages of stories told up close: the builders, sellers and players shaping the city.' },
  { n: 6, date: 'September 2026', title: 'Night Shift', pages: 80, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' },
  { n: 5, date: 'August 2026', title: 'Made Here', pages: 76, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' },
  { n: 4, date: 'July 2026', title: 'Pitch Perfect', pages: 80, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' },
  { n: 3, date: 'June 2026', title: 'Pocket Money', pages: 72, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' },
  { n: 2, date: 'May 2026', title: 'Sound of the City', pages: 68, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' },
  { n: 1, date: 'April 2026', title: 'First Look', pages: 64, online: true, dp: '$3.99', du: '', pp: '$12.00', pu: '' }
];

const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const pdf = i => 'issues/issue-' + pad(i.n) + '.pdf';
const cover = i => `<div class="cover"><img src="images/issue-${pad(i.n)}.jpg" alt="Cover of Issue ${pad(i.n)}: ${i.title}" onerror="this.remove()"></div>`;
const act = (i, k, label, cls) => {
  const url = k === 'd' ? i.du : i.pu;
  return url ? `<a class="btn ${cls}" href="${url}" target="_blank" rel="noopener">${label}</a>`
             : `<button class="btn ${cls}" data-act="${k}" data-n="${i.n}">${label}</button>`;
};
const read = (i, label) => i.online ? `<button class="btn" data-act="read" data-n="${i.n}">${label}</button>` : '';

const L = I[0];
$('latest').innerHTML = cover(L) + `<div><span class="badge">Latest issue</span><h1>${L.title}</h1>` +
  `<p class="imeta">Issue ${pad(L.n)} · ${L.date} · ${L.pages} pages</p><p>${L.blurb}</p><ul class="opts">` +
  (L.online ? `<li class="opt"><div><b>Read online</b><span>Free in your browser</span></div>${read(L, 'Read now')}</li>` : '') +
  `<li class="opt"><div><b>Digital copy</b><span>${L.dp} · PDF download</span></div>${act(L, 'd', 'Buy digital', 'primary')}</li>` +
  `<li class="opt"><div><b>Print edition</b><span>${L.pp} + shipping</span></div>${act(L, 'p', 'Order print', '')}</li></ul>` +
  `<p class="next" id="next"></p></div>`;

$('shelf').innerHTML = I.slice(1).map(i =>
  `<article class="issue">${cover(i)}<h3>${i.title}</h3><p class="imeta">Issue ${pad(i.n)} · ${i.date}</p>` +
  `<div class="mini">${read(i, 'Read')}${act(i, 'd', 'Digital ' + i.dp, '')}${act(i, 'p', 'Print ' + i.pp, '')}</div></article>`).join('');

const nd = new Date(NEXT + 'T00:00:00'), days = Math.ceil((nd - new Date()) / 864e5);
$('next').textContent = days > 0
  ? 'Next issue: ' + nd.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ' (' + days + (days === 1 ? ' day' : ' days') + ' to go)'
  : 'The next issue is due any day now.';
$('year').textContent = new Date().getFullYear();

const viewer = $('viewer'), order = $('order');
let cur = null;
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  const i = I.find(x => x.n === +b.dataset.n), a = b.dataset.act;
  if (a === 'read') {
    $('vt').textContent = 'Issue ' + pad(i.n) + ': ' + i.title;
    $('vo').href = pdf(i); $('vf').src = pdf(i); viewer.showModal();
  } else {
    cur = { i, print: a === 'p' };
    $('ot').textContent = cur.print ? 'Order the print edition' : 'Buy the digital copy';
    $('os').textContent = 'Issue ' + pad(i.n) + ': ' + i.title + ' · ' + (cur.print ? i.pp + ' + shipping' : i.dp);
    document.querySelectorAll('[data-print]').forEach(f => { f.hidden = !cur.print; });
    $('onote').textContent = '';
    order.showModal();
  }
});
$('vc').addEventListener('click', () => viewer.close());
$('oc').addEventListener('click', () => order.close());
viewer.addEventListener('close', () => { $('vf').src = 'about:blank'; });
[viewer, order].forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));

$('oform').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('oname').value.trim(), email = $('oemail').value.trim(), addr = $('oaddr').value.trim(), qty = $('oqty').value || 1;
  let err = '';
  if (!name) err = 'Please enter your name.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err = 'Enter a valid email address, like name@example.com.';
  else if (cur.print && addr.length < 8) err = 'Enter the delivery address for your print copy.';
  $('onote').textContent = err || 'Opening your email app to send the order request.';
  if (err) return;
  const i = cur.i, fmt = cur.print ? 'Print edition' : 'Digital copy';
  const lines = ['Issue: ' + pad(i.n) + ' ' + i.title, 'Format: ' + fmt, 'Price: ' + (cur.print ? i.pp + ' + shipping' : i.dp)];
  if (cur.print) lines.push('Copies: ' + qty, 'Delivery address: ' + addr);
  lines.push('Name: ' + name, 'Email: ' + email);
  location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('The Zoom order: Issue ' + pad(i.n) + ' (' + fmt + ')') + '&body=' + encodeURIComponent(lines.join('\n'));
});
