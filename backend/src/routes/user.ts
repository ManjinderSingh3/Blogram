import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

userRouter.get(`/test`, (c) => {
  console.log("Test route got hit");
  return c.text("Hello testing");
});

userRouter.post(`/signup`, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // IMPORTANT !
  // Whenever we're converting our data to JSON (like we did in next line), we to await it because it returns a PROMISE
  const { username, password } = await c.req.json(); // Syntex to fetch body from request in Hono
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (user) {
    return c.json(
      {
        message: "User already exist",
      },
      403
    );
  } else {
    await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  }

  return c.text("Hello from ");
});
