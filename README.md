# Cats & Soup — Coupon Redeem (static clone)

Static visual clone of [redeem.catsnsoup.com](https://redeem.catsnsoup.com): cozy meadow coupon board, multilingual copy, and client-side form UI.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Or with Caddy (`Caddyfile` serves on `:8080`):

```bash
caddy run
```

## What’s included

- Original skin / logo / button / popup artwork under `assets/`
- Social icons, favicon, OG banner, Neowiz footer mark
- English / Korean / Japanese / Traditional Chinese / Simplified Chinese strings in `assets/i18n.json`
- Language switcher, validation alerts, and loading button state

## Notes

- Coupon submit is **demo-only** — it validates empty fields and shows the alert popup. It does **not** call the live redeem API.
- Layout CSS is rem-scaled (`html` font-size) to match the source’s desktop and ≤750px behavior.
