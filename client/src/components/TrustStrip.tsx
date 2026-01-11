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

export function TrustStrip() {
  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4" data-testid="text-trust-title">
            Cuando una obra no puede fallar, el método importa.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-trust-description">
            En IFSA PANAMÁ trabajamos con planificación, supervisión y control en campo
            para reducir incertidumbre y asegurar entregables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover-elevate" data-testid={`card-trust-${index}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
