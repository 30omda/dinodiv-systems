## 2024-04-23 - Enhance Contact section accessibility and interactivity
**Learning:** For 'placeholder-only' form designs, using Shadcn UI components with `sr-only` labels and explicit `id`/`htmlFor` associations maintains visual minimalism while ensuring screen reader accessibility and reliable Playwright testing via the `get_by_label` locator.
**Action:** Always wrap `ValidationError` components in a `div` with a unique `id` and `role="alert"` and use `aria-describedby` on the input to ensure errors are correctly announced by screen readers.
