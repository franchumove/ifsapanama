import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export default function Contacto() {
  return (
    <Layout>
      <Hero
        title="Contacto"
        subtitle="El primer paso es técnico. Cuéntanos tu proyecto y coordinamos el siguiente paso."
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-20 bg-background" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <LeadForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="border-border/50" data-testid="card-whatsapp">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid="text-whatsapp-title">
                    ¿Prefieres WhatsApp?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4" data-testid="text-whatsapp-description">
                    Escríbenos y envíanos: tipo de proyecto, ubicación y etapa.
                  </p>
                  <WhatsAppLink
                    message="Hola IFSA PANAMÁ, quiero solicitar una visita técnica."
                    className="inline-flex w-full"
                  >
                    <Button className="w-full gap-2" data-testid="button-contact-whatsapp">
                      <MessageCircle className="h-5 w-5" />
                      Hablar por WhatsApp
                    </Button>
                  </WhatsAppLink>
                </CardContent>
              </Card>

              <Card className="border-border/50" data-testid="card-contact-info">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                    Información de contacto
                  </h3>
                  
                  <a
                    href="tel:+5073972914"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-phone"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Teléfono</p>
                      <p className="text-foreground font-medium">+507 397-2914</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:info@ifsapanama.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-email"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">info@ifsapanama.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Ubicación</p>
                      <p className="text-foreground font-medium">Ciudad de Panamá, Panamá</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-ifsa-black text-white" data-testid="card-mantra">
                <CardContent className="p-6 text-center">
                  <p className="font-heading text-lg font-medium text-primary">
                    Responsabilidad. Eficiencia. Control de calidad.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
