import { Router } from "express";
import { log } from "../index";
import { db } from "../db";
import { users } from "../db/schema";
import { z } from "zod";
import { validate } from "@shared/schema";
import { hash } from "bcrypt";

const registerSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
});

export function authRouter() {
  const router = Router();

  router.post("/register", validate(registerSchema), async (req, res) => {
    try {
      const { username, password } = req.body;

      const hashedPassword = await hash(password, 10);

      const newUser = await db
        .insert(users)
        .values({
          username,
          passwordHash: hashedPassword,
        })
        .returning({ id: users.id, username: users.username });

      log(`User registered: ${newUser[0].username}`, "auth");
      res.status(201).json({ message: "User registered successfully" });
    } catch (err: any) {
      if (err.code === "23505") {
        return res.status(409).json({ message: "Username already exists" });
      }
      log(`Error registering user: ${err.message}`, "auth");
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return router;
}