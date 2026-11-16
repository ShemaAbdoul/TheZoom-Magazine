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
├── magazine.js                # Edition details and checkout links
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
│   └── magazine/              # Keep paid PDF master files outside this public repository
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
Open `magazine.js`. Each object in `EDITIONS` controls an edition's number, date, title, page count, reading availability, price and payment link.
- Cover images: `assets/images/magazine/covers/issue-01.jpg`
- Paid PDF master files: keep them in private storage, not in this public repository.
- Use matching two-digit numbers for covers, such as `issue-08.jpg`. Keep the paid `issue-08.pdf` master in private storage.

Do not upload paid PDFs to a public GitHub repository. Anyone can download files stored there. The paid editions are not readable directly on the public website; they are emailed manually after payment verification.

## Digital payments: Visa and MTN Mobile Money

The magazine page is prepared for Flutterwave hosted Payment Links. Each digital edition is priced at **RWF 10,000**. Delivery is manual by email after you verify the transaction. The checkout is **not live** until you create and add a separate fixed-price link for each edition.

The current recommended option is Flutterwave because its Rwanda payment documentation lists card payments and Rwanda Mobile Money, including MTN and Airtel. See:
- https://flutterwave.com/rw/support/payment-methods/pay-with-mobile-money
- https://developer.flutterwave.com/docs/payment-methods
- https://flutterwave.com/rw/pricing/

Setup:
1. Register and complete merchant verification with Flutterwave.
2. In the Flutterwave dashboard, enable **Card** and **Mobile Money** under payment methods. Disable any other methods if you want checkout to offer only those two categories.
3. Create seven one-time Payment Links, one per edition, each fixed at **RWF 10,000**.
4. Enable Card and Rwanda Mobile Money. Flutterwave lists MTN and Airtel for Rwanda; ask Flutterwave if you need MTN to be the only mobile-money network.
5. Collect the buyer email and enable merchant payment notifications.
6. Copy each hosted payment URL into the matching edition's `checkoutUrl` field in `magazine.js`. Prices are already set to RWF 10,000.
7. Test in the provider's test mode before publishing live links.

Never put a Flutterwave secret key or private API key in this public repository. Hosted payment links keep card details and Mobile Money authorization on the provider's secure checkout page. The current static GitHub Pages site does not automatically verify payments or deliver paid PDFs: after checking a successful RWF 10,000 transaction in your Flutterwave dashboard, send the edition to the buyer by email. A private order log should record the buyer, edition, transaction reference and delivery status. For automatic payment verification and download delivery, the site will need a secure backend/webhook and private file storage. Do not leave paid PDFs in this public repository. This updated project ZIP deliberately excludes all PDF files.

## Footer and navigation

The footer is intentionally minimal: `© [current year] TheZoom Magazine`. The year updates automatically. The main menu uses **Magazine** for the editions page.

## Publishing

The repository is published through GitHub Pages. Each commit triggers a deployment. To use a custom domain, open repository **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.


See [PAYMENTS-SETUP.md](PAYMENTS-SETUP.md) for the complete payment-link and manual-delivery checklist. If the old PDFs were previously uploaded to GitHub, delete the repository's old root `issues/` folder and any `assets/magazine/pdfs/` folder, then commit the deletions.


## Digital purchases
The Magazine page currently displays disabled “Coming soon” buttons. No payment is collected and no checkout is active. When you are ready to sell editions, configure a verified payment provider and secure manual-order workflow before enabling purchases. Keep paid PDFs outside this public repository.
