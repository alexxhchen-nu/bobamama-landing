# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (no build step). Confirmed by existing repo.

## Users

Primary (v1 English market): heritage speakers who grew up hearing Taiwanese Hokkien at home, understand more than they can speak, and want speaking practice with tone correction—not character quizzes.

Secondary / later: zh-TW market (deferred; open decision).

## Product Purpose

Bobamama helps people **speak** Taiwanese Hokkien with tones others understand. The durable home of the product is grandma’s **pearl milk tea shop**: learners unlock people, follow story chapters, and practice conversation. Success on the current surface means a clear waitlist landing that sells that world and the tone-correction promise.

## Positioning

Unlike generic language apps that skip Taiwanese or only play recordings, Bobamama is built around **production + tone correction** inside a shop-and-story world aimed at heritage speakers (“I understand it, but I can’t speak it”).

## Operating Context

- Now: marketing / waitlist landing (`index.html`)
- Later: learning app whose hub screen is the boba shop
- Prototype waitlist does not store email until a backend is chosen
- Claims must stay within the positioning brief (2026-11-20)

## Capabilities and Constraints

Confirmed:
- Landing communicates shop hub, unlockable cast tease, tone drill demo, heritage fit, waitlist CTA
- English-first marketing copy; Taiwanese characters may appear as accent
- No pricing on the landing until Ads-shell approval
- Do not sell dictionary / MOE corpus as a headline differentiator
- No search-volume claims

Open (explicitly undecided):
- Check-in / streak rules
- Points / pearls / cards economy
- Character unlock rules and chapter count
- Speech recognition approach (on-device vs server)
- Waitlist backend & CRM
- Final illustration pipeline (concept art is temporary)
- Pricing (freemium + ~US$30–40/yr floated; not approved for page)

## Brand Commitments

- Name: **Bobamama**
- World: Taiwanese grandma’s pearl milk tea shop; learning through chats and story chapters
- Voice: warm, playful, grandma-corrects-you; cozy idle-game craft energy without copying Cats & Soup IP
- Binding craft reference (not brand): `docs/DESIGN-catsnsoup-extract.md` for illustration-forward, rem-friendly game UI feel only
- Product PRD: `docs/prd/2026-11-24-bobamama-prd.md`

## Evidence on Hand

- Live landing implementation: `index.html`, `styles.css`, `app.js`
- Temporary concept art: `assets/bobamama-shop-hero.jpg`, `assets/bobamama-characters.jpg`
- Design notes: `docs/superpowers/specs/2026-11-24-bobamama-boba-shop-landing-design.md`
- Do **not** invent testimonials, press, or metrics beyond the draft list in the PRD

## Product Principles

1. **Heritage first** — start from what people already understand.
2. **Correct the tone** — feedback beats “listen and hope.”
3. **Shop before systems** — the boba stall world leads; economy mechanics wait until designed.
4. **Honest prototype** — waitlist and drills may be demo-only until backends exist; say so in UI.
5. **Claim discipline** — only brief-approved differentiators on marketing surfaces.

## Accessibility & Inclusion

- Prefer reduced-motion respect (`prefers-reduced-motion`)
- Visible focus rings; skip link on landing
- Contrast: body text on milk/wood surfaces should stay ≥4.5:1; large display text ≥3:1
- No product-specific WCAG level mandated yet (open)
