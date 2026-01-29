import { Link } from "wouter";
import { CheckSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const highlights = [
  "Planificación de frentes y coordinación operativa",
  "Supervisión constante y control de calidad",
  "Topografía y precisión geométrica",
  "Maquinaria y apoyo operativo propio",
  "Responsabilidad de principio a fin",
];

export function CapabilitiesSection() {
  return (
    <section className="py-24 bg-foreground/5" data-testid="section-capabilities-home">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mb-8 uppercase tracking-tighter">
              Capacidad es responder con método.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              No se trata solo de "tener equipo". Se trata de sistemas de respaldo operativo que garantizan la ejecución sin desviaciones técnicas.
            </p>

            <ul className="space-y-5 mb-12">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckSquare className="h-5 w-5 text-foreground/40 mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium uppercase tracking-tight text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/capacidades" data-testid="link-capabilities-cta">
              <Button size="lg" className="gap-2 font-bold" data-testid="button-capabilities-cta">
                CONOCER NUESTRO MÉTODO
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
            <div className="aspect-[4/3] border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Capacidad operativa IFSA"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
