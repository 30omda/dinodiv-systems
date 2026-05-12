## 2025-05-15 - [Interactive Contact Information & Accessible Form]
**Learning:** Static text for contact information (email, WhatsApp) on a landing page is a friction point for mobile users. Transforming them into actionable links with proper focus styles significantly improves both usability and accessibility.
**Action:** Always wrap contact details (emails, phone numbers) in appropriate `mailto:` or `tel:`/`wa.me/` links and ensure they have visible focus indicators and hover states.

**Learning:** Formspree integration provides a `state.errors` object that can be used to dynamically toggle `aria-invalid` on form fields, providing immediate feedback to screen reader users about validation errors.
**Action:** Use `state.errors?.getErrors("fieldName")?.length > 0 ? "true" : undefined` on input elements managed by Formspree to enhance accessibility.
