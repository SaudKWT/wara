When creating or modifying React components:

- Use named arrow function exports: `export const ComponentName = () => {}`
- Place all components in `src/components/` as individual `.tsx` files
- Import motion from `"motion/react"` (NOT `"framer-motion"`)
- Import icons from `"lucide-react"`
- Use Tailwind utility classes directly in JSX — never CSS modules or styled-components
- Follow the section header pattern: orange mono label → large heading → accent lines
- Always include responsive classes (mobile-first, `lg:` for desktop)
- Use `whileInView` for scroll-triggered animations with `viewport={{ once: true }}`
- Keep data arrays (nav links, stats, features) as `const` arrays above the component
- After adding a new section component, import and place it in `src/App.tsx`
