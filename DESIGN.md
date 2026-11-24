---
name: Bobamama
description: Cozy Taiwanese Hokkien learning in grandma's pearl milk tea shop
colors:
  milk: "#FFF8F0"
  foam: "#FFFCF7"
  chalk: "#FFF9EC"
  bark: "#7A5649"
  bark-deep: "#5B3F34"
  wood: "#B98962"
  wood-light: "#D2A77C"
  leaf: "#739D5B"
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

<!-- impeccable:design-map -->
Name: Bobamama
Colors: primary: bark #7A5649; secondary: leaf #739D5B; tertiary: blush #F5A3A0; neutral: milk #FFF8F0; primary: bark-deep #5B3F34; primary: cta #FFEF6E; secondary: leaf-light #B1D07F (+5 more in the sidecar)
Fonts: Fuzzy Bubbles (display, brand-mark, headline, title); Balsamiq Sans (body, label)
Spacing: xs 8px, sm 12px, md 16px, lg 24px, xl 36px, section-y 72px, container 960px, container-wide 1120px
Radius: pill 999px, panel 28px, bubble 22px, chip 18px, control 16px
North Star: "Grandma's Pearl Stall"
Rules:
- The Rarity Accent Rule. Lemon CTA and blush stay sparse.
- The No-Eyebrow Rule. Do not add kicker labels above headings; the heading carries its own weight.
- The Pressable Rule. Interactive primary controls use offset shadows that compress on `:active`.
Elevation:
- Pressable: 0 5px 0 var(--bark)
- Tray: 0 10px 0 rgba(91,63,52,.2–.22)
- Bubble: 0 6px 0 rgba(91,63,52,.15)
- Bar lip: 0 3px 0 rgba(91,63,52,.25)
Don't:
- Don't center a coupon/redeem wooden-board form as the product metaphor.
- Don't introduce purple-on-white AI gradients, glassmorphism stacks, or dashboard card grids as the page structure.
- Don't put pricing, MOE/dictionary headlines, or search-volume claims on the landing.
- Don't treat temporary concept art as final brand assets—swap when real illustrations land.
Do:
- Do lead marketing heroes with Bobamama at brand-mark scale plus one headline and one CTA group over full-bleed shop art.
- Do keep lemon CTA rare and high-contrast against bark/milk.
- Do use open/locked cast states to tease progression without inventing economy UI.
- Do honor `prefers-reduced-motion` (disable ken-burns, pop, draw animations).
Full: .impeccable/design-full.md (read a section when you need its detail)
