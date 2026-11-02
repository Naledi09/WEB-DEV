# NM Travels – Website Project Part 2

**Repository URL:**  https://github.com/Naledi09/WEB-DEV
**Live site URL:**  https://github.com/Naledi09/WEB-DEV
## Project Overview
NM Travels is a fictional transport company established in 2024 for an academic website project. The business provides airport transfers, intercity shuttle services, commuter transport and private group rides between Polokwane, Johannesburg, Polokwane International Airport and OR Tambo International Airport.

## Website Goals and Objectives
1. Allow visitors to view routes and schedules.
2. Allow users to submit online seat-booking requests.
3. Generate qualified private charter enquiries.
4. Build trust through transparent service and fleet information.
5. Provide contact and multi-location information.

---

## Part 2: What I did and why

For Part 2 I worked through the *Student SEO and Publishing Guide*. The guide uses a bakery website as its example, so I took each step and applied it to NM Travels: shuttle routes instead of cakes, and a booking page instead of an enquiry page. I've grouped the changes below to follow the guide's sections.

### 1. On-page SEO

**Search phrases.** I picked one realistic search phrase for each page, based on what a customer would actually type. I then used it naturally in that page's title, description and main heading, and nowhere repeated just for the sake of it.

| Page | Search phrase I targeted | `<title>` |
|---|---|---|
| `index.html` | airport shuttle Polokwane | Airport Shuttle & Intercity Transport in Polokwane \| NM Travels |
| `routes.html` | Polokwane to Johannesburg shuttle | Polokwane to Johannesburg Shuttle Routes & Schedule \| NM Travels |
| `booking.html` | book shuttle seat online | Book a Shuttle Seat Online \| NM Travels Polokwane |
| `charter.html` | group transport / event transport Polokwane | Private Group Charter & Event Transport \| NM Travels Polokwane |
| `fleet.html` | 7-seater / 14-seater shuttle | Our Fleet: 7-Seater and 14-Seater Shuttles \| NM Travels |
| `about.html` | NM Travels contact details | About NM Travels & Contact Details \| Polokwane Shuttle Service |

**Unique titles and descriptions.** Before, every page had a short title like "Fleet | NM Travels" and no meta description at all. Now each page has its own title and its own `<meta name="description">` that sums up what is actually on that page. No two descriptions are the same. I also added Open Graph tags (`og:title`, `og:description`, `og:site_name`) so a shared link shows a proper title and summary on WhatsApp or Facebook. That supports the social-media part of off-page SEO.

**Heading structure.** Each page now has exactly one `<h1>` that names the page's subject, `<h2>` tags for the main sections and `<h3>` tags for sub-sections. The biggest fix was the home page: the three service cards were `<h3>`s sitting under no `<h2>` at all, so I added an "Our transport services" `<h2>` above them. I also added proper headings to the booking and charter forms ("Your trip details" and "Tell us about your group"), and I renamed vague headings, for example "Our Fleet" became "Our Shuttle Fleet".

**Images: file names and alt text.** I renamed every image so the file name describes the photo:

| Old name | New name |
|---|---|
| `7-seater.jpeg` | `nm-travels-white-7-seater-shuttle.webp` / `.jpg` |
| `group-transport.jpeg` | `nm-travels-silver-7-seater-shuttle.webp` / `.jpg` |
| `14-seater.jpeg` | `nm-travels-14-seater-minibus.webp` / `.jpg` |
| `company.jpeg` | `nm-travels-gold-monogram-logo.webp` / `.jpg` |
| _(missing)_ `hero-placeholder.jpg` | `nm-travels-hero-minibus.webp` / `.jpg` |

I also rewrote the alt text so it describes what is actually in each photo for someone who can't see it. For example, "NM Travels group transport vehicle" became "White NM Travels 14-seater minibus parked under trees on a sunny day". I also noticed the charter page was showing a 7-seater under the heading "Suitable for groups", so I swapped in the 14-seater photo.

**Descriptive links.** I replaced vague link text with text that says where the link goes. For example "View Routes" became "View routes and departure times", and the button "Search" became "Search departures". I also added the internal links the guide recommends, so related pages point to each other:
- Each home-page service card links to the right page, for example "See airport transfer times and fares".
- Each row in the route table has a "Book this route" link.
- The booking page links to the timetable and to the charter page.
- The fleet, routes and home pages each end with a call-to-action section linking to the next logical step.
- The footer on every page now has a full "Explore" link list.

