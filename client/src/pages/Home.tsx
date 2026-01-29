import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { IntentRoutes } from "@/components/IntentRoutes";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ServiceCards } from "@/components/ServiceCards";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { services, faqs } from "@/data/services";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const homeServices = services.slice(0, 3);
  const homeFaqs = faqs.slice(0, 3);

  return (
    <Layout>
      <Hero
        title="Construcción e infraestructura de mediana y alta complejidad."
        subtitle="Cuando una obra no puede fallar, el método importa."
        showCTAs
        showStats
        chips={[
          "Obra civil & arquitectura",
          "Topografía & replanteo",
          "Maquinaria & transporte",
          "Panamá",
        ]}
        size="large"
      />

      <TrustStrip />

      <IntentRoutes />

      <ProjectsGrid
        projects={featuredProjects}
        limit={6}
        showViewAll
      />

      <ServiceCards services={homeServices} />

      <CapabilitiesSection />

      <FAQAccordion faqs={homeFaqs} />

      <CTASection />
      <section className="section-premium bg-ifsa-black text-white py-32 border-b-0">
        <div className="container-premium">
          <div className="divider-gold mb-10 bg-white" />
          <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-7xl mb-12 tracking-tighter uppercase text-center">
            Nuestra Trayectoria Técnica
          </h2>
          <p className="text-center text-white/70 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
            IFSA PANAMÁ se consolida como un aliado estratégico en la ejecución de infraestructura civil, aportando precisión y control en cada fase del proyecto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-bold tracking-tighter uppercase">+10</div>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Años de experiencia</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold tracking-tighter uppercase">+50</div>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Obras ejecutadas</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold tracking-tighter uppercase">100%</div>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Cumplimiento técnico</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
