## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Visual Alignment of Interactive Text Links
**Learning:** For interactive text links within blocks (like Email or WhatsApp), using `px-1 -ml-1 rounded-md` allows for a larger hit-target and a well-aligned focus ring without breaking the vertical visual rhythm of the text block. Additionally, typography classes (e.g., `text-muted-foreground`) must be applied directly to the `<a>` tag as they may not reliably cascade from parent containers in this project's configuration.
**Action:** Apply `px-1 -ml-1 rounded-md` and direct typography classes to all new interactive text links to ensure visual consistency and accessibility.
