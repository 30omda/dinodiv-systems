## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Consistent Focus States and ARIA in Custom Navigation
**Learning:** In sections using raw HTML elements (like `<a>` and `<button>`) instead of Shadcn components, manual application of `focus-visible:ring-2 focus-visible:ring-primary rounded-md` is essential to maintain design system consistency. Additionally, using `AnimatePresence` for mobile menu exits provides a significantly more polished feel than simple conditional rendering.
**Action:** Always audit raw HTML interactive elements for focus-visible rings and ensure mobile menus have exit transitions.
