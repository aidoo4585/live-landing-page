# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (defaults to port 8080, but can pass --port to override)
npm run dev

# Type check
npx tsc --noEmit

# Unit tests (vitest)
npm test                        # run once
npm run test:watch              # watch mode
npx vitest run src/path/to/file.test.ts  # single file

# Build
npm run build

# Preview production build
npm run preview
```

## Architecture

This is a single-page React landing page for **Live** — a real-time nightlife app. The stack is Vite + React 18 + TypeScript + Tailwind CSS v3 + shadcn/ui + Framer Motion.

### Page structure

`src/pages/Index.tsx` composes all sections in order. Each section is its own component in `src/components/`. The page has no server-side logic — all sections are static except the waitlist form (client-side state only, no backend connected yet).

### Styling system

All design tokens live in CSS custom properties inside `src/index.css` under `:root`. The Tailwind config at `tailwind.config.ts` maps these to Tailwind color names (`bg-background`, `text-primary`, etc.). When changing colors or spacing tokens, edit `index.css` — not the Tailwind config.

Key utility classes defined in `index.css`:
- `.glass-surface` / `.glass-surface-bright` — glassmorphism card style used across all section cards
- `.eyebrow` — small uppercase label badge used above section headings
- `.section-padding` — consistent vertical/horizontal section spacing
- `.section-shell` — bordered container variant (used in How It Works)
- `.text-gradient-primary` — amber gradient text
- `.glow-primary` / `.glow-primary-strong` — box-shadow glow utilities
- `.live-dot`, `.badge-float`, `.badge-float-reverse` — animation utilities for the hero

The grain texture overlay is on `body::before` via an animated SVG fractal noise pattern. Don't remove it — it's intentional for the premium dark aesthetic.

### Component conventions

- Animations use **Framer Motion** (`motion.div` with `initial`, `whileInView`, `animate`). Scroll-triggered sections use `viewport={{ once: true }}`.
- Icons are from **lucide-react**.
- All shadcn/ui components are in `src/components/ui/`. The `Button` component has two custom variants: `hero` (amber CTA) and `hero-outline`.
- The `@` path alias resolves to `src/`.

### Fonts & visual identity

- Display font: **Bricolage Grotesque** (headings — imported from Google Fonts with `opsz` axis)
- Body font: **Manrope**
- Primary color: amber `hsl(35 96% 59%)` — warm city-light orange, not generic purple
- Green `#4ade80` is reserved exclusively for the "live" broadcast indicator dots

### Assets

Phone mockup images live in `src/assets/`: `phone-mockup-hero.jpg`, `phone-mockup-map.jpg`, `phone-mockup-venue.jpg`. These are the only static images in the project.

### No backend

The waitlist form (`WaitlistSection.tsx`) is purely client-side — `setSubmitted(true)` on submit with a `sonner` toast. When integrating a real backend, this is the only component that needs wiring.
