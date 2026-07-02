## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Accessible Smooth Transitions for Mobile Menus
**Learning:** For animated conditional UI elements like mobile menus, using `AnimatePresence` with an `exit` prop ensures a smooth user experience when closing. Linking the toggle's `aria-controls` to the menu's `id` and managing `aria-expanded` is critical for screen reader users to understand the state of the transition.
**Action:** Always wrap conditional mobile menus in `AnimatePresence`, provide an `exit` animation, and ensure ARIA attributes correctly reference the menu's `id`.
