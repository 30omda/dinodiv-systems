## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Accessible Star Ratings & Bidirectional Text Support
**Learning:** Rating icon groups (like 5-star testimonials) confuse screen readers when rendered as individual SVG icons. Grouping them in a container with `role="img"` and a concise `aria-label` (e.g. "5 out of 5 stars") while marking individual icons as `aria-hidden="true"` delivers clean screen reader output. Furthermore, adding `dir="auto"` to user quotes automatically applies correct bidirectional layout alignment for RTL languages like Arabic.
**Action:** Wrap icon rating groups in `role="img"` with clear `aria-label` descriptions, and apply `dir="auto"` to user-generated or multilingual quote elements.
