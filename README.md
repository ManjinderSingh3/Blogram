
# Blogram

A modern blogging platform designed to empower writers and readers. Built with cutting edge technologies. 

## Tech Stack

**BACKEND:** Cloudflare Workers using Hono framework for a serverless architecture

**DATABASE:** Postgres, PRISMA (ORM)

**FRONTEND:** React using Vite

**LANGUAGE:** Typescript

**DEPLOYMENT**̃
- Frontend : Vercel
- Backend : Cloudflare Worker

## Database Setup

- Create Postgres instance and get the connection url from [aiven.io](https://aiven.io/) (or any other provider of your choice)
- In top level .env file place DATABASE_URL obtained from above step. As an example you can refer `.env.example`file
- Create Connection pool using [PRISMA Accelerate](https://www.prisma.io/data-platform/accelerate)
- Inside `wrangler.toml` file place the connection pool URL. I have placed `wrangler.toml.example` file for reference
- Migrate database to Postgres instance using this command `npx prisma migrate dev --name init_schema`
- Generate Prisma Client ( It will be used to instantiate Prisma in our Codebase) `npx prisma generate --no-engine`


## Steps to run project locally (In development mode)

Backend 
- cd backend
- `yarn install`
- `yarn dev`

Frontend
- cd frontend
- `yarn install`
- `yarn dev`

