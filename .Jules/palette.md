## 2025-05-15 - Improving Formspree Accessibility with Shadcn

**Learning:** When using `@formspree/react`'s `ValidationError` with Shadcn's `Input` or `Textarea`, standard `aria-describedby` links can fail if the error component isn't properly wrapped. Using `!!state.errors?.getFieldErrors("field")?.length` provides a safe way to toggle `aria-invalid` without runtime crashes when `state.errors` is null.

**Action:** Wrap `ValidationError` in a `div` with a unique `id` and `role="alert"`, then link it to the input via `aria-describedby`. Always use the safe optional chaining pattern for checking Formspree field errors.
