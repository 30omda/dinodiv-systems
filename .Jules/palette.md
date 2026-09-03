## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Testimonial Accessibility and Multilingual Text Support
**Learning:** Rating icon groups (like 5-star ratings) present visual information that screen readers read as repeating icons unless grouped with `role="img"` and an explicit `aria-label`. Additionally, testimonial cards containing non-English or RTL text (like Arabic quotes) require `dir="auto"` on the paragraph element so browser text direction and punctuation auto-align correctly.
**Action:** Always group decorative star ratings under a single accessible container image with `aria-label`, hide individual star icons, and apply `dir="auto"` to user-generated or multilingual quote text.
