## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-07 - Interactive Contact Information and Visual Alignment
**Learning:** Converting plain text contact details to interactive links (, ) significantly reduces friction. To maintain the minimalist visual alignment of the design system, use 'px-1 -ml-1 rounded' on the link elements. This ensures that the text remains perfectly aligned with its label/container while providing a clear, high-quality focus indicator that doesn't overlap with adjacent elements.
**Action:** Always make contact information interactive and use the offset-padding pattern ('px-1 -ml-1') for text links to preserve vertical rhythm and alignment.

## 2025-05-15 - Interactive Contact Information and Visual Alignment
**Learning:** Converting plain text contact details to interactive links (mailto:, wa.me) significantly reduces friction. To maintain the minimalist visual alignment of the design system, use 'px-1 -ml-1 rounded' on the link elements. This ensures that the text remains perfectly aligned with its label/container while providing a clear, high-quality focus indicator that doesn't overlap with adjacent elements.
**Action:** Always make contact information interactive and use the offset-padding pattern ('px-1 -ml-1') for text links to preserve vertical rhythm and alignment.
