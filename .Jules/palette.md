## 2025-05-12 - Form Accessibility via Screen-Reader-Only Labels
**Learning:** In visually minimalist designs where placeholders are used as labels, adding `<Label>` elements with the `sr-only` class ensures accessibility for screen readers while maintaining the original UI aesthetic. Proper association between label `htmlFor` and input `id` is crucial for reliable automated testing and accessibility.
**Action:** Always include hidden labels for form inputs that only use placeholders to satisfy both design and accessibility requirements.

## 2025-05-13 - Interactive Contact Information Protocols
**Learning:** Converting static contact strings (email, WhatsApp) into interactive links using 'mailto:' and 'https://wa.me/' (without '+' prefix) significantly reduces user friction. Using 'px-1 -ml-1' or '-mx-1' for these inline links expands the clickable area and ensures focus rings align with text without disrupting visual rhythm.
**Action:** Proactively identify static contact details in landing pages and wrap them in appropriate protocol links with expanded hit areas and standard security attributes like 'rel="noopener noreferrer"'.
