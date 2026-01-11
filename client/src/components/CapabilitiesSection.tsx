import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const capabilities = [
  "Personal técnico y supervisión de obra",
  "Planificación de frentes y coordinación operativa",
  "Topografía y replanteo",
  "Maquinaria y transporte (según necesidad)",
  "Protocolos de ejecución y control",
];

export function CapabilitiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50" data-testid="section-capabilities-home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Capacidad es responder en campo con método.
            </h2>
            <p className="text-muted-foreground mb-8">
              No se trata solo de "tener equipo". Se trata de ejecutar con supervisión,
              coordinación y control técnico.
            </p>

            <ul className="space-y-4 mb-8">
              {capabilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/contacto" data-testid="link-capabilities-cta">
              <Button className="gap-2" data-testid="button-capabilities-cta">
                Solicitar visita técnica
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Maquinaria y equipo de construcción"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
