## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Accessible Ratings and Bidirectional Testimonials
**Learning:** Star rating groups composed of multiple SVG icons should be grouped in a container with `role="img"` and a descriptive `aria-label` (e.g. "5 out of 5 stars"), while marking individual SVGs with `aria-hidden="true"`, preventing screen readers from announcing redundant unlabelled icons. Furthermore, testimonial cards containing multilingual or RTL text (like Arabic) require `dir="auto"` on quote elements to maintain proper reading order and punctuation.
**Action:** Always wrap icon-based rating groups with an explicit ARIA image role and descriptive label, and apply `dir="auto"` to user-generated or multilingual text containers.
