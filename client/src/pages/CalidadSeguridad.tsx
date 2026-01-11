import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { faqs } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Shield, FileCheck, Users } from "lucide-react";

const principles = [
  {
    icon: CheckCircle2,
    title: "Control",
    description: "Verificar lo crítico antes de avanzar",
  },
  {
    icon: Users,
    title: "Orden",
    description: "Coordinación de frentes y seguridad",
  },
  {
    icon: FileCheck,
    title: "Trazabilidad",
    description: "Evidencias y entregables por etapa",
  },
];

const avoidItems = [
  "Improvisación sin control",
  "Cambios sin trazabilidad",
  "Retrabajos por falta de replanteo",
  "Avances sin verificación",
];

export default function CalidadSeguridad() {
  return (
    <Layout>
      <Hero
        title="Calidad y seguridad"
        subtitle='No es un "sello". Es cómo se ejecuta, cómo se verifica y cómo se controla.'
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-20 bg-background" data-testid="section-quality-principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Principios en obra
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 text-center" data-testid={`card-principle-${index}`}>
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-muted/50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
              Lo que evitamos (porque cuesta caro)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {avoidItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-destructive shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQAccordion
        faqs={faqs}
        title="Preguntas frecuentes"
        subtitle="Lo que más preocupa antes de contratar una constructora."
      />

      <CTASection />
    </Layout>
  );
}
