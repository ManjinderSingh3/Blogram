import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
//import bcrypt from "bcrypt";

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

  // IMPORTANT ! Whenever we're converting our data to JSON we await it because json() is an asynchronous function. Without await, TypeScript assumes we're working directly with the PROMISE
  const { username, password } = await c.req.json(); // Syntex to fetch body from request in Hono
  const isExistingUser = await prisma.user.findUnique({
    where: { username },
  });
  try {
    if (isExistingUser) {
      return c.json(
        {
          message: "User already exist",
        },
        403
      );
    } else {
      // Hash Password before saving it to database
      //const hashedPassword = await bcrypt.hash(password, saltRounds);
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

userRouter.get(`/allusers`, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const listOfUsers = await prisma.user.findMany();
    return c.json(listOfUsers);
  } catch (e) {
    console.log(e);
    return c.text("Error occured while fetching all users");
  }
});
