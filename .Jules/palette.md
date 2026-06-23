## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Accessible Motion & Focus Patterns
**Learning:** Combining Framer Motion's `AnimatePresence` with standard ARIA attributes (`aria-expanded`, `aria-controls`) creates a mobile navigation experience that is both visually "delightful" and technically accessible. Furthermore, using `focus-visible:ring` instead of `focus:ring` allows for high accessibility without impacting the visual experience for mouse users, maintaining the brand's minimalist aesthetic.
**Action:** Use `AnimatePresence` for all conditional UI transitions and prefer `focus-visible` for custom focus indicators to balance UX and accessibility.
