# [App Name] — Landing Page

Single static landing page for the Taiwanese Hokkien learning app. No build step, no dependencies.

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
cd taigi-landing
python3 -m http.server 8000
# then open http://localhost:8000
```

## Placeholders to replace before publishing (Alex approves)

| Placeholder | Where | Waiting on |
|---|---|---|
| `[App Name]` | `<title>`, header, footer, hero, tone section | Product name decision (Ads shell open item) |
| Signup form `action="#"` | waitlist form in `index.html` | Real waitlist endpoint |
| Phone mock + tone-drill visual | hero + `#tones` section | Real app screenshots |

No pricing on the page — pricing approval (freemium + US$30–40/yr) is still an open Ads-shell item.

## Copy sources

All marketing claims come from the positioning brief (2026-11-20). No claims beyond it:

- **Pillar 1** (Duolingo lacks Taiwanese Hokkien; we have the learning loop) → hero-adjacent `#why` section
- **Pillar 2** (actually corrects your tones) → hero + `#tones` section
- **Pillar 3** (built for "I understand it, but I can't speak it") → `#heritage` section

Per the brief's usage rules: dictionary / MOE corpus / human recordings are **not** sold as differentiators (MOE corpus appears only as a trust line, not a headline). No search-volume claims. English-only copy (English-market launch; zh-TW deferred to phase 2).

## Scope

- This PR: main English landing page only (AG1/AG2 + tone-correction pillar), per Alex 2026-11-20.
- The other 3 ad-group landing pages (from the Ads shell mapping) follow in later PRs after this one is validated.

## Publishing

Never merged/deployed by the bot. Alex merges and publishes by hand.
