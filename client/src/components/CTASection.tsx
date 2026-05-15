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
          
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white mb-12 tracking-tighter uppercase max-w-4xl mx-auto leading-[1.1]">
            {title}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link href={buttonLink} data-testid="link-cta-final">
              <Button 
                size="lg" 
                className="h-16 px-8 font-black text-sm uppercase tracking-widest gap-4 w-full sm:w-auto shadow-2xl transition-all duration-500 bg-[#333333] hover:bg-black text-white border border-white/10 rounded-xl group"
                data-testid="button-cta-final"
              >
                {buttonText}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            
            {showWhatsApp && (
              <WhatsAppLink 
                message="Hola IFSA PANAMÁ, quiero solicitar una visita técnica para mi proyecto."
                className="inline-flex w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="h-16 px-8 font-black text-sm uppercase tracking-widest gap-4 w-full sm:w-auto shadow-2xl transition-all duration-500 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white border-0 rounded-xl"
                  data-testid="button-cta-whatsapp"
                >
                  <div className="bg-white rounded-full p-1.5">
                    <MessageCircle className="h-6 w-6 text-[#25D366] fill-[#25D366]" />
                  </div>
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
