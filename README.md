# :zap: Personal Website: luigigargioni.github.io

[![Deploy](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/deploy.yml)

Single-page personal website of Luigi Gargioni, researcher and computer engineer.
A WebGL particle cloud changes shape section after section while you scroll.

**Live:** <https://luigigargioni.github.io/>

---

## :sparkles: Features

- **Morphing particle cloud** (Three.js): one shape per section (sphere, torus, wave, double helix, galaxy), blended while scrolling, leaning towards the mouse.
- **Flying profile photo**: the photo next to the name moves up, shrinks and docks in the top-left corner as you scroll; the name appears beside it once the hero is gone.
- **Section navigation**: counter in the top bar and dots on the right, both following the section in view.
- **Italian / English**: switch in the top bar; the browser language is used on the first visit.
- **Responsive**: on narrow screens the cloud stays centred and dimmed behind the text.
- **Light first load**: Three.js is loaded in its own chunk after the text, and phones get fewer particles.
- **Graceful fallback**: without WebGL the page works the same, just without particles.

---

## :star2: Quick start

Requires **Node.js 24** and **npm 11+**.

```bash
npm install
npm start          # dev server on http://localhost:3000
```

### Scripts

```bash
npm start          # dev server (Vite) on port 3000
npm run build      # production build in build/
npm run serve      # preview the production build
npm test           # tests with coverage (100% required)
npm run checktypes # TypeScript type check
npm run lint       # oxlint
npm run lintfix    # oxlint with automatic fixes
npm run pretty     # format with Prettier
```

A Husky pre-commit hook runs `pretty`, `lint`, `checktypes`, `test` and `build`.

---

## :pencil2: Editing the content

| What | Where |
|---|---|
| Name, role, quote, "About" text, section titles, page title | `src/i18n/locales/it.json`, `src/i18n/locales/en.json` |
| Experience | `src/data/experienceData.tsx` |
| Education | `src/data/educationData.tsx` |
| Skills (two groups, name and icon) | `src/data/skillsData.ts`, icons in `src/assets/skills/` |
| Services | `src/data/servicesData.tsx` |
| E-mail and city | `src/data/contactsData.ts` |
| Profile links (LinkedIn, Scholar, ...) | `src/data/socialsData.ts` |
| Profile photo | `src/assets/jpg/profile.jpg` |
| SEO meta tags, structured data (schema.org Person) | `index.html` |
| Link preview image (1200×630) | `public/og-image.jpg` |
| 404 page (standalone, no build step) | `public/404.html` |

Experience and education are listed most recent first, ordered by `id`.
An entry whose end is a word ("Present" / "Attuale") instead of a `MM/YYYY` date is shown as ongoing.

---

## :books: Tech stack

- **React 19** + **TypeScript**, built with **Vite**
- **Three.js** for the particle cloud (plain WebGL, no React wrapper)
- **i18next** / **react-i18next** for Italian and English
- **react-icons**
- **Vitest** + **Testing Library** for tests, **oxlint** and **Prettier** for code quality

Styling is plain CSS: `src/styles/site.css` for the page, `public/global.css` for fonts and base rules.

---

## :file_folder: Project structure

```
src/
├── App.tsx                  # page layout: sections, top bar, dots, flying photo
├── components/
│   ├── ParticleField/       # WebGL cloud, loaded lazily (shapes.ts holds the shapes)
│   ├── TopBar/              # photo slot + name, section counter, language switch
│   ├── SectionDots/         # side navigation
│   ├── Hero/  About/  Skills/  Journey/  Contacts/   # the five sections
│   ├── Timeline/            # experience / education list
│   ├── Socials/  LanguageSwitch/
├── hooks/
│   ├── usePortfolio.tsx     # all page content in the current language
│   ├── useActiveSection.ts  # section crossing the middle of the viewport
│   └── usePhotoFlight.ts    # scroll-linked flight of the profile photo
├── data/                    # structured content (see table above)
├── i18n/                    # i18next setup and translations
├── styles/site.css
└── test/                    # Vitest tests
public/                      # global.css, fonts, favicon, og-image, 404.html, manifest, sitemap, robots
```

---

## :rocket: Deployment

Every push to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes `build/` to GitHub Pages.

---

## :mailbox: Contact

- Website: [luigigargioni.github.io](https://luigigargioni.github.io)
- LinkedIn: [linkedin.com/in/luigigargioni](https://www.linkedin.com/in/luigigargioni/)
- GitHub: [@luigigargioni](https://github.com/luigigargioni)
