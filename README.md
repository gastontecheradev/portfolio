# Gastón Techera — Portfolio

Personal developer portfolio built with **React 18**, featuring bilingual support (Spanish / English), scroll-triggered animations, and a working contact form. Deployed to **GitHub Pages**.

🔗 **Live site:** [gastontecheradev.github.io/portfolio](https://gastontecheradev.github.io/portfolio)

---

## Features

- **Single-page layout** — Hero, Projects, About, Skills, and Contact sections
- **Bilingual (ES / EN)** — language toggle in the navbar, powered by a custom React Context with no external i18n library
- **Scroll animations** — sections fade in on enter using a `useInView` hook backed by the Intersection Observer API
- **Contact form** — integrated with [Formspree](https://formspree.io), with loading, success, and error states
- **Active link tracking** — navbar highlights the current section while scrolling
- **Responsive** — mobile hamburger menu, adaptive layouts
- **GitHub Pages deployment** — one-command deploy via `gh-pages`

---

## Tech Stack

| Category | Technology |
|---|---|
| UI Library | React 18 |
| Styling | Custom CSS (single `App.css`) |
| i18n | Custom `LanguageContext` + `translations.js` |
| Scroll detection | Custom `useInView` hook (Intersection Observer) |
| Contact backend | Formspree |
| Deployment | GitHub Pages (`gh-pages`) |
| Bundler | Create React App (react-scripts 5) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with active section tracking and language toggle
│   ├── Hero.jsx         # Full-screen landing section with CTA buttons
│   ├── Projects.jsx     # Featured projects grid with links to live demos
│   ├── About.jsx        # Bio text + detail card (role, stack, education)
│   ├── Skills.jsx       # Three skill groups: Frontend, Backend, Programming
│   ├── Contact.jsx      # Contact form (Formspree) + links card
│   └── Footer.jsx       # Simple copyright footer
├── hooks/
│   └── useInView.js     # Intersection Observer hook for scroll animations
├── i18n/
│   ├── LanguageContext.js   # React Context + toggleLang logic
│   └── translations.js      # All UI strings in ES and EN
├── styles/
│   └── App.css          # All styles — layout, components, animations
├── App.js               # Root component — wraps everything in LanguageProvider
└── index.js             # ReactDOM entry point
```
