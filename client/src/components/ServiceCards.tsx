import { Link } from "wouter";
import { 
  Building2, 
  Construction, 
  Compass, 
  Mountain, 
  Droplets, 
  Fence, 
  Truck 
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Construction,
  Compass,
  Mountain,
  Droplets,
  Fence,
  Truck,
};

interface ServiceCardsProps {
  services: Service[];
  showDetails?: boolean;
}

const easing = [0.22, 1, 0.36, 1];

export function ServiceCards({ services, showDetails = false }: ServiceCardsProps) {
  return (
    <section className="py-24 lg:py-32 bg-muted/30" data-testid="section-services">
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
            Servicios técnicos para la ejecución y control de obra.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Desde el dibujo y la topografía hasta la entrega final, cumpliendo con estricto control de calidad y especificaciones técnicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: easing }}
              >
                <Card 
                  className="h-full border-border/40 transition-all duration-500 hover:border-primary/20 hover:shadow-lg group"
                  data-testid={`card-service-${service.id}`}
                >
                  <CardContent className="p-7 lg:p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:from-primary/20 group-hover:to-primary/10">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {showDetails && (
                      <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Resuelve</span>
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{service.resuelve}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Cómo</span>
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{service.como}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Aplica cuando</span>
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{service.aplica}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Servicios sujetos a alcance y condiciones del proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: easing }}
          className="flex justify-center mt-10"
        >
          <Link href="/servicios" data-testid="link-view-all-services">
            <Button variant="outline" size="lg" className="gap-2 font-semibold transition-all duration-500 hover:border-primary/30" data-testid="button-view-services">
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
