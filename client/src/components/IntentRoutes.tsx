import { Link } from "wouter";
import { Building2, Factory, Landmark, CheckSquare } from "lucide-react";
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
    <section className="relative -mt-20 lg:-mt-24 z-20 pb-16" data-testid="section-intent-routes">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Small notch tab at top center */}
        <div className="flex justify-center">
          <div className="w-14 h-4 bg-[#2a2a2a] rounded-t-lg" />
        </div>

        {/* Dark card */}
        <div className="bg-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">

            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter mb-1">
                Explora Proyectos
              </h2>
              <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-medium">
                Según el tipo de obra
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-8">
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
                        <CardContent className="p-5 flex flex-col h-full">
                          <div className="mb-3">
                            <Icon className="h-5 w-5 text-black opacity-20" />
                          </div>
                          <h3 className="font-heading font-black text-[13px] text-black mb-2 uppercase leading-[1.1] tracking-tighter">
                            {route.title}
                          </h3>
                          <p className="text-[#666] mb-5 flex-grow text-[11px] leading-relaxed">
                            {route.description}
                          </p>
                          <div className="flex items-center text-black font-black text-[9px] tracking-widest uppercase">
                            <span className="mr-2">→</span>
                            {route.cta}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="w-48 h-px bg-white/15 mb-8 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-7">
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
                      <CardContent className="p-5 flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          <pilar.icon className="h-5 w-5 text-[#C9A227] group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-heading font-black text-[12px] text-white uppercase tracking-tighter mb-1">
                            {pilar.title}
                          </h4>
                          <p className="text-white/50 text-[10px] leading-relaxed font-medium">
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
                <span className="text-white/35 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.2em] cursor-pointer inline-flex items-center">
                  <span className="mr-2">→</span>
                  Conoce nuestros sistemas de calidad
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
