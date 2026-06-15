## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-15 - Mobile Menu Toggle Accessibility & UX
**Learning:** For mobile navigation toggles, combining semantic HTML (`type="button"`), state communication (`aria-expanded`), and programmatic linkage (`aria-controls`/`id`) significantly improves accessibility. Additionally, adding adequate padding (e.g., `p-2`) and custom `focus-visible` rings enhances the interactive experience for both touch and keyboard users without compromising the design for mouse users.
**Action:** Always implement the `aria-expanded` and `aria-controls` pattern for toggles that control collapsible content, and ensure focus indicators are clearly visible and unclipped.
