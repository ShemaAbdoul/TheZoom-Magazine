# The Zoom Magazine

An independent magazine website built with plain HTML, CSS and JavaScript. Close-ups on tech, business, culture and sport.

**Live site:** open *Settings, then Pages, then Visit site* in this repository.

## What is in this repository

| File or folder | What it is |
|---|---|
| `index.html` | Home page: zoom headline, latest stories, most read, newsletter |
| `story.html` + `story.js` | The page that shows one full story, with a subscribe pop-up as readers scroll |
| `issues.html` + `issues.js` | The magazine page: latest issue and past issues, read online, buy digital or print |
| `meet.html` + `person.html` | The Meet page and the full page for each person |
| `meet.js` | **All the Meet articles** (edit the author, text and pictures here) |
| `about.html` | About page and contact form |
| `stories.js` | **All the stories** (edit this to change, add or remove stories) |
| `config.js` | Your email address and subscribe settings |
| `style.css`, `theme.js`, `script.js` | Design, dark mode switch and home page behaviour |
| `images/` | Story pictures (`story-1.jpg` ...) and issue covers (`issue-01.jpg` ...) |
| `issues/` | The issue PDFs (`issue-01.pdf` ...) |

## How to edit (on GitHub, no software needed)

1. Open the file, click the **pencil** icon, make your change, then click **Commit changes**.
2. Wait 1 to 2 minutes for the green tick next to the deployment, then refresh the site with `Ctrl` + `Shift` + `R`.

### Stories
Open `stories.js`. Each story is one block. Change the `title`, `dek` (the short summary), `author`, `date`, `mins` and the `body` text. Add a story by copying a block, giving it a new `id`, and adding a comma after the block above it. Delete a story by deleting its whole block.

### Pictures
- **Story thumbnail and top picture:** save a picture as `images/story-1.jpg` (same number as the story `id`). Best size: 1600 x 900 pixels, under 300 KB.
- **Issue covers:** `images/issue-07.jpg`. Best size: 800 x 1067 pixels.
- To replace a picture, upload a new file with the **same name** into the same folder.

### Meet page
Open `meet.js`. Each block is one article. Change `author` to credit the writer (for example a guest who sent it by email), `cat` to Interview, Profile, Poem, Review or Article, and the `body` text. Pictures are `images/meet-1.jpg` and so on. For poems, end each line with `<br>`.

### About page
Open `about.html` and edit the text between the tags, for example the paragraph under *About The Zoom*.

### Issues, prices and dates
Open `issues.js`. The top of the file lists each issue: title, month, pages, prices (`dp` digital, `pp` print) and the next issue date. To add a payment link, paste it into `du` (digital) or `pu` (print).

### Email and subscribers
Open `config.js`. Change `email` to your address. To collect subscribers automatically, create a free form at a service such as Formspree and paste its address into `subscribeUrl`.
