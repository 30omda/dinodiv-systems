## 2025-05-15 - [Interactive Contact Information]
**Learning:** When converting plain text contact information (email, phone) to interactive links, standard protocols like `mailto:` and `https://wa.me/` should be used. For WhatsApp links specifically, the phone number in the `href` must exclude the `+` sign for compatibility, even if it's present in the display text.
**Action:** Always use `mailto:` for emails and `https://wa.me/[countrycode][number]` (no `+`) for WhatsApp links. Apply `target="_blank" rel="noopener noreferrer"` to external links.

**Learning:** Styling text links with focus rings can cause layout shifts or overlap with adjacent text/separators if not handled carefully.
**Action:** Use `px-1 -mx-1` in combination with `rounded` and `focus-visible:ring-1` to expand the clickable/focus area slightly without affecting the visual flow of the surrounding text.
