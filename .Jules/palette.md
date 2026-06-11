## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Interactivity and Visual Alignment of Contact Links
**Learning:** Converting plain text contact information (Email, WhatsApp) into interactive links significantly improves mobile usability. When styling these links with custom focus rings, using `inline-block px-1 -ml-1` ensures that the focus ring is visually balanced and aligned with the surrounding text block edge, while `flex flex-wrap items-center` on the container maintains responsiveness for multiple links.
**Action:** Use standard focus patterns (`focus-visible:ring-2 rounded-md`) and precise alignment utilities (`px-1 -ml-1`) for all text-based interactive links.
