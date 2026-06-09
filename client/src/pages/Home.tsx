import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { IntentRoutes } from "@/components/IntentRoutes";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const featuredSlugs = [
    "tanque-digestor-lipp",
    "bordillos-metro-panama",
    "evaluacion-estructural-muro",
  ] as const;
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <Layout>
      <Hero
        title="Construcción e infraestructura de mediana y alta complejidad."
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="large"
        backgroundImage="/images/hero-construction.png"
      />

      <IntentRoutes />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["+6 AÑOS", "DE EXPERIENCIA"],
              ["SÓLIDA", "INFRAESTRUCTURA OPERATIVA"],
              ["CALIFICADO", "EQUIPO TÉCNICO"],
            ].map(([value, label]) => (
              <div key={label} className="p-8 text-center flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-2">
                  {value}
                </div>
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-white/50 uppercase leading-tight text-center max-w-[200px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 bg-black px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-6xl mx-auto relative min-h-[400px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-[#4a4a4a] border-2 border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
        >
          <div className="py-20">
            <ProjectsGrid projects={featuredProjects} showViewAll />
          </div>
        </div>
      </section>

      <CTASection 
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
        subtitle=""
      />
    </Layout>
  );
}
