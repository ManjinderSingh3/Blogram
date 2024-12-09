import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(`/*`, async (c, next) => {
  const authHeader = c.req.header("authorization") || " ";
  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      return c.json({ Error: "You're not logged in" }, 401);
    } else {
      c.set("userId", payload.id as string);
      await next();
    }
  } catch (e) {
    console.log(e);
    return c.json({ message: "You're not logged in" });
  }
});

blogRouter.get("/:id", (c) => {
  return c.text("hello");
});
