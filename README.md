# Portfolio

Personal portfolio site of **Ángel Morales Romero** — ML/AI Engineer.

**Live at [moralesangel.github.io/portfolio](https://moralesangel.github.io/portfolio)**

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static, dependency-light, and deployed automatically from `main`.

## Highlights

- **Projects pulled from GitHub.** The project grid is generated at build time from the GitHub REST API, so new repositories appear on the site without editing any code. A curated fallback list keeps the build reproducible when the API is unreachable or rate-limited.
- **Zero client-side framework.** Ships as a single HTML page plus a small CSS bundle. The only JavaScript is a scroll-reveal observer that degrades to fully visible content if it fails.
- **Accessible and responsive.** Skip link, semantic landmarks, honours `prefers-reduced-motion`, and verified free of horizontal overflow from 390px to 1440px.

## Tech stack

| | |
| :--- | :--- |
| Framework | Astro 7 (static output) |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Hosting | GitHub Pages via GitHub Actions |

## Project structure

```text
├── .github/workflows/
│   └── deploy.yml          # Build and publish to GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Nav, Hero, Section, ProjectCard
│   ├── data/
│   │   ├── profile.ts      # Bio, education, experience, stack
│   │   └── projects.ts     # GitHub API fetch + curated fallback
│   ├── layouts/
│   │   └── Layout.astro    # Document shell, meta tags, scroll reveal
│   ├── pages/
│   │   └── index.astro     # Single-page composition
│   └── styles/
│       └── global.css      # Theme tokens and reveal animation
└── astro.config.mjs
```

Content lives in [`src/data/`](src/data/) and is kept separate from presentation, so updating the site is usually a matter of editing one object.

## Local development

Requires Node.js 22.12 or later.

```sh
npm install
npm run dev      # http://localhost:4321
```

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check `.astro` and TypeScript files |

## Deployment

Pushing to `main` triggers [the deploy workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages. The workflow also runs weekly so newly created repositories show up without a manual push, and can be triggered on demand from the Actions tab.

The site is served from a subpath, set via `base` in [`astro.config.mjs`](astro.config.mjs). If you fork this repository under a different name, update `base` to match or the stylesheet will not resolve.

## Contact

- **LinkedIn** — [angelmoralesromero](https://linkedin.com/in/angelmoralesromero)
- **GitHub** — [@moralesangel](https://github.com/moralesangel)
