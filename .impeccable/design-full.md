---
name: Bobamama
description: Cozy Taiwanese Hokkien learning in grandma's pearl milk tea shop
colors:
  milk: "#FFF8F0"
  foam: "#FFFCF7"
  chalk: "#FFF9EC"
  bark: "#7A5649"
  bark-deep: "#5B3F34"
  ink: "#3D2A22"
  wood: "#B98962"
  wood-light: "#D2A77C"
  leaf: "#739D5B"
  leaf-ink: "#4C673C"
  leaf-light: "#B1D07F"
  leaf-pale: "#EAF2D9"
  cta: "#FFEF6E"
  blush: "#F5A3A0"
  page-wash-top: "#E8F0D8"
  page-wash-bottom: "#F3E6D4"
typography:
  display:
    fontFamily: "Fuzzy Bubbles, Balsamiq Sans, ui-rounded, Segoe UI, sans-serif"
    fontSize: "clamp(1.85rem, 4.2vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  brand-mark:
    fontFamily: "Fuzzy Bubbles, Balsamiq Sans, ui-rounded, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Fuzzy Bubbles, Balsamiq Sans, ui-rounded, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Fuzzy Bubbles, Balsamiq Sans, ui-rounded, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Balsamiq Sans, ui-rounded, Segoe UI, system-ui, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Balsamiq Sans, ui-rounded, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
rounded:
  pill: "999px"
  panel: "28px"
  bubble: "22px"
  chip: "18px"
  control: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  section-y: "72px"
  container: "960px"
  container-wide: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.bark-deep}"
  button-ghost:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.bark}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-sm:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 16px"
  chip-selected:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.pill}"
    padding: "12px 16px"
  cast-button:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.chip}"
    padding: "10px 14px"
  input-email:
    backgroundColor: "{colors.foam}"
    textColor: "{colors.bark-deep}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 18px"
---

# Design System: Bobamama

## Overview

**Creative North Star: "Grandma's Pearl Stall"**

Bobamama looks like a cozy pearl milk tea shop you can walk into—warm wood, milk foam, leaf greens, and a little idle-game playfulness. Illustration and scene carry the brand; UI is chunky, rounded, and tactile so buttons feel like counter props, not SaaS chrome.

The system rejects coupon-board redeem metaphors, purple-gradient AI defaults, and dense dashboard layouts. Marketing surfaces lead with the **Bobamama** name at hero scale, one headline, one short support line, and a full-bleed shop image.

**Key Characteristics:**
- Full-bleed illustrated shop as the primary visual plane
- Warm wood + milk tea neutrals with meadow leaf accents
- Chunky bordered pills with hard offset shadows (tactile game UI)
- Display face Fuzzy Bubbles; body Balsamiq Sans
- Progress teased via cast unlocks / pearls—economy systems stay soft

## Colors

A milk-tea counter palette: bark browns for structure, foam for surfaces, leaf greens for life, lemon CTA for action.

### Primary
- **Counter Bark** (`#7A5649` / `#5B3F34`): navigation bar, borders, primary text, button outlines
- **Ink** (`#3D2A22`): darkest readable text on wood trays and other mid-tone fills
- **Pearl Lemon CTA** (`#FFEF6E`): primary actions and hero brand mark highlight

### Secondary
- **Stall Leaf** (`#739D5B` / `#B1D07F` / `#EAF2D9`): accents, success verdict, soft section washes
- **Leaf Ink** (`#4C673C`): leaf-colored labels on foam/milk (AA body contrast)
- **Wood Tray** (`#B98962` / `#D2A77C`): tone-drill board fill

### Neutral
- **Milk** (`#FFF8F0`) / **Foam** (`#FFFCF7`) / **Chalk** (`#FFF9EC`): page and control fills
- **Blush** (`#F5A3A0`): sparse warmth (gradients / brand cup straw)

**The Rarity Accent Rule.** Lemon CTA and blush stay sparse. Most of the screen is milk, wood, and leaf—action yellow earns attention by rarity.

## Typography

