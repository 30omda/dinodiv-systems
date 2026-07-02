## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Accessible & Animated Navigation
**Learning:** Combining Framer Motion's `AnimatePresence` for smooth exit transitions with standard ARIA attributes (`aria-expanded`, `aria-controls`) ensures that UI polish doesn't come at the cost of accessibility. Custom focus-visible rings using padding and negative margins (`px-1 -ml-1`) provide clear keyboard navigation without disrupting visual alignment.
**Action:** Always pair conditional UI animations with the appropriate ARIA states and ensure interactive elements have high-visibility focus indicators.
