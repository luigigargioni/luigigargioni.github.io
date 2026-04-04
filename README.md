# :zap: Personal Website: luigigargioni.github.io

[![Deploy](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/deploy.yml)&ensp;
[![pages-build-deployment](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/luigigargioni/luigigargioni.github.io/actions/workflows/pages/pages-build-deployment)

Modern, responsive portfolio website with Three.js animations, dark/light theme, and advanced SEO optimization.

---

## :rocket: Live Demo

**Running on** <https://luigigargioni.github.io/>

---

## :sparkles: Features

### :art: Modern Design
- **Three.js Particle Background** - Animated geometric particles with mouse interaction
- **Dark/Light Theme Toggle** - Smooth theme switching with localStorage persistence
- **Modern UI/UX** - Glassmorphism, gradients, and micro-interactions
- **Responsive Design** - Mobile-first approach with optimized layouts

### :mag: SEO & Performance
- **Advanced SEO** - Open Graph, Twitter Cards, Schema.org structured data
- **GEO Optimization** - Location-based meta tags for local search
- **Sitemap** - XML sitemap for better search engine indexing
- **PWA Ready** - Progressive Web App manifest and optimizations
- **Performance Optimized** - Code splitting, lazy loading, optimized builds

### :iphone: Mobile Experience
- **Scroll Progress Indicator** - Visual reading progress
- **Touch Optimized** - Smooth gestures and interactions
- **Reduced Motion Support** - Respects user accessibility preferences
- **Optimized Animations** - Reduced particle count on mobile devices

---

## :dart: Requirements

* [Node.js 18.x.x+](https://nodejs.org/it/download/)
* [React 19.x.x](https://react.dev/)
* npm or yarn package manager

---

## :star2: Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Three.js for 3D animations
- React Three Fiber for React integration
- Framer Motion for advanced animations
- And more...

### 2. Start Development Server

```bash
npm start
```

Visit `http://localhost:3000` to see your portfolio.

### 3. Build for Production

```bash
npm run build
```

The optimized build will be in the `build/` directory.

---

## :wrench: Development

### Available Scripts

```bash
npm start          # Start development server on port 3000
npm run build      # Create production build
npm run serve      # Preview production build
npm run lint       # Run ESLint
npm run lintfix    # Fix ESLint errors
npm run pretty     # Format code with Prettier
```

---

## :books: Tech Stack

### Core
* **React 19.2.4** - UI library
* **TypeScript 6.0.2** - Type safety
* **Vite 8.0.3** - Build tool and dev server

### UI & Styling
* **Material-UI 7.3.9** - Component library
* **Emotion** - CSS-in-JS styling
* **Custom CSS Variables** - Theming system

### 3D & Animations
* **Three.js 0.160.0** - 3D graphics library
* **React Three Fiber 8.15.0** - React renderer for Three.js
* **React Three Drei 9.92.0** - Three.js helpers
* **Framer Motion 10.16.0** - Advanced animations
* **React Awesome Reveal** - Scroll animations

### SEO & Performance
* **React Helmet Async** - Meta tag management
* **React Intersection Observer** - Lazy loading
* **Vite Plugins** - Compression and PWA support

---

## :file_folder: Project Structure

```
luigigargioni.github.io/
├── public/
│   ├── fonts/              # Custom fonts
│   ├── images/             # Static images
│   ├── sitemap.xml         # SEO sitemap
│   ├── geo.xml             # GEO data
│   ├── manifest.json       # PWA manifest
│   └── global.css          # Global styles
├── src/
│   ├── components/
│   │   ├── ThreeBackground/    # 3D particle system
│   │   ├── ThemeToggle/        # Dark/light theme switcher
│   │   ├── ScrollProgress/     # Reading progress indicator
│   │   ├── SEO/                # SEO component
│   │   ├── Navbar/             # Navigation
│   │   ├── Landing/            # Hero section
│   │   ├── About/              # About section
│   │   ├── Skills/             # Skills showcase
│   │   ├── Experience/         # Work experience
│   │   ├── Education/          # Education timeline
│   │   ├── Services/           # Services offered
│   │   ├── Contacts/           # Contact form
│   │   └── Footer/             # Footer
│   ├── hooks/
│   │   ├── useTheme.ts         # Theme management
│   │   └── useIntersectionObserver.ts  # Scroll detection
│   ├── styles/
│   │   ├── variables.css       # CSS custom properties
│   │   └── animations.css      # Reusable animations
│   ├── data/                   # Content data
│   ├── utils/                  # Utility functions
│   ├── context/                # React context
│   └── App.tsx                 # Main app component
├── MODERNIZATION.md        # Modernization guide
└── README.md              # This file
```

---

## :art: Customization

### Theme Colors

Edit `src/styles/variables.css`:

```css
:root {
  --primary: #3fc337;        /* Brand color */
  --primary-400: #57d750;    /* Lighter variant */
  --primary-600: #29c51f;    /* Darker variant */
}
```

### Particle System

Edit `src/components/ThreeBackground/ThreeBackground.tsx`:

```typescript
const config: ParticleSystemConfig = {
  particleCount: isMobile ? 50 : 150,
  particleSize: isMobile ? 1.5 : 2,
  particleColor: '#3fc337',
  connectionDistance: isMobile ? 8 : 12,
  mouseInfluence: 0.05,
  animationSpeed: 1,
}
```

### SEO Data

Update meta tags in `index.html` or use the SEO component.

---

## :rocket: Deployment

### GitHub Pages (Automatic)

Push to master branch - GitHub Actions will automatically build and deploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

### Manual Deployment

```bash
npm run build
# Deploy the build/ directory to your hosting provider
```

---

## :chart_with_upwards_trend: Performance

Target Lighthouse scores:
- **Performance**: 95+
- **SEO**: 100
- **Accessibility**: 95+
- **Best Practices**: 95+

---

## :memo: Documentation

For detailed modernization information, see [MODERNIZATION.md](./MODERNIZATION.md)

---

## :handshake: Contributing

This is a personal portfolio, but feel free to fork and use it as a template for your own portfolio!

---

## :page_facing_up: License

This project is open source and available under the MIT License.

---

## :mailbox: Contact

Luigi Gargioni - Computer Engineer

- Portfolio: [luigigargioni.github.io](https://luigigargioni.github.io)
- LinkedIn: [linkedin.com/in/luigi-gargioni](https://linkedin.com/in/luigi-gargioni)
- GitHub: [@luigigargioni](https://github.com/luigigargioni)

---

**Made with :heart: using React, TypeScript, and Three.js**
