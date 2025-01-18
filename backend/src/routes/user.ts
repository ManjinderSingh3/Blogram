import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { signupInput, signinInput } from "@manjinder_dev/blogram-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post(`/signup`, async (c) => {
  console.log("Reached Backend route");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // IMPORTANT ! Whenever we're converting our data to JSON we await it because json() is an asynchronous function. Without await, TypeScript assumes we're working directly with the PROMISE
  console.log("Here");
  const body = await c.req.json(); // Syntex to fetch body from request in Hono
  console.log("Body:", body);
  const { success } = signupInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Inputs are incorrect" }, 411);
  }
  const isExistingUser = await prisma.user.findUnique({
    where: { username: body.username },
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
      // Hashing Password
      const hashedPassword = await hashPassword(body.password);
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: hashedPassword,
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
  const { success } = signinInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Invalid Inputs !" }, 411);
  }
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

// ------ FUNCION to HASH Password -------
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  // Generate a salt for the password
  const salt = crypto.getRandomValues(new Uint8Array(16));
  // Import the key (PBKDF2 algorithm)
  const key = await crypto.subtle.importKey(
    "raw",
    salt,
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  // Derive the key using PBKDF2
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000, // Higher number of iterations for security
      hash: "SHA-256", // Use SHA-256 for hashing
    },
    key,
    { name: "HMAC", hash: "SHA-256", length: 256 }, // HMAC with SHA-256
    true,
    ["sign"]
  );

  // Export the key as raw data (hashed password)
  const hashedBuffer = await crypto.subtle.exportKey("raw", derivedKey);
  // Convert the hashed buffer to a string (Base64 or Hex encoding)
  const hashArray = Array.from(new Uint8Array(hashedBuffer));
  return btoa(String.fromCharCode(...hashArray));
}
