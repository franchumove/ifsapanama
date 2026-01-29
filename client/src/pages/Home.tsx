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
        showCTAs
        size="large"
      />

      <IntentRoutes />

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
              Responder con método.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              No se trata solo de ejecutar. Se trata de sistemas que evitan errores, retrabajos y desviaciones técnicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {methodPilars.map((pilar, index) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card rounded-none" data-testid={`card-method-${index}`}>
                  <CardContent className="p-8">
                    <CheckSquare className="h-6 w-6 text-foreground/40 mb-6" />
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 uppercase tracking-tighter">
                      {pilar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pilar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/calidad-seguridad">
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.2em]">
                Conoce nuestro sistema de calidad →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">6+ Años</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">De experiencia</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">Sólida</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Infraestructura operativa</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tighter uppercase">Calificado</div>
              <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Equipo técnico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
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
