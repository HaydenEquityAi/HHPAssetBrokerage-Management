# HHP Asset Brokerage Management

Commercial real estate company website for HHP Asset Group — property management, brokerage, advisory, and financial services.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** with SWC plugin
- **Tailwind CSS** + **shadcn/ui**
- **React Router v6** (60+ routes)
- **TanStack React Query**
- **Supabase** (database & auth)
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev        # Start dev server on port 8080
```

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```
VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
```

## Project Structure

```
src/
  pages/           # Page components (services/, assetTypes/, technology/)
  components/      # Reusable components (Layout/, ui/)
  hooks/           # Custom hooks (analytics, SEO, scroll)
  utils/           # Utilities (analytics, debug)
  integrations/    # Supabase client & types
```

## Deployment

Deployed via Vercel with SPA routing configured in `vercel.json`.
