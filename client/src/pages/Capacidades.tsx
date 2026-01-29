import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function Capacidades() {
  return (
    <Layout>
      <Hero
        title="Capacidades"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      <section className="py-24 bg-background" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {capabilities.slice(0, 3).map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border bg-card rounded-none" data-testid={`card-capability-${capability.id}`}>
                  <CardContent className="p-8 lg:p-10">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-8 uppercase tracking-tighter">
                      {capability.title}
                    </h3>
                    <ul className="space-y-4">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-4">
                          <CheckSquare className="h-5 w-5 text-foreground/40 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {capabilities[3] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-12 lg:p-16 border border-border bg-foreground/5"
            >
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6 uppercase tracking-tighter">
                {capabilities[3].title}
              </h2>
              <p className="text-muted-foreground max-w-4xl text-lg leading-relaxed mb-8">
                {capabilities[3].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {capabilities[3].items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-foreground/40 shrink-0" />
                    <span className="text-foreground font-bold uppercase tracking-tight text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection 
        title="Si tu obra no puede fallar, empecemos con una visita técnica."
      />
    </Layout>
  );
}
