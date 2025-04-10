### Key Features
-----------------
## 1. Tech Stack:
○ Next.js (App Router)
○ React Hook Form for form handling
○ Zod for validation
○ TailwindCSS for styling
○ (Optional) React Query or RTK Query for API simulation

## 2. Form Steps:
○ Step 1: Personal Information
■ Full Name (required)
■ Email (required, valid format)
■ Phone Number (required, must be at least 10 digits)
○ Step 2: Address Details
■ Street Address (required)
■ City (required)
■ Zip Code (required, only numbers, min 5 digits)
○ Step 3: Account Setup
■ Username (required, min 4 characters)
■ Password (required, min 6 characters)
■ Confirm Password (must match password)

## 3. Features to Implement:
○ Zod validation for form validation.
○ Error messages under each field if validation fails.
○ "Next" and "Previous" buttons to navigate between steps.
○ summarized of the entered data before submission.
○ Stored data in the local state (useState/useReducer) and log the submitted data in the console.
○ Use React Query or RTK Query to simulate submitting data to an API.
○ Add dark mode support using TailwindCSS.

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




