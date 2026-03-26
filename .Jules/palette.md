## 2026-03-26 - [Accessible Formspree Validation]
**Learning:** Using the pattern `!!state.errors?.getErrors("field")?.length` for the `aria-invalid` attribute safely handles null states from Formspree's `useForm` hook while ensuring screen readers correctly announce field errors.
**Action:** Always wrap field validation checks in this safe access pattern when integrating Formspree with Shadcn inputs.

## 2026-03-26 - [Shadcn Component Migration Layout Consistency]
**Learning:** When migrating from raw HTML inputs with custom vertical padding (e.g., `py-3`) to Shadcn components, adding the `h-auto` class is necessary to prevent height conflicts and maintain visual consistency with the original design.
**Action:** Include `h-auto` when applying custom padding to standard Shadcn Input or Textarea components.
