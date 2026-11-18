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
    id: 1, cat: 'Interview', role: 'Illustrator', title: 'Meet Christella',
    dek: 'She is a self-employed illustrator from Rwanda. Known for her striking depictions of black women.',
    author: 'The Zoom Team', date: '2026-10-22', mins: 6,
    img: 'assets/images/meet/meet-01.jpg', alt: 'Bijou, Illustrator', colors: ['#2540ff', '#0b1426', '#ffd23f'],
    body: [
      'Christella Bijou is a self-employed illustrator from Rwanda. Known for her striking depictions of Black women, Bijou's work radiates regality and serenity. In this interview, we dive into her creative journey, process, and what inspires her artistry.',
      '## Tell us about yourself. What makes you tick?',
      'I'm a female digital illustrator and self-employed. I consider myself an old soul with little interest in anything mainstream. I find comfort in discomfort and enjoy discovering hidden beauty in the smallest things.',
      '## What kind of illustration do you focus on?',
      'My illustrations mainly feature women, especially black women. I strive to portray them as regal and serene, capturing their strength and beauty.',
      '## How did you get started as an illustrator?',
      'I've been drawing since I was about 5 years old, but I became serious about illustration around the age of 23. That's when I really started practicing and learning as much as I could to improve my skills.',
      '## How did you develop your style? Has it changed over time?',
      'I had a clear vision of what I wanted to achieve from the very beginning, but it took a lot of trial and error to express that vision. My style has definitely evolved as I've experimented with different techniques and media. Right now, I feel like I've found a comfortable style, but who knows where future experimentation will take me?.',
      '## Can you briefly explain your creative process?',
      'I primarily work with Adobe Illustrator. My process isn't particularly complex. I keep a file of everything that inspires me, and when I begin a new project, I look through that file to find elements that match my current mood.',
      '## How do you come up with new ideas? Do you have a process for that?',
      'I'm heavily inspired by shape photography and old paintings. My digital workspace is filled with them, and I love blending their moods in my work. I don’t usually create around a specific idea; instead, I work with a mood in mind and keep refining the piece until it feels right.',
      '## Do you ever experience creative slumps? How do you deal with them?',
      'Absolutely. But I don’t view creative slumps negatively. I see them as a signal that my mind needs rest. When that happens, I shift my focus to something else. Pinterest is a great resource for sparking creativity, and I highly recommend it!',
      '## Is illustration a passion or a hobby for you?',
      'It's both my passion and profession.',
      '> Staying relevant. The creative world moves fast, and it's a challenge to keep up.',
      '## What’s the best part of your job?',
      'The most rewarding part is creating something that resonates with people. I don’t get too emotionally attached to the outcome of my work, so it’s always a pleasant surprise when people connect with it.',
      '## Do you have any side projects you're working on?',
      'Yes, I often work on different projects, but I’m very selective about which ones I take on.',
      '## What’s next for you? Any plans or dreams you can share?',
      'I hope that creative people, myself included, will continue to carve out space in our industries—both for ourselves and for future generations.'
    ]
  },
  {
    id: 2, cat: 'Profile', role: 'Dancer', title: 'Meet Ibrah',
    dek: 'A dancer who turns a crowded street corner into a stage.',
    author: 'The Zoom Team', date: '2026-10-19', mins: 4,
    img: 'assets/images/meet/meet-02.jpg', alt: 'Ibrah, dancer', colors: ['#ff3d7f', '#7a1f5c', '#ffd23f'],
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
    img: 'assets/images/meet/meet-03.jpg', alt: 'Amara, poet', colors: ['#8f3bff', '#12102b', '#2de2c4'],
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
    img: 'assets/images/meet/meet-04.jpg', alt: 'Grace, painter', colors: ['#1fbf75', '#0b3d2e', '#ffd23f'],
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
