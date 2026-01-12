import { Link } from "wouter";
import { Building2, Factory, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const routes = [
  {
    icon: Building2,
    title: "Infraestructura & Urbanismo",
    description: "Drenajes, colectoras, enrocados, obras de contención y redes asociadas.",
    href: "/proyectos?tipo=infraestructura",
    cta: "Ver proyectos de infraestructura",
  },
  {
    icon: Factory,
    title: "Industrial / Plantas / Sistemas",
    description: "Obras técnicas, redes, estaciones, sistemas y ejecución con alta exigencia de coordinación.",
    href: "/proyectos?tipo=industrial",
    cta: "Ver proyectos industriales",
  },
  {
    icon: Landmark,
    title: "Obras Públicas y Grandes Frentes",
    description: "Intervenciones de alta visibilidad donde el control y el orden no son opcionales.",
    href: "/proyectos?tipo=obras-publicas",
    cta: "Ver proyectos públicos",
  },
];

const easing = [0.22, 1, 0.36, 1];

export function IntentRoutes() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30" data-testid="section-intent-routes">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="text-center mb-16"
        >
          <div className="divider-gold mb-6" />
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            ¿Qué tipo de obra necesitas?
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige tu ruta y revisa proyectos similares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {routes.map((route, index) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
            >
              <Link href={route.href} data-testid={`link-route-${index}`}>
                <Card 
                  className="h-full border-border/40 cursor-pointer group transition-all duration-500 hover:border-primary/20 hover:shadow-lg"
                  data-testid={`card-route-${index}`}
                >
                  <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:from-primary/20 group-hover:to-primary/10">
                      <route.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                      {route.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                      {route.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all duration-300">
                      {route.cta}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
