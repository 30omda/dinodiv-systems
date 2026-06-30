## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Smooth & Accessible Conditional UI Transitions
**Learning:** For conditional UI elements like mobile menus, using Framer Motion's `<AnimatePresence>` with an `exit` prop ensures smooth removal from the DOM. Synchronizing this with ARIA attributes (`aria-expanded`, `aria-controls`) and proper `id` association provides a complete, accessible, and delightful interaction pattern.
**Action:** Always wrap conditional animated components in `<AnimatePresence>` and provide explicit `exit` states alongside semantic ARIA attributes.
