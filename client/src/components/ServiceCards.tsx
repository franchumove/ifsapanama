import { Link } from "wouter";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PencilRuler: LucideIcons.PencilRuler,
  Building2: LucideIcons.Building2,
  Settings2: LucideIcons.Settings2,
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
          className="text-center mb-12 sm:mb-16"
        >
          <div className="divider-gold mb-6" />
          <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 tracking-tighter uppercase">
            Servicios técnicos para la ejecución y control de obra.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Desde el dibujo y la topografía hasta la entrega final, cumpliendo con estricto control de calidad y especificaciones técnicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = (iconMap as any)[service.icon] || LucideIcons.Building2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
              >
                <Card 
                  className="h-full border-border transition-all duration-300 hover:border-foreground/30 group bg-card"
                  data-testid={`card-service-${service.id}`}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-foreground/5 flex items-center justify-center mb-8 border border-border">
                      <IconComponent className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4 uppercase tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Resuelve</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.resuelve}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Cómo</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.como}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Aplica cuando</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.aplica}</p>
                      </div>
                    </div>
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
            <Button variant="outline" size="lg" className="gap-2 font-semibold transition-all duration-300 hover:border-foreground/30" data-testid="button-view-services">
              Ver todos los servicios
              <LucideIcons.ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
