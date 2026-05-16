## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-15 - Interactive Contact Links & Click Target Optimization
**Learning:** Converting plain-text contact information (email, WhatsApp) into interactive links (`mailto:`, `wa.me/`) significantly improves UX. Using `px-1` with negative margins (e.g., `-ml-1`, `-mx-1`) on text links expands the clickable hit target (Fitts's Law) without disrupting visual alignment, and provides a clear focus ring that doesn't overlap adjacent content.
**Action:** Always make contact information interactive and optimize hit targets for text-based links using padding and negative margins.
