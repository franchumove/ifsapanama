import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Building2, 
  Construction, 
  Compass, 
  Mountain, 
  Droplets, 
  Fence, 
  Truck 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Construction,
  Compass,
  Mountain,
  Droplets,
  Fence,
  Truck,
};

export default function Servicios() {
  return (
    <Layout>
      <Hero
        title="Servicios"
        subtitle="Ejecutamos con método: planificación, supervisión y control para reducir riesgo en campo."
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-20 bg-background" data-testid="section-services-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Un servicio no es una lista. Es un sistema de ejecución.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Por eso describimos cada servicio por lo que resuelve, cómo se ejecuta y cuándo aplica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                  <Card className="h-full border-border/50" data-testid={`card-service-detail-${service.id}`}>
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                            {service.title}
                          </h3>
                          
                          <div className="space-y-4">
                            <div>
                              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                Resuelve
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.resuelve}
                              </p>
                            </div>
                            
                            <div>
                              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                Cómo
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.como}
                              </p>
                            </div>
                            
                            <div>
                              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                Aplica cuando
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.aplica}
                              </p>
                            </div>
                          </div>
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
        title="El primer paso es técnico, no comercial."
        subtitle="Solicita una visita y te respondemos con diagnóstico de alcance."
      />
    </Layout>
  );
}
