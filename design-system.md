# MF Corporation — Enterprise Design System (`design-system.md`)

> **Benchmark Aesthetic:** Procter & Gamble (`pg.com`) and Unilever (`unilever.com`) — structured multinational holding-group editorial design characterized by architectural hairline grids, generous whitespace, high-contrast typographic hierarchy, and disciplined brand accent restraint.
>
> **Companion Document:** Align all page templates and copy blocks strictly with [`content_architecture.md`](./content_architecture.md).

---

## 1. Color Architecture (The 85 / 12 / 3 Rule)

The visual hierarchy of MF Corporation is governed by the **85 / 12 / 3 Color Proportion Rule**:
- **85% Primary Light Surfaces & Canvas:** Pure White (`#FFFFFF`) and Cool Alabaster (`#F8F9FA`) for alternating editorial sections and breathing room.
- **12% Deep Slate Ink & Structural Hairlines:** Deep Slate Ink (`#0F172A`) for high-authority headings, primary typography, and executive dark surfaces; Muted Slate (`#475569`) for secondary copy; Crisp Slate Hairlines (`#E2E8F0`) for 1px architectural grid dividers.
- **3% Brand Vermilion Accent (`#ED3B09`):** Reserved exclusively for high-intent focal points.

### 1.1 Color Token Table

| Token Name | CSS Variable | Hex Value | Tailwind Equivalent | Approved Enterprise Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Primary** | `--color-canvas-primary` | `#FFFFFF` | `bg-[#FFFFFF]` / `bg-white` | Primary page canvas, card surfaces, sticky navigation bar |
| **Canvas Secondary** | `--color-canvas-secondary` | `#F8F9FA` | `bg-[#F8F9FA]` | Alternating section backgrounds, subtle table/grid cells |
| **Ink Primary** | `--color-ink-primary` | `#0F172A` | `text-[#0F172A]` / `bg-[#0F172A]` | Primary headings, body text (never use harsh `#000000`), dark footer/featured blocks |
| **Ink Secondary** | `--color-ink-secondary` | `#475569` | `text-[#475569]` | Subheadlines, secondary descriptions, captions, metadata |
| **Border Hairline** | `--color-border-hairline` | `#E2E8F0` | `border-[#E2E8F0]` | `1px solid` structural dividers, card borders, grid cell rules |
| **Brand Accent** | `--color-brand-accent` | `#ED3B09` | `bg-[#ED3B09]` / `text-[#ED3B09]` | Primary CTA buttons, active nav indicators, small eyebrow tags, key metric highlights |
| **Brand Accent Hover** | `--color-brand-accent-hover` | `#C82E04` | `hover:bg-[#C82E04]` | Interactive hover/active state for primary `#ED3B09` buttons and links |

### 1.2 Strict Accent Restraint Rule (`#ED3B09`)
- **ALLOWED:** Primary CTA button fills (`bg-[#ED3B09] text-white`), active route indicator bars (`2px` underline), small uppercase eyebrow labels (`12px`), and key numerical metric callouts.
- **FORBIDDEN:** Never use `#ED3B09` as a full-section background, large card fill, gradient stop, or giant display text block.

---

## 2. CSS Custom Properties & Tailwind v4 `@theme` Definitions

Define these exact tokens in `app/globals.css` so all components share a single source of truth:

```css
:root {
  /* 1. Color Architecture (85 / 12 / 3 Rule) */
  --color-canvas-primary: #FFFFFF;
  --color-canvas-secondary: #F8F9FA;
  --color-ink-primary: #0F172A;
  --color-ink-secondary: #475569;
  --color-border-hairline: #E2E8F0;
  --color-brand-accent: #ED3B09;
  --color-brand-accent-hover: #C82E04;

  /* 2. Typography Families */
  --font-heading: "Plus Jakarta Sans", "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  /* 3. Typographic Scale & Line Heights */
  --text-hero-display: clamp(3.5rem, 5vw, 4rem);       /* 56px - 64px */
  --leading-hero-display: 1.1;
  --tracking-hero-display: -0.03em;

  --text-section-header: clamp(2.25rem, 3.5vw, 2.5rem); /* 36px - 40px */
  --leading-section-header: 1.15;
  --tracking-section-header: -0.02em;

  --text-card-title: 1.5rem;                            /* 24px */
  --leading-card-title: 1.3;
  --tracking-card-title: -0.015em;

  --text-body-lg: 1.125rem;                             /* 18px */
  --text-body-base: 1rem;                               /* 16px */
  --leading-body: 1.65;
  --measure-body: 65ch;

  --text-eyebrow: 0.75rem;                              /* 12px */
  --tracking-eyebrow: 0.12em;

  /* 4. Layout & Spacing Rhythm */
  --container-max-width: 1280px;
  --container-pad-x-mobile: 24px;
  --container-pad-x-desktop: 48px;
  --section-pad-y: 96px;                                /* py-24 minimum */
  --grid-columns: 12;
  --grid-gap: 32px;
  --border-hairline: 1px solid #E2E8F0;

  /* 5. Motion Tokens (Lenis + GSAP) */
  --motion-duration-reveal: 0.8s;
  --motion-duration-hover: 0.25s;
  --motion-ease-corporate: cubic-bezier(0.215, 0.61, 0.355, 1); /* power3.out equivalent */
}
```

