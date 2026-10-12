## Getting Started

1. Clone the repository: git clone https://github.com/Al1k04/phones-website.git
2. Install dependencies: npm install
3. Create a `.env` file in the root and add your Supabase connection strings: DATABASE_URL="..."
   DIRECT_URL="..."
4. Run migrations to create the database tables
   npx prisma generate
   npx prisma migrate dev
5. Seed the database with sample products
   npx tsx prisma/seed.ts
6. Start the dev server
   npm run dev

## Features

- Apple tech catalog displaying each product's photo, title, model, and price
- Real-time search filtering products by title as you type
- Product data loaded from a PostgreSQL database (Supabase)
- Responsive product grid (1/2/3 columns depending on screen size)
- Unit and interaction tests with Vitest and React Testing Library
