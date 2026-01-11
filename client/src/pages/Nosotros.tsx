import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Zap, CheckSquare } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Compromiso con cada proyecto y cada cliente.",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Optimización de recursos y tiempos sin sacrificar calidad.",
  },
  {
    icon: CheckSquare,
    title: "Control de calidad",
    description: "Verificación constante en cada etapa del proyecto.",
  },
];

export default function Nosotros() {
  return (
    <Layout>
      <Hero
        title="Nosotros"
        subtitle="IFSA PANAMÁ es una constructora enfocada en ejecutar con responsabilidad, eficiencia y control de calidad."
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-20 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-6">
                Una empresa se define por cómo ejecuta.
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  IFSA PANAMÁ nace para responder a proyectos donde el control técnico 
                  y la capacidad operativa marcan la diferencia.
                </p>
                <p>
                  Nos especializamos en obra civil, infraestructura, topografía y apoyo 
                  de maquinaria para proyectos públicos y privados en todo el territorio 
                  panameño.
                </p>
                <p>
                  Nuestro enfoque está en la planificación, supervisión y control en campo, 
                  reduciendo incertidumbre y asegurando entregables que cumplen con las 
                  expectativas de nuestros clientes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=800&h=600&fit=crop"
                  alt="Equipo IFSA PANAMÁ"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Principios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 text-center" data-testid={`card-about-principle-${index}`}>
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-muted/50 rounded-lg p-8 lg:p-12"
          >
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4 text-center">
              Equipo
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Equipo técnico y operativo orientado a ejecución en campo. Profesionales 
              con experiencia en construcción, topografía, supervisión de obra y 
              coordinación de proyectos de diversa escala.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Si quieres claridad, empecemos por el sitio."
      />
    </Layout>
  );
}
