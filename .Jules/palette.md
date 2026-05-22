## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-14 - Actionable Contact Information and Enhanced Form Feedback
**Learning:** Converting static contact details (email, WhatsApp) into interactive links (`mailto:`, `wa.me/`) significantly reduces friction for user outreach. When styling these links within text blocks, using negative margins (`-ml-1`) and padding (`px-1`) expands the interactive hit area without disrupting visual alignment. Additionally, tying `aria-invalid` to the form's error state (e.g., via `@formspree/react`) provides immediate and accessible feedback to screen reader users.
**Action:** Always make contact information actionable and ensure form fields communicate validation states to assistive technologies.
