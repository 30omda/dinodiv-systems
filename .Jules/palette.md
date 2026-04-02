## 2025-05-15 - [Interactive Multi-Value Contact Links]
**Learning:** For contact sections with multiple values (e.g., dual WhatsApp numbers), providing individual interactive links (wa.me) rather than a single static text block significantly improves accessibility and usability. Using `flex-wrap gap-x-2` allows them to flow naturally while remaining distinct targets.
**Action:** Always look for static contact information and convert it into appropriate actionable links (mailto, wa.me, tel), ensuring each value is independently reachable.

## 2025-05-15 - [Minimal Diff Compliance]
**Learning:** Bundling accessibility improvements (labels/aria) with interaction improvements (links) can exceed the 50-line limit and dilute the "micro-UX" focus. Additionally, generating a `pnpm-lock.yaml` in an environment where it's missing can cause massive, unwanted diffs.
**Action:** Stick to a single logical UX improvement per PR and ensure no infrastructure files (like lockfiles) are accidentally included. Use `restore_file` to revert and isolate changes if a bundle becomes too large.
