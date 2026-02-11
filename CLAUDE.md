# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HHP Asset Brokerage Management — a commercial real estate company website built with React, TypeScript, Vite, and Tailwind CSS. Originally scaffolded via the Lovable platform. Deployed on Vercel.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test framework is configured.

## Architecture

### Stack
- **React 18** with **TypeScript** (strict mode off)
- **Vite** with SWC plugin for compilation
- **Tailwind CSS** + **shadcn/ui** (40+ Radix UI components in `src/components/ui/`)
- **React Router v6** — SPA with 60+ routes defined in `src/App.tsx`
- **TanStack React Query** for server state
- **React Hook Form + Zod** for form validation
- **Supabase** for database and auth
- **Google Analytics 4** (measurement ID: G-SEW7MT1WW1)

### Path Alias
`@/*` resolves to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

### Key Directories
- `src/pages/` — Page components, organized by domain (`services/`, `assetTypes/`, `technology/`)
- `src/components/Layout/` — Header, Footer, Layout wrapper (used by all pages)
- `src/components/ui/` — shadcn/ui primitives (do not manually edit; use shadcn CLI to update)
- `src/hooks/` — Custom hooks: `useAnalytics`, `useSEO`, `useScrollAnimation`, `use-mobile`
- `src/utils/` — `analytics.ts` (GA4 events), `debug.ts` (error logging/monitoring)
- `src/integrations/supabase/` — Supabase client init and auto-generated types

### Routing
All routes are in `src/App.tsx`. The app includes legacy backward-compatible routes that map old URLs to new page components. Vercel is configured with a catch-all rewrite to `index.html` for SPA routing (`vercel.json`).

### Reusable Page Templates
`src/components/AssetTypePage.tsx` is a shared template used by all 6 asset type detail pages. When modifying asset type pages, update the template rather than individual pages when possible.

### Contact Form
The contact form in `src/pages/Contact.tsx` submits to an n8n webhook at `https://n8n.capitalaiadvisors.com/webhook/hhp-contact`.

### Error Handling
- Global `ErrorBoundary` component wraps the entire app in `App.tsx`
- `src/utils/debug.ts` provides `initializeErrorHandling()` (called in `main.tsx`), `safeApiCall()` wrapper, and memory/network monitoring
- See `DEBUGGING_GUIDE.md` for past bug fixes and debugging procedures

### Analytics
`src/hooks/useAnalytics.ts` tracks page views, scroll depth (25/50/75/90/100%), and time-on-page. `src/utils/analytics.ts` has functions for tracking button clicks, form submissions, and custom events via GA4 `gtag()`.

## Design System

### Brand Colors (Tailwind)
- `hhp-navy` — primary dark navy
- `hhp-accent` — accent blue
- `hhp-charcoal` — body text
- `hhp-white` — backgrounds

### Typography
- Headings: `font-heading` (Brandon Grotesque → Montserrat fallback)
- Body: `font-body` (Inter system stack)
- Display: `font-display` (same as heading)

### Custom Shadows
`shadow-elegant`, `shadow-premium`, `shadow-subtle` — defined via CSS variables in `src/index.css`.

## Environment Variables

Prefixed with `VITE_` for client-side access:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`
