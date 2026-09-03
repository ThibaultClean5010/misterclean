# MisterClean — Vercel-ready frontend

Standalone React + Vite frontend extracted from the Hostinger AI Builder export.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Vercel
Import the repository in Vercel:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

The SPA fallback is configured in `vercel.json`.

## Temporarily disabled
- Blog
- Testimonials
- Hostinger-backed quote/contact forms

The Contact page remains available with direct phone and email actions.

## Remaining Hostinger dependency
A few images still use `horizons-cdn.hostinger.com` because the image binaries were not included in the export ZIP.
Download those assets into `public/` and replace the URLs before cancelling any Hostinger service that may affect the CDN.
