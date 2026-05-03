# Lupos Website — React

Converted from vanilla HTML/CSS/JS to React + Vite + React Router.

## Setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── index.css             # All global styles
├── components/
│   ├── Navbar.jsx        # Sticky navbar + mobile hamburger menu
│   ├── Footer.jsx        # Site footer
│   ├── AnimatedBg.jsx    # Gold arc + particles + comet background
│   └── useFadeIn.js      # Reusable scroll fade-in hook
└── pages/
    ├── Home.jsx          # Landing page (scroll progress, mouse glow, greeting popup)
    ├── About.jsx         # About page with cards
    ├── Lore.jsx          # Lore timeline page
    └── Download.jsx      # App download page

public/
├── Lupos_Logo.webp       # Logo (already copied)
└── LuposBackground.jpg   # Background (already copied)
```

## What changed from vanilla HTML

- Navigation uses React Router (HashRouter) — no page reloads
- All JS logic (fade-in, hamburger, scroll, mouse glow, greeting popup) moved into React hooks and components
- CSS consolidated into a single `index.css`
- Images served from `public/` folder
- Lore data extracted into a JavaScript array for easy editing
- About page expanded with pillar cards
