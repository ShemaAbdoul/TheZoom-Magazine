const $ = id => document.getElementById(id);
const LIST = window.STORY_LIST || STORIES, BASE = window.STORY_BASE || 'story.html', BACK = window.STORY_BACK || ['index.html#stories', '← All stories'];
const fmt = d => new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const para = p => p.startsWith('## ') ? '<h2>' + p.slice(3) + '</h2>' : p.startsWith('> ') ? '<blockquote>' + p.slice(2) + '</blockquote>' : '<p>' + p + '</p>';
const sid = +new URLSearchParams(location.search).get('id');
const s = LIST.find(x => x.id === sid);
$('year').textContent = new Date().getFullYear();

if (!s) {
  document.title = 'Story not found | The Zoom Magazine';
  $('story').innerHTML = '<a class="back" href="' + BACK[0] + '">' + BACK[1] + '</a><h1>Story not found</h1><p class="dek">That story may have moved. Head back to the latest stories.</p>';
} else {
  document.title = s.title + ' | The Zoom Magazine';
  const md = document.querySelector('meta[name=description]');
  if (md) md.content = s.dek;
  $('story').innerHTML = '<a class="back" href="' + BACK[0] + '">' + BACK[1] + '</a>' +
    `<div class="meta"><span class="cat">${s.cat}</span><span>${fmt(s.date)}</span><span>${s.mins} min read</span></div>` +
    `<h1>${s.title}</h1><p class="dek">${s.dek}</p><p class="byline">By ${s.author}</p>` +
    `<div class="art wideimg" style="--a:${s.colors[0]};--b:${s.colors[1]};--c:${s.colors[2]}"><i></i>${photoTag(s)}</div>` +
    `<div class="prose">${s.body.map(para).join('')}</div>` +
    '<div class="share"><span>Share this story</span><button class="btn" id="copy" type="button">Copy link</button><a class="btn" id="wa" target="_blank" rel="noopener">WhatsApp</a></div>';
  $('wa').href = 'https://wa.me/?text=' + encodeURIComponent(s.title + ' ' + location.href);
  $('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(location.href); $('copy').textContent = 'Link copied'; }
    catch (e) { $('copy').textContent = 'Copy failed'; }
    setTimeout(() => { $('copy').textContent = 'Copy link'; }, 2000);
  });
  const rel = LIST.filter(x => x.id !== s.id).sort((a, b) => (b.cat === s.cat) - (a.cat === s.cat)).slice(0, 3);
  $('related').innerHTML = rel.map(a => storyCard(a, false, BASE)).join('');
  $('more').hidden = false;
}

// reading progress bar and the subscribe pop-up that appears as the reader scrolls down
const bar = $('bar'), pop = $('pop');
let shown = false, seen = false;
try { seen = !!(sessionStorage.getItem('zoomPop') || localStorage.getItem('zoomSubscribed')); } catch (e) {}
function closePop() {
  pop.classList.remove('show');
  setTimeout(() => { pop.hidden = true; }, 350);
  try { sessionStorage.setItem('zoomPop', '1'); } catch (e) {}
}
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight, p = max > 0 ? scrollY / max : 0;
  bar.style.transform = 'scaleX(' + p + ')';
  if (s && !seen && !shown && p > 0.35) {
    shown = true; pop.hidden = false;
    requestAnimationFrame(() => pop.classList.add('show'));
  }
}, { passive: true });
$('pclose').addEventListener('click', closePop);
addEventListener('keydown', e => { if (e.key === 'Escape' && !pop.hidden) closePop(); });
$('pform').addEventListener('submit', async e => {
  e.preventDefault();
  const v = $('pemail').value.trim();
  if (!isEmail(v)) { $('pnote').textContent = 'Enter a valid email address, like name@example.com.'; return; }
  const r = await subscribe(v);
  $('pnote').textContent = r.msg;
  if (r.ok) {
    try { localStorage.setItem('zoomSubscribed', '1'); } catch (x) {}
    setTimeout(closePop, 3500);
  }
});
