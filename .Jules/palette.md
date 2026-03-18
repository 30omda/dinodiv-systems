## 2025-05-15 - [Accessible Contact Form with Shadcn]
**Learning:** When migrating from raw HTML inputs to Shadcn components in a layout with custom vertical padding, adding the `h-auto` class to Shadcn components prevents layout shifts by allowing the custom padding to define the element's height instead of the default fixed height.
**Action:** Always check for `h-10` or similar fixed heights in Shadcn components when using them as drop-in replacements for styled raw inputs with custom padding.
