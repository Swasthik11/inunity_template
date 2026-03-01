# InUnity — React Website

Premium React website for InUnity — Empowering India's Innovation Clusters.

## Project Structure

```
inunity/
├── public/
│   └── index.html
├── src/
│   ├── styles/
│   │   └── global.css          # CSS variables, keyframes, resets
│   ├── components/
│   │   ├── Cursor.jsx           # Custom premium cursor
│   │   ├── Cursor.module.css
│   │   ├── Navbar.jsx           # Sticky nav with mobile menu
│   │   ├── Navbar.module.css
│   │   ├── Hero.jsx             # Hero with orbital animation
│   │   ├── Hero.module.css
│   │   ├── Marquee.jsx          # Scrolling partners bar
│   │   ├── Marquee.module.css
│   │   ├── About.jsx            # About + stats grid
│   │   ├── About.module.css
│   │   ├── Offerings.jsx        # 3 offerings with tilt cards
│   │   ├── Offerings.module.css
│   │   ├── Cluster.jsx          # Cluster innovation model
│   │   ├── Cluster.module.css
│   │   ├── Impact.jsx           # Big number impact rows
│   │   ├── Impact.module.css
│   │   ├── Inpulse.jsx          # Inpulse platform + live dashboard
│   │   ├── Inpulse.module.css
│   │   ├── Testimonials.jsx     # 3 testimonial cards
│   │   ├── Testimonials.module.css
│   │   ├── CTABand.jsx          # Full-width CTA section
│   │   ├── CTABand.module.css
│   │   ├── Contact.jsx          # Contact form + info
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── Footer.module.css
│   │   └── useReveal.js         # IntersectionObserver hook
│   ├── App.jsx
│   └── index.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation & Run

```bash
cd inunity
npm install
npm start        # or: npm run dev
```

The app will open at **http://localhost:3000**

> ⚡ This project uses **Vite** (not Create React App) — it's faster, modern, and has zero security vulnerabilities. Do NOT run `npm audit fix --force` as it will break the setup.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Features

- ✅ **Custom cursor** — Premium morphing dot with `mix-blend-mode: difference`
- ✅ **Hero** — Orbital animation, floating stat cards, word-by-word title reveal
- ✅ **Navbar** — Sticky with scroll-shrink, animated underline links, mobile hamburger menu
- ✅ **Marquee** — Smooth scrolling partner logos
- ✅ **About** — Stats grid with gradient number hover effect
- ✅ **Offerings** — 3D tilt cards with mouse-tracked radial glow
- ✅ **Cluster** — Slide-right layer cards, partner benefits table
- ✅ **Impact** — Large numbers that gradient on hover with left accent bar
- ✅ **Inpulse** — Animated dashboard with progress bars triggered on scroll
- ✅ **Testimonials** — Float-up cards with backdrop gradient reveal
- ✅ **Contact** — Working form with success state, hover inputs
- ✅ **Footer** — Animated social buttons, underline-slide links
- ✅ **Scroll reveal** — IntersectionObserver with staggered delays
- ✅ **CSS Modules** — Scoped styles per component
- ✅ **CSS Variables** — Consistent design tokens throughout
- ✅ **Grain texture** — Subtle noise overlay for depth
- ✅ **Responsive** — Mobile-first with hamburger nav

## Tech Stack
- React 18
- CSS Modules
- Google Fonts (Syne + DM Sans)
- Pure CSS animations (no animation library needed)
