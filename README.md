This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Tech Stack
Frontend: Next.js, TypeScript, TailwindCSS, Shadcn/UI

Payments: Stripe

📖 Overview
This is a modern e-commerce web application built with Next.js and styled using TailwindCSS. It features:

A responsive landing page with a hero section and image carousel

A products page that dynamically displays product data fetched from Stripe

A product details page with:

Product info

Quantity increment/decrement buttons

Add to cart functionality

A shopping cart view with:

Real-time cart quantity shown in the navbar

Checkout page showing product names, quantities, and total amount

💳 Stripe Payment Integration
Users can proceed to a secure Stripe checkout page to complete their payment using real card details (in test mode).

🎓 Learning Experience
This project is based on a tutorial by PedroTech. I followed the entire video and implemented the project on my own. Through this, I learned:

How to build real-world projects using Next.js and TypeScript

How to integrate Stripe payment processing

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
