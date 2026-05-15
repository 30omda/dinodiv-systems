## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-15 - Interactive Contact Links and Hit Area Optimization
**Learning:** Converting plain text contact information into interactive links (`mailto:`, `https://wa.me/`) significantly improves the UX by reducing the friction for users to reach out. For multiple links in close proximity (like WhatsApp numbers), using `px-1 -mx-1` expands the clickable hit area and ensures that focus rings do not overlap or feel cramped, providing a better touch and keyboard navigation experience.
**Action:** Always make contact details interactive and optimize hit areas for multiple adjacent links to improve accessibility and usability.
