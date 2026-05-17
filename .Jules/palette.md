## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-05-17 - Interactive Contact Information
**Learning:** Making email and phone contact details interactive (using `mailto:` and `https://wa.me/`) significantly improves UX by reducing friction. Applying consistent hover and focus states with expanded clickable areas (`px-1 -mx-1` or `px-1 -ml-1`) ensures these elements are both discoverable and accessible to all users.
**Action:** Always wrap static contact text in appropriate protocol links with tactile feedback for better usability.
