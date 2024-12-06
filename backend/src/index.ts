import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate"; // We need this Dependency to connect PRISMA to Connection pool and not the actual Postgres Database

const app = new Hono();

app.route(`/api/v1/user/`, userRouter);
app.route(`/api/v1/blog`, blogRouter);

export default app;
