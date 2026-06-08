## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-22 - Interactive Contact Links Pattern
**Learning:** Converting plain text contact info to interactive links significantly improves usability, especially on mobile. Using `inline-block px-1 -ml-1 rounded` allows for a larger hit target and a clean focus ring that aligns with the text edge, maintaining the visual rhythm of the block.
**Action:** Always wrap plain text email and phone numbers in interactive links using this specific styling pattern for consistency across the landing page.
