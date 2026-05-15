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

      <section className="py-12 bg-black">
        <div 
          className="max-w-6xl mx-auto relative min-h-[400px] rounded-[3rem] overflow-hidden"
          style={{ 
            backgroundImage: "url('/images/folder-card-bg.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            clipPath: 'polygon(0 0, 75% 0, 76% 15px, 99.5% 15px, 99.5% 100%, 0 100%)'
          }}
        >
          <div className="pt-24 pb-16">
            <ProjectsGrid
              projects={featuredProjects}
              limit={2}
              showViewAll
            />
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
