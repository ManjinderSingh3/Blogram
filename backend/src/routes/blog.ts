import { Hono } from "hono";
export const blogRouter = new Hono();

blogRouter.get("/:id", (c) => {
  return c.text("hello");
});
