## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-18 - Enhanced Form Validation and Contact Interactivity
**Learning:** For forms managed by external libraries like Formspree, explicit `aria-invalid` attributes derived from the library's error state (e.g., `getFieldErrors`) are necessary to signal validation failures to assistive technologies. Additionally, converting static contact details into interactive links with `px-1 -ml-1` (or `-mx-1`) patterns ensures a generous, aligned focus area for keyboard navigation without disrupting the visual flow.
**Action:** Leverage `aria-invalid` for library-managed forms and use negative-margin padding patterns for inline interactive text to optimize accessibility and aesthetics.
