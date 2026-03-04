## 2025-05-15 - [Accessible Contact Form with Screen Reader Labels]
**Learning:** For landing pages using placeholders as labels, `sr-only` labels are essential for screen reader support without breaking the visual design. Additionally, wrapping third-party error components like `ValidationError` in a div with an ID allows for robust `aria-describedby` linking.
**Action:** Always provide hidden labels for placeholder-only inputs and ensure error messages are programmatically linked to their respective fields.
