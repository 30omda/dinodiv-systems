## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Accessible Ratings and Bidirectional Testimonials
**Learning:** Individual star icon SVGs clutter screen reader navigation unless grouped inside a container with `role="img"` and a descriptive `aria-label` (e.g. "5 out of 5 stars"), while hiding individual icons with `aria-hidden="true"`. Furthermore, adding `dir="auto"` to multilingual or Arabic text quotes ensures proper bidirectional reading order and text alignment without hardcoding directionality.
**Action:** Always wrap star rating icon groups in an image role container with a descriptive ARIA label, and apply `dir="auto"` to user-generated or multilingual content elements.
