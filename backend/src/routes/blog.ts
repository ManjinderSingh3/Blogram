import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
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
    console.log("PAYLOAD ---> ", payload);
    console.log(typeof payload.id);
    if (payload) {
      c.set("userId", payload.id as string);
      await next();
    } else {
      return c.json({ Error: "You're not logged in" }, 403);
    }
  } catch (e) {
    return c.json({ message: "You're not logged in" }, 403);
  }
});

blogRouter.post("/create-blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const blog = await prisma.blog.create({
      data: {
        authorId: c.get("userId"),
        title: body.title,
        content: body.content,
      },
    });
    if (!blog) {
      return c.json({ message: "" }, 411);
    }
    return c.json({
      id: blog.id,
    });
  } catch (e) {
    console.log(e);
    return c.json({});
  }
});

// UPDATE
blogRouter.put("/update-blog", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const updatedBlog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ updatedBlog: updatedBlog });
  } catch (e) {
    console.error(e);
    return c.json({
      error: "Failed to update the blog. Pleasse try again later.",
    });
  }
});

// GET List of all blogs
blogRouter.get(`/all-blogs`);

// GET a specific blog
blogRouter.get(`/:id`, (c) => {
  return c.text("Hello");
});
