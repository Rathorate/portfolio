# Portfolio Website

A modern, responsive single-page portfolio for an AI / Software Engineer. Built with plain HTML, CSS, and JavaScript, all in one self-contained file — no build step, no dependencies.

**Live site:** https://portfolio-rathore1.vercel.app

## Features

- Dark/light theme toggle
- Sticky, blurred navigation bar with mobile menu
- Animated terminal-style hero visual
- About, Projects, Skills, and Contact sections
- Contact form with client-side submit feedback
- Fully responsive (mobile, tablet, desktop)
- Accessible focus states and `prefers-reduced-motion` support

## Tech Stack

- HTML5 / CSS3 (custom properties for theming)
- Vanilla JavaScript (no frameworks)
- Fonts: Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- Icons: [Lucide](https://lucide.dev/)

## Project Structure

```
.
├── index.html          # Entire site — markup, styles, and scripts in one file
├── vercel.json         # Vercel routing config
└── assets/
    └── profile-circle.png   # Profile photo used in the hero section
```

## Running Locally

No build tools needed. Just open `index.html` directly in a browser, or serve it locally:

```bash
# Option 1: just double-click index.html

# Option 2: serve with Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Customization

Before publishing, replace the placeholder content in `index.html`:

- `your.email@example.com` → your real email
- `github.com/yourusername`, `linkedin.com/in/yourusername`, `x.com/yourusername` → your real profile links
- `wa.me/2340000000000` → your real WhatsApp number
- Project cards under `#projects` → your real projects, links, and tech badges

## License

Personal project — feel free to fork and adapt for your own portfolio.