**Display Font:** Fuzzy Bubbles (fallback Balsamiq Sans, ui-rounded)
**Body Font:** Balsamiq Sans (system / CJK fallbacks for Traditional Chinese glyphs)

**Character:** Rounded, handwritten-game energy. Display shouts the brand; body stays friendly and readable.

### Hierarchy
- **Brand mark** (700, clamp ~2.4–4.2rem): hero “Bobamama” only
- **Display / H1** (700, clamp ~1.85–3.1rem): hero headline
- **Headline / H2** (700, clamp ~1.8–2.6rem): section titles
- **Title / H3** (700, ~1.2–1.25rem): cast names, step titles
- **Body** (400, 18px / 1.55): paragraphs; measure ~42–58ch on marketing copy
- **Label** (700, 13–16px): HUD, chips, small UI

**The No-Eyebrow Rule.** Do not add kicker labels above headings; the heading carries its own weight.

## Layout

- Content width: **960px** for sections; **1120px** for header / hero
- Section vertical padding: **72px** (desktop)
- Sticky bark header **58px**; `scroll-padding-top: 70px`
- Hero: one composition, min-height ~`min(92vh, 920px)`, content aligned to bottom over full-bleed art
- Shop loop / heritage steps: 1-col → 3-col at **720px**
- Mobile ≤720px: hide mid nav links; full-width CTAs

## Elevation & Depth

Depth is **hybrid**: painted illustration for world depth; UI uses **hard offset shadows** (game-button press) and thick bark borders—not soft multi-layer glass.

### Shadow Vocabulary
- **Pressable** (`0 5px 0 var(--bark)` with inset top highlight): primary buttons
- **Tray** (`0 10px 0 rgba(91,63,52,.2–.22)`): shop art, drill board
- **Bubble** (`0 6px 0 rgba(91,63,52,.15)`): dialogue bubble
- **Bar lip** (`0 3px 0 rgba(91,63,52,.25)`): sticky header

**The Pressable Rule.** Interactive primary controls use offset shadows that compress on `:active`. Decorative cards should not fake the same press unless they are interactive.

## Shapes

- Default interactive shape: **pill** (`999px`) for buttons, chips, email field, HUD
- Soft panels: **18–28px** radii (shop art, drill, bubble, quote)
- Borders: **3–4px** solid bark / deep bark—line weight is part of the brand
- Pearl coin: hard circle with radial wood fill

## Components

### Buttons
- **Shape:** pill; bark border ~3.5px; offset shadow
- **Primary:** lemon CTA on bark outline; hover lifts 1px; active presses down
- **Ghost:** chalk fill, bark text—secondary path
- **Small:** header waitlist control

### Chips
- Tone-drill pitch choices; chalk default; lemon when `aria-pressed="true"`

### Cast buttons
- Foam tiles with bark border; locked state muted (`opacity ~.55`, warmer gray fill); not nested cards

### Dialogue bubble
- Foam panel, bark border, display name + body—signature “shop chat” component

### Inputs
- Email: foam fill, pill, bark border, min-height 52px; placeholder muted brown

### Navigation
- Sticky bark bar; chalk brand; pill links; chalk HUD with pearl counter

### Tone drill board
- Wood gradient tray; centered hanzi + roman; SVG pitch path; verdict states idle / good / bad

## Do's and Don'ts

### Do:
- **Do** lead marketing heroes with **Bobamama** at brand-mark scale plus one headline and one CTA group over full-bleed shop art.
- **Do** keep lemon CTA rare and high-contrast against bark/milk.
- **Do** use open/locked cast states to tease progression without inventing economy UI.
- **Do** honor `prefers-reduced-motion` (disable ken-burns, pop, draw animations).

### Don't:
- **Don't** center a coupon/redeem wooden-board form as the product metaphor.
- **Don't** introduce purple-on-white AI gradients, glassmorphism stacks, or dashboard card grids as the page structure.
- **Don't** put pricing, MOE/dictionary headlines, or search-volume claims on the landing.
- **Don't** treat temporary concept art as final brand assets—swap when real illustrations land.
