// THE ZOOM: all stories live here. Edit a story, add a new one, or delete one.
// Each story is one block between { and }. Keep the commas between blocks.
//   id      a unique number (the story link is story.html?id=NUMBER)
//   cat     Tech, Fashion, Music or Review
//   img     the thumbnail and top picture, saved in the images folder (best size: 1600 x 900 pixels)
//   colors  three colours shown if the picture is missing
//   reads   a number used to rank the "Most read" list (higher = higher up)
//   body    the story text, one paragraph per line.
//           Start a line with ## for a sub-heading, or > for a highlighted quote.
const STORIES = [
  {
    id: 1, cat: 'Fashion', title: 'You Should Have Stayed Home — A New Drop by INITIALS',
    dek: 'Some collections whisper. This one doesn’t.',
    author: 'Abdoul Shema', date: '2026-10-20', mins: 6, reads: 980,
    img: 'assets/images/posts/story-01.jpg', thumb: 'assets/images/thumbs/story-01.jpg', alt: 'Initials release', colors: ['#2540ff', '#0b1426', '#ffd23f'],
    body: [
      "YOU SHOULD HAVE STAYED HOME is a statement, a challenge, and a small punch in the gut, the good kind. INITIALS drops this collection on 1 December, and it hits that space between streetwear and personal truth. It’s not a piece of fabric you wear to look good. It’s a message you wear. The designer behind INITIALS has always pushed for clothes that feel personal without trying too hard. This drop is exactly that. You wear it when you don’t owe anyone an explanation. You wear it when stepping outside is a choice, not an obligation. You wear it when you choose yourself.",
      "## What the Collection Represents",
      "This collection isn’t about staying home literally. It’s about the moments where you should have trusted your gut. How many times have you said to yourself, “I should’ve stayed home”? That’s the emotional backbone of these pieces: regret turned into style, experience turned into fabric.",
      "## The Aesthetics",
      "INITIALS keeps its usual identity: minimal lines, clean silhouettes, and colors that don’t scream but still stand out. The collection leans into darker mood tones that feel heavy, mature, and deeply intentional.",
      
      "Expect: ",
      
      "Comfortable oversized tees",

      "Hoodies with the message pressed boldly",

      "Structured pieces that feel premium",

      "Textures that hold their shape",

      "A modern minimal approach",

      "A tone that’s both calm and confrontational",

      "Each piece feels like a memory you’re wearing but one you’re owning instead of running from.",
      
      "## The Creative Eye Behind the Lens",
      "Every strong collection needs a sharp photographer. This one has Gakwaya Kenny. His work brings out the raw feeling of the message, not exaggerated, not polished to death. Just honest frames, real moods, and the kind of composition that makes you look twice. Brand Owner Contact (for orders, business inquiries, partnerships): 0791323663 | Name: Quentin Dan.",

      "## Why This Drop Matters",
      "Streetwear in Rwanda is changing. More young brands are finally embracing identity, storytelling, and mood, not just logos and colors. INITIALS is part of that new wave, the one that actually has something to say. This collection doesn’t force you to interpret anything. The message is clear: Sometimes you should have stayed home. But today, you didn’t, and you showed up in something worth remembering.",

      "## Launch Date",
      "1 December | Available through INITIALS (ig: initials_merch). Make sure you’re ready. Drops like this don’t wait for anyone.",
      
      
      "> Whether you like clothes with a message, or you just want something clean and bold for the season, this drop is worth checking out. INITIALS is carving its own lane, and this collection is another proof the brand isn’t just designing; it’s evolving."
    ]
  },
  {
    id: 2, cat: 'Music', title: 'Album Review: MABEL TRAIN TO THE SKY by Manzi Fleur',
    dek: 'The warm, soulful production perfectly complements his introspective lyrics, creating an almost cinematic sound.',
    author: 'TheZoom Team', date: '2026-10-18', mins: 5, reads: 640,
    img: 'assets/images/posts/story-02.jpg', thumb: 'assets/images/thumbs/story-02.jpg', alt: 'Manzi Fleur', colors: ['#ff7a59', '#7a1f5c', '#ffd23f'],
    body: [
      "Rwandan rising star Manzi Fleur has emerged with MABEL TRAIN TO THE SKY, a project that feels like a personal journey, told through a blend of soul, Afrobeat, and a touch of R&B. The album, with its 11 tracks and 36 minutes of smooth listening, showcases Fleur’s growth as an artist while tapping into a refreshing mix of introspective storytelling and vibrant soundscapes.",
      "## Track Highlights: 'Violet Jones' & 'Marmalade' ",
      "Track 3, 'Violet Jones,' is a clear standout. This song captures the quiet vulnerability that makes Fleur's work so engaging. The warm, soulful production perfectly complements his introspective lyrics, creating an almost cinematic sound. 'Violet Jones' feels like a journey through emotional highs and lows—an ode to self-discovery and love, enveloped in a sonic atmosphere that makes it one of the most memorable on the album.",
      "Then there’s Track 8, 'Marmalade,' which is a striking departure. This song shifts gears, delivering a dynamic energy with its playful, upbeat rhythm. Fleur’s vocals, paired with the production's layers, feel sun-drenched, like a summer anthem that invites listeners to let go and live in the moment. It's infectious and vibrant, contrasting the moodier tracks, yet it fits perfectly within the album’s overall journey.",
      "## The Train Metaphor: A Journey in Sound and Storytelling ",
      "The album’s title, MABEL TRAIN TO THE SKY, feels symbolic. Like a train ride, the album takes listeners through different emotional landscapes—some soft and introspective, others more energetic and uplifting. Fleur’s ability to balance those moods keeps the project compelling from start to finish. It’s a well-rounded album that doesn’t linger too long in one place, offering a full spectrum of emotions and sonic experimentation.",
      "## A Bright Future for Rwandan Music ",
      "What stands out most is how Manzi Fleur brings a uniquely Rwandan perspective while crafting sounds that appeal globally. MABEL TRAIN TO THE SKY could easily sit alongside international projects, yet it remains deeply connected to Rwanda's growing music scene. Fleur is helping define the future of that scene, pushing boundaries with innovative sounds, but staying grounded in the authenticity of his roots.",
      "## Final Thoughts ",
      "Violet Jones and Marmalade encapsulate the emotional depth and sonic diversity of this project. MABEL TRAIN TO THE SKY is a testament to Manzi Fleur’s ability to craft a cohesive and emotionally rich body of work, leaving us eagerly anticipating what’s next. You can listen to “MABEL TRAIN TO THE SKY” everywhere.",
      
    ]
  },
  {
    id: 3, cat: 'Fashion', title: 'Fragile Review: A Fashion Statement in the Digital Age',
    dek: 'In a world where fashion constantly evolves, Fragile stands out as a brand that challenges norms while celebrating individuality.',
    author: 'Abdoul Shema', date: '2026-10-15', mins: 4, reads: 410,
    img: 'assets/images/posts/story-03.jpg', thumb: 'assets/images/thumbs/story-03.jpg', alt: 'Fragile', colors: ['#8f3bff', '#12102b', '#ff3d7f'],
    body: [
      "With a bold aesthetic that combines streetwear with high fashion, Fragile is making waves not just in the wardrobes of trendsetters but also in the broader fashion conversation.",
      "## Design Philosophy",
      "At its core, Fragile embraces the idea of imperfection and vulnerability. The brand’s designs often feature deconstructed elements, unexpected color combinations, and intricate layering, reflecting the complexities of modern life. This unique approach invites wearers to embrace their flaws and express themselves unapologetically.",
      "## Collections",
      "Each collection feels like a story, woven together through garments that convey a message. Whether it’s a striking oversized jacket or a pair of uniquely designed sneakers, every piece embodies a sense of authenticity. The use of sustainable materials also showcases Fragile’s commitment to environmental consciousness, a crucial factor for today’s conscious consumers.",
      "## Cultural Impact",
      "Fragile isn’t just about clothing; it’s a movement. It challenges societal standards of beauty and encourages a dialogue about mental health and self-acceptance. The brand often collaborates with artists and activists, amplifying voices that promote change. This combination of fashion and social commentary makes Fragile a brand to watch in the evolving landscape of modern style.",
      "> If you’re looking to make a statement while supporting a brand that prioritizes authenticity and sustainability, Fragile is your go-to. Its pieces not only elevate your wardrobe but also inspire confidence and conversation about what it means to be truly ‘fragile’ in a world that often demands perfection."
    ]
  },
  {
    id: 4, cat: 'Music', title: 'Chris Kai Review: The Sound of Afrotoxic',
    dek: 'Rwandan artist Chris Kai’s latest album, Afrotoxic, is a vibrant celebration of Afrobeat that showcases his unique sound and cultural roots.',
    author: 'TheZoom Team', date: '2026-10-12', mins: 5, reads: 520,
    img: 'assets/images/posts/story-04.jpg', thumb: 'assets/images/thumbs/story-04.jpg', alt: 'Afrotoxic', colors: ['#1fbf75', '#0b3d2e', '#ffd23f'],
    body: [
      "With a fresh approach to music, Chris Kai is carving out a space for himself in the ever-evolving African music scene.",
      "## Musical Style",
      "Afrotoxic fuses traditional African rhythms with contemporary sounds, creating a musical experience that feels both nostalgic and modern. Tracks like “Toxic” and “Désolé” feature catchy hooks and infectious beats, inviting listeners to dance while reflecting on deeper themes of love, heartbreak, and resilience.",
      "## Lyrical Depth",
      "What sets Chris Kai apart is his ability to weave personal narratives into his music. The lyrics resonate with listeners, reflecting universal experiences through a distinctly Rwandan lens. His storytelling is both relatable and profound, making it easy to connect with his journey.",
      "## Production Quality",
      "The album boasts high production quality, blending live instrumentation with electronic elements seamlessly. Collaborations with talented producers and artists elevate the sound, adding layers of richness to each track. Chris Kai’s vocal delivery is confident and smooth, showcasing his growth as an artist.",
      "## Verdict",
      "Afrotoxic is not just an album; it’s a cultural statement. Chris Kai is pushing the boundaries of Afrobeat while staying true to his roots. This album is a must-listen for anyone looking to explore the vibrant sounds of contemporary African music. Don’t miss out on this rising star—Chris Kai is here to stay."
    ]
  },
  {
    id: 5, cat: 'Tech', title: 'Tech Detox 101: Breaking Up with Your Screen (For a Day)',
    dek: 'Have you ever realized how much time you spend staring at screens?',
    author: 'Abdoul Shema', date: '2026-10-09', mins: 4, reads: 870,
    img: 'assets/images/posts/story-05.jpg', thumb: 'assets/images/thumbs/story-05.jpg', alt: 'Detox', colors: ['#2de2c4', '#0b1426', '#2540ff'],
    body: [
      "It starts innocently enough—just checking your phone for a minute—but before you know it, hours have flown by. It’s not just about the time lost; it’s the moments we miss. That’s why taking a break from screens, even for just one day, can feel like hitting the reset button on life.",
      "To make it work, it helps to plan. Let the people who usually text or email you know that you’ll be offline for the day. That way, you’re not constantly worrying about missing something urgent. You can even set up an auto-reply to keep things stress-free.",
      "But here’s the fun part: deciding what to do with your day. Maybe it’s finally starting that book you’ve been meaning to read or heading out for a hike. You could even rediscover an old hobby, like painting, baking, or gardening. The trick is to focus on things that don’t need a screen to feel rewarding.",
      "One tip that works wonders is creating tech-free zones. For instance, leave your phone out of the bedroom or dining area. It’s incredible how much more present you feel when there’s no screen pulling your attention away.",
      "By the end of the day, you might notice something surprising. Maybe you felt calmer, more present, or just… lighter. It’s not about hating technology—it’s about finding balance."
    ]
  },
  {
    id: 6, cat: 'Culture', title: 'We Outside Again: Notes from Kigali’s Night Loop',
    dek: 'Same faces, same lights, same laughter, Kigali’s nightlife is a loop we can’t help but love.',
    author: 'Abdoul Shema', date: '2026-10-05', mins: 3, reads: 300,
    img: 'assets/images/posts/story-06.jpg', thumb: 'assets/images/thumbs/story-06.jpg', alt: 'Kigali Night Life', colors: ['#ffd23f', '#ff7a59', '#2540ff'],
    body: [
      "There’s something about Kigali nights that strange mix of calm and chaos, soft hills and loud bass. The city looks peaceful from a distance, but step inside any bar after 9 p.m. and you’ll realize peace clocked out hours ago.",
      "Every weekend, the same story unfolds. You walk in thinking you’re just passing by, maybe grabbing one drink, but five minutes later you’re hugging the same faces you saw last Friday. And the Friday before that. And the one before that.",
      "It’s like Kigali has a cast of nightlife regulars who never take a break they just switch venues like actors changing sets. From Pili Pili to La Noche, Mamba Lounge to Shooters, they reappear with new outfits, same energy, same playlist. Only the lighting changes.",
      "Sometimes I wonder if there’s a secret WhatsApp group where everyone coordinates their appearances:",
      "> 'We outside again tonight?' 'Of course. Life is short.'.",
      "No judgment, the energy is impressive. These people have stamina I can’t explain. Monday morning hits and they still look refreshed, posting “productive week ahead” stories while I’m still recovering from the noise of Saturday night.",
      "But behind the fun, there’s something oddly poetic about it. Maybe everyone’s just trying to feel alive after long days of routine and pressure. Maybe dancing under colored lights feels like a small rebellion against the calmness of Kigali’s daylight hours away of saying, I’m still here, I’m still moving.",
      "Kigali nightlife isn’t really about partying anymore. It’s about presence. Familiar faces in familiar places, pretending each weekend is brand new. You could skip two months and come back, same DJs, same laughter, same crowd. It’s comforting and repetitive at once.",
      "Still, there’s beauty in that repetition. In a city that keeps everything orderly, the night offers a little chaos, a place where everyone forgets about their 8-to-5 lives. Even if it’s the same scene on repeat, it’s a reminder that people need connection even if it happens over overpriced cocktails and a burnt-out speaker playing Davido for the third time.",
      "So next time you step out and see the same crew from last week, don’t roll your eyes. Just smile you’re part of the cast now. And in Kigali, the night doesn’t end, it just takes a nap and wakes up again next weekend."
    ]
  },
  {
    id: 7, cat: 'Review', title: 'Maya Angelou Review: A Legacy of Empowerment',
    dek: 'Maya Angelou is more than just a poet; she is a cultural icon whose words have inspired generations.',
    author: 'The Zoom Team', date: '2026-10-01', mins: 5, reads: 720,
    img: 'assets/images/posts/story-07.jpg', thumb: 'assets/images/thumbs/story-07.jpg', alt: 'Maya Angelou', colors: ['#0b1426', '#2540ff', '#2de2c4'],
    body: [
      "Her works, including I Know Why the Caged Bird Sings, are not only literary masterpieces but also profound commentaries on race, identity, and the human experience.",
      "## Literary Impact",
      "Angelou’s writing style is rich and evocative, blending personal narrative with universal themes. Her ability to convey complex emotions through simple yet powerful language allows readers to connect deeply with her stories. I Know Why the Caged Bird Sings is a testament to her resilience, detailing her journey from trauma to triumph.",
      "## Themes of Empowerment",
      "Central to Angelou’s work is the theme of empowerment, particularly for marginalized voices. She addresses issues of racism, sexism, and personal identity with unwavering honesty. Her courage to share her experiences has opened doors for discussions about social justice and equality, making her an essential figure in American literature.",
      "## Cultural Relevance",
      "Even years after her passing, Angelou’s words remain relevant. They resonate with contemporary struggles for justice and equality, reminding us of the power of resilience. Her quotes have become rallying cries for movements advocating for change, illustrating the lasting impact of her legacy.",
      "Maya Angelou’s work is a treasure trove of wisdom and inspiration. Her ability to articulate the complexities of the human experience continues to resonate today. Reading her works is not just an exercise in literature; it’s an exploration of courage, strength, and the unbreakable spirit of humanity. If you haven’t delved into her writing yet, now is the perfect time to discover the magic of Maya Angelou."
    ]
  }
];

// ---- You don't need to edit anything below this line ----
const photoTag = (a, thumb = false) => `<img src="${thumb && a.thumb ? a.thumb : a.img}" alt="${a.alt}" loading="lazy" onerror="this.remove()">`;
const storyCard = (a, feat, base = 'story.html') =>
  `<article class="card${feat ? ' feat' : ''}"><div class="art" style="--a:${a.colors[0]};--b:${a.colors[1]};--c:${a.colors[2]}"><i></i>${photoTag(a, true)}</div>` +
  `<div class="meta"><span class="cat">${a.cat}</span><span>${a.mins} min read</span></div>` +
  `<h3><a href="${base}?id=${a.id}">${a.title}</a></h3><p>${a.dek}</p></article>`;
