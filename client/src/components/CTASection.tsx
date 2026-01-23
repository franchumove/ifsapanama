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

const easing = [0.22, 1, 0.36, 1];

export function CTASection({
  title = "Si tu obra no puede fallar, empecemos con una visita técnica.",
  subtitle = "Cuéntanos ubicación, etapa y tipo de proyecto. Te respondemos con el siguiente paso claro.",
  buttonText = "Agendar visita técnica",
  buttonLink = "/contacto",
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-ifsa-black relative overflow-hidden" data-testid="section-cta-final">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="h-1 bg-primary mx-auto mb-10"
          />
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href={buttonLink} data-testid="link-cta-final">
              <Button 
                size="lg" 
                className="font-semibold gap-2 w-full sm:w-auto shadow-sm transition-all duration-500 bg-[#2F2F2F] hover:bg-black text-white border-0"
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
                  className="font-semibold gap-2 w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 backdrop-blur-sm transition-all duration-500"
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
