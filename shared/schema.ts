import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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

// Lead form schema
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nombre: text("nombre").notNull(),
  empresa: text("empresa"),
  telefono: text("telefono").notNull(),
  email: text("email").notNull(),
  tipoProyecto: text("tipo_proyecto").notNull(),
  ubicacion: text("ubicacion").notNull(),
  etapa: text("etapa").notNull(),
  mensaje: text("mensaje"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const leadFormSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  empresa: z.string().optional(),
  telefono: z.string().min(8, "Teléfono inválido"),
  email: z.string().email("Email inválido"),
  tipoProyecto: z.string().min(1, "Selecciona un tipo de proyecto"),
  ubicacion: z.string().min(2, "La ubicación es requerida"),
  etapa: z.string().min(1, "Selecciona una etapa"),
  mensaje: z.string().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type LeadFormData = z.infer<typeof leadFormSchema>;

// Project types
export type ProjectCategory =
  | "infraestructura"
  | "industrial"
  | "obras-publicas"
  | "urbanismo"
  | "sistemas"
  | "cerramientos";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  typeLabel: string;
  location?: string;
  thumbnail: string;
  gallery: string[];
  challenge: string;
  solution: string;
  scope: string[];
  outcome: string;
  tags: string[];
  featured?: boolean;
};

// Service types
export type Service = {
  id: string;
  title: string;
  icon: string;
  description: string;
  resuelve: string;
  como: string;
  aplica: string;
};

// Capability types
export type Capability = {
  id: string;
  title: string;
  items: string[];
};
