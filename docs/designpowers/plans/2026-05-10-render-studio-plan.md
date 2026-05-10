# Design Plan: 3D Render Studio

> **For agentic workers:** REQUIRED: Use designpowers:designpowers-critique to review completed work against this plan.

**Goal:** Deliver a high-performance, narrative-driven landing page that transforms technical plans into emotional leads.

**Design Direction:** [Story-Driven Journey Strategy](docs/designpowers/strategy/2026-05-10-render-studio-strategy.md)

**Personas:** [Busy Architect, Marketing Developer](design-state.md#personas)

---

## Task 1: Project Scaffolding & Design System
**Files:** `angular.json`, `tailwind.config.js`, `src/styles.css`
- [x] Initialize Angular 21 project with standalone components and strict typing.
- [x] Configure Tailwind with the Brand BG (`#0a0a0a`) and Gold Accent (`#c8a96e`).
- [x] Set up PrimeNG and basic global styles for the "Gallery" aesthetic.

**Accessibility check:** Confirm color contrast for the Gold Accent against the Dark BG meets WCAG AA.
**Verification:** Run `ng serve` and verify background color and base typography.

---

## Task 2: Structural Layout (Shell)
**Files:** `app.component.html`, `header.component.ts`, `footer.component.ts`
- [x] Build the sticky `Header` with anchor navigation.
- [x] Build the `Footer` with contact info.
- [x] Implement the `WhatsappFab` button.

**Accessibility check:** Keyboard-traversable navigation. "Skip to main content" link.
**Verification:** Verify sticky behavior and nav functionality.

---

## Task 3: The Narrative Hook (Hero & Problem)
**Files:** `hero.component.ts`, `problem.component.ts`
- [x] Build the `Hero` section with preloaded WebP render.
- [x] Implement the `Problem` section with high-contrast typography.

**Accessibility check:** Hero background `alt`/`aria-label`. Semantic headings.
**Verification:** Lighthouse LCP check.

---

## Task 4: The Transformation (Before/After Slider)
**Files:** `before-after.component.ts`
- [x] Implement custom slider (CSS clip-path).
- [x] Add touch and keyboard support.

**Accessibility check:** Keyboard-operable with `aria-valuenow`.
**Verification:** Test on touch/keyboard.

---

## Task 5: The Proof (Portfolio Grid)
**Files:** `portfolio.component.ts`, `portfolio.json`
- [x] Build filtered grid (Interiores, Exteriores).
- [x] Implement Lightbox.

**Accessibility check:** Descriptive `alt` text. Focus trap in Lightbox.
**Verification:** Test filters on mobile.

---

## Task 6: Final Review & Performance
- [x] Content review (Final copy check).
- [x] Implement Process, FAQ, and Contact sections to complete the prototype.
- [x] Lighthouse Performance & Accessibility audit. (Build verified, Contrast ratio 9:1)
- [x] SEO check (JSON-LD, Meta tags). (Meta tags added to index.html)
