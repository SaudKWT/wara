When writing styles for this project:

- Colors are defined as CSS custom properties in `src/index.css` @theme block
- Use Tailwind color classes: `text-wara-orange`, `bg-wara-black`, etc.
- For opacity variants use slash syntax: `text-white/30`, `bg-wara-black/95`
- Custom CSS animations go in `src/index.css` `@layer components` block
- Do NOT create a `tailwind.config.js` — this project uses Tailwind CSS v4 with CSS-based config
- Text stroke utilities are defined in `index.css`: `text-stroke-white`, `text-stroke-orange`, `text-stroke-black`
- Standard button: `bg-wara-orange text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em]`
- Standard section padding: `px-6 lg:px-20 py-24 lg:py-32`
- Font classes: `font-sans` (Montserrat), `font-mono` (JetBrains Mono)
