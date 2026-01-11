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

export function IntentRoutes() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50" data-testid="section-intent-routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            ¿Qué tipo de obra necesitas?
          </h2>
          <p className="text-muted-foreground">
            Elige tu ruta y revisa proyectos similares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={route.href} data-testid={`link-route-${index}`}>
                <Card 
                  className="h-full border-border/50 hover-elevate cursor-pointer group"
                  data-testid={`card-route-${index}`}
                >
                  <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <route.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {route.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      {route.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm gap-2 group-hover:gap-3 transition-all">
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