---

## 3. Typography & Hierarchy

### 3.1 Font Pairing
- **Headings (`--font-heading`):** `Plus Jakarta Sans` (weights `600`, `700`) or `Montserrat` (weights `600`, `700`). Delivers geometric corporate authority suitable for a multinational holding group.
- **Body Copy & UI (`--font-body`):** `Inter` (weights `400`, `500`, `600`). Engineered for high-legibility editorial reading and technical packaging/logistics specifications.

### 3.2 Typographic Scale & Rules

| Level | Size (`px` / `rem`) | Weight | Line Height | Letter Spacing | Color | Max Width / Constraint |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow Tag** | `12px` (`0.75rem`) | `700` (Bold) | `1.2` | `0.12em` (Uppercase) | `#ED3B09` | Single line only |
| **Hero Display (`H1`)** | `56px–64px` (`3.5rem–4rem`) | `700` (Bold) | `1.1` | `-0.03em` | `#0F172A` | Max 8–10 words (`18ch–22ch`) |
| **Section Header (`H2`)** | `36px–40px` (`2.25rem–2.5rem`) | `700` (Bold) | `1.15` | `-0.02em` | `#0F172A` | Max 2 lines (`28ch`) |
| **Card / Sub-Header (`H3`)** | `22px–24px` (`1.375rem–1.5rem`) | `600` (SemiBold) | `1.3` | `-0.015em` | `#0F172A` | Max 1–2 lines |
| **Lead / Subheadline** | `18px` (`1.125rem`) | `400` (Regular) | `1.65` | `0em` | `#475569` | Max `65ch` (Max 3 lines per paragraph) |
| **Body Copy** | `16px` (`1rem`) | `400` (Regular) | `1.65` | `0em` | `#475569` | Max `65ch` (Max 3 lines per paragraph) |
| **Metric Number** | `44px–52px` (`2.75rem–3.25rem`) | `700` (Bold) | `1.05` | `-0.03em` | `#0F172A` (with `#ED3B09` accent unit/plus) | Tabular numerals (`tabular-nums`) |

### 3.3 Paragraph Density Cap
- **Maximum 3 lines per paragraph** across all cards, hero subheadlines, and section introductions.
- **Maximum line measure of `65ch`** to guarantee effortless scanning.

---

## 4. Enterprise Layout & Spacing Rules (P&G / Unilever Standard)

### 4.1 Container & Horizontal Padding
- **Max-Width:** `1280px` (`max-w-7xl`) horizontally centered (`mx-auto`).
- **Horizontal Padding:** `24px` (`px-6`) on mobile, `32px` (`sm:px-8`) on tablet, and `48px` (`lg:px-12`) on desktop viewports.

### 4.2 Vertical Rhythm & Whitespace Mandate
- **Section Padding:** Minimum `96px` top and bottom padding (`py-24`, or `py-24 lg:py-32`) on every major page section.
- **Section Alternation:** Alternate cleanly between `#FFFFFF` (Pure White) and `#F8F9FA` (Cool Alabaster), separated by a `1px solid #E2E8F0` horizontal hairline rule (`border-b border-[#E2E8F0]`).
- **Mandatory Whitespace:** At least 35% of any viewport must remain open canvas (`#FFFFFF` or `#F8F9FA`). Never stack dense widgets back-to-back without `96px` vertical separation.

### 4.3 12-Column Grid Discipline & Card Density
- **Master Grid:** `grid-cols-12` with `24px` (`gap-6`) mobile gap and `32px` (`lg:gap-8`) desktop gap.
- **Strict Row Cap:** **Never place more than 3 cards in a single row** (`lg:grid-cols-3` maximum, `col-span-4` per card).
  - *2-Up Split Showcase (e.g., Our Companies on `/` or Vision & Mission on `/express`):* 2 columns (`col-span-12 lg:col-span-6` each).
  - *3-Up Feature / Metric / Catalog Grid:* 3 columns (`col-span-12 md:col-span-4` each).
  - *4-Step or 5-Step Workflows:* Render either as a vertical architectural timeline or a wrapped grid where no row exceeds 3 columns (`lg:grid-cols-3`).
- **Surface Treatment:** Flat surfaces (`#FFFFFF` or `#F8F9FA`) bounded by `1px solid #E2E8F0` hairline borders. Zero drop shadows at rest.

---

## 5. Component Architecture Specifications

### 5.1 Global Navigation Header (`Navbar`)
- **Surface:** `height: 80px` (`h-20`), sticky top, `bg-[#FFFFFF]/95 backdrop-blur-md`, bottom hairline `1px solid #E2E8F0`.
- **Brand Mark:** Clean typographic lockup (`MF CORPORATION` in `--font-heading` `#0F172A` with a subtle `#ED3B09` geometric square/dot mark).
- **Navigation Links:** `/` (Overview), `/express` (MF Express), `/packages` (MF Packages), `/about` (Leadership & Heritage).
- **Active & Hover State:** Text in `#0F172A`, active route indicated by a crisp `2px` bottom bar in `#ED3B09`.
- **Restraint:** No cluttered top utility bars, no secondary store buttons, and no aggressive promotional banners.