**Mobile layout.** I kept the viewport tag and tested every page at a 375px phone width. Nothing scrolls sideways (the wide timetable scrolls inside its own box). Buttons go full-width on small screens, the footer stacks into one column, and the mobile menu items now have larger tap targets.

### 2. Off-page SEO

Off-page SEO happens outside the website, so most of it isn't code. Because NM Travels is a **fictional** business, I have **not** created a Google Business Profile, posted reviews or contacted any organisations. The guide is clear that a classroom business should not pretend to be real. What I did was prepare the site so it would support honest off-page SEO if the business were real, and I completed the guide's student activity as a plan.

**What I prepared on the website:**
- **Consistent business details (NAP).** The same name, phone number, email and office hours now appear in the footer of every page, and they match the About & Contact page. The phone number and email are clickable `tel:` and `mailto:` links.
- **Shareable pages.** The Open Graph tags mean a link to the routes or fleet page shows a clear title and description when it is posted on social media.
- **No fake reviews or testimonials.** I deliberately did not add any customer reviews, because none would be genuine.

**Student activity: three organisations that might link to the site because it is useful to their audience:**
1. **A local tourism information site, such as the provincial tourism agency.** Visitors flying into Polokwane need a way to get to and from the airport. The routes page answers that.
2. **The Polokwane business chamber or a local business directory.** It could list NM Travels with the correct website address, and corporate members could use the charter page for team travel.
3. **Polokwane wedding and conference venues.** Event organisers often send guests a "getting here" page, and the charter page is useful to them.

**Draft outreach message:**
> Good day,
> My name is ___ from NM Travels, a small shuttle service running between Polokwane, Johannesburg and OR Tambo International Airport. We've put our full weekday timetable and fares online at [routes page link], and thought it might be useful to guests travelling to your venue. If you feel it would help your visitors, you're welcome to include it on your "getting here" page. Either way, thank you for your time.
> Kind regards,
> NM Travels

**Social post that leads customers to a relevant page:**
> ✈️ Early flight from OR Tambo? Our 06:00 shuttle leaves Polokwane and arrives at the airport by 09:00, at R450 a seat. See the full timetable and book online: [link to routes.html]

I'm aware that outreach doesn't guarantee a backlink, and social posts bring visitors but don't directly improve rankings. I also wouldn't buy links or join link-swap schemes, because search engines treat that as spam.

### 3. robots.txt, sitemap, speed and security

**`robots.txt` (new).** I placed it beside `index.html`. It allows all crawlers and points to the sitemap. It doesn't try to hide anything, because robots.txt is public.

**`sitemap.xml` (new).** It lists all six public pages with a `lastmod` date. The 404 page is left out on purpose.

> ⚠️ **After publishing:** both files use the placeholder address https://github.com/Naledi09/WEB-DEV. I need to replace it with the real live URL once GitHub Pages is set up.

**Speed improvements:**
- **Images resized and converted to WebP.** The original photos were 1170–1200px wide JPEGs (about 730 KB in total), displayed in boxes only a few hundred pixels wide. I resized them to 640px wide and saved each one as WebP plus a compressed JPEG fallback, using `<picture>` so browsers that support WebP get the smaller file. The fleet page's images went from about 650 KB to about 165 KB.
- **Lazy loading.** Images further down the page use `loading="lazy"`. The image at the top of each page does not, as the guide advises. All images have `width` and `height` set so the layout doesn't jump while they load.
- **Fixed a broken hero image.** The CSS was loading `images/hero-placeholder.jpg`, which didn't exist, so every home-page visit triggered a 404 error. I made a proper wide hero image from the 14-seater photo and **preload** it, so the first thing a visitor sees appears quickly.
- **`defer` on the script.** It no longer blocks the page from rendering.
- **Favicon.** I added a small SVG favicon (`images/favicon.svg`), which also removes the browser's automatic `favicon.ico` 404 request.
- **Kept the originals out of the published site.** The full-size photos are saved in `_original-images/`, and that folder is listed in `.gitignore` so it isn't uploaded.

