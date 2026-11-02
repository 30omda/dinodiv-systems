## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2026-08-11 - Accessible Star Ratings and Bidirectional Quotes
**Learning:** In testimonial components, repeating icon-only SVGs creates redundant chatter for screen reader users unless grouped under a container with `role="img"` and a descriptive `aria-label` (with individual SVGs marked `aria-hidden="true"`). Furthermore, multilingual quote text containing Arabic or RTL characters requires `dir="auto"` on quote containers to ensure proper bidirectional alignment and punctuation placement.
**Action:** Always wrap visual rating star clusters in an accessible group label and apply `dir="auto"` on user-submitted or multilingual quote strings.