### 5.2 Editorial Hero Section
- **Layout:** 12-column asymmetric split (`7 columns` editorial copy on left, `5 columns` structured architectural frame or subsidiary index on right) on `#FFFFFF` canvas.
- **Eyebrow:** `12px` uppercase `#ED3B09`, tracking `0.12em` (e.g., `ESTABLISHED 1998 • KARACHI, PAKISTAN`).
- **Headline:** `56px–64px` `#0F172A`, max 8 words.
- **Subheadline:** `18px` `#475569`, max 25 words (strictly ≤ 3 lines).
- **CTAs:**
  - **Primary CTA:** Solid `#ED3B09` background, `#FFFFFF` text, `px-7 py-4`, sharp or micro-rounded corners (`rounded-none` or `rounded-sm` `4px` max), hover `#C82E04`.
  - **Secondary CTA:** Transparent/White background, `1px solid #E2E8F0` border, `#0F172A` text, hover `border-[#0F172A]`.

### 5.3 Corporate Key Metrics Strip (3-Column Hairline Grid)
- **Layout:** 3 equal columns inside the `1280px` container, separated by `1px solid #E2E8F0` vertical and horizontal hairlines (`divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] border-y border-[#E2E8F0]`).
- **Content:** Large numeral (`48px` `#0F172A` with `#ED3B09` `+` or accent indicator) + concise 1-line label in `#475569`.

### 5.4 Subsidiary Split Showcase & Content Cards
- **Surface:** `#FFFFFF` background, `1px solid #E2E8F0` border, generous internal padding (`p-10 lg:p-12`), zero drop shadow.
- **Copy Cap:** Eyebrow tag (`#ED3B09`), Title (`24px` `#0F172A`), and a maximum 2-sentence description (≤ 3 lines) in `#475569`.
- **Interactive Footer:** Clean text link (`Visit MF Express →` or `Visit MF Packages →`) in `#0F172A` that shifts to `#ED3B09` on hover with a `4px` horizontal arrow translation.

---

## 6. Motion & Interaction Specification (Lenis + GSAP)

All motion must feel **weighted, deliberate, and institutional**—never playful, bouncy, or distracting.

### 6.1 Smooth Scrolling (Lenis)
- Initialize Lenis for subtle inertia scrolling (`lerp: 0.08`, `duration: 1.1`, `smoothWheel: true`).
- Respect `prefers-reduced-motion: reduce` by disabling smooth scroll and instant-rendering all reveals.

### 6.2 Scroll-Triggered Section Reveals (GSAP + ScrollTrigger)
- **Animation Values:**
  - Initial state: `opacity: 0, y: 24`
  - Final state: `opacity: 1, y: 0`
  - Duration: `0.8s`
  - Ease: `power3.out`
  - Stagger: `0.1s` between sibling grid cells in a row (max 3 items).
- **Trigger Point:** `start: "top 85%"`, `once: true` (animate once on entry; never re-trigger on scroll-up).

### 6.3 Micro-Interactions (CSS Transitions)
- **Buttons:** Background color transition `250ms cubic-bezier(0.215, 0.61, 0.355, 1)` (`#ED3B09` → `#C82E04`).
- **Cards:** Border color transition `250ms` (`#E2E8F0` → `#0F172A`) with zero scale distortion (`scale()` transforms on cards are prohibited).
- **Directional Links:** Inline arrow icon translates `translateX(4px)` over `250ms`.

---

## 7. Strict Negative Constraints (Banned Patterns)

Every page and component in the MF Corporation web application is audited against these mandatory prohibitions:

1. **NO Rainbow or Multi-Color Gradients:** Do not use `bg-gradient-to-*` with orange, emerald, blue, or multi-stop color blends. Surfaces must be flat `#FFFFFF`, `#F8F9FA`, or `#0F172A`.
2. **NO Heavy Drop Shadows or Neon Glows:** Do not use `shadow-lg`, `shadow-xl`, `shadow-2xl`, colored shadows (`shadow-brand-red/*`), or `blur-3xl` glowing background orbs. Rely strictly on `1px solid #E2E8F0` hairline borders for depth and separation.
3. **NO Generic Stock-Icon Grids or Decorative Blobs:** Do not litter cards with generic SVG icon badges in colored circles or floating background shapes. Use typographic numbering (`01`, `02`, `03`) and crisp editorial hierarchy.
4. **NO Walls of Text:** No paragraph anywhere in the UI may exceed **3 lines** (`max-w-[65ch]`). Detailed subsidiary information must live on `/express`, `/packages`, and `/about`—never crammed onto `/`.
5. **NO Full-Bleed `#ED3B09` Red Sections:** `#ED3B09` is strictly a 3% accent token for primary buttons, active nav bars, small eyebrow tags, and metric highlights.
6. **NO Pure `#000000` Black for Body Text:** Always use Deep Slate Ink (`#0F172A`) for primary typography and Muted Slate (`#475569`) for secondary copy.
