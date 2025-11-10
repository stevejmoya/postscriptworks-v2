import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company").notNull(),
  message: text("message").notNull(),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  location: text("location").notNull(),
  role: text("role").notNull(),
  experience: text("experience").notNull(), 
  yearsExperience: text("years_experience").notNull(),
  hourlyRate: text("hourly_rate"),
  weeklyHours: text("weekly_hours"),
  portfolio: text("portfolio"),
  funFact: text("fun_fact"),
  resumeBase64: text("resume_base64"),
  resumeFilename: text("resume_filename"),
});

export const insertLeadSchema = createInsertSchema(leads).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  message: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().or(z.literal("")),
});

export const insertApplicationSchema = createInsertSchema(applications).pick({
  name: true,
  email: true,
  location: true,
  role: true,
  experience: true,
  yearsExperience: true,
  hourlyRate: true,
  weeklyHours: true,
  portfolio: true,
  funFact: true,
  resumeBase64: true,
  resumeFilename: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  hourlyRate: z.string().optional().or(z.literal("")),
  weeklyHours: z.string().optional().or(z.literal("")),
  funFact: z.string().optional().or(z.literal("")),
  resumeBase64: z.string().optional().or(z.literal("")),
  resumeFilename: z.string().optional().or(z.literal("")),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;
