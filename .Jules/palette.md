## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Interactive Contact Information Styling
**Learning:** For contact information links (email, phone) in a minimalist layout, using `px-1 -ml-1 rounded` expands the hit target and provides a clean focus ring while maintaining visual alignment with adjacent text. Ensuring proper protocols (mailto:, wa.me/ without +) improves usability.
**Action:** Apply the `px-1 -ml-1 rounded transition-colors focus-visible:ring-1 focus-visible:ring-primary outline-none` pattern to text-based links to ensure accessibility and consistent brand interaction.
