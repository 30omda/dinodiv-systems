## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2026-09-20 - Accessible Star Rating Groups & Bidirectional Testimonials
**Learning:** For star rating groups, wrapping decorative SVG star icons in a container with `role="img"` and `aria-label={`${stars} out of 5 stars`}` while marking individual SVGs with `aria-hidden="true"` prevents noisy screen reader output. Additionally, adding `dir="auto"` to user testimonial quotes ensures correct bidirectional text alignment for multilingual content (e.g., Arabic).
**Action:** Always summarize rating icon groups with `role="img"` and `aria-label`, and use `dir="auto"` on user-generated or multilingual quotes.
