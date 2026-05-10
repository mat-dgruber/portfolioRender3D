# Design Strategy: 3D Render Studio

## Design Principles

### 1. The Art of the Silence
**The principle:** Negative space is as important as the renders.
**What this means in practice:** We will use generous padding and minimal typography to let the 3D work speak.
**What this means we will NOT do:** We will not use "busy" backgrounds, excessive decorative borders, or loud gradients.

### 2. Narrative Clarity
**The principle:** Accessibility is the foundation of the story.
**What this means in practice:** We will maintain a strictly logical heading hierarchy (H1 → H2 → H3) so the story makes sense to screen readers.
**What this means we will NOT do:** We will not skip heading levels or use text inside images without high-quality alt descriptions.

### 3. Frictionless Intent
**The principle:** Conversion is a whisper, not a shout.
**What this means in practice:** The WhatsApp button is always visible but aesthetically integrated (fixed FAB). Primary CTAs are high-contrast but follow the gallery theme.
**What this means we will NOT do:** We will not use intrusive pop-ups, flashing elements, or generic stock icons.

### 4. Zero-Friction Transformation
**The principle:** Interactivity must feel effortless and performant.
**What this means in practice:** The Before/After slider must work perfectly on touch and keyboard. Assets must be WebP/preloaded to ensure no "blank state" during the journey.
**What this means we will NOT do:** We will not implement complex animations that lag on mid-range mobile devices or require heavy libraries.

## Experience Map
1. **Entry:** User arrives via Portfolio link or SEO search.
2. **First Impression (0-3s):** High-end hero image. Immediate feeling of "Elite Quality".
3. **The Hook (3-10s):** "Plants don't sell dreams". Recognition of the pain point.
4. **The Transform (10-30s):** User interacts with the Slider. The "Aha!" moment.
5. **The Proof (30-60s):** Browsing the portfolio. Trust builds through visual consistency.
6. **The Conversion (60s+):** User clicks WhatsApp or fills the form.

## Success Metrics
| Metric | What It Measures | Target | How to Measure |
|--------|-----------------|--------|---------------|
| Load Time | Visual readiness | < 2s (LCP) | PageSpeed / Lighthouse |
| Conversion Rate | Intent to contact | > 10% | Analytics / WhatsApp clicks |
| Accessibility | Inclusive reach | 100% AA | Lighthouse / Axe |

## Constraints and Trade-offs
We are choosing NOT to optimise for high-content density. This is a visual-first site. Users who want deep technical articles will not find them here; we are choosing to focus on the emotional "wow" factor to drive initial leads.
