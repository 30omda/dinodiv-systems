## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-22 - Balanced Interactive Text Links
**Learning:** For interactive text links that need to remain visually aligned with a block of text or labels, using a combination of px-1 and -ml-1 provides a larger clickable area and a balanced focus ring without shifting the text's visual starting point. This maintains the clean vertical rhythm of the design while significantly improving the interactive experience.
**Action:** Use the px-1 -ml-1 rounded pattern for single-line interactive links starting at a block edge to ensure both visual alignment and touch-target/focus-indicator quality.
