## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Enhancing Interactive Elements with State-Aware Attributes and Exit Animations
**Learning:** For mobile navigation menus, providing visual feedback via `exit` animations (using `AnimatePresence`) and structural feedback via `aria-expanded`/`aria-controls` creates a more cohesive experience for all users. Additionally, when logos serve as "Back to top" triggers, they must have explicit `aria-label`s to describe their function, as their visual appearance alone does not convey the scrolling action to screen readers.
**Action:** Ensure all conditionally rendered UI elements have exit transitions and that functional logo links are properly labeled with their specific action.
