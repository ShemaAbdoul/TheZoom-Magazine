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
    author: 'TheZoom Team', date: '2026-10-22', mins: 6,
    img: 'assets/images/meet/meet-01.jpg', alt: 'Bijou, Illustrator', colors: ['#2540ff', '#0b1426', '#ffd23f'],
    body: [
      "Christella Bijou is a self-employed illustrator from Rwanda. Known for her striking depictions of Black women, Bijou's work radiates regality and serenity. In this interview, we dive into her creative journey, process, and what inspires her artistry.",
      "## Tell us about yourself. What makes you tick?",
      "I'm a female digital illustrator and self-employed. I consider myself an old soul with little interest in anything mainstream. I find comfort in discomfort and enjoy discovering hidden beauty in the smallest things.",
      "## What kind of illustration do you focus on?",
      "My illustrations mainly feature women, especially black women. I strive to portray them as regal and serene, capturing their strength and beauty.",
      "## How did you get started as an illustrator?",
      "I've been drawing since I was about 5 years old, but I became serious about illustration around the age of 23. That's when I really started practicing and learning as much as I could to improve my skills.",
      "## How did you develop your style? Has it changed over time?",
      "I had a clear vision of what I wanted to achieve from the very beginning, but it took a lot of trial and error to express that vision. My style has definitely evolved as I've experimented with different techniques and media. Right now, I feel like I've found a comfortable style, but who knows where future experimentation will take me?.",
      "## Can you briefly explain your creative process?",
      "I primarily work with Adobe Illustrator. My process isn't particularly complex. I keep a file of everything that inspires me, and when I begin a new project, I look through that file to find elements that match my current mood.",
      "## How do you come up with new ideas? Do you have a process for that?",
      "I'm heavily inspired by shape photography and old paintings. My digital workspace is filled with them, and I love blending their moods in my work. I don’t usually create around a specific idea; instead, I work with a mood in mind and keep refining the piece until it feels right.",
      "## Do you ever experience creative slumps? How do you deal with them?",
      "Absolutely. But I don’t view creative slumps negatively. I see them as a signal that my mind needs rest. When that happens, I shift my focus to something else. Pinterest is a great resource for sparking creativity, and I highly recommend it!",
      "## Is illustration a passion or a hobby for you?",
      "It's both my passion and profession.",
      "> Staying relevant. The creative world moves fast, and it's a challenge to keep up.",
      "## What’s the best part of your job?",
      "The most rewarding part is creating something that resonates with people. I don’t get too emotionally attached to the outcome of my work, so it’s always a pleasant surprise when people connect with it.",
      "## Do you have any side projects you're working on?",
      "Yes, I often work on different projects, but I’m very selective about which ones I take on.",
      "## What’s next for you? Any plans or dreams you can share?",
      "I hope that creative people, myself included, will continue to carve out space in our industries—both for ourselves and for future generations."
    ]
  },
  {
    id: 2, cat: 'Profile', role: 'Designer', title: 'Meet Jazil',
    dek: 'Though he left Rwanda at a young age, his dream of returning to make a lasting impact remains strong.',
    author: 'Abdoul Shema', date: '2026-10-19', mins: 4,
    img: 'assets/images/meet/meet-02.jpg', alt: 'Jazil, designer', colors: ['#ff3d7f', '#7a1f5c', '#ffd23f'],
    body: [
      "Manzi Jazil has always had a bold vision for his future. Though he left Rwanda at a young age, his dream of returning to make a lasting impact remains strong. From launching a global clothing brand to aspiring to own a football club in Rwanda, Jazil's story is one of ambition, passion, and determination.",
      "## Tell us more about yourself, Manzi!",
      "Well, my real name is Manzi. I’m 21 years old, born in Rwanda but haven’t been there in years. I grew up in Cape Town, South Africa, and now I’m living and studying in Belgium. Even though I left Rwanda at a young age, I’m proudly Rwandan. I have a vision of doing amazing things once I finish my studies.",
      "## When did you leave Rwanda?",
      "I left Rwanda in 2004. I was living in Kigali, specifically in Igikondo.",
      "## What do you do?",
      "I’ve been doing graphic design for about four years now, and I’ll be finishing my studies soon. I also have a clothing line dropping next year—my first big long-term goal is to take it worldwide.",
      "## How did your love for fashion come to be?",
      "I’m a huge fan of hip hop, especially trap music. I got inspired by my favorite trap artists—the way they dress, how they shine from head to toe. When I was younger, I couldn’t afford the designer clothes they wore, but I loved it. Now that I’m older, I save up and buy the clothes I want. I’m a dream chaser.",
      "## Do you have someone who influences you in fashion?",
      "Yes, my elder cousin and my older friends who live in South Africa. I always wanted to dress like my cousin because he was cool and all the girls wanted to hang out with him. The hip hop world influenced me a lot too.",
      "## What are some of your fashion essentials?",
      "Sneakers, flashy chains.",
      "## How do you manage your time?",
      "In my free time, I either go shopping with my homies, or we just chill and double up on ideas. I love hanging out with the guys I really vibe with, playing games and having fun. I also make time for my mom and little sisters, taking them out and spending quality time with them because I live for them.",
      "## How would you describe your style?",
      "My style? It’s expensive and hard.",
      "## What is the best and worst purchase you’ve ever made?",
      "The best was my PlayStation 4. I got it with games and everything for a low price from someone who really needed the money. The worst was buying two Ray-Ban sunglasses in one week and losing both of them the same week!",
      "> I want to own a football club in Rwanda.",
      "## What are some short-term and long-term goals you have for yourself?",
      "My short-term goals are almost complete, like finishing school and getting the things I always wanted when I was younger—like designer clothes. I also always wanted grillz since I was a kid. I used to put aluminum foil on my teeth, pretending they were gold or silver grillz, laughs. Now, I’ve got real gold grillz with diamonds.",
      "## Any long-term goals?",
      "My long-term goals are to build up my clothing brand and take it worldwide. I also want to practice being a DJ because I love music. Beyond that, I’m a hustler—I’m willing to try anything that’ll bring me more bread. I also want to build houses and shops in Kigali. I know I’ll make it, and I have so much faith in the Lord, who got me to where I am today. He’s given me everything I have, and I know He’ll do it again. I also want to help people once I get the platform to do so."
     
    ]
  },
  {
    id: 3, cat: 'Interview', role: 'Graphic Designer', title: 'Meet Uche',
    dek: 'Meet Ichie Uche: The Creative Powerhouse.',
    author: 'Shabani.S (sent in by email)', date: '2026-10-16', mins: 2,
    img: 'assets/images/meet/meet-03.jpg', alt: 'Amara, poet', colors: ['#8f3bff', '#12102b', '#2de2c4'],
    body: [
      "Ichie Uche is a Nigerian graphic and product designer based in Rwanda, bringing fresh ideas and creativity to the design world. With a diverse skill set ranging from brand identity design to UX/UI, Uche has worked with remarkable brands and continues to shape the creative landscape in Kigali. In this interview, we explore his journey, influences, and thoughts on the ever-evolving world of design.",
      "## Tell us about yourself, Uche!",
      "Hi, I’m Uche. I’m a graphic/product designer from Lagos, Nigeria, currently based in Kigali. I create visual identities for remarkable brands. Some of my skills include brand identity design, user research, synthesizing research into insights and ideas, UI/UX design, interaction design, prototyping, user testing, illustrations, and more. Oh, and I believe Game of Thrones is one of the best things to ever happen to humanity! Also, I love table tennis.",

       "## Movie or music person?",
      "Depends on the mood, actually. Music facilitates my work experience, while movies are a good way to relax.",
       
      "## It’s Saturday! Netflix or hangout?",
      "Hangout. Definitely. About 60% of my clients are businessmen, and I meet many of them at hangouts and networking events.",
       
      "## Favorite inspirational place?",
      "Niyo Art Gallery.",
       
      "## What’s your strongest memory from childhood?",
      "Haha, I remember when I was around 11, I thought I had solved the problem of sitting through the 8 p.m. news by cutting off the TV cable. Five hours later, I realized I couldn’t watch my cartoons! I got the beating of my life—trust Nigerian moms.",
       
      "## What’s the best piece of advice you’ve been given?",
      "'Brand identity is not what people tell you to your face; it’s what people say about you when you’ve left the room.' — Jeff Bezos. What do you do? I’m currently working as a graphic designer at Kasha Rwanda and freelancing as a product designer.",
       
      "## Tell us about a project you’re most proud of.",
      "One of my proudest projects is designing my portfolio. It serves as a medium for others to view projects that I’m equally proud of.",
      
      "## What memorable responses have you had for your work?",
      "A client once told me, 'I came here with a mindset of yes or no, but WOW is what you gave me.'",

      "## Who are your biggest influences?",
      "Paula Scher (Pentagram), Chris Do (The Futur), and David Armano—just to mention a few.",


      "## Tell us about a UX project that didn’t go as planned.",
      "When I was starting, I worked for a startup building a tool for small businesses. I was tasked with creating a template framework to automatically generate websites based on a business’s name, industry, and brand colors. Despite the hard work, the company folded before we could finish. It was challenging but taught me a lot about web design anatomy. Even failures can be valuable learning experiences.",

      "## What’s the next big trend in UI/UX design?",
      "The rise of voice-first design, frameless experiences, and emotional design.",


      "## What do you like and dislike about freelancing?",
      "What I like—Being my own boss, following my intuition, and having the flexibility to work from wherever and whenever I want. What I dislike—The lack of brainstorming with colleagues and the challenge of cash flow, especially when working with inexperienced startups.",

      "## Is the artistic life lonely? How do you counteract that?",
      "No, it’s not lonely. Meetups, design communities, and networking events keep me engaged.",


      "## What’s your dream project?",
      "My dream project is to establish a design program in Kigali to help young creatives develop the skills they need to compete globally. We’ve already started Citadel Inc. in partnership with Figma, which includes a 3-month internship learning program—stay tuned for more!",
      
      "## Three tips for upcoming UI/UX designers?",
      "<em>Every journey begins with a single step—don’t be discouraged by difficulties.</em>",
      "<em>Set time aside to read and stay updated on the latest UX trends.</em>",
      "<em>Know your audience early on, as it helps create more effective designs.</em>"
    ]
  },
  {
    id: 4, cat: 'Interview', role: 'Singer', title: 'Meet Kamikazi',
    dek: 'A London singer-songwriter carves a unique path in music.',
    author: 'Abdoul Shema', date: '2026-10-13', mins: 3,
    img: 'assets/images/meet/meet-04.jpg', alt: 'Grace, painter', colors: ['#1fbf75', '#0b3d2e', '#ffd23f'],
    body: [
      "Jennifer Kamikazi, a London-based singer and songwriter, is carving a unique path in the music world. With her captivating voice and soulful lyrics, Jennifer blends the influence of her Rwandan heritage with a love for folk music, creating songs that speak to the heart. Her journey, from studying biochemistry to discovering a passion for songwriting, is as inspiring as the music she creates. We had the pleasure of sitting down with Jennifer to talk about her new EP, Wander in Wonder, and her artistic journey. Let’s dive into her world!",
      "## Tell us about yourself, Jennifer!",
      "My name is Jennifer Kamikazi, and I’m a singer/songwriter from London. I’ve been performing and writing music for over five years now. After graduating from university with a Biochemistry degree, I discovered my love for singing and songwriting and decided to pursue music. I always loved learning new things and chose the sciences because they satisfied the curiosity within me. However, I never knew what I was passionate about until I purchased my first guitar, and that was the end of that.",
      "## Tell us a bit about Wander in Wonder; is this your first project?",
      "Wander In Wonder is my second EP after releasing Wildflower, which I recorded with a producer and friend of mine called Feranmi Oguns from OL Creative. I really love working with Feranmi—his presence is magical. He’s such a visionary and a dream to collaborate with. The EP was co-produced with Bastian Testori and Jacob Riddall, who are both amazingly talented, and we had so much fun working on it. The response I received from my last EP, Wildflower, is what encouraged me to keep writing and releasing new music. I can definitely hear the growth in my music and songwriting, and I hope people hear it too. I’m excited about releasing more music in the future.",
     
      "## So how did you decide on this approach with Wander in Wonder, an all-instrumental release? Why was this the right time?",
      "After some years of writing, I felt it was the right time to release something new. Writing songs is such a personal process, and eventually, you want to let these songs go—to become part of someone else’s story. I also love the process of recording music, and it’s something I wish I could do all the time. Recording, for me, helps close a chapter of a season in my life. Once I let those songs go, I feel ready to search my heart for another story to tell. But my journey hasn’t ended yet—I’ve got more tracks ready to release after this EP. Once these little gems are out, I’ll be ready to start again.",

      "## Is there a song or two you’d highlight from Wander in Wonder that really captures what you were trying to do?",
      "The EP is very personal and touches a lot on intimacy—whether in my own relationships or how I view life. The song You & I truly captures the messages I wanted to share. It discusses our innate desire for love, and how despite our differences, we all desire to be loved and noticed. Unintentionally, You & I ended up sounding like a romantic song, and to my surprise, it’s been danced to at a couple of weddings! That was a lovely surprise for me, and it’s wonderful how songs can be interpreted in ways that even I didn’t expect. Through the EP, I hope to convey the beauty and purity of love, and how love is a cure for insecurities and conflict. I called this EP Wander in Wonder because, like everyone else, I’ve been through a lot in the last couple of years. Although I was willing to release music and was actively writing, I wasn’t ready spiritually. Sometimes, when you focus on the mundane, it stops you from seeing the wonder of life. It’s hard to create something great when you’re in that mindset. For me, I needed to find the wonder in my wandering before I could release these songs.",
      
      "## Was it an enjoyable experience recording the new EP?",
      "Absolutely! Recording this EP was one of the happiest times of my life. That might sound strange, but it shows how much I love and value the process of recording music. I actually recorded the EP in five days, along with some other songs that will be released in the coming months. I enjoyed every second of it and can’t wait to repeat the process.",
      "## You have a diverse body of work and can cover different styles while still sounding like yourself. Is there a common misconception about you that you wish people understood?",
      "Yes, definitely. A lot of people say that I don’t look the way I sound, which I assume is because of my black heritage. Many people expect black singers to have a particular sound, like more soulful or RnB. But I’ve noticed more contemporary folk artists of color, like Michael Kiwanuka, Jake Isaac, and Aisha Badru, breaking that stereotype. My Rwandan background also plays a huge role in my love for folk music. Hearing artists like Kamariza influenced me to connect with this genre. Folk didn’t seem so detached from my roots—it felt like part of my musical identity.",
      "## Do you still keep an interest in the music scene in Rwanda?",
      "Yes, I stick with the old-school artists like Kamariza, Nkurunziza Francois, and Cecile Kayirebwa. But I really enjoy the sounds of contemporary artists like King James, Teta Diana, and Kitoko.",
      "## Do you have a record you always return to?",
      "Yes! Kingdom by Ben Howard. I love this man’s voice, and anyone who knows me knows that I’m unashamed of my obsession with him!",
      "## Where can we find Wander in Wonder?",
      "Everywhere! You can find it on all major streaming platforms where you listen to music legally to support artists. You can stream Wander in Wonder here at jenniferkamikazi.com."
      
    ]
  }
];
