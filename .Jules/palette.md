## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Link Alignment and Hit Targets
**Learning:** For text-based interactive links (like email or phone numbers) aligned with other content blocks, using `px-1 -ml-1` combined with `rounded` ensures the focus ring and clickable area are expanded for better accessibility without breaking the vertical visual alignment of the text.
**Action:** Use `px-1 -ml-1 rounded` for links at the start of a block to balance accessibility and visual precision.