**Security and privacy:**
- I checked the project and there are no passwords, API keys or real customer data. The phone number, email and addresses are clearly marked as fictional.
- The one external link that opens a new tab (the OpenStreetMap link) has `rel="noopener noreferrer"`, and the embedded map uses `referrerpolicy="no-referrer"`.
- Every form now shows a note: *"Demo form: your details stay in your browser and are not sent or stored."* The guide points out that client-side validation doesn't store or deliver anything. A real version would need a trusted form service or server-side code.
- I build all JavaScript output with `textContent` instead of `innerHTML`, so anything typed into a form can never be run as HTML or script.
- The site will be served over HTTPS once GitHub Pages' "Enforce HTTPS" option is turned on.

### 4. Publishing
I haven't done the GitHub / GitHub Pages part yet. The project is ready for it: `index.html` is at the top level, all file names are lowercase with no spaces, and every link and image path has been checked (none are missing). Once it's live I'll update the two URLs at the top of this README and the placeholder address in `robots.txt` and `sitemap.xml`.

---

## Other improvements I made where the site was lacking

- **Mobile menu bug fixed.** The old script toggled the menu with inline styles. If you opened and then closed the menu on a phone-sized window and then made the window wider, the desktop menu stayed hidden. It now uses a CSS class, updates `aria-expanded` for screen readers, swaps the ☰ icon for ✕ when open, and closes with the Escape key.
- **Accessibility:**
  - A "Skip to main content" link.
  - Visible gold focus outlines for keyboard users.
  - `aria-current="page"` on the active menu link.
  - `aria-live` regions so screen readers announce form results.
  - A hidden table caption and `scope` attributes on the timetable.
  - Labels for every field in the home-page search, which previously had none.
- **Colour contrast.** The gold stat numbers on a white background were hard to read, so I added a darker gold (`--gold-dark`) for text on light backgrounds.
- **Better forms.**
  - `name` and `autocomplete` attributes, so phones can autofill names, emails and numbers.
  - A phone-number pattern check.
  - A visible red border on invalid fields, shown only after the user has interacted with them.
  - Wording fixes, for example the Mission statement didn't read as a full sentence before.
- **Clickable contact details** (`tel:` and `mailto:`) on every page.
- **Custom `404.html` page.** GitHub Pages shows it automatically for broken links. It's marked `noindex` and links back to the main pages.
- **Footer** now has three columns: about, page links and contact details with office hours.

## JavaScript functionality

The original script already handled the menu, the route filter and the three form messages. For Part 2 I kept all of that and added the following (all in `js/script.js`):

