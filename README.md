# AGAPAN Artisan Bakery

AGAPAN is a real bakery website built with Next.js, TypeScript, Tailwind CSS, and Prisma tooling. It showcases artisan bakery products, lets customers build a cart, and sends the order directly through WhatsApp.

This project is both a portfolio piece and a practical business tool for a local artisan bakery in Jacksonville, Florida.

## Live Demo

[agapan-website.vercel.app](https://agapan-website.vercel.app)

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Prisma Client generation
- WhatsApp order integration

## Features

- Product catalog with images, prices, and descriptions
- Recommended product section based on product order metadata
- Shopping cart modal with quantity controls
- WhatsApp checkout with a pre-filled order message
- Responsive layout for desktop and mobile
- Deployed on Vercel

## Screenshots

![AGAPAN home page](https://raw.githubusercontent.com/meyian777/agapan-website/main/public/images/screenshot-home.png)
![AGAPAN products](https://raw.githubusercontent.com/meyian777/agapan-website/main/public/images/screenshot-products.png)
![AGAPAN cart](https://raw.githubusercontent.com/meyian777/agapan-website/main/public/images/screenshot-cart.png)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

## Project Notes

- Product data is currently local, which keeps the deployed site simple and reliable.
- Prisma is included for future database-backed product and order management.
- WhatsApp checkout uses real contact numbers and URL-safe message encoding.

## Future Improvements

- Admin dashboard for product management
- Database-backed inventory and order history
- Online payments
- Automated email or WhatsApp notifications

## Author

Ian Mey  
Full-Stack Developer in progress  
Jacksonville, Florida  
meyian_777@outlook.com  
meymcian@gmail.com
