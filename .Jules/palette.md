## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2026-06-14 - Actionable Contact Information
**Learning:** Static contact information (emails, phone numbers) in a digital interface creates friction for users. Making these elements actionable using `mailto:` and `wa.me/` protocols improves usability. For visual alignment in tight layouts, using `inline-block` with negative margins (`-ml-1`) and padding (`px-1`) allows for a larger, accessible hit target without disrupting the vertical rhythm or alignment with surrounding text.
**Action:** When implementing contact details, always wrap them in appropriate protocol links and ensure hit targets are optimized using non-disruptive padding/margin techniques.
