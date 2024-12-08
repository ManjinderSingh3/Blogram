import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post(`/signup`, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // IMPORTANT ! Whenever we're converting our data to JSON (like we did in line19), we await it because it returns a PROMISE
  const { username, password } = await c.req.json(); // Syntex to fetch body from request in Hono
  const user = await prisma.user.findUnique({
    where: { username },
  });
  try {
    if (user) {
      return c.json(
        {
          message: "User already exist",
        },
        403
      );
    } else {
      const user = await prisma.user.create({
        data: {
          username: username,
          password: password,
        },
      });
      const jwtToken = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ JWT_Token: jwtToken });
    }
  } catch (e) {
    console.log(e);
    return c.text("Invalid", 411);
  }
});

// Password condition
userRouter.post(`/signin`, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  if (!body.username || !body.password) {
    return c.json({ error: "Username and password both are required" }, 403);
  }
  const user = await prisma.user.findFirst({
    where: {
      username: body.username,
      password: body.password,
    },
  });
  if (!user) {
    return c.json({ error: "Invalid username or password" }, 403);
  }
  const jwtToken = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ JWT: jwtToken });
});
