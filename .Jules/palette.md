## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Interactive Contact Links Polish
**Learning:** When converting plain text contact info (Email, WhatsApp) to links, using `inline-block` with `px-1 -ml-1` on the `<a>` tag improves the hit target and focus ring visibility without breaking visual alignment. Additionally, typography classes (like `text-muted-foreground`) must be applied directly to the `<a>` tag as they may not cascade from parent containers in this project's setup.
**Action:** Apply hit-target padding and direct typography styling to all new interactive text links for better UX and consistency.
