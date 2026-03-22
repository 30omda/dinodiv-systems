## 2025-05-15 - Improving Contact Form Accessibility
**Learning:** Screen readers require explicit labels associated with form inputs via `id` and `htmlFor`. While `placeholder` text provides a visual cue, it is not a replacement for a programmatic label. Using `sr-only` allows for maintaining a minimalist design while ensuring WCAG compliance.
**Action:** Always use `<Label>` components with `htmlFor` even if visually hidden, and use `aria-describedby` for error messages to ensure they are announced by assistive technologies.
