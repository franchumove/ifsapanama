import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/lead", async (req, res) => {
    try {
      const validatedData = leadFormSchema.parse(req.body);
      
      const lead = await storage.createLead({
        nombre: validatedData.nombre,
        empresa: validatedData.empresa || null,
        telefono: validatedData.telefono,
        email: validatedData.email,
        tipoProyecto: validatedData.tipoProyecto,
        ubicacion: validatedData.ubicacion,
        etapa: validatedData.etapa,
        mensaje: validatedData.mensaje || null,
      });

      res.status(201).json({
        success: true,
        message: "Lead creado exitosamente",
        data: { id: lead.id },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Datos inválidos",
          errors: error.errors,
        });
      } else {
        console.error("Error creating lead:", error);
        res.status(500).json({
          success: false,
          message: "Error interno del servidor",
        });
      }
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ success: true, data: leads });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({
        success: false,
        message: "Error interno del servidor",
      });
    }
  });

  return httpServer;
}
