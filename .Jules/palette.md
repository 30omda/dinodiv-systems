## 2025-05-15 - [Form Accessibility and Interactive Contact Info]
**Learning:** Replacing raw HTML inputs with Shadcn components and proper labels significantly improves screen reader accessibility. Adding `aria-invalid` based on form state ensures users are notified of errors.
**Action:** Always associate inputs with `<Label>` using `id` and `htmlFor`. Use `h-auto py-3` for Shadcn `Input` to maintain custom vertical padding. Convert static contact strings to `mailto:` or `wa.me/` links for better UX.
