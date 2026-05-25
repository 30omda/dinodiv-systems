## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Actionable Contact Links and Hit Area Optimization
**Learning:** Converting plain text contact information (Email, WhatsApp) into interactive links significantly reduces friction for users. Using a combination of padding and negative margin (`px-1 -ml-1`) on text links expands the clickable hit area and focus ring without shifting the text's visual alignment, creating a more accessible and satisfying interaction.
**Action:** Always look for static contact details that can be made actionable and use padding/margin offsets to improve link ergonomics.
