## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Accessible & Animated Mobile Navigation
**Learning:** A standard accessible mobile navigation toggle in this repository requires the button to have `type="button"`, `aria-label="Toggle menu"`, `aria-expanded` (synchronized with the open state), and `aria-controls` matching the `id` of the menu container element. To prevent custom focus rings from being clipped and to provide a sufficient touch target, icon-only buttons should include padding (e.g., `p-2`).
**Action:** Use `<AnimatePresence>` with an `exit` prop on the mobile menu container to ensure smooth transition-out animations, and always synchronize ARIA states with the reactive menu visibility state.
