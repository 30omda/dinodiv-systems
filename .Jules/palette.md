## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Testimonials Rating Accessibility & Multilingual Bidirectional Alignment
**Learning:** Rating icon groups must be enclosed in an element with `role="img"` and an explicit `aria-label` (e.g. `5 out of 5 stars`), marking individual vector stars with `aria-hidden="true"` to prevent screen readers from announcing repetitive unlabelled graphics. Furthermore, user testimonials in multilingual applications require `dir="auto"` on quote containers to support automatic right-to-left layout alignment for languages like Arabic without breaking left-to-right languages.
**Action:** Always apply `role="img"` with descriptive `aria-label` to star rating groups and use `dir="auto"` on user-generated or multilingual quote text.
