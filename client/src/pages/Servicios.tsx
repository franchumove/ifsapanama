import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const iconMap: Record<string, LucideIcons.LucideIcon> = {
  PencilRuler: LucideIcons.PencilRuler,
  Building2: LucideIcons.Building2,
  Droplets: LucideIcons.Droplets,
  Milestone: LucideIcons.Milestone,
  Construction: LucideIcons.Construction,
  Settings2: LucideIcons.Settings2,
};

export default function Servicios() {
  return (
    <Layout>
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black flex items-center justify-center">
        <motion.video
          src="/video_helicoptero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -scale-x-100"
          initial={{ objectPosition: "50% 100%" }}
          animate={{ objectPosition: "50% 0%" }}
          transition={{
            delay: 3, // Espera 3 segundos
            duration: 2, // Tarda 2 segundos en subir
            ease: "easeInOut"
          }}
        />
        {/* Capa de oscurecimiento muy leve para integrarlo con la web */}
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Folder Container */}
      <div className="w-full bg-black px-4 sm:px-6 md:px-8 pb-32 pt-8">
        <div 
          className="relative w-full max-w-7xl mx-auto z-10 rounded-[3rem] overflow-hidden border border-white/10"
          style={{ 
            backgroundImage: 'url(/images/folder-card-bg.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            clipPath: 'polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)'
          }}
        >
          <div className="px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-16" data-testid="section-services-intro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-20 flex flex-col items-center"
            >
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white mb-6 uppercase tracking-tighter">
                Sistemas de Ejecución
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-white font-bold text-xl md:text-2xl leading-snug uppercase tracking-tight">
                  Un servicio no es una lista.
                </p>
                <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed uppercase tracking-wider font-light">
                  Es un sistema de ejecución definido por el problema que resuelve,
                  su método y su aplicación en campo.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {services.map((service, index) => {
                const IconComponent = (iconMap as any)[service.icon] || LucideIcons.Building2;
                const isPngIcon = !iconMap[service.icon];
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    {/* Header Card */}
                    <div 
                      className="h-20 flex items-center px-6 relative overflow-hidden"
                      style={{ 
                        backgroundImage: "url('/images/service-header-bg.png')",
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className="flex items-center gap-4 z-10 w-full">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                          {isPngIcon ? (
                            <img 
                              src={`/images/icon-${service.icon}.png`} 
                              alt={service.title}
                              className="w-10 h-10 object-contain" 
                            />
                          ) : (
                            <IconComponent className="h-8 w-8 text-black" />
                          )}
                        </div>
                        <h3 className="font-heading font-black text-lg text-black leading-tight uppercase tracking-tighter">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body Card (Folder Shape) */}
                    <div 
                      className="flex-grow pt-12 pb-16 px-10 -mt-1 min-h-[480px]"
                      style={{ 
                        backgroundImage: "url('/images/service-card-shape.png')",
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className="space-y-12">
                        <div>
                          <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em] block mb-3">Resuelve</span>
                          <p className="text-black/70 leading-relaxed text-[15px] font-medium">
                            {service.resuelve}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em] block mb-3">Cómo se ejecuta</span>
                          <p className="text-black/70 leading-relaxed text-[15px] font-medium">
                            {service.como}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.2em] block mb-3">Aplica cuando</span>
                          <p className="text-black/70 leading-relaxed text-[15px] font-medium">
                            {service.aplica}
                          </p>
                        </div>
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
