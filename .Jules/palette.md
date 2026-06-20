## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Comprehensive Navigation Accessibility & Smooth Transitions
**Learning:** Micro-UX improvements like adding `aria-expanded`, `aria-controls`, and `aria-label` to navigation elements significantly improve screen reader compatibility. Additionally, using Framer Motion's `AnimatePresence` with an `exit` prop prevents abrupt UI unmounting, creating a more professional feel.
**Action:** Always synchronize `aria-expanded` with state and ensure smooth exit animations for conditional UI components like mobile menus.
