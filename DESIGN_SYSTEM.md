# Velvex Labs — Design System Reference

Single source of truth for every milestone after this one. If a later page needs
something not covered here, extend this file first, then build.

## Palette (see tailwind.config.ts)
- `paper` #F2EDE4 — base background, light mode
- `ink` #1F1B16 — primary text; base background in dark mode
- `bone` #EDE6D8 — primary text in dark mode
- `rule` #C9BEA8 — hairlines, dividers, table borders
- `walnut` #6B5142 (+ light/dark variants) — the only accent used for interactive
  elements: links, CTAs, active states. Never use walnut for large fills.
- `sage` #7C8471 — secondary accent, restricted to labels/tags/eyebrows only

## Type roles
- `font-display` (Fraunces) — headlines and pull quotes only. Never body copy,
  never UI chrome (buttons, nav labels).
- `font-body` (Instrument Sans) — all reading copy, UI labels, form fields.
- `font-mono` (IBM Plex Mono) — metadata: dates, tags, case-study stats, code.

## Signature element
Running head: a fixed left-margin rail present on every page showing the current
section name and a manuscript-style folio (e.g. "02 / 09"), updating on scroll.
This is the site's one deliberate risk — everything else stays quiet.

## Motion rules
- Page load: one orchestrated reveal, not per-element chaos.
- Scroll: section reveals only, no parallax stacking more than one layer deep.
- Hover: understated — underline/color shifts, not scale/glow.
- Always respect `prefers-reduced-motion` (handled globally in globals.css).

## Things to never do
- No card-grid service tiles with icon-in-a-circle.
- No numbered 01/02/03 markers unless content is a genuine sequence (Process
  page qualifies; Services page does not).
- No gradients, no glassmorphism, no neon.
- Walnut is a highlight color, not a background color.

## Status
Milestone 1 (Foundation) complete.
Milestone 2 (Home page) complete.

Milestone 3a (Work data + index) complete: `lib/projects.ts` holds all ten
projects; four are labeled "client" (real), six "concept" (fictional,
labeled honestly rather than presented as real commissions).

Milestone 3b (Case study template) complete: `CaseStudyTemplate` renders
the six required sections (problem, research, solution, process, technical
implementation, outcome) plus a CSS color-field art panel per project
(no fabricated photography — accent-color composition instead, since
generating realistic fake product/interior photography for either real
clients or fictional ones would misrepresent actual deliverables).
Atelier Noa is the first fully populated case study, live at `/work/atelier-noa`.

Milestone 3c complete: all ten projects now have full case-study content
and are live at `/work/{slug}`. Four are drafted from the general
descriptions given for the real clients — the notes in Celestia Clothing's
outcome section flag where real metrics should replace estimates before
launch. The six concept projects are fully invented and clearly labeled.

Next: Milestone 4 — Services, Process, and About pages.

## Milestone 4 (Services, Process, About) — complete
- Extracted `IndexedSection` as a shared numbered-reveal component; refactored
  `CaseStudyTemplate` to use it instead of duplicating the pattern, then reused
  it again for Process. One implementation, two pages.
- Services page groups the 15-item service list into four categories
  (Identity / Design & development / Growth & care / Emerging) as an
  editorial list — no icon-in-circle tiles.
- Process page uses real 01–09 numbering since it's a genuine sequence,
  per the "never do" rule about markers.
- About page deliberately has no invented founding date, headcount, or named
  staff bios — the brief said not to invent fake history, and specific
  founder names/dates would be fabricated claims about a real business.
  If you want named team bios, that content needs to come from you.

Next: Milestone 5 — Journal (blog system) and Contact page.

## Milestone 5 (Journal, Contact) — complete
- Journal: content model in `lib/journal.ts`, index page, and post template.
  Shipped with three full sample posts (not placeholders — real ~5-6
  paragraph pieces) so the system isn't empty on launch. Add real posts by
  extending the `JOURNAL_POSTS` array; the template handles the rest.
- Contact: form is functional client-side state only — `ContactForm.tsx`
  has a comment marking exactly where to wire a real backend (API route or
  a service like Resend/Formspree) before launch. Email, socials, and
  availability copy in `lib/contact.ts` are placeholder values and need
  real ones. FAQ uses native `<details>/<summary>` — accessible with zero
  JS rather than a custom accordion component.

Next: Milestone 6 — 404, Privacy Policy, Terms pages (the remaining pages
from the brief), then a full cross-page consistency and accessibility
review.

## Milestone 6 (404, Privacy, Terms, consistency + accessibility audit) — complete
- Added `not-found.tsx`, `/privacy`, `/terms` (template legal content —
  **needs actual legal review before publishing**, marked inline).
- Added `SiteFooter` — Privacy/Terms weren't reachable from anywhere
  before this, now linked site-wide alongside socials and email.
