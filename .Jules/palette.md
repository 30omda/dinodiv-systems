## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Interactive Contact Links and Consistent Focus States
**Learning:** Converting static contact information (email, WhatsApp) into interactive links with consistent focus rings and negative margin alignment (`px-1 -ml-1 rounded`) significantly improves both connectivity and keyboard accessibility. Ensuring external links use `rel="noopener noreferrer"` and WhatsApp links follow the `wa.me/` protocol (no `+` in href) are essential best practices.
**Action:** Always make contact information actionable and apply shared accessibility patterns (focus rings, negative margins for alignment) across all interactive text elements.
