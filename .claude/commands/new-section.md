Create a new page section component for the Wara website.

The component must follow these patterns from existing sections:
- Named arrow function export in `src/components/`
- Include motion animations (`initial`/`whileInView` with `viewport={{ once: true }}`)
- Use the section header pattern: orange mono label + large heading + accent lines
- Standard section padding: `px-6 lg:px-20 py-24 lg:py-32`
- Responsive layout with mobile-first approach (`lg:` breakpoint for desktop)
- Use `wara-` color tokens from the design system
- Add the component import and placement in `src/App.tsx`

Ask me:
1. What is the section name?
2. What content should it display?
3. Where in the page order should it appear?
