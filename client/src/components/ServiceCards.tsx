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

export function ServiceCards({ services, showDetails = false }: ServiceCardsProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/50" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Servicios integrales para ejecutar con certeza.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde el replanteo hasta la entrega, con capacidad operativa y control en campo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card 
                  className="h-full border-border/50 hover-elevate"
                  data-testid={`card-service-${service.id}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                    
                    {showDetails && (
                      <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">Resuelve</span>
                          <p className="text-sm text-muted-foreground mt-1">{service.resuelve}</p>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">Cómo</span>
                          <p className="text-sm text-muted-foreground mt-1">{service.como}</p>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">Aplica cuando</span>
                          <p className="text-sm text-muted-foreground mt-1">{service.aplica}</p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Servicios sujetos a alcance y condiciones del proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link href="/servicios" data-testid="link-view-all-services">
            <Button variant="outline" className="gap-2" data-testid="button-view-services">
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
