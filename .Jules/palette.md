## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Accessible Mobile Navigation with Exit Animations
**Learning:** A standard accessible mobile navigation toggle in this repository requires the button to have `aria-expanded` (synchronized with the open state) and `aria-controls` matching the `id` of the menu container. Additionally, for smooth UX, the mobile menu's `motion.div` must be wrapped in `<AnimatePresence>` with an `exit` prop to ensure the transition-out animation plays when the menu is unmounted.
**Action:** Always synchronize `aria-expanded` with mobile menu state and use `<AnimatePresence>` for exit animations on conditional navigation elements.
