## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Accessible Animated Navigation Menus
**Learning:** In components using Framer Motion's `AnimatePresence` for conditional rendering (like mobile menus), combining the `exit` animation with standard ARIA attributes (`aria-expanded`, `aria-controls`, and `id`) ensures that both the visual transition and the accessibility state remain synchronized during the mount/unmount cycle.
**Action:** When implementing animated mobile menus, always wrap the menu content in `<AnimatePresence>`, use `aria-expanded` on the toggle, and ensure the menu container has a stable `id` matching the toggle's `aria-controls` to maintain accessibility during animations.
