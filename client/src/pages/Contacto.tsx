import type { HTMLAttributes, ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const FOLDER_STYLE = {
  backgroundImage: "url('/images/folder-card-bg.png')",
  backgroundSize: "100% 100%" as const,
  backgroundPosition: "center top" as const,
  backgroundRepeat: "no-repeat" as const,
};

function SidePanel({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Contacto() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        <section
          className="hero-container"
          aria-labelledby="contacto-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="hero-media"
          />
          <div className="hero-overlay-gradient" />
          <div className="hero-content">
            <h1
              id="contacto-heading"
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-none"
            >
              Contacto
            </h1>
            <p className="mt-3 max-w-xl text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
              El primer paso es técnico. Cuéntanos tu proyecto y coordinamos el
              siguiente paso.
            </p>
          </div>
        </section>

        <div className="w-full px-[15px] sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
          <div
            className="folder-shell max-w-7xl mx-auto z-10"
            style={FOLDER_STYLE}
          >
            <div className="folder-inner">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="lg:col-span-3"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <LeadForm className="rounded-none border-0 shadow-none" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="lg:col-span-2 space-y-5"
                >
                  <SidePanel data-testid="card-whatsapp">
                    <h3
                      className="font-heading font-black text-sm uppercase tracking-[0.15em] text-white mb-2"
                      data-testid="text-whatsapp-title"
                    >
                      ¿Prefieres WhatsApp?
                    </h3>
                    <p
                      className="text-white/60 text-xs leading-relaxed mb-4"
                      data-testid="text-whatsapp-description"
                    >
                      Escríbenos: tipo de proyecto, ubicación y etapa.
                    </p>
                    <WhatsAppLink
                      message="Hola IFSA PANAMÁ, quiero solicitar una visita técnica."
                      className="inline-flex w-full"
                    >
                      <Button
                        className="w-full gap-2 font-black text-xs uppercase tracking-widest bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 h-12 rounded-xl shadow-lg"
                        data-testid="button-contact-whatsapp"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Hablar por WhatsApp
                      </Button>
                    </WhatsAppLink>
                  </SidePanel>

                  <SidePanel data-testid="card-contact-info">
                    <h3 className="font-heading font-black text-sm uppercase tracking-[0.15em] text-white mb-4">
                      Información de contacto
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+50765519061"
                        className="flex items-center gap-3 text-white/80 hover:text-[#FF9B26] transition-colors group"
                        data-testid="link-contact-phone-1"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-[#FF9B26]" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/45">
                            Celular
                          </p>
                          <p className="text-white font-black text-sm">
                            (507) 6551-9061
                          </p>
                        </div>
                      </a>

                      <a
                        href="tel:+5073972914"
                        className="flex items-center gap-3 text-white/80 hover:text-[#FF9B26] transition-colors"
                        data-testid="link-contact-phone-2"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                          <Phone className="h-5 w-5 text-[#FF9B26]" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/45">
                            Teléfono
                          </p>
                          <p className="text-white font-black text-sm">
                            (507) 397-2914
                          </p>
                        </div>
                      </a>

                      <a
                        href="mailto:fillette@ifsapanama.com"
                        className="flex items-center gap-3 text-white/80 hover:text-[#FF9B26] transition-colors"
                        data-testid="link-contact-email"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                          <Mail className="h-5 w-5 text-[#FF9B26]" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/45">
                            Email
                          </p>
                          <p className="text-white font-black text-xs sm:text-sm break-all">
                            fillette@ifsapanama.com
                          </p>
                        </div>
                      </a>

                      <div className="flex items-start gap-3 text-white/80">
                        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-[#FF9B26]" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/45">
                            Ubicación
                          </p>
                          <p className="text-white font-black text-sm uppercase tracking-tight">
                            Panamá Pacífico - Veracruz
                          </p>
                        </div>
                      </div>
                    </div>
                  </SidePanel>

                  <div
                    className="rounded-2xl border border-[#FF9B26]/40 bg-black/40 p-6 text-center"
                    data-testid="card-mantra"
                  >
                    <p className="font-heading text-sm sm:text-base font-black uppercase tracking-[0.12em] text-[#FF9B26] leading-snug">
                      Responsabilidad. Eficiencia. Control de calidad.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
