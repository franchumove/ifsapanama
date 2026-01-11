import { Link } from "wouter";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "./WhatsAppButton";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showWhatsApp?: boolean;
}

export function CTASection({
  title = "Si tu obra no puede fallar, empecemos con una visita técnica.",
  subtitle = "Cuéntanos ubicación, etapa y tipo de proyecto. Te respondemos con el siguiente paso claro.",
  buttonText = "Agendar visita técnica",
  buttonLink = "/contacto",
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-ifsa-black" data-testid="section-cta-final">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            {title}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={buttonLink} data-testid="link-cta-final">
              <Button 
                size="lg" 
                className="font-semibold gap-2 w-full sm:w-auto"
                data-testid="button-cta-final"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {showWhatsApp && (
              <WhatsAppLink 
                message="Hola IFSA PANAMÁ, quiero solicitar una visita técnica para mi proyecto."
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
                  data-testid="button-cta-whatsapp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hablar por WhatsApp
                </Button>
              </WhatsAppLink>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
