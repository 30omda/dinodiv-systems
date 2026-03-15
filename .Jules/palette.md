## 2025-03-15 - [Accessible Forms with Shadcn]
**Learning:** For accessible forms where only placeholders are desired, use Shadcn `<Label>` components with the `sr-only` class to provide context to screen readers without changing the visual design. Always associate them with `htmlFor` and `id`.
**Action:** Use `sr-only` labels and ARIA error attributes (`aria-invalid`, `aria-describedby`) in all form migrations.
