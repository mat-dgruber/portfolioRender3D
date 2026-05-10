# Design Brief: 3D Render Studio Landing Page

## Problem Statement
Architects and developers struggle to communicate the emotional impact of a project through 2D plants alone. This leads to friction in sales and "unfelt" designs. We are building a landing page that bridges this gap by leading with the emotional transformation of renderization.

## Users
- **Primary:** Busy architects seeking a reliable technical partner to elevate their presentations.
- **Secondary:** Real estate developers comparing portfolios to find a brand-aligned visual engine for marketing.
- **Spectrum:** Focus on high visual impact for sighted users + robust semantic narrative for assistive tech.

## Design Direction
- **Approach:** Conversion-led Story Journey.
- **Narrative Flow:** 
    1. **The Hook:** Cinematic hero with high-contrast headline.
    2. **The Tension:** "Plants don't sell dreams" (Problem section).
    3. **The Transformation:** "We bring them to life" (Before/After Slider).
    4. **The Proof:** Filtered portfolio grid.
    5. **The Conversion:** Simple, high-trust contact form + WhatsApp FAB.
- **Aesthetics:** "Art Gallery" meets "Marketing Tech" — dark, premium, silent but confident.

## Constraints
- **Technical:** Angular 21, Signals, Tailwind 3.4.17.
- **Performance:** All images WebP, width/height forced, eager loading for hero.
- **Architecture:** Must strictly follow `docs/ARCHITECTURE.md`.
- **Accessibility:** WCAG AA Contrast, keyboard-operable slider, semantic landmarks.

## Existing Design System
- **Tokens:** Defined in `AI_RULES.md` (Brand BG: `#0a0a0a`, Accent: `#c8a96e`).
- **Typography:** Max 2 families (to be defined in `design-taste`).

## Taste Direction (Early Signal)
- **Feel:** Sleek, exclusive, high-precision.
- **Visual Rhythm:** Generous negative space between narrative sections to allow the 3D work to breathe.

## Success Criteria
- **Engagement:** Lighthouse Score ≥ 90 in all categories.
- **Conversion:** Minimum 20% conversion from portfolio view to WhatsApp click.
- **Aesthetics:** User feels the studio is "High End" within 3 seconds of landing.

## Out of Scope
- Backend CRM integrations.
- User authentication/dashboards.
- Multi-page navigation.
