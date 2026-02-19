import { Link } from "wouter";
import { Building2, Factory, Landmark, ArrowRight, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const routeIcons = [Building2, Factory, Landmark];

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
    icon: CheckSquare,
  },
  {
    title: "Trazabilidad",
    description: "Verificación de lo crítico antes de avanzar",
    icon: CheckSquare,
  },
  {
    title: "Orden Operativo",
    description: "Coordinación real en campo.",
    icon: CheckSquare,
  },
];

const easing = [0.22, 1, 0.36, 1];

export function IntentRoutes() {
  return (
    <section className="relative -mt-24 lg:-mt-32 z-20 pb-24" data-testid="section-intent-routes">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-[#2a2a2a]/95 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5" />
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-2">
              Explora Proyectos
            </h2>
            <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
              Según el tipo de obra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {routes.map((route, index) => {
              const Icon = routeIcons[index];
              return (
                <motion.div
                  key={route.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
                >
                  <Link href={route.href}>
                    <Card className="h-full border-0 bg-white cursor-pointer group rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 md:p-10 flex flex-col h-full relative">
                        <div className="mb-6">
                          <Icon className="h-8 w-8 text-black opacity-20" />
                        </div>
                        <h3 className="font-heading font-black text-xl text-black mb-4 uppercase leading-[1.1] tracking-tighter">
                          {route.title}
                        </h3>
                        <p className="text-[#666] mb-8 flex-grow text-sm leading-relaxed">
                          {route.description}
                        </p>
                        <div className="flex items-center text-black font-black text-[10px] tracking-widest uppercase">
                          <span className="mr-2">→</span>
                          {route.cta}
                        </div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#f5f5f5] -z-10 transition-colors group-hover:bg-black/5" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="w-full h-px bg-white/10 mb-16 max-w-2xl mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {methodPilars.map((pilar, index) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href="/calidad-seguridad">
                  <Card className="border-0 bg-white/5 rounded-sm overflow-hidden h-full hover:bg-white/10 transition-colors cursor-pointer group">
                    <CardContent className="p-8 flex items-start gap-5">
                      <div className="mt-1">
                        <pilar.icon className="h-6 w-6 text-[#C9A227] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-base text-white uppercase tracking-tighter mb-2">
                          {pilar.title}
                        </h4>
                        <p className="text-white/50 text-[11px] leading-relaxed font-medium">
                          {pilar.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicios">
              <span className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer inline-flex items-center">
                <span className="mr-2">→</span>
                Conoce nuestros sistemas de calidad
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
