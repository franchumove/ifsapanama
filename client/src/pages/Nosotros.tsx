import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Zap, CheckSquare } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Responsabilidad Operativa",
    description: "Compromiso absoluto con los plazos y especificaciones técnicas del proyecto.",
  },
  {
    icon: Zap,
    title: "Eficiencia Técnica",
    description: "Optimización de recursos mediante planificación rigurosa y supervisión en campo.",
  },
  {
    icon: CheckSquare,
    title: "Control de Calidad",
    description: "Verificación constante de normativas y estándares de ingeniería en cada etapa.",
  },
];

export default function Nosotros() {
  return (
    <Layout>
      <Hero
        title="Método y Ejecución"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      <section className="py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-foreground mb-8 uppercase tracking-tighter">
                Nuestra Filosofía
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  IFSA PANAMÁ nace para responder a proyectos donde el control técnico 
                  y la capacidad operativa marcan la diferencia. No vendemos sueños, 
                  ejecutamos obras que no pueden fallar.
                </p>
                <p>
                  Nos especializamos en obra civil, infraestructura, topografía y apoyo 
                  de maquinaria para proyectos que exigen precisión absoluta. Nuestra filosofía 
                  no se basa en promesas comerciales, sino en la aplicación estricta de métodos de ingeniería.
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
              <div className="aspect-[4/3] border border-border bg-card">
                <img
                  src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=800&h=600&fit=crop"
                  alt="Equipo IFSA PANAMÁ"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground uppercase tracking-tighter">
              Principios Operativos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card rounded-none text-center" data-testid={`card-about-principle-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-foreground/5 flex items-center justify-center mx-auto mb-8 border border-border">
                      <principle.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4 uppercase tracking-tighter">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
            className="bg-foreground/5 border border-border p-12 lg:p-16 text-center"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground mb-8 uppercase tracking-tighter">
              Capacidad Técnica y Supervisión
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Contamos con un equipo técnico y operativo orientado exclusivamente a la ejecución en campo. 
              Nuestra infraestructura de maquinaria y transporte nos permite mantener un control total 
              sobre los costos y tiempos de cada proyecto, garantizando responsabilidad operativa de principio a fin.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
        subtitle="Hablemos de los requerimientos técnicos de tu proyecto."
      />
    </Layout>
  );
}
