import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckSquare, XCircle, Search, Layers, FileText } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Control",
    description: "Verificar lo crítico antes de avanzar cada etapa de obra. Todo avance se valida contra planos y especificaciones antes de su ejecución.",
  },
  {
    icon: Layers,
    title: "Orden",
    description: "Coordinación de frentes, recursos y seguridad operativa. La planificación evita interferencias y retrabajos durante la ejecución.",
  },
  {
    icon: FileText,
    title: "Trazabilidad",
    description: "Evidencias técnicas y entregables por etapa. Cada fase queda documentada mediante reportes y controles verificables.",
  },
];

const avoidItems = [
  "Improvisación sin control técnico",
  "Cambios sin trazabilidad",
  "Retrabajos por falta de replanteo",
  "Avances sin verificación previa",
];

const qualityFaqs = [
  {
    question: "¿Cómo garantizan el cumplimiento de los tiempos de entrega?",
    answer: "A través de planificación técnica, control de frentes de trabajo y validación de cada avance antes de continuar. No avanzamos etapas sin cumplir especificaciones, lo que reduce retrabajos y desviaciones de cronograma.",
  },
  {
    question: "¿Qué tipo de proyectos de ingeniería diseñan?",
    answer: "Diseñamos proyectos de ingeniería civil e infraestructura alineados a normativa vigente y a condiciones reales de campo, incluyendo estructuras, obras hidráulicas, pavimentos y soluciones técnicas específicas según el proyecto.",
  },
  {
    question: "¿Atienden emergencias de mantenimiento locativo?",
    answer: "Sí. Atendemos mantenimientos preventivos y correctivos en edificaciones comerciales, industriales y residenciales, priorizando seguridad operativa y continuidad de funcionamiento.",
  },
];

export default function CalidadSeguridad() {
  return (
    <Layout>
      <Hero
        title="Calidad y Seguridad"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      <section className="py-24 bg-background" data-testid="section-quality-principles">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground uppercase tracking-tighter">
              Principios en Obra
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card rounded-none" data-testid={`card-principle-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-foreground/5 flex items-center justify-center mb-6 border border-border">
                      <principle.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4 uppercase tracking-tighter">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
            className="bg-foreground/5 border border-border p-12 lg:p-16"
          >
            <h2 className="font-heading font-bold text-2xl text-foreground mb-10 text-center uppercase tracking-tighter">
              Lo que evitamos (porque cuesta caro)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {avoidItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <XCircle className="h-5 w-5 text-foreground/40 shrink-0" />
                  <span className="text-foreground font-bold uppercase tracking-tight text-xs">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQAccordion
        faqs={qualityFaqs}
        title="Preguntas frecuentes"
        subtitle="Lo que más preocupa antes de contratar una constructora."
      />

      <CTASection 
        title="EL PRIMER PASO ES TÉCNICO, NO COMERCIAL."
        subtitle="Solicita una visita técnica y te respondemos con un diagnóstico claro de alcance y ejecución."
      />
    </Layout>
  );
}
