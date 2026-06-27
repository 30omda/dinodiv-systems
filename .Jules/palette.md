## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-27 - Micro-UX Constraints and Consistent Focus Ring Styling
**Learning:** Palette improvements must be strictly under 50 lines and focus on a single UX win to ensure high-quality, targeted PRs. Additionally, interactive text links in this minimalist UI require specific styling (`px-1 -ml-1 rounded-md`) to ensure focus rings are visible and well-aligned without disrupting the visual alignment of text blocks.
**Action:** In future tasks, verify the line count of the diff and use the established `px-1 -ml-1` pattern for all inline-to-block text links to maintain design system consistency.
