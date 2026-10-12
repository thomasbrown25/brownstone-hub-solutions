This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form email

The site is a static Next.js export hosted on Azure Static Web Apps. The form posts to the Azure Functions endpoint in `api/contact`, which sends an email to `tbrown@brownstonehub.com` via Resend. It does **not** use a Next.js API route or Calendly.

Before the form can deliver messages, verify a sender domain in Resend and configure these **Azure Static Web Apps application settings** (not `NEXT_PUBLIC_` variables or GitHub secrets):

- `RESEND_API_KEY`: Resend API key with send permission.
- `CONTACT_FROM_EMAIL`: a verified sender on that domain, for example `Brownstone Hub Solutions <contact@brownstonehub.com>` after verifying `brownstonehub.com`.

The deployment workflow uploads `out` as the app and `api` as the Functions API. For local end-to-end testing, run the Next.js dev server and Azure Static Web Apps CLI together (or invoke the Function handler with a mocked provider request). The Next.js dev server alone does not serve `/api/contact`. Do not publish a provider key in the client bundle or commit it to the repo.
