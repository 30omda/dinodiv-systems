## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Star Rating Accessibility and Multilingual Text Direction
**Learning:** Grouping repeating star icon lists into a container with `role="img"` and an explicit `aria-label` (e.g. "5 out of 5 stars") while hiding individual SVGs with `aria-hidden="true"` delivers concise screen reader feedback without repeating icons. Adding `dir="auto"` to user quotes automatically adjusts text alignment for right-to-left scripts like Arabic.
**Action:** Always wrap visual star ratings in a single image landmark with an aria-label and mark child icons aria-hidden, and use `dir="auto"` on user-generated or multilingual text containers.
