import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { IntentRoutes } from "@/components/IntentRoutes";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <Layout>
      <Hero
        title="Construcción e infraestructura de mediana y alta complejidad."
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="large"
        backgroundImage="/images/hero-reference.jpg"
      />

      <IntentRoutes />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["+6 AÑOS", "DE EXPERIENCIA"],
              ["SÓLIDA", "INFRAESTRUCTURA OPERATIVA"],
              ["CALIFICADO", "EQUIPO TÉCNICO"],
            ].map(([value, label]) => (
              <div key={label} className="border border-border p-8 text-center">
                <div className="text-3xl font-bold tracking-tighter uppercase">{value}</div>
                <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold mt-2">{label}</p>
              </div>
            ))}
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
