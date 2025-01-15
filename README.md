# Blogram

A modern blogging platform designed to empower writers and readers. Built with cutting edge technologies. 

## Tech Stack

**BACKEND:** Hono for serverless architecture

**DATABASE:** Postgres, PRISMA (ORM)

**FRONTEND:** React using Vite

**DEPLOYMENT:**

### Backend Setup 

### Database Setup

- Create Postgres instance and get connection url from [aiven.io](https://aiven.io/)
- In top level .env file place DATABASE_URL obtained from above step.
- Create Connection pool using [PRISMA Accelerate](https://www.prisma.io/data-platform/accelerate)
- Create `wrangler.toml` file and place the connection pool URL inside 'DATABASE_URL' variable.