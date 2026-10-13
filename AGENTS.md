<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep brand colors in semantic global CSS tokens and map them to Tailwind; shared controls inherit these roles to prevent page-specific palette drift.
- Use distinct TanStack leaf routes for public pages with the shared header/footer in the root; each page owns metadata and semantic content.
- Centralize editable listings, team profiles, district descriptions and photography in the site data module; only verified listings and team records may populate catalogs.
- Keep wizard drafts only in the root React provider during navigation, never persistent browser storage, so personal data does not remain on shared devices.
- Public inquiry intake is write-only through a validated server function with signed anti-spam challenge, honeypot and atomic per-email rate limiting; inquiry records have no browser read grants.
- Store submitted inquiries in Lovable Cloud and confirm only successful storage; email delivery is a separate integration and must never be implied.
- Prebundle the shared React, Slot and discovered client dependency graph at startup; this prevents late optimizer passes from mixing React instances in an open preview.
