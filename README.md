# TheZoom Magazine

TheZoom is a static HTML, CSS and JavaScript magazine website, published with GitHub Pages.

## Folder structure

```text
TheZoom-Magazine/
├── index.html                 # Homepage
├── story.html                 # Full story template
├── stories.js                 # Edit and add editorial stories
├── meet.html                  # Meet people page
├── person.html                # Full Meet article template
├── meet.js                    # Edit interviews, profiles, poems and reviews
├── magazine.html              # Magazine editions page
├── magazine.js                # Edition details, online reader and Coming Soon button
├── about.html                 # About and contact page
├── config.js                  # Contact email and newsletter settings
├── style.css                  # Website design
├── script.js                  # Homepage behaviour
├── story.js                   # Story article behaviour
├── theme.js                   # Light/dark mode
├── assets/
│   ├── images/
│   │   ├── posts/             # Large story/article images
│   │   ├── thumbs/            # Story-card thumbnails
│   │   ├── meet/              # Meet portraits and feature photos
│   │   └── magazine/covers/   # Magazine cover images
│   └── magazine/pdfs/         # Digital magazine PDF files
└── README.md
```

## Editing content

Edit directly on GitHub: open the file, click the pencil icon, make changes, then choose **Commit changes**. Wait for GitHub Pages to finish deploying and refresh with `Ctrl + Shift + R`.

### Stories
Open `stories.js`. Each object inside `STORIES` is one article. Edit:
- `title`: headline
- `dek`: short introduction
- `author`: writer's byline
- `date`: publication date in `YYYY-MM-DD`
- `cat`: topic
- `body`: paragraphs, headings (`## Heading`) and pull quotes (`> Quote`)
- `img`: full-size image in `assets/images/posts/`
- `thumb`: card thumbnail in `assets/images/thumbs/`

Use a unique numeric `id`. For a new story with ID 8, add `story-08.jpg` to both `posts` and `thumbs`, then set the paths in the new object. Recommended image size: 1600 × 900 px, compressed for the web.

### Meet
Open `meet.js`. Each object is one interview, profile, poem, review or article. Edit `title`, `role`, `cat`, `author`, `dek`, `date` and `body`. The homepage Meet teaser and the Meet page both use this file. Put the matching image in `assets/images/meet/`, for example `meet-05.jpg`.

### About
Open `about.html` and edit the paragraphs and contact information. The email address used by the contact form is set in `config.js`.

### Magazine editions
Open `magazine.js`. Each object in `EDITIONS` controls an edition's number, date, title, page count and online reading availability.
- Cover images: `assets/images/magazine/covers/issue-01.jpg`
- PDF files: `assets/magazine/pdfs/issue-01.pdf`
- Use matching two-digit numbers, such as `issue-08.jpg` and `issue-08.pdf`.

The current seven PDF editions are included in `assets/magazine/pdfs/` so readers can open them with **Read now**. These PDFs are publicly accessible: readers can also use their browser PDF controls or the direct file URL to save a copy. Only include editions you are comfortable making public. Keep future paid-only PDFs in private storage, not in this public repository.

## Print + PDF orders (Coming soon)

The **Buy print + download** button is intentionally disabled and labelled **Coming soon**. No payment is collected and no checkout is active. When TheZoom is ready to sell print copies and PDF editions, configure a secure payment provider and an order/delivery process before enabling the button. Flutterwave can be evaluated for Visa/card and Rwanda Mobile Money (including MTN), but no credentials or payment links are currently connected.

Do not put secret payment keys in this public repository. For future paid-only PDFs, use private file storage and a secure backend; a static GitHub Pages site cannot verify payments or protect files stored in a public repository.

## Footer and navigation

The footer is intentionally minimal: `© [current year] TheZoom Magazine`. The year updates automatically. The main menu uses **Magazine** for the editions page.

## Publishing

The repository is published through GitHub Pages. Each commit triggers a deployment. To use a custom domain, open repository **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.
