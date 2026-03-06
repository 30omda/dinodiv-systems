## 2025-05-22 - [Contact Form Accessibility]
**Learning:** Screen readers require explicit label associations even when placeholders are used. Using 'sr-only' labels maintains visual design while providing necessary context. 'aria-describedby' and 'aria-invalid' are essential for communicating form validation status to assistive technologies.
**Action:** Always include visually hidden labels for all form inputs and link them using 'id'/'htmlFor'. Connect error messages to inputs using 'aria-describedby'.
