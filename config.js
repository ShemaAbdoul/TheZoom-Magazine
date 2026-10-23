// THE ZOOM: site settings. Change the values below, then upload this file to GitHub.
const SITE = {
  email: 'hello@thezoom.example', // where contact messages, orders and subscriptions are sent
  subscribeUrl: ''                // optional: the address from a form service (for example Formspree) that collects subscribers
};

// ---- You don't need to edit anything below this line ----
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Used by every subscribe form on the site.
async function subscribe(email) {
  if (SITE.subscribeUrl) {
    try {
      const r = await fetch(SITE.subscribeUrl, { method: 'POST', headers: { Accept: 'application/json' }, body: new URLSearchParams({ email }) });
      if (r.ok) return { ok: true, msg: 'Thanks! You’re on the list for the next issue.' };
    } catch (e) {}
    return { ok: false, msg: 'Something went wrong. Please try again in a moment.' };
  }
  location.href = 'mailto:' + SITE.email + '?subject=' + encodeURIComponent('Subscribe me to The Zoom') +
    '&body=' + encodeURIComponent('Please add this address to the newsletter: ' + email);
  return { ok: true, msg: 'Opening your email app. Send the message to finish subscribing.' };
}
