# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on http://localhost:3000
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
pnpm typecheck    # Run TypeScript type checking (nuxt typecheck)
```

Package manager is **pnpm 10.19.0** — do not use npm or yarn.

## Architecture

This is a Nuxt 4 portfolio site using the **Nuxt UI v4** template pattern. There are no tests.

### Content-Driven Pages

Pages are thin Vue shells that fetch data from YAML/Markdown files via `@nuxt/content`:

- `content/index.yml` → `app/pages/index.vue` (landing page, renders section components)
- `content/about.yml` → `app/pages/about.vue`
- `content/projects.yml` + `content/projects/*.yml` → `app/pages/projects.vue`
- `content/speaking.yml` → `app/pages/speaking.vue`
- `content/blog.yml` + `content/blog/*.md` → `app/pages/blog/index.vue` and `app/pages/blog/[...slug].vue`

To change text, headings, or section data, edit the YAML/Markdown files in `content/` rather than Vue components.

### Landing Page Sections

`app/pages/index.vue` composes these section components from `app/components/landing/`:
Hero, About, WorkExperience, Testimonials, Blog, FAQ

### App Config

`app/app.config.ts` holds global settings (profile picture, email, meeting link, availability status), UI theme colors, and footer configuration including social links.

## Code Style

ESLint enforces these rules — follow them in all code:
- **Single quotes** (not double)
- **No semicolons**
- **No trailing commas** (comma-dangle: never)
- **1tbs brace style**
- Icons use `@iconify-json/lucide` and `@iconify-json/simple-icons` with the `i-` prefix pattern (e.g., `i-simple-icons-github`)
