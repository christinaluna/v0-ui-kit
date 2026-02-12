# v0 UI Kit – Next.js Design System

A production-ready **Next.js 14 App Router** project that ships a dark‑first design system and UI kit optimized for **v0**:

- Token‑driven theming with **CSS variables + Tailwind v4**
- Opinionated **premium dashboard** aesthetic (charcoal surfaces, gold/orange accents)
- Accessible, typed **UI primitives** (buttons, inputs, cards, alerts, dialogs, tabs, etc.)
- **Template pages** (landing, dashboard, product) and a full **kitchen sink** demo

Use this repo as a starting point for new projects, or as a reference when pasting code into v0.

---

## Tech stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (CSS‑first) + design tokens in `app/globals.css`
- **Fonts**: `Inter` (body), `Space Grotesk` (display), `JetBrains Mono` (code) via `next/font`
- **Components**: Custom primitives + Radix UI under the hood for dialogs, tabs, tooltips, etc.

---

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

Useful scripts:

```bash
npm run lint   # TypeScript + ESLint
npm run build  # Production build
npm start      # Run the built app
```

---

## Key routes

- `/` – **Showcase home**
  - High‑level intro to the kit
  - Typography, color system, buttons, inputs, cards overview
- `/kitchen-sink` – **Kitchen sink**
  - Exhaustive demo of nearly every component: inputs, cards, forms, alerts, dialogs, tooltips, skeletons, layout primitives, etc.
- `/template`
  - Index of templates with quick links.
- `/template/landing` – **Marketing landing page**
- `/template/dashboard` – **Dashboard layout** with sidebar, stat cards, charts, billing, settings.
- `/template/product` – **Product page** with gallery, details, specs, reviews, promo CTA, and FAQ accordions.
- `/docs` – **Documentation**
  - Quick start, theming, and how to compose primitives.

Navigation and footer live in the global `app/layout.tsx`, so they are consistent across all pages.

---

## Project structure (high level)

```text
app/
  layout.tsx          # Global layout (fonts, nav, footer, theme wrapper)
  page.tsx            # Home / showcase
  globals.css         # Design tokens (CSS variables) + Tailwind base
  kitchen-sink/       # Kitchen sink demo page
  template/
    page.tsx          # Template index
    landing/page.tsx  # Landing template
    dashboard/page.tsx# Dashboard template
    product/page.tsx  # Product template
  docs/page.tsx       # Documentation

components/
  navigation.tsx      # Global navigation (templates dropdown, CTA)
  footer.tsx          # Global footer
  hero.tsx            # Hero variants (centered, split, background)
  promo-card.tsx      # Full-width promo card
  sidebar.tsx         # Dashboard sidebar
  feature-section.tsx # Marketing feature grid
  testimonial-card.tsx

components/ui/
  button.tsx, button.styles.ts
  input.tsx, textarea.tsx
  card.tsx
  badge.tsx, chip.tsx
  alert.tsx
  dialog.tsx
  tabs.tsx
  tooltip.tsx
  pagination.tsx
  skeleton.tsx
  progress.tsx
  spinner.tsx
  accordion.tsx
  avatar.tsx
  breadcrumbs.tsx
  file-upload.tsx
  figure.tsx
  ...and more

lib/
  utils.ts            # `cn()` helper for className merging
```

---

## Theming & design tokens

All theming is driven from **CSS variables** defined in `app/globals.css` and mapped into Tailwind via `tailwind.config.ts`.

- Colors:
  - Scales for `primary`, `secondary`, `accent`, `neutral` (50–900)
  - Semantic tokens: `success`, `warning`, `error`, `info`
  - Surface tokens: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--input`, `--ring`
- Radii and shadows:
  - `--radius` controls rounding across components
  - Custom shadows: `shadow-soft`, `shadow-card`, `shadow-inset`, `shadow-focus`
- Dark mode:
  - Tokens are overridden inside the `.dark` selector in `globals.css`
  - The app currently forces dark mode via `className="dark"` on `<html>` in `app/layout.tsx`

### To change the theme

1. Open `app/globals.css`.
2. Edit the values under `:root` (for light) and `.dark` (for dark) – e.g.:

   ```css
   :root {
     --primary-500: 0.78 0.17 88; /* OKLCH */
     --background: 0.97 0.02 95;
     --border: 0.85 0.02 95;
   }
   ```

3. Components will update automatically because they are built on these tokens.

For more detail, visit `/docs` in the running app.

---

## Using the components

Import primitives from the `components/ui` barrel file:

```tsx
import { Button, Card, Input } from "@/components/ui";
```

Use `buttonStyles` when you want a **Next.js `Link` styled like a button**:

```tsx
import Link from "next/link";
import { buttonStyles } from "@/components/ui/button.styles";

<Link href="/docs" className={buttonStyles({ variant: "primary", size: "md" })}>
  Read docs
</Link>;
```

Many components (dialogs, tooltips, accordion, tabs) wrap **Radix UI** primitives and already include sensible ARIA attributes and keyboard handling.

---

## Images

Remote images from `picsum.photos` are enabled in `next.config.ts`:

```ts
images: {
  remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
}
```

The product template also uses local images in `public/product-images/`.

---

## Deploying

You can deploy this app anywhere that supports Next.js 14 (e.g. Vercel). A typical Vercel setup just needs:

- Build command: `npm run build`
- Output: `.next`

See the official Next.js docs for deployment details:  
`https://nextjs.org/docs/app/building-your-application/deploying`
