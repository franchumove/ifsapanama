import { Link } from "wouter";
import { Building2, Factory, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const routes = [
  {
    icon: Building2,
    title: "Infraestructura & Urbanismo",
    description: "Drenajes, colectoras, contención y redes asociadas.",
    href: "/proyectos?tipo=infraestructura",
    cta: "Ver proyectos relacionados",
  },
  {
    icon: Factory,
    title: "Industrial / Plantas / Sistemas",
    description: "Obras técnicas con alta exigencia de coordinación y control.",
    href: "/proyectos?tipo=industrial",
    cta: "Ver proyectos relacionados",
  },
  {
    icon: Landmark,
    title: "Obras Públicas y Grandes Frentes",
    description: "Intervenciones donde el orden y la trazabilidad no son opcionales.",
    href: "/proyectos?tipo=obras-publicas",
    cta: "Ver proyectos relacionados",
  },
];

const easing = [0.22, 1, 0.36, 1];

export function IntentRoutes() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30" data-testid="section-intent-routes">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-[22px] font-semibold text-foreground mb-6 sm:mb-8 mt-2 sm:mt-4 leading-relaxed"
          data-testid="text-intent-title"
        >
          Explora proyectos según el tipo de obra
        </motion.h3>
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
                  className="h-full border-border bg-card cursor-pointer group transition-all duration-500 hover:border-foreground/30 rounded-none"
                  data-testid={`card-route-${index}`}
                >
                  <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-foreground/5 flex items-center justify-center mb-6 border border-border">
                      <route.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4 uppercase tracking-tighter">
                      {route.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm">
                      {route.description}
                    </p>
                    <span className="inline-flex items-center text-foreground font-black gap-2 group-hover:gap-3 transition-all duration-300 text-[10px] uppercase tracking-widest">
                      {route.cta}
                      <ArrowRight className="h-3 w-3" />
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
