import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

// Mapeo de iconos PNG existentes en /images/
// Para tarjetas que NO tienen su PNG, se usa un fallback válido
const iconPngMap: Record<string, string> = {
  engineering: "/images/icon-engineering.png",
  civil: "/images/icon-civil.png",
  sanitary: "/images/icon-sanitary.png",
  industrial: "/images/icon-structures.png",   // Usa structures como fallback
  especiales: "/images/icon-engineering.png",   // Usa engineering como fallback
  maintenance: "/images/icon-maintenance.png",
};

export default function Servicios() {
  return (
    <Layout>
      <HeroVideo
        src="/video_servicios.mp4"
        flip
        overlay="minimal"
        objectPosition="center 40%"
      />

      {/* Folder Container */}
      <div className="w-full bg-black px-[15px] sm:px-6 md:px-8 pb-32 pt-8">
        <div 
          className="relative w-full max-w-7xl mx-auto z-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10"
          style={{ 
            backgroundImage: 'url(/images/folder-card-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            clipPath: 'polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)'
          }}
        >
          <div className="px-[15px] sm:px-6 pt-20 sm:pt-32 pb-12 sm:pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-16" data-testid="section-services-intro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 sm:mb-20 flex flex-col items-center w-full"
            >
              <h2 className="font-heading font-bold heading-section sm:text-5xl text-white mb-4 sm:mb-6 uppercase tracking-tighter w-full">
                Sistemas de Ejecución
              </h2>
              <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 w-full">
                <p className="text-white font-bold text-[clamp(1rem,4.5vw,1.5rem)] leading-snug uppercase tracking-tight">
                  Un servicio no es una lista.
                </p>
                <p className="text-white/70 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed uppercase tracking-wider font-light px-0">
                  Es un sistema de ejecución definido por el problema que resuelve,
                  su método y su aplicación en campo.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
              {services.map((service, index) => {
                // Resolver el icono PNG — siempre usar PNG del mapeo
                const iconSrc = iconPngMap[service.icon] || "/images/icon-engineering.png";
                
                // PNG solo en tarjetas 1 y 6; el resto usa texto negro legible
                const hasValidTitlePng = [0, 5].includes(index);
                const titleText =
                  index === 1
                    ? "OBRA CIVIL INFRAESTRUCTURA"
                    : index === 2
                      ? "INFRAESTRUCTURA REDES"
                      : service.title;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col relative h-auto min-h-0 sm:min-h-[600px] md:h-[700px] w-full"
                    style={{ 
                      backgroundImage: "url('/images/service-card-shape.png')",
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Floating Header Box — ESTRUCTURA CORRECTA:
                        1. <img> para el ICONO (PNG restaurado, no texto)
                        2. <h3> o <img> para el TÍTULO según corresponda */}
                    <div className="p-4 pt-4">
                      <div className="h-[120px] bg-[#4a4a4a] rounded-[1.2rem] flex items-center px-6 border border-white/10">
                        <div className="flex items-center gap-5 w-full">
                          {/* 1. ICONO — Siempre un <img> con PNG válido */}
                          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                            <img 
                              src={iconSrc} 
                              alt={`Icono ${service.title}`}
                              className="w-14 h-14 object-contain" 
                            />
                          </div>
                          {/* 2. TÍTULO — PNG para tarjetas 1,2,3,6 / Texto para 4,5 */}
                          <div className="flex-grow">
                            {hasValidTitlePng ? (
                              <img 
                                src={`/images/title-service-${index + 1}.png`} 
                                alt={service.title}
                                className="h-12 w-auto object-contain" 
                              />
                            ) : (
                              <h3 className="text-black font-black text-[15px] md:text-[17px] uppercase tracking-tight leading-tight">
                                {titleText}
                              </h3>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body Content — padding-bottom: 40px+ para que respire antes del corte diagonal */}
                    <div className="px-5 sm:px-8 md:px-10 pt-4 pb-[40px] space-y-6 sm:space-y-10 flex-grow">
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-2">RESUELVE</span>
                        <p className="text-black/80 leading-relaxed text-[15px] font-medium">
                          {service.resuelve}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-2">CÓMO SE EJECUTA</span>
                        <p className="text-black/80 leading-relaxed text-[15px] font-medium">
                          {service.como}
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-2">APLICA CUANDO</span>
                        <p className="text-black/80 leading-relaxed text-[15px] font-medium">
                          {service.aplica}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="EL PRIMER PASO ES TÉCNICO, NO COMERCIAL."
        subtitle="Solicita una visita y te respondemos con diagnóstico de alcance."
      />
    </Layout>
  );
}
