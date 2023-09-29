# React + TypeScript + Next.js + Convex + Tailwind + ESLint + shadcn/ui

Everything you need to build a full stack web app.

All shadcn/ui (Radix) components are already included.

Additonally there are layout components in `components/layout` and typography components in `components/typography`.

Check out example layouts by going to `http://localhost:3000/layouts`

## Setting up

```
npm create convex@latest -t nextjs-clerk-shadcn
```

Then:

1. Follow steps 1 to 3 in the [Clerk onboarding guide](https://docs.convex.dev/auth/clerk#get-started)
2. Paste the Issuer URL as `CLERK_JWT_ISSUER_DOMAIN` to your dev deployment environment variable settings on the Convex dashboard (see [docs](https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances))
3. Paste your publishable key as `VITE_CLERK_PUBLISHABLE_KEY="<your publishable key>"` to the `.env.local` file in this directory.

If you want to sync Clerk user data via webhooks, check out this [example repo](https://github.com/thomasballinger/convex-clerk-users-table/).