| Feature | Page | What it does |
|---|---|---|
| **Real departure search** | Home | Matches the chosen From/To against the actual timetable. It shows departure time, arrival time and fare, plus a **"Book this departure"** button. If no scheduled shuttle runs between those places, it suggests a private charter instead. |
| **Booking pre-fill** | Booking | When you arrive from the search or a "Book this route" link, pickup, drop-off and date are already filled in, using URL parameters. |
| **Live fare estimator** | Booking | As you pick a route and number of seats, it shows the estimated total, for example *Estimated fare: R3 780 (9 × R420)*. It warns if pickup and drop-off are the same, and suggests a charter for groups of 8 or more. |
| **Vehicle suggestion** | Charter | Type a group size and it recommends the right combination from our real fleet: a 7-seater, the 14-seater, 14 + 7, or the full fleet. It also says when a group is too big for the fleet. |
| **Office open / closed status** | About | Uses **South African time** (whatever the visitor's own time zone is) to show whether the Polokwane office is open right now. |
| **Route filter count** | Routes | The existing filter now also tells you "Showing 2 of 5 routes" and announces the change to screen readers. |
| **No past dates** | All forms | Date pickers can't select a day before today. |
| **Character counters** | Charter, About | Live "0 / 500 characters" counter on the message boxes. |
| **Back-to-top button** | All pages | Appears once you scroll down a long page. |
| **Auto footer year** | All pages | The © year updates itself. |

I tested every feature in Chrome: the search result and booking link, the fare calculation (9 seats × R420 = R3 780), the same-place warning, the filter count, all four vehicle-suggestion ranges, the character counter, and the menu's open, close and Escape behaviour.

---

## Submission checklist (from the guide)
- [x] Every page has a unique, accurate title and description.
- [x] Pages have a clear main heading and organised section headings.
- [x] Images have useful alt text and sensible file sizes.
- [x] Links explain their destinations; related pages link to one another.
- [x] The mobile layout fits without sideways scrolling.
- [ ] robots.txt is beside index.html and has the **real** sitemap address *(file is done; I'll add the address after publishing)*.
- [ ] sitemap.xml lists the **deployed** URLs *(file is done; I'll add the address after publishing)*.
- [x] No passwords, keys, private information or customer data are published.
- [ ] The live site works and its pages, images, links and interactions were checked *(after publishing)*.
- [ ] README includes the description, changelog, references, repository URL and live URL *(URLs to add after publishing)*.

## Sitemap (page structure)
Home → Routes & Schedule → Book a Seat → Private Charter → Fleet → About & Contact

## Technology
HTML5, CSS3 and vanilla JavaScript. No frameworks or build step.

## File Structure
```text
NM_Travels_Part2/
├── index.html
├── routes.html
├── booking.html
├── charter.html
├── fleet.html
├── about.html
├── 404.html              (new)
├── robots.txt            (new)
├── sitemap.xml           (new)
├── .gitignore            (new)
├── css/style.css
├── js/script.js
├── images/               (renamed, resized WebP + JPEG, favicon.svg)
├── _original-images/     (full-size source photos, not published)
├── research/
├── wireframes/
└── docs/
```

## Changelog

### Version 2.0 – Part 2 (SEO and publishing preparation)
- Wrote a unique, keyword-relevant title and meta description for every page, and added Open Graph tags.
- Fixed the heading hierarchy (one `h1` per page, `h2` sections, `h3` sub-sections).
- Renamed all images descriptively, rewrote alt text, converted images to WebP with JPEG fallbacks and resized them (about 75% smaller).
- Added lazy loading, image dimensions, hero image preload and a deferred script.
- Fixed the missing hero image that caused a 404 error on every home-page visit.
- Rewrote vague link text and added internal links between related pages, including a full footer link list.
- Added `robots.txt`, `sitemap.xml`, a custom `404.html` and an SVG favicon.
- Added `rel="noopener noreferrer"` to external links, privacy notes on demo forms and safe `textContent` output in JavaScript.
- Fixed the mobile menu bug and improved accessibility (skip link, focus styles, ARIA attributes, labels, contrast).
- Added JavaScript features: real departure search, booking pre-fill, live fare estimator, charter vehicle suggestion, office open/closed status, filter count, past-date blocking, character counters, back-to-top button and an automatic footer year.
- Documented the off-page SEO plan (outreach targets, message and social post).

### Version 1.0 – Part 1
- Created project structure.
- Added five website pages.
- Added responsive CSS.
- Added JavaScript route search, route filtering and form interactions.
- Added research and wireframe documentation.
- Added README and submission checklist.

## Netlify link :
 https://lively-elf-aa91ed.netlify.app


## References
Google. (n.d.). *Google Maps Platform Documentation*. Available at: https://developers.google.com/maps/documentation (Accessed: 14 August 2026).

Google Search Central. (n.d.). *Google Search Essentials*. Available at: https://developers.google.com/search/docs/essentials (Accessed: 31 October 2026).

Google Search Central. (n.d.). *Spam policies for Google web search*. Available at: https://developers.google.com/search/docs/essentials/spam-policies (Accessed: 31 October 2026).

Google Search Central. (n.d.). *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 31 October 2026).

Google Search Central. (n.d.). *Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 31 October 2026).

Google. (n.d.). *Google Business Profile eligibility guidelines*. Available at: https://support.google.com/business/answer/13763036 (Accessed: 31 October 2026).

GitHub. (n.d.). *Creating a GitHub Pages site*. Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (Accessed: 31 October 2026).

Sitemaps.org. (n.d.). *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 31 October 2026).

South African Government. (n.d.). *Government information portal*. Available at: https://www.gov.za/ (Accessed: 14 August 2026).

South African Revenue Service. (n.d.). *Small business information*. Available at: https://www.sars.gov.za/ (Accessed: 14 August 2026).

*Student SEO and Publishing Guide* (course material, provided by lecturer).

## Important Note
NM Travels, its contact information, routes, prices, schedules and addresses are fictional examples for an academic project and must be replaced with verified information before real-world deployment.
