## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-22 - Interactive Contact Information
**Learning:** Converting static contact details (email, WhatsApp) into interactive links (`mailto:`, `wa.me/`) significantly improves UX by reducing friction. Using `-ml-1 px-1` on links aligned with text blocks ensures the focus ring is visually balanced and doesn't create "jumping" text while maintaining accessibility.
**Action:** Always make contact information interactive and apply consistent focus styles that respect the layout's alignment.
