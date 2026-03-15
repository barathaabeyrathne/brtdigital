# brt digital marketing site

Single-page marketing website built with React + TypeScript + Vite, Tailwind CSS, Framer Motion, and lightweight accessible UI primitives.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content editing

Update these files for business content:

- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/testimonials.ts`

## Project structure

- `src/components`: reusable UI components (`Button`, `Card`, `Section`, `Nav`, `Accordion`, `Toast`)
- `src/sections`: page sections (`Hero`, `Services`, `Work`, `Process`, `About`, `Contact`, `Footer`)
- `src/data`: site content data sources
- `src/lib`: helpers (`utils`, `motion`, `submitLead`)

## Contact form wiring (EmailJS / API)

The form currently calls `submitLead()` in `src/lib/submitLead.ts` and logs the payload. Replace that function with:

1. EmailJS client call (browser-side), or
2. `fetch('/api/leads', { method: 'POST', body: JSON.stringify(payload) })` to your backend.

Keep the existing return shape (`{ ok: boolean }`) so UI behavior remains unchanged.
