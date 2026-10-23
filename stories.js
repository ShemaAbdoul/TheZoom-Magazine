// THE ZOOM: all stories live here. Edit a story, add a new one, or delete one.
// Each story is one block between { and }. Keep the commas between blocks.
//   id      a unique number (the story link is story.html?id=NUMBER)
//   cat     Tech, Business, Culture or Sport
//   img     the thumbnail and top picture, saved in the images folder (best size: 1600 x 900 pixels)
//   colors  three colours shown if the picture is missing
//   reads   a number used to rank the "Most read" list (higher = higher up)
//   body    the story text, one paragraph per line.
//           Start a line with ## for a sub-heading, or > for a highlighted quote.
const STORIES = [
  {
    id: 1, cat: 'Tech', title: 'The city that taught itself to code',
    dek: 'Study groups, shared laptops and weekend hackathons are turning curious beginners into builders.',
    author: 'The Zoom Team', date: '2026-10-20', mins: 6, reads: 980,
    img: 'images/story-1.jpg', alt: 'Learners sharing laptops at a weekend coding meetup', colors: ['#2540ff', '#0b1426', '#ffd23f'],
    body: [
      'It starts in a borrowed room with a single power strip. Ten people, three laptops and one very patient mentor gather every Saturday, and nobody leaves until the first page loads.',
      '## From first lines to first users',
      'Weeks later the first small apps appear: a bus timetable, a market price tracker, a tool for tidying class notes. None of them are perfect. All of them are used by real people, and that changes how the builders think.',
      '> Nobody here waits for permission to build something useful.',
      'The lesson is simple. Start small, share early and keep a list of what people ask for next. The groups that last are the ones that treat every Saturday like a launch day.'
    ]
  },
  {
    id: 2, cat: 'Business', title: 'Small shops, big ambitions',
    dek: 'Neighbourhood sellers are using phones, good photos and word of mouth to reach customers far from home.',
    author: 'The Zoom Team', date: '2026-10-18', mins: 5, reads: 640,
    img: 'images/story-2.jpg', alt: 'A shop owner photographing products to sell online', colors: ['#ff7a59', '#7a1f5c', '#ffd23f'],
    body: [
      'A clear photo and a fast reply do more than a big budget. That is the first lesson most new online sellers learn, usually after losing a sale to a blurry picture.',
      '## Trust is the product',
      'Customers far from home cannot touch what they are buying, so sellers earn trust in other ways: honest descriptions, reliable delivery and a story people want to share. Reviews matter, but so does answering the same question patiently for the tenth time.',
      'The next step for many shops is a simple routine. Photograph new stock on Monday, post on Tuesday, deliver by Friday. Small habits, repeated, turn a side project into a business.'
    ]
  },
  {
    id: 3, cat: 'Culture', title: 'Murals, markets and a skyline in motion',
    dek: 'A walk through the places where the city shows its colour after dark.',
    author: 'The Zoom Team', date: '2026-10-15', mins: 4, reads: 410,
    img: 'images/story-3.jpg', alt: 'A colourful street mural at dusk', colors: ['#8f3bff', '#12102b', '#ff3d7f'],
    body: [
      'Evening is when the streets change character. Lights come on, stalls open and the music gets louder, one speaker at a time.',
      '## Follow the colour',
      'Start at a mural and you will usually find the people who painted it nearby, happy to explain a detail you would have missed. Every wall has a story, and most of them are about the neighbourhood itself.',
      '> A city is a conversation, and the walls are where it gets written down.',
      'Take a slow walk, bring a friend and leave room to be surprised. The best stop is rarely the one on the map.'
    ]
  },
  {
    id: 4, cat: 'Sport', title: 'Every weekend pitch is a talent pipeline',
    dek: 'Local leagues, school teams and neighbourhood coaches are shaping the next generation of players.',
    author: 'The Zoom Team', date: '2026-10-12', mins: 5, reads: 520,
    img: 'images/story-4.jpg', alt: 'Young players on a neighbourhood football pitch', colors: ['#1fbf75', '#0b3d2e', '#ffd23f'],
    body: [
      'The best scouts rarely sit in stadiums. They stand on the touchline of a muddy pitch on a Saturday morning, notebook in hand.',
      '## Coaches make the difference',
      'Good coaching is patient, simple and consistent, and it shows in how the youngest players move. A coach who teaches a first touch well gives a child something that lasts for years.',
      'Local leagues carry more of the load than most people realise. They supply the pitches, the referees, the oranges at half time and, every so often, a player who goes on to surprise everyone.'
    ]
  },
  {
    id: 5, cat: 'Tech', title: 'Pocket-sized money: how mobile payments changed daily life',
    dek: 'From market stalls to taxi rides, paying with a phone has become the quiet default.',
    author: 'The Zoom Team', date: '2026-10-09', mins: 4, reads: 870,
    img: 'images/story-5.jpg', alt: 'Paying with a phone at a market stall', colors: ['#2de2c4', '#0b1426', '#2540ff'],
    body: [
      'Paying with a phone is faster than counting change, and it leaves a record that makes budgeting easier. For many people it quietly became the default.',
      '## A record of every sale',
      'Small businesses benefit most, because every sale becomes data they can learn from: the busiest hour, the best-selling item, the regular customers worth thanking.',
      'The challenge now is confidence. People want clear receipts, quick refunds and someone to call when something goes wrong. The services that win will be the ones that answer the phone.'
    ]
  },
  {
    id: 6, cat: 'Culture', title: 'Playlists that sound like the city at dawn',
    dek: 'Six moods, six soundtracks, and the early-morning routines that go with them.',
    author: 'The Zoom Team', date: '2026-10-05', mins: 3, reads: 300,
    img: 'images/story-6.jpg', alt: 'Headphones and a mug by a window at sunrise', colors: ['#ffd23f', '#ff7a59', '#2540ff'],
    body: [
      'Mornings have their own sound: a kettle, a radio, a street waking up slowly.',
      '## Six moods, six playlists',
      'There is the slow start, the busy commute, the focused desk, the walk home, the late kitchen and the quiet before sleep. Each one needs a different tempo, and each one improves when you choose the songs yourself.',
      'Build a playlist around the feeling, not the genre, and the commute becomes the best part of the day. Share it with a friend and see what they add.'
    ]
  },
  {
    id: 7, cat: 'Business', title: 'The freelancer’s guide to getting paid on time',
    dek: 'Clear terms, friendly reminders and a simple invoice go a long way.',
    author: 'The Zoom Team', date: '2026-10-01', mins: 5, reads: 720,
    img: 'images/story-7.jpg', alt: 'A freelancer at a laptop with an invoice', colors: ['#0b1426', '#2540ff', '#2de2c4'],
    body: [
      'Most late payments start with a vague agreement. Fix that first and the rest gets easier.',
      '## Before the work starts',
      'Agree the price, the deadline and the payment date in writing. Say what happens if the scope changes. A short message is enough, as long as both sides can find it later.',
      '## After the work is done',
      'Send the invoice the same day, remind politely before the due date, and keep every message in one place. If a client goes quiet, a friendly follow-up usually works better than an angry one.'
    ]
  }
];

// ---- You don't need to edit anything below this line ----
const photoTag = a => `<img src="${a.img}" alt="${a.alt}" loading="lazy" onerror="this.remove()">`;
const storyCard = (a, feat) =>
  `<article class="card${feat ? ' feat' : ''}"><div class="art" style="--a:${a.colors[0]};--b:${a.colors[1]};--c:${a.colors[2]}"><i></i>${photoTag(a)}</div>` +
  `<div class="meta"><span class="cat">${a.cat}</span><span>${a.mins} min read</span></div>` +
  `<h3><a href="story.html?id=${a.id}">${a.title}</a></h3><p>${a.dek}</p></article>`;
