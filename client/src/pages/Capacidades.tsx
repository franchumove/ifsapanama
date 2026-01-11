import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Capacidades() {
  return (
    <Layout>
      <Hero
        title="Capacidades"
        subtitle='Lo que te da tranquilidad no es "promesa". Es capacidad operativa + método.'
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-20 bg-background" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50" data-testid={`card-capability-${capability.id}`}>
                  <CardContent className="p-6 lg:p-8">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                      {capability.title}
                    </h3>
                    <ul className="space-y-3">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
                  Topografía y precisión
                </h2>
                <p className="text-muted-foreground mb-6">
                  El control geométrico reduce retrabajos y mantiene el proyecto dentro de parámetros.
                </p>
                <ul className="space-y-3">
                  {[
                    "Levantamiento (según necesidad)",
                    "Replanteo",
                    "Control de niveles y alineaciones",
                    "Validación por tramos / etapas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Topografía y control geométrico"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
                  alt="Maquinaria y apoyo operativo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
                  Maquinaria y apoyo operativo
                </h2>
                <p className="text-muted-foreground">
                  Capacidad para sostener ritmo y responder a campo según el proyecto. 
                  Coordinación de recursos, transporte de materiales y equipos para 
                  movimiento de tierra según las necesidades específicas de cada obra.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
