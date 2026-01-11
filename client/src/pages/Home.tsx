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
  const homeServices = services.slice(0, 7);
  const homeFaqs = faqs.slice(0, 4);

  return (
    <Layout>
      <Hero
        title="Construcción e infraestructura con control real."
        subtitle="Obra civil, arquitectura, topografía y maquinaria para proyectos públicos y privados en Panamá."
        showCTAs
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
    </Layout>
  );
}
