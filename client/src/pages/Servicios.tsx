import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, LucideIcons.LucideIcon> = {
  PencilRuler: LucideIcons.PencilRuler,
  Building2: LucideIcons.Building2,
  Droplets: LucideIcons.Droplets,
  Milestone: LucideIcons.Milestone,
  Construction: LucideIcons.Construction,
  Settings2: LucideIcons.Settings2,
};

export default function Servicios() {
  return (
    <Layout>
      <Hero
        title="Sistemas de Ejecución"
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
              Servicios Oficiales
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-foreground font-bold text-xl leading-snug">
                Un servicio no es una lista.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Es un sistema de ejecución definido por el problema que resuelve,
                su método y su aplicación en campo.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h3 className="font-heading font-bold text-xl text-foreground mb-6 uppercase tracking-tighter min-h-[3rem] flex items-center">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-8">
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2 opacity-50">Resuelve</span>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.resuelve}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2 opacity-50">Cómo se ejecuta</span>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {service.como}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-2 opacity-50">Aplica cuando</span>
                          <p className="text-muted-foreground leading-relaxed text-sm">
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
        </div>
      </section>

      <CTASection
        title="EL PRIMER PASO ES TÉCNICO, NO COMERCIAL."
        subtitle="Solicita una visita y te respondemos con diagnóstico de alcance."
      />
    </Layout>
  );
}
