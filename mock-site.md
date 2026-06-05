# Get Social — Mock Site Build Instructions

## Related notes

- [[site-map|Site map]]
- [[client-talking-points|Client talking points]]
- [[seo-plan|SEO plan]]
- [[individual-pages|SEO page audit]]

## Purpose

Build a simple coded mock site to show the client the proposed website structure before rebuilding or reorganizing the real Wix site.

This is not the final production website. It is a lightweight clickable prototype that shows the page hierarchy, navigation flow, service pages, work pages, and contact flow.

## Recommended stack

- HTML
- CSS
- Vanilla JavaScript

Use plain static files. Do not use React, Next.js, Vite, or a build tool unless the user asks for a more advanced prototype later.

## Mock site folder

Create the mockup in a new folder:

```text
mock-site/
├── index.html
├── styles.css
└── script.js
```

The mockup can be a single-page clickable prototype where JavaScript switches the visible page content, or it can use separate HTML files if that is easier. Keep it simple and easy to revise.

## Main goal

Show the client that the new site should be simple, service-focused, and built to get leads.

The site should:

- Keep the top navigation simple.
- Give each major service its own page.
- Use Services and Work as overview pages with clear menu choices.
- Remove event, summit, retreat, login, signup, and member-area clutter from the main structure.
- Tie every service page to a clear contact form.
- Show the company's work clearly so it can attract more work.

## Top navigation

Use this simple top navigation:

```text
Home | Services | Work | About | Blog | Contact
```

Do not put every service in the top navigation. The Services page should act as the menu for individual services.

Do not put every portfolio item or case study in the top navigation. The Work page should act as the menu for Portfolio and Case Studies.

## Proposed site map

```text
Home
├── Services
│   ├── Web Design
│   ├── Social Media Management
│   ├── Branding / Logo Design
│   ├── Brand Photography
│   └── Drone / Videography
├── Work
│   ├── Portfolio
│   └── Case Studies
├── About
├── Blog
└── Contact
```

## Proposed URLs

Use these URLs in the mockup labels and page notes:

```text
/
/services
/services/web-design
/services/social-media-management
/services/branding
/services/brand-photography
/services/drone-videography
/work
/portfolio
/case-studies
/about
/blog
/contact
```

Names can change later, but the concept should stay the same: every major service gets its own focused page.

## Pages to create in the mockup

### Home

Purpose:

- Introduce Get Social quickly.
- Show the main value proposition.
- Point visitors to Services, Work, and Contact.

Suggested sections:

- Hero with short headline and primary Contact button.
- Services preview.
- Work preview.
- Short About preview.
- Final call to action.

### Services overview

Purpose:

- Act as a clean menu for all services.
- Help visitors choose the service they need.

Create service cards or simple sections for:

- Web Design
- Social Media Management
- Branding / Logo Design
- Brand Photography
- Drone / Videography

Each card should link to the individual service page.

### Web Design page

Purpose:

- Show that Web Design is a standalone service.

Suggested sections:

- Hero / service intro.
- What is included.
- Process.
- Example work or placeholder preview.
- FAQ placeholder.
- Contact button that leads to Contact with Web Design selected or referenced.

Suggested contact URL:

```text
/contact?service=web-design
```

### Social Media Management page

Purpose:

- Replace the old generic Packages idea with a clear service page.

Suggested sections:

- Hero / service intro.
- What is included.
- Package or tier preview.
- Platforms supported.
- FAQ placeholder.
- Contact button.

Suggested contact URL:

```text
/contact?service=social-media-management
```

### Branding / Logo Design page

Purpose:

- Show branding as its own service.

Suggested sections:

- Hero / service intro.
- Logo design and brand identity overview.
- Brand kit inclusions.
- Process.
- Portfolio preview placeholder.
- Contact button.

Suggested contact URL:

```text
/contact?service=branding
```

### Brand Photography page

Purpose:

- Show branded photo shoots as a focused service page.

Suggested sections:

- Hero / service intro.
- What is included.
- How it works.
- Photo gallery placeholder.
- FAQ placeholder.
- Contact button.

Suggested contact URL:

```text
/contact?service=brand-photography
```

### Drone / Videography page

Purpose:

- Show drone and video services as their own page.

Suggested sections:

- Hero / service intro.
- Use cases.
- What is included.
- Video or demo reel placeholder.
- FAQ placeholder.
- Contact button.

Suggested contact URL:

```text
/contact?service=drone-videography
```

### Work overview

Purpose:

- Act as a menu for proof of work.

Create two clear options:

- Portfolio
- Case Studies

Each option should link to its page.

### Portfolio page

Purpose:

- Show visual proof quickly.

Suggested sections:

- Portfolio intro.
- Grid of placeholder businesses or projects.
- Filters or category labels if simple.
- Contact button.

### Case Studies page

Purpose:

- Show stronger proof than a basic portfolio.

Suggested sections:

- Case studies intro.
- Two or three placeholder case study cards.
- Each card should show:
  - Client / business name placeholder.
  - Problem.
  - What Get Social did.
  - Result placeholder.
- Contact button.

### About page

Purpose:

- Introduce the company and team.

Suggested sections:

- Short company story.
- Team preview.
- Values or approach.
- Contact button.

### Blog page

Purpose:

- Show where future SEO content would live.

Suggested sections:

- Blog intro.
- Placeholder post cards.
- Suggested post topics from the SEO plan.

### Contact page

Purpose:

- Make the lead flow clear.

Create a simple form mockup with:

- Name
- Email
- Phone
- Business name
- Service interest dropdown
- Message
- Submit button

Service dropdown options:

- Web Design
- Social Media Management
- Branding / Logo Design
- Brand Photography
- Drone / Videography
- Not sure yet

If using JavaScript, read the `service` query parameter and preselect the matching service in the dropdown.

## Design direction

Keep the design clean, simple, and client-demo friendly.

Use:

- A restrained black, white, and gold direction to match the existing Get Social feel.
- Clear headings.
- Simple cards.
- Clear buttons.
- Mobile-friendly layout.
- Enough placeholder content to explain the structure.

Avoid:

- Building a final polished Wix design.
- Complex animation.
- Member login or signup flows.
- Event, summit, retreat, or application pages.
- Too much copy.
- Fake functionality beyond simple navigation and form preselection.

## Client explanation to support the mockup

Main talking point:

The proposed structure keeps the website focused on getting new clients. Visitors can quickly understand what Get Social offers, review examples of the work, and contact the company about the service they need.

Explain:

- Services is the menu for individual service pages.
- Work is the menu for Portfolio and Case Studies.
- Each service page gets its own URL and content.
- Old event and member pages can be archived or removed if they are no longer active.
- The contact form becomes the central conversion point for all service pages.

## To do

- [ ] Build the static mock site in a `mock-site/` folder.
- [ ] Create the Home page view.
- [ ] Create the Services overview view.
- [ ] Create the five individual service page views.
- [ ] Create the Work overview view.
- [ ] Create the Portfolio page view.
- [ ] Create the Case Studies page view.
- [ ] Create the About page view.
- [ ] Create the Blog page view.
- [ ] Create the Contact page view with service-interest dropdown.
- [ ] Add service-specific contact links using query parameters.
- [ ] Test the mockup on desktop and mobile widths.

## Done

