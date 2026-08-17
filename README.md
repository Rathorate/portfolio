# Portfolio Website

A modern, responsive single-page portfolio for an AI / Software Engineer. Built with plain HTML, CSS, and JavaScript — no build step required.

**Live site:** _add your deployed Vercel URL here_

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
├── index.html          # Main site (all markup, styles, and scripts)
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

## Deployment

This site is deployed on [Vercel](https://vercel.com).

To deploy your own copy:

1. Push this folder to a GitHub repository (keep `index.html`, `vercel.json`, and `assets/` together at the root).
2. Go to [vercel.com](https://vercel.com), import the repository.
3. Deploy — no build settings needed, it's a static site.

## Customization

Before publishing, replace the placeholder content in `index.html`:

- `your.email@example.com` → your real email
- `github.com/yourusername`, `linkedin.com/in/yourusername`, `x.com/yourusername` → your real profile links
- `wa.me/2340000000000` → your real WhatsApp number
- Project cards under `#projects` → your real projects, links, and tech badges
- "Your Name" in the footer and page title

## License

Personal project — feel free to fork and adapt for your own portfolio.
