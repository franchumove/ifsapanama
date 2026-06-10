import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const iconPngMap: Record<string, string> = {
  engineering: "/images/icon-engineering.png",
  civil: "/images/icon-civil.png",
  sanitary: "/images/icon-sanitary.png",
  industrial: "/images/icon-structures.png",
  especiales: "/images/icon-engineering.png",
  maintenance: "/images/icon-maintenance.png",
};

export default function Servicios() {
  return (
    <Layout>
      <HeroVideo
        src="/video_servicios.mp4"
        poster="/images/poster-servicios.jpg"
        flip
        overlay="minimal"
      />

      <div className="w-full bg-black px-[15px] sm:px-6 md:px-8 pb-16 sm:pb-24 pt-4 sm:pt-6">
        <div
          className="folder-shell max-w-7xl mx-auto z-10"
          style={{
            backgroundImage: "url(/images/folder-card-bg.png)",
            backgroundSize: "100% 100%",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="folder-inner" data-testid="section-services-intro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12 flex flex-col items-center w-full"
            >
              <h2 className="font-heading font-bold heading-section sm:text-5xl text-white mb-3 sm:mb-5 uppercase tracking-tighter w-full">
                Sistemas de Ejecución
              </h2>
              <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3 w-full">
                <p className="text-white font-bold text-[clamp(1rem,4.5vw,1.5rem)] leading-snug uppercase tracking-tight">
                  Un servicio no es una lista.
                </p>
                <p className="text-white/70 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed uppercase tracking-wider font-light">
                  Es un sistema de ejecución definido por el problema que resuelve,
                  su método y su aplicación en campo.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-10 md:gap-y-16">
              {services.map((service, index) => {
                const iconSrc = iconPngMap[service.icon] || "/images/icon-engineering.png";
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
                    className="service-card-mobile"
                  >
                    <div className="p-3 sm:p-4">
                      <div className="min-h-[88px] sm:min-h-[100px] bg-[#4a4a4a] rounded-xl flex items-center px-4 sm:px-6 border border-white/10">
                        <div className="flex items-center gap-3 sm:gap-5 w-full">
                          <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center">
                            <img
                              src={iconSrc}
                              alt={`Icono ${service.title}`}
                              className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            {hasValidTitlePng ? (
                              <img
                                src={`/images/title-service-${index + 1}.png`}
                                alt={service.title}
                                className="h-9 sm:h-12 w-auto max-w-full object-contain object-left"
                              />
                            ) : (
                              <h3 className="text-black font-black text-[13px] sm:text-[15px] md:text-[17px] uppercase tracking-tight leading-tight">
                                {titleText}
                              </h3>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 sm:px-8 md:px-10 pt-2 pb-5 sm:pb-8 space-y-4 sm:space-y-8 flex-grow">
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-1.5">RESUELVE</span>
                        <p className="text-black/80 leading-relaxed text-[14px] sm:text-[15px] font-medium">
                          {service.resuelve}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-1.5">CÓMO SE EJECUTA</span>
                        <p className="text-black/80 leading-relaxed text-[14px] sm:text-[15px] font-medium">
                          {service.como}
                        </p>
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#FF6600] uppercase tracking-[0.1em] block mb-1.5">APLICA CUANDO</span>
                        <p className="text-black/80 leading-relaxed text-[14px] sm:text-[15px] font-medium">
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
