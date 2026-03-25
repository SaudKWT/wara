# Wara Building Materials Website

## Project Overview
Single-page marketing website for Wara Building Materials, a construction and building materials business in Kuwait. Tagline: "Built With You". Target audience: residential homeowners and small contractors.

## Tech Stack
- React 19, Vite 6, TypeScript 5.8, Tailwind CSS v4
- Motion (`motion/react`) for animations
- Lucide React for icons
- Path alias: `@/*` maps to project root

## Commands
- `npm run dev` — Dev server on port 3000
- `npm run build` — Production build
- `npm run lint` — TypeScript type check (`tsc --noEmit`)
- `npm run clean` — Remove `dist/`

## Architecture
- Single-page app, no routing — all sections composed in `App.tsx`
- All components in `src/components/` as individual `.tsx` files
- Named arrow function exports: `export const ComponentName = () => {}`
- No state management library — local `useState` only
- Data arrays (stats, products, testimonials) defined as `const` above component

## Design System

### Colors (defined in `src/index.css` @theme block)
- `wara-orange`: #f24e01 (primary accent)
- `wara-black`: #010101 (text, dark backgrounds)
- `wara-dark`: #2e2e30 (secondary dark)
- `wara-light`: #e3dec9 (warm light backgrounds)

### Typography
- **Sans/Display:** Montserrat (weights 300–900)
- **Mono:** JetBrains Mono (for labels, technical text)

### Typography Patterns
- Section labels: `font-mono text-[10px] text-wara-orange font-bold tracking-[0.3em] uppercase`
- Headings: `font-black uppercase tracking-tighter`
- Body: `text-sm font-medium text-wara-dark/50`
- Buttons: `text-[11px] font-bold uppercase tracking-[0.2em] bg-wara-orange text-white`

### Section Structure Pattern
Each section follows this structure:
1. Orange mono label with dot indicator
2. Large bold heading with orange accent word
3. Orange accent lines (3px, decreasing width/opacity)
4. Content area
5. Standard padding: `px-6 lg:px-20 py-24 lg:py-32`

## Component Conventions
- Import motion from `"motion/react"` (NOT `"framer-motion"`)
- Import icons from `"lucide-react"`
- Tailwind utility classes directly in JSX — no CSS modules or styled-components
- Use `whileInView` for scroll animations with `viewport={{ once: true }}`
- Responsive: mobile-first with `lg:` breakpoint for desktop

## Important Gotchas
- Tailwind v4 uses `@theme {}` in `src/index.css` — do NOT create `tailwind.config.js`
- Images served from `public/images/`
- Custom CSS animations (marquee, text-stroke) in `src/index.css` `@layer components`
- Brand reference PDF: `references/Wara - Brand - Visual Identity-compressed.pdf`
- `.env` has `GEMINI_API_KEY` and `APP_URL` — not actively used in frontend components
