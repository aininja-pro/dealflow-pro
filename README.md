# DealFlow Pro

DealFlow Pro is a web application designed to help anyone interested in real estate acquisitions—from investors and flippers to beginners—navigate the entire deal-making process. The app guides users from preparing for seller conversations (with custom checklists and dynamic scripts) through to analyzing deal profitability with an advanced calculator, tracking opportunities on a sleek dashboard, and managing property photos in one organized place.

## Features

- **Pre-Work Planner**: Checklists and goal-setting prompts for seller calls
- **Dynamic Conversation Guide**: Scripts that adjust in real-time depending on conversation flow
- **Deal Calculator and ARV Estimation**: Manual input form for subject property details and comparable sales
- **Photo Capture & Management**: In-app camera support for mobile and web upload capability
- **Educational Tips**: Vetted, admin-controlled static content
- **Analytics and Reporting**: Real-time visual dashboards displaying deal progress and activity trends
- **Account and Subscription Management**: Profile, billing, and subscription management integrated with Stripe

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Chakra UI
- **Backend**: Next.js API routes
- **Authentication**: Role-based access control (Standard Users, Team Members/Partners, and Administrators)
- **Storage**: AWS S3 for cloud storage
- **Payments**: Stripe for handling payments and subscriptions

## Getting Started

### Prerequisites

- Node.js v20.2.1 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aininja-pro/dealflow-pro.git
   cd dealflow-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   # Environment variables
   NEXT_PUBLIC_APP_NAME=DealFlow Pro
   NEXT_PUBLIC_APP_DESCRIPTION=Streamlined Real Estate Acquisition and Management App

   # AWS S3 Configuration
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   AWS_REGION=us-east-1
   AWS_S3_BUCKET=dealflow-pro-uploads

   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
dealflow-pro/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── auth/                 # Authentication pages
│   ├── dashboard/            # Dashboard page
│   ├── planner/              # Pre-Work Planner page
│   ├── conversation/         # Conversation Guide page
│   ├── calculator/           # Deal Calculator page
│   ├── photos/               # Photo Management page
│   ├── tips/                 # Educational Tips page
│   ├── analytics/            # Analytics and Reporting page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── providers.tsx         # Providers for the app
├── components/               # Reusable components
├── config/                   # Configuration files
├── middleware/               # Middleware for authentication and logging
├── services/                 # API service layer
├── public/                   # Static assets
├── .env                      # Environment variables
├── .gitignore                # Git ignore file
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. 