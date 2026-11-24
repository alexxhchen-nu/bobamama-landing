# Design extract: redeem.catsnsoup.com

Source: https://redeem.catsnsoup.com  
Capture: Firecrawl branding + full-page screenshot + original CSS/JS assets  
Stack target for Bobamama: static HTML/CSS/JS

Reference screenshot: `docs/reference-screenshot.png`

---

## Personality (observed)

- Tone: playful, cozy idle-game
- Energy: low / calm
- Audience: mobile gamers
- Look: hand-drawn illustration world; UI is mostly painted into artwork, not generic cards

---

## Color tokens (from CSS + branding)

| Role | Value | Evidence |
|---|---|---|
| Meadow / page bg | `#739d5b` | `body`, `.sk02` |
| Leaf accent / lang pill | `#b1d07f` | `.lang-box .selected`, branding accent |
| Lang border | `#c1e08e` | lang control border |
| Lang text | `#f4ffe1` | lang label |
| Form help text | `#b04e51` | `.input-txt p` |
| Soft pink label | `#ffccce` | Find User ID title |
| Cautions text | `#6b7452` | `.notice-box` |
| Popup text | `#815b59` | `.pop-alert p` |
| Input text | `#000` / placeholder `#585858` | form inputs |
| Dim overlay | `rgba(0,0,0,.75)` | `.dim` |
| Brand red (banner, from branding) | `#E51836` (estimated from art / branding primary) | logo banner in skin |

Note: Most “wood / pink panel / yellow button” color lives **inside raster skins**, not CSS variables.

---

## Typography

- UI body: **Noto Sans** (+ KR / JP / TC / SC by `html[lang]`)
- Weights used: 300 / 400 / 500 / 600 / 700
- Observed sizes (CSS, rem-based; desktop `html { font-size: 62.5% }` → 1rem ≈ 10px):
  - Form input: `3.5rem` (~35px)
  - Help body: `2.2rem`
  - Cautions: `2.2–2.4rem`
- Logos / “Enter the coupon code” / Register label: **image glyphs**, not live text

---

## Layout system

- Scale model: rem root (`62.5%` desktop; `31.25%` when width or height ≤ 750px)
- Canvas: `.wrap` max `2560px`, min `320px`
- Content column: `.content` max `755px`, centered
- Section order:
  1. `.sk01` — full-bleed hero skin (meadow + wooden board + form + CTA art)
  2. `.sk02` — green repeat bg + parchment “Cautions” + trees overlay
  3. Footer — NEOWIZ mark
  4. Modal dim + parchment alert

Hero is one composition (illustration plane), not a dashboard.

---

## Components

| Pattern | Behavior |
|---|---|
| Social icons | Absolute top-right, circular outline icons |
| Language pill | Green rounded control + dropdown (KR/ENG/TW/CN/JP) |
| Board form | Two centered transparent inputs over pink panel (panel is in skin art) |
| Primary CTA | Image button (cat-head toast / Register), loading state swaps art + gif |
| Help block | “Find User ID” + red instructional copy under inputs |
| Cautions scroll | Numbered list on parchment art |
| Alert popup | Parchment modal + Confirm image button |

Borders/shadows: almost none in CSS — depth is painted.

---

## Image inventory (extracted assets)

| Asset | Use |
|---|---|
| `skin01.*.jpg` (2560×1320) | Hero meadow + wooden board + pink form pocket + picnic CTA ledge |
| `skin02.*.jpg` | Lower forest / parchment backdrop |
| `bg_p.*.jpg` | Vertical green fill under sk02 |
| `tree.*.png` | Foreground trees on `.wrap:before` |
| `logo.*.png` ×5 langs | Red banner wordmark |
| `tit.*.png` ×5 langs | Yellow “enter code” title plate |
| `btn_register.*.png` ×5 langs | Primary CTA |
| `btn_register_bg.*.png` | Loading/disabled CTA shell |
| `loading.*.gif` | Spinner on CTA |
| `pop_bg.*.png` / `pop_btn_confirm.*.png` | Alert chrome |
| Social icos + favicon + snsBanner | Chrome / OG |

---

## What is illustration vs code

- **Illustration owns:** meadow, cats, wood board, pink panel, picnic cloth, Register shape, parchment, trees
- **Code owns:** inputs, language menu, list copy, i18n, popup show/hide, form validation

---

## Gaps / limits

- Desktop screenshot does not prove hover/animation timing
- Mobile uses the same art with rem downscale; no separate mobile skins observed
- Firecrawl `h1/h2` sizes are misleading (titles are background images)
- Branding confidence on colors ~0.55–0.77; prefer CSS + screenshot over auto branding alone

---

## Borrow for Bobamama (guidance only)

Keep: full-bleed illustrated world, rem game-UI scale, soft meadow greens, painted primary CTA, low-card / no-dashboard layout.  
Do not keep as hero metaphor: coupon wooden board / redeem form.  
Bobamama world should be: Taiwanese grandma making pearl milk tea in a shop, chatting, learning 台语.
