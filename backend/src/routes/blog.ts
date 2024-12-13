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
    prisma: PrismaClient;
  };
}>();

blogRouter.use(`/*`, async (c, next) => {
  // Anytime a request comes to blogRouter, initiaze PRISMA client here in middleware and seeting it up in Context.
  console.log("11");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log("here2");
  c.set("prisma", prisma as PrismaClient & typeof prisma);
  const authHeader = c.req.header("authorization") || "";
  const token = authHeader.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    if (payload) {
      c.set("userId", payload.id as string);
      await next();
    } else {
      return c.json({ error: "You're not logged in" }, 403);
    }
  } catch (e) {
    console.error("Error:",e);
    return c.json({ error: "You're not logged in" }, 403);
  }
});

// CREATE BLOG
blogRouter.post("/create-blog", async (c) => {
  const prisma = c.get("prisma");
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
    console.error("Error occured", e);
    return c.json(
      { error: "Unable to create blog. Please try again later" },
      500
    );
  }
});

// UPDATE BLOG
blogRouter.put("/update-blog", async (c) => {
  const body = await c.req.json();
  const prisma = c.get("prisma");
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
    return c.json(
      {
        error: "Failed to update the blog. Pleasse try again later.",
      },
      500
    );
  }
});

// GET all the blogs. TODO - Add pagination
blogRouter.get(`/all-blogs`, async (c) => {
  try {
    const prisma = c.get("prisma");
    const blogs = await prisma.blog.findMany();
    return c.json({ blogs });
  } catch (e) {
    console.error("Error : ", e);
    return c.json({ error: "An Error occured while fetching blogs !" });
  }
});

// GET a Specific Blog
blogRouter.get(`/:id`, async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: body.id,
      },
    });
    return c.json({ blog });
  } catch (e) {
    console.error(e);
    return c.json(
      {
        error: "An error occured while fetching blog. Please try again later",
      },
      500
    );
  }
});
