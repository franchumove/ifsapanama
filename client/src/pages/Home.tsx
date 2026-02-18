import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { IntentRoutes } from "@/components/IntentRoutes";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const methodPilars = [
  {
    title: "Control",
    description: "Verificación de lo crítico antes de avanzar.",
  },
  {
    title: "Trazabilidad",
    description: "Evidencia y validación por etapa.",
  },
  {
    title: "Orden operativo",
    description: "Coordinación real en campo.",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <Layout>
      <Hero
        title="Construcción e infraestructura de mediana y alta complejidad."
        subtitle="Cuando una obra no puede fallar, el método importa."
        backgroundImage="https://images.unsplash.com/photo-1541913053995-f195b3366d9a?w=1920&h=1080&fit=crop"
        size="large"
      />

      <IntentRoutes />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">+6 AÑOS</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">DE EXPERIENCIA</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">SÓLIDA</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">INFRAESTRUCTURA OPERATIVA</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">CALIFICADO</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">EQUIPO TÉCNICO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mb-6 uppercase tracking-tighter">
              Proyectos que prueban ejecución.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cada proyecto muestra el reto, la solución y el alcance real.
            </p>
          </motion.div>

          <ProjectsGrid
            projects={featuredProjects}
            limit={2}
            showViewAll
          />
        </div>
      </section>

      <CTASection 
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
        subtitle=""
      />
    </Layout>
  );
}
