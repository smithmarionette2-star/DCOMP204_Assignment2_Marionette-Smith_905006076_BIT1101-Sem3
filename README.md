# Explore Sierra LeoneA

A responsive, five-page tourism website for Sierra Leone. It presents beaches, islands, national parks and heritage sites, promotes ethical, community-driven tourism, and gives visitors a way to send a trip enquiry.

The site is plain HTML, CSS and JavaScript. It has no build step, framework or backend.

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero banner, key facts, popular destinations, mission teaser and enquiry call-to-action |
| Places to Discover | `places.html` | Six destination cards with category filters and search |
| Our Purpose | `purpose.html` | Mission statement and why to visit Sierra Leone |
| Featured Experience | `featured.html` | The season's pick (Tokeh Beach Coastal Retreat) plus three alternatives |
| Contact Us | `contact.html` | Enquiry form, office details and opening hours |

##Screenshot
**Home**
<img width="902" height="2456" alt="Screenshot_10-11-2026_1636_" src="https://github.com/user-attachments/assets/91235b3b-332b-4353-9f16-9c0b5fdc3c6c" />

**Places to Discover**
<img width="902" height="1639" alt="Screenshot_10-11-2026_1656_" src="https://github.com/user-attachments/assets/f61eca34-42c5-4df2-bb51-33dde1397a6b" />

**Our Purpose**
<img width="902" height="1375" alt="Screenshot_10-11-2026_1715_" src="https://github.com/user-attachments/assets/b8af116e-2350-42dc-8d19-1c4235ae698a" />

**Featured Experience**
<img width="902" height="1395" alt="Screenshot_10-11-2026_1735_" src="https://github.com/user-attachments/assets/2bfb93ec-7d66-4185-86e3-a8956c77ac73" />

**Contact Us**
<img width="902" height="1463" alt="Screenshot_10-11-2026_1752_" src="https://github.com/user-attachments/assets/e85fdb1f-89ed-449c-8fa1-28d8fb5439ea" />


## Features

- **Destination filters:** on the Places page, filter by All, Beaches, Nature or Heritage.
- **Live search:** type in the search box on any page. Pressing Enter on another page jumps to `places.html?q=<term>` and applies the search.
- **Contact form validation:** required fields are checked in the browser, and a confirmation message appears on submit.
- **Responsive layout:** adapts at 900px and 560px breakpoints.
- **Dark mode:** follows the visitor's system setting through `prefers-color-scheme`.
- **Accessibility:** a visible focus outline, ARIA labels and `aria-current` on the navigation, and reduced-motion support.
- **Image fallback:** each image sits on a CSS-drawn scene (sun, sea, palm, island or ruins). If a photo file is missing, the illustration shows with an "Add photo" hint.

## Project structure

```
explore-sierra-leone/
├── index.html
├── places.html
├── purpose.html
├── featured.html
├── contact.html
├── style.css          # All styling, theme variables and responsive rules
├── script.js          # Search, filters and form handling
└── images/            # 15 JPG photos and banners
```

### Images

| Group | Files |
|-------|-------|
| Page banners | `banner-places.jpg`, `banner-purpose.jpg`, `banner-featured.jpg`, `banner-contact.jpg` |
| Home page | `hero.jpg`, `home-about.jpg`, `home-cta.jpg` |
| Destinations | `tokeh-beach.jpg`, `banana-island.jpg`, `bureh-beach.jpg`, `national-parks.jpg`, `river-no-2-beach.jpg`, `bunce-island.jpg` |
| Other | `featured-tokeh.jpg`, `purpose.jpg` |

## Running the site

1. Download or unzip the project.
2. Open `index.html` in any modern browser.

To serve it locally instead:

```bash
cd explore-sierra-leone
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

An internet connection is needed only for the Google Fonts (Fraunces and Public Sans). Without it, the site falls back to Georgia and system fonts.

## Customising

- **Colours and fonts:** edit the CSS variables at the top of `style.css` (`--sea`, `--palm`, `--sun`, `--serif` and so on). The dark theme values are in the `prefers-color-scheme: dark` block.
- **Add a destination:** copy an `<article class="card">` in `places.html`, set `data-c` to one or more of `beach`, `nature` or `culture`, update the image and text, and add the name to the `<select>` in `contact.html`.
- **Replace a photo:** keep the same filename in `images/`, or update the `src` in the HTML.
- **Contact details:** the email, phone number and address are placeholders (`info@exploresierraleone.sl`, `+232 76 000 000`, Lumley Beach Road, Freetown). They are repeated in the top bar, footer and `contact.html`, so update all three places.

## Known limitations

- The contact form does not send data anywhere. It only shows a confirmation message, so connect it to a form service or backend before going live.
- "Download itinerary", "Book experience", "View details" and "Read more" all link to the contact page.
- The Cultural tour toggle on the Featured page is a disabled placeholder.
- Social media links in the footer point to `#`.
- The "Find us" map on the contact page is a styled placeholder, not an interactive map.

## Tech

HTML5, CSS3 (custom properties, grid, flexbox) and vanilla JavaScript (ES5-compatible). Fonts are loaded from Google Fonts.

## License and credits

&copy; 2026 Explore Sierra Leone. All rights reserved. Confirm that you have the right to use each photo in `images/` before publishing.
