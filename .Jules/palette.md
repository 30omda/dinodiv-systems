## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Star Rating Accessibility & Bidirectional Layout Support
**Learning:** Decorative SVG star icon groups inside testimonial components create repetitive noise for screen readers unless wrapped in a container with `role="img"` and a concise `aria-label` (e.g. "5 out of 5 stars"), while marking individual SVGs `aria-hidden="true"`. Furthermore, multilingual testimonial sections containing right-to-left scripts (e.g., Arabic) require `dir="auto"` on quote elements to ensure correct bidirectional layout rendering.
**Action:** Group icon-based star ratings in a single `role="img"` container with a human-readable `aria-label` and use `dir="auto"` for user-generated or multilingual quote text elements.
