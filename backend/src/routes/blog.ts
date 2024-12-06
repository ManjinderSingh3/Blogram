import { Hono } from "hono";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.get("/:id", (c) => {
  return c.text("hello");
});
