import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";

export default function Capacidades() {
  return (
    <Layout>
      {/* Hero image */}
      <Hero
        title="Capacidades"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      {/* Folder asset — solo la carpeta, contenido viene después */}
      <section className="bg-black flex justify-center py-0">
        <img
          src="/images/capabilities-container-bg.png"
          alt="Capacidades"
          className="w-full max-w-[560px] block"
        />
      </section>

      {/* CTA */}
      <CTASection
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
      />
    </Layout>
  );
}
