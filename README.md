# Captura Media — React + TypeScript + Tailwind

A multi-page site for Captura Media (photography / videography / graphic design),
built with Vite, React 19, TypeScript, React Router and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host (Netlify, Vercel,
GitHub Pages, S3, etc.) or run `npm run preview` to check it locally first.

## Project structure

```
src/
├── assets/          Images, logo
├── components/      Reusable pieces (Navbar, Footer, HeroSlider, Reveal, etc.)
├── data/            Centralized content (services, catalog items, nav links)
├── hooks/           useReveal — scroll-triggered animation hook
├── pages/           One file per route: Home, About, Services, Catalog, Booking
├── types/           Shared TypeScript interfaces
├── App.tsx          Router + layout shell
└── index.css        Tailwind import + design tokens (@theme) + custom animations
```

## Editing content

Most text lives in `src/data/content.ts` (services, catalog items, nav links) and
directly inside each page file in `src/pages/`. Update the placeholder contact
details (email, phone) in `src/components/Footer.tsx` and `src/pages/Booking.tsx`.

## Design tokens

Colors and fonts are defined once in `src/index.css` under `@theme`, derived from
the Captura Media logo:

| Token | Value | Use |
|---|---|---|
| `--color-shutter` | `#FF0002` | Brand red — CTAs, accents |
| `--color-ink` | `#0A0A0A` | Primary text / dark backgrounds |
| `--color-paper` | `#FAFAF8` | Page background |
| `--color-paper-dim` | `#F0EFE9` | Alternating section background |

Fonts: **Bebas Neue** (display/headings), **Inter** (body), **JetBrains Mono**
(labels, EXIF-style tags, buttons).

## Notes on the booking form

`src/pages/Booking.tsx` currently shows a client-side "request received" message
on submit — it doesn't send anywhere yet. To wire it up for real, swap the
`handleSubmit` function for a `fetch()` call to your backend, or to a form
service like Formspree/Resend/EmailJS.