- Structural consistency check across every page: eyebrow / h1 / container
  pattern confirmed identical everywhere.
- **Accessibility fixes (real issues found, not hypothetical):**
  - `sage` failed WCAG AA (3.34:1 against paper) despite being used for
    eyebrow text on every single page. Replaced with a darker value
    (`#646B54`, 4.77:1). Original kept as `sage-muted` for non-text use.
  - `text-ink/50`, `/40`, `/30` all failed AA (down to 1.89:1 in the worst
    case) and were used for real content — captions, dates, descriptions —
    not decoration. Replaced ~27 occurrences with a new solid `ink-muted`
    token (`#69645E`, 5.02:1).
  - `text-ink/60` was borderline-failing (4.29:1, just under the 4.5
    threshold) on nav and "back" links across the site. Consolidated into
    the same `ink-muted` token.
  - Remaining opacity-based text (`ink/70`, `ink/80`) verified to pass
    comfortably (5.87:1, 8.16:1) — left as-is.
  - Net effect: every text color combination on the site now meets WCAG AA
    for normal text. Worth re-running a contrast check if any new color is
    introduced later — this class of bug is easy to reintroduce.

Next: Milestone 7 — final polish pass (SEO metadata completeness,
responsive/cross-browser check, performance review, last design-consistency
sweep).

## Milestone 7 (final polish) — complete
- **Performance:** removed an unnecessary `"use client"` from
  `CaseStudyTemplate` (it only rendered a client child, had no client-only
  APIs itself) — one less component forcing client-side JS. Audited every
  remaining `"use client"` directive; all are justified (motion, state, or
  event handlers).
- **SEO:** added `app/sitemap.ts` (static routes + all case study and
  journal slugs, generated from the same data files pages already use —
  can't drift out of sync) and `app/robots.ts`. Expanded root metadata with
  complete OpenGraph and Twitter card defaults. Added Organization JSON-LD
  sitewide and Article JSON-LD on journal posts.
  — **Gap, not fixed:** no OG share image exists (no image-generation
  capability in this environment). Metadata is structured to accept one at
  `/public/og-image.jpg` — add a real image and reference it in
  `app/layout.tsx`'s `openGraph.images` before launch, or shares will have
  no preview image.
- **Consistency audit:** every page confirmed to have exactly one `h1`;
  `walnut` confirmed used only as accent/interactive color, not as a large
  fill (its one background use is a 20%-opacity text-selection highlight,
  which is the intended exception).
- **Responsive:** breakpoint classes present across all interactive/layout
  components; verified stacking behavior on Contact's two-column grid and
  Services' label/description rows.

## Known gaps — status after the fix pass

**1. Contact form backend — fixed.** `app/api/contact/route.ts` sends
submissions to `spdedsec@hotmail.com` via Resend. Requires a
`RESEND_API_KEY` environment variable (see `.env.example`) — get one free
at resend.com. Works immediately using Resend's shared testing domain;
switch the `from` address in the route once velvexlabs.com is verified in
Resend for proper deliverability. Includes a honeypot field against spam
and real server-side validation.

**2. Dark mode — fixed.** Converted every color token to CSS variables
(`app/globals.css`) that `tailwind.config.ts` reads through, so the entire
site adapts via one `.dark` class toggle with zero changes needed to
individual components — they were already using semantic tokens
(`text-ink`, `bg-paper`, etc.) rather than hardcoded hex. Added
`ThemeToggle.tsx` (in header, desktop and mobile), a no-flash inline script
in `layout.tsx` so the correct theme applies before first paint, and a
full new dark-mode palette re-verified against WCAG AA (all combinations
6.8:1 or higher). One residual gap: the per-project accent color panels on
case study pages use raw hex values outside the token system, so they
don't shift for dark mode — a lighter tint sits oddly on a dark background.
Would need per-project dark variants to fully fix; left as-is for now.

**3. OG share image — fixed.** `app/opengraph-image.tsx` generates a real
branded image at request time using Next's built-in `next/og`, built from
the site's own palette — no external asset or image-generation tool
needed. Applies as the default across every page.

**4. `npm install` — still can't run here.** This sandbox has no network
access, so dependencies were never installed or the build never actually
compiled. The code has been checked by hand (structural sanity, brace
balance, no orphaned references) but hasn't run through the TypeScript
compiler or Next's dev server. Run `npm install && npm run dev` locally as
the real verification step.

**5. Real case study content for the four client projects — still can't
verify.** I don't have the actual project details, metrics, or outcomes —
what's there is a plausible draft, not fact-checked content. Fixing this
requires real input from you, not more writing from me.

**6. Privacy/Terms legal review — still can't do.** I'm not a lawyer and
won't pretend to be one by "finalizing" legal text. The content is a
reasonable template; an actual lawyer still needs to review it before this
goes live, particularly the liability and data-rights sections.

