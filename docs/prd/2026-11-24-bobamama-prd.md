# PRD: Bobamama — Taiwanese Hokkien in grandma's boba shop

| Field | Value |
|---|---|
| Status | Draft skeleton |
| Date | 2026-11-24 |
| Owner | Alex (product) |
| Related | Landing design spec · Cats & Soup craft extract |

---

## 1. Problem

Heritage speakers often **understand** Taiwanese Hokkien at home but **cannot speak** it confidently — especially tones. Existing apps either skip Taiwanese, or play audio without correcting the learner's production.

## 2. Product vision

**Bobamama** is a Taiwanese Hokkien learning product whose home is a **pearl milk tea shop** run by grandma.

- Learners enter the shop, unlock people, and learn through **story chapters** and **conversation**.
- Tone correction is a core differentiator: the app listens and tells you which tone went wrong.
- Progression feel is game-like (chapters, unlocks, return loops). Exact systems (check-ins, points, cards) are **TBD**.

## 3. Target users

Primary (v1 English market):

- Heritage speakers who heard Taiwanese growing up
- Can follow family speech better than they can produce it
- Want speaking practice, not character drills

Secondary / later: zh-TW market (deferred).

## 4. Goals & non-goals

### Goals
- Make “speak Taiwanese with correct tones” feel natural inside a cozy shop world
- Ship a credible **waitlist landing** that sells the world + tone correction + heritage fit
- Leave room to grow into a full learning loop (chapters → speak → unlock chats)

### Non-goals (now)
- Fully designed economy (points, cards, streak rules)
- Live speech recognition in the landing prototype
- Pricing page
- Selling dictionary / MOE corpus as the headline differentiator

## 5. Experience pillars (locked from brief)

1. **Learning loop** — practice that closes the hear→speak gap  
2. **Tone correction** — not “listen and hope”  
3. **Heritage-first** — start from what they already understand  

## 6. World & UX metaphor

| Concept | Intent |
|---|---|
| Home screen | The boba shop |
| Characters | Unlockable people to chat with (grandma first) |
| Chapters | Story scenes (family, food, neighbors…) |
| Progress | Implied unlocks / return; mechanics TBD |
| Tone stall | Correction moment (drill on landing; full listen later) |

## 7. Phased scope

### Phase 0 — Landing (current)
- Full-bleed shop hero, brand-first Bobamama
- Tease: unlock cast, story chapters, chats
- Interactive tone-pattern drill (demo)
- Heritage section + waitlist form (prototype OK)

### Phase 1 — App shell (future)
- Shop as hub
- 1–2 open characters + 1 locked tease
- First story chapter + speak/correct loop (MVP definition TBD)

### Phase 2+ — Systems (future, undecided)
- Check-in / streak
- Points / pearls economy
- Cards or collectibles
- More characters & branching stories

## 8. Success metrics (draft — confirm later)

Landing:
- Waitlist signup rate
- Time on page / CTA clicks (tone drill, waitlist)

Product (later):
- Speaking sessions / week
- Tone accuracy improvement
- Chapter completion / character unlock rate

## 9. Open questions

- [ ] Check-in: daily? session-based? soft or hard streak?
- [ ] Currency: pearls only, or also cards / stamps?
- [ ] How many characters in chapter 1? Unlock rules?
- [ ] Speech: on-device vs server; languages for ASR feedback copy
- [ ] Waitlist backend & CRM
- [ ] Final illustration pipeline (replace concept art)
- [ ] Pricing (freemium + annual — pending Ads-shell approval)

## 10. Copy & claims rules

- English-first for launch marketing
- Claims only within positioning brief pillars
- No search-volume claims; no dictionary/MOE as hero differentiator
- No pricing on landing until approved

## 11. References in repo

- Product record: `PRODUCT.md`
- Design system: `DESIGN.md` (+ `.impeccable/design.json`)
- Landing design: `docs/superpowers/specs/2026-11-24-bobamama-boba-shop-landing-design.md`
- Visual craft extract: `docs/DESIGN-catsnsoup-extract.md`
- Live page: static `index.html` / `styles.css` / `app.js`
