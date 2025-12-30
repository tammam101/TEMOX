import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z, ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const validate = (schema: ZodSchema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error: any) {
    res.status(400).json({ message: error.errors });
  }
};
