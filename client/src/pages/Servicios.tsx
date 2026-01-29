import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { services, executionLines } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, LucideIcons.LucideIcon> = {
  PencilRuler: LucideIcons.PencilRuler,
  Building2: LucideIcons.Building2,
  Settings2: LucideIcons.Settings2,
  Droplets: LucideIcons.Droplets,
  Milestone: LucideIcons.Milestone,
  Construction: LucideIcons.Construction,
  Truck: LucideIcons.Truck,
  Map: LucideIcons.Map,
  Layers: LucideIcons.Layers,
  Container: LucideIcons.Container,
};

export default function Servicios() {
  return (
    <Layout>
      <Hero
        title="Arquitectura de Servicios"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      <section className="py-24 bg-background" data-testid="section-services-intro">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mb-6 uppercase tracking-tighter">
              Servicios Core
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Un servicio no es una lista. Es un sistema de ejecución definido por el problema que resuelve, su método y su aplicación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => {
              const IconComponent = (iconMap as any)[service.icon] || LucideIcons.Building2;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border bg-card rounded-none" data-testid={`card-service-detail-${service.id}`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-foreground/5 flex items-center justify-center mb-8 border border-border">
                        <IconComponent className="h-8 w-8 text-foreground" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-6 uppercase tracking-tighter">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-8">
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Resuelve</span>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.resuelve}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Cómo se ejecuta</span>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.como}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2">Aplica cuando</span>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.aplica}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-border pt-20"
          >
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4 uppercase tracking-tighter">
                Líneas de Ejecución
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Alcances técnicos especializados integrados en nuestros servicios core según los requerimientos del proyecto.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {executionLines.map((line, index) => {
                const Icon = (iconMap as any)[line.icon] || LucideIcons.Construction;
                return (
                  <motion.div
                    key={line.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 border border-border bg-card text-center space-y-3"
                  >
                    <Icon className="h-6 w-6 text-foreground/40" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 leading-tight">
                      {line.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="El primer paso es técnico, no comercial."
        subtitle="Solicita una visita y te respondemos con diagnóstico de alcance."
      />
    </Layout>
  );
}
