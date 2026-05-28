## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Contact Information & Visual Alignment
**Learning:** Converting plain text contact information (Email, WhatsApp) into interactive links reduces friction for users. When styling these links with padding (to provide a larger hit area and focus ring), visual alignment can be preserved by using a negative margin (`-ml-1`) on the first link in a block. This ensures the text remains flush with surrounding elements while gaining interactive capabilities.
**Action:** Always make contact details interactive and use the `px-1 -ml-1 rounded` pattern to balance accessibility (hit area) and visual precision (alignment).
