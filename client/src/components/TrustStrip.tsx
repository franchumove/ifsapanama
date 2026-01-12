import { CheckCircle2, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const trustItems = [
  {
    icon: CheckCircle2,
    title: "Control de calidad",
    description: "Inspección, trazabilidad y verificación de obra en cada etapa.",
  },
  {
    icon: Clock,
    title: "Ejecución eficiente",
    description: "Coordinación y respuesta operativa para avanzar sin fricción innecesaria.",
  },
  {
    icon: Shield,
    title: "Responsabilidad operativa",
    description: "Compromiso con seguridad, orden y cumplimiento técnico en el sitio.",
  },
];

const easing = [0.22, 1, 0.36, 1];

export function TrustStrip() {
  return (
    <section className="py-24 lg:py-32 bg-background" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="divider-gold mb-6" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight" data-testid="text-trust-title">
            Cuando una obra no puede fallar, el método importa.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-trust-description">
            En IFSA PANAMÁ trabajamos con planificación, supervisión y control en campo
            para reducir incertidumbre y asegurar entregables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
            >
              <Card className="h-full border-border/40 transition-all duration-500 hover:border-primary/20 hover:shadow-lg group" data-testid={`card-trust-${index}`}>
                <CardContent className="p-8 lg:p-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:from-primary/20 group-hover:to-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
