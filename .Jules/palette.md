## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Smooth and Accessible Navigation Patterns
**Learning:** For animated mobile menus, combining `AnimatePresence` with `aria-expanded` and `aria-controls` creates a cohesive experience for all users. Adding `focus-visible` rings with `rounded-md` and `transition-all` ensures keyboard navigation is visually clear and consistent with the site's design language.
**Action:** Always synchronize ARIA states with animation lifecycles and ensure all interactive elements in the navigation have explicit focus states.

## 2025-05-14 - Interactive Contact Identifiers with Visual Offsets
**Learning:** Converting static contact identifiers (e.g., emails and WhatsApp numbers) into interactive, responsive links (`mailto:`, `https://wa.me/`) dramatically lowers interaction friction. Using horizontal padding and negative margin offsets (`px-1 -ml-1`) allows custom focus rings to have a safe visual buffer and larger hit targets without shifting the grid or text alignments.
**Action:** Always wrap static contact info in interactive, well-aligned anchors and supply focus-visible rings with proper negative margin offsets.
