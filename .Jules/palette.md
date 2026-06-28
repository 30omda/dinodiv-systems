## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Accessible Mobile Navigation with Smooth Transitions
**Learning:** Mobile navigation menus often suffer from "abrupt disappearance" when closed. Using Framer Motion's `<AnimatePresence>` with an `exit` prop ensures a smooth transition. Additionally, a standard accessible toggle requires `aria-expanded`, `aria-controls`, and `type="button"`.
**Action:** Wrap conditionally rendered navigation components in `<AnimatePresence>` and ensure toggle buttons have complete ARIA attributes synchronized with the open state.
