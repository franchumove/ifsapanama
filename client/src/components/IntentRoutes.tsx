import { Link } from "wouter";
import { Users, Route, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const routes = [
  {
    title: "Infraestructura & Urbanismo",
    description: "Drenaje, colectoras, contención y redes asociadas.",
    href: "/proyectos?tipo=infraestructura",
    cta: "PROYECTOS RELACIONADOS",
  },
  {
    title: "Industrial, Plantas, Sistemas.",
    description: "Drenaje, colectoras, contención y redes asociadas.",
    href: "/proyectos?tipo=industrial",
    cta: "PROYECTOS RELACIONADOS",
  },
  {
    title: "Obras Públicas y Grandes Frentes",
    description: "Drenaje, colectoras, contención y redes asociadas.",
    href: "/proyectos?tipo=obras-publicas",
    cta: "PROYECTOS RELACIONADOS",
  },
];

const methodPilars = [
  {
    title: "Control",
    description: "Verificación de lo crítico antes de avanzar",
    icon: "/images/icon-control.png",
  },
  {
    title: "Trazabilidad",
    description: "Verificación de lo crítico antes de avanzar",
    icon: "/images/icon-trazabilidad.png",
  },
  {
    title: "Orden Operativo",
    description: "Coordinación real en campo.",
    icon: "/images/icon-orden.png",
  },
];

export function IntentRoutes() {
  return (
    <section className="relative mt-8 lg:mt-12 z-20 pb-16 sm:pb-24 overflow-hidden" data-testid="section-intent-routes">
      <div className="max-w-6xl mx-auto px-[15px] sm:px-6 lg:px-8">
        {/* Folder card using the actual asset */}
        <div className="relative w-full">
          {/* Asset as top decorative border */}
          <div 
            className="relative min-h-[200px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-black/20 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
            style={{ 
              backgroundImage: "url('/images/folder-card-bg.png')",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              clipPath: 'polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)'
            }}
          >
            <div className="px-[15px] py-10 sm:px-8 sm:py-16 md:px-16 md:py-20">
              <div className="text-center mb-10 sm:mb-16 w-full">
                <h2 className="heading-section md:text-4xl font-bold text-white uppercase tracking-tighter mb-2 sm:mb-3">
                  Explora Proyectos
                </h2>
                <p className="text-white/60 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.4em] font-black px-1">
                  Según el tipo de obra
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16 w-full">
                {routes.map((route, index) => {
                  return (
                    <motion.div
                      key={route.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={route.href}>
                        <div 
                          className="h-full w-full bg-white/30 backdrop-blur-sm border-2 border-white/60 cursor-pointer group transition-all duration-300 relative rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                        >
                          <div className="p-4 sm:p-8 flex flex-col h-full min-h-0 sm:min-h-[240px]">
                            <h3 className="font-heading font-black text-[clamp(1rem,4.5vw,1.25rem)] text-black/90 mb-3 sm:mb-4 uppercase leading-tight tracking-tighter">
                              {route.title}
                            </h3>
                            <p className="text-black/50 mb-6 sm:mb-8 flex-grow text-[12px] sm:text-[13px] leading-snug font-medium">
                              {route.description}
                            </p>
                            <div className="flex items-center text-black/70 font-black text-[10px] tracking-widest uppercase mt-auto group-hover:translate-x-2 transition-transform">
                              <ArrowRight className="h-4 w-4 mr-2" />
                              {route.cta}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="w-full flex justify-center mb-14">
                <div className="w-24 h-px bg-black/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16 w-full">
                {methodPilars.map((pilar, index) => (
                  <motion.div
                    key={pilar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href="/calidad-seguridad">
                      <div 
                        className="bg-white/20 backdrop-blur-sm border border-white/50 group transition-all duration-300 relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
                      >
                        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 min-h-0 sm:min-h-[90px]">
                          <div className="w-14 h-14 bg-black/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform rounded-sm">
                            <img 
                              src={pilar.icon} 
                              alt={pilar.title} 
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                          <div className="min-w-0 w-full">
                            <h4 className="font-heading font-black text-xs sm:text-sm text-black/80 uppercase tracking-tighter mb-1">
                              {pilar.title}
                            </h4>
                            <p className="text-black/50 text-[10px] sm:text-[11px] leading-relaxed font-medium">
                              {pilar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/calidad-seguridad">
                  <span className="text-white hover:text-white/80 transition-colors text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer inline-flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-3 group-hover:translate-x-1 transition-transform" />
                    Conoce nuestros sistemas de calidad
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
