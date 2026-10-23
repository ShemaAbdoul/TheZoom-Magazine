// THE ZOOM: the people in the Meet page. Edit a person, add one, or delete one.
// Each block is one article. Keep the commas between blocks.
//   author  the name shown as the writer. Change it for each article (for example a guest who sent it by email).
//   cat     the kind of piece: Interview, Profile, Poem, Review or Article
//   role    what the person does (Photographer, Dancer ...)
//   img     the picture, saved in the images folder (best size: 1600 x 900 pixels, person in the middle)
//   body    one paragraph per line. Start with ## for a sub-heading or question, or > for a highlighted quote.
//           For poems, end each line with <br> so the line breaks show.
const MEET = [
  {
    id: 1, cat: 'Interview', role: 'Photographer', title: 'Meet David',
    dek: 'The photographer who looks for the quiet moment just before the shutter clicks.',
    author: 'The Zoom Team', date: '2026-10-22', mins: 6,
    img: 'images/meet-1.jpg', alt: 'David, photographer', colors: ['#2540ff', '#0b1426', '#ffd23f'],
    body: [
      'David picked up a camera as a teenager and has rarely put it down since. We caught up with him between shoots to talk about light, patience and learning to ask before you press the button.',
      '## How did you start?',
      'With a borrowed camera and a lot of bad photos. I learned by walking the same street at different hours and watching how the light changed.',
      '## What do you look for in a portrait?',
      'Honesty. I talk first and photograph second. The best picture usually arrives after the person forgets I am there.',
      '> Slow down. The moment you are waiting for is already on its way.',
      '## What advice would you give a beginner?',
      'Shoot every day, delete most of it, and show your best three pictures to someone you trust.'
    ]
  },
  {
    id: 2, cat: 'Profile', role: 'Dancer', title: 'Meet Ibrah',
    dek: 'A dancer who turns a crowded street corner into a stage.',
    author: 'The Zoom Team', date: '2026-10-19', mins: 4,
    img: 'images/meet-2.jpg', alt: 'Ibrah, dancer', colors: ['#ff3d7f', '#7a1f5c', '#ffd23f'],
    body: [
      'Ibrah does not wait for a theatre. A speaker, a patch of pavement and a few curious onlookers are enough to begin.',
      '## Movement first',
      'He trains every morning before the city wakes up, mixing street styles with traditional steps learned from older relatives. Each routine tells a small story: leaving, arriving, celebrating.',
      '> When the music starts, I stop thinking and start listening.',
      '## Teaching the next group',
      'On weekends he runs a free class for beginners. Some come to get fit, some to make friends, and a few to prepare for the stage. All of them leave tired and smiling.'
    ]
  },
  {
    id: 3, cat: 'Poem', role: 'Poet', title: 'Meet Amara',
    dek: 'A new poem about mornings, memory and the sound of the street.',
    author: 'Amara N. (sent in by email)', date: '2026-10-16', mins: 2,
    img: 'images/meet-3.jpg', alt: 'Amara, poet', colors: ['#8f3bff', '#12102b', '#2de2c4'],
    body: [
      '## Morning Reel',
      'The kettle clears its throat at six,<br>the street unfolds its paper wings,<br>somewhere a radio remembers<br>all the songs my mother sings.',
      'Light climbs the wall like a slow cat<br>and spills its gold across the floor.<br>I carry yesterday in my pockets<br>and set it down beside the door.',
      '<em>Have a poem of your own? Use the button on the Meet page to send it to us.</em>'
    ]
  },
  {
    id: 4, cat: 'Review', role: 'Painter', title: 'Meet Grace',
    dek: 'A review of “Small Rooms, Big Light”, a new exhibition of paintings made at home.',
    author: 'Guest reviewer', date: '2026-10-13', mins: 3,
    img: 'images/meet-4.jpg', alt: 'Grace, painter', colors: ['#1fbf75', '#0b3d2e', '#ffd23f'],
    body: [
      'Grace paints the rooms most of us walk through without looking: a kitchen window, a stack of folded cloth, a chair left in the afternoon sun.',
      '## What works',
      'The colours. Every canvas holds one warm patch of light that your eye keeps returning to, and the quiet compositions reward a slow walk around the gallery.',
      '## What could be better',
      'A few of the smaller pieces feel like sketches for the larger ones. More space between the frames would help each painting breathe.',
      '> Worth an hour of your afternoon, and a second visit.',
      '<strong>Verdict:</strong> 4 out of 5.'
    ]
  }
];
