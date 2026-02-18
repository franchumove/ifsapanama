import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTAs?: boolean;
  backgroundImage?: string;
  chips?: string[];
  size?: "large" | "medium" | "small";
  showStats?: boolean;
}

const stats = [
  { value: "6+", label: "Años de excelencia" },
  { value: "Sólida", label: "Infraestructura operativa" },
  { value: "Técnico", label: "Equipo calificado" },
];

const easing = [0.22, 1, 0.36, 1];

export function Hero({
  title,
  subtitle,
  showCTAs = false,
  backgroundImage = "/images/hero-construction.png",
  chips,
  size = "large",
  showStats = false,
}: HeroProps) {
  const heightClass = {
    large: "min-h-[100vh]",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  }[size];

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-ifsa-black/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ifsa-black/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-32 lg:py-48 w-full flex flex-col justify-center min-h-[85vh] lg:min-h-[95vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-px bg-white/40" />
            <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase">Ifsa Panamá</span>
          </div>

          <h1
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white leading-[0.9] mb-8 sm:mb-10 tracking-tighter uppercase"
            data-testid="text-hero-title"
          >
            Construcción e<br />infraestructura<br />
            <span className="text-white/60 text-3xl sm:text-5xl md:text-6xl lg:text-[80px]">de mediana y alta<br />complejidad.</span>
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
              className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mb-12 font-medium leading-relaxed tracking-wide"
              data-testid="text-hero-subtitle"
            >
              Cuando una obra no puede fallar, el método importa.
            </motion.p>
          )}

          {showCTAs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easing }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16"
            >
              <Link href="/contacto" data-testid="link-hero-cta-primary">
                <Button 
                  size="lg" 
                  className="font-semibold w-full sm:w-auto gap-2 shadow-sm transition-all duration-500 bg-[#2F2F2F] hover:bg-black text-white border-0" 
                  data-testid="button-hero-cta-primary"
                >
                  Solicitar visita técnica
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/proyectos" data-testid="link-hero-cta-secondary">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold w-full sm:w-auto gap-2 border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60 backdrop-blur-sm transition-all duration-500"
                  data-testid="button-hero-cta-secondary"
                >
                  Ver proyectos
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          )}

          {chips && chips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easing }}
              className="flex flex-wrap gap-3"
              data-testid="hero-chips"
            >
              {chips.map((chip, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 text-white/85 text-sm font-medium border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>

        {showStats && size === "large" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easing }}
            className="relative sm:absolute sm:bottom-0 sm:left-0 sm:right-0 mt-8 sm:mt-0"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: easing }}
                    className="text-center sm:text-left p-4 sm:p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    data-testid={`stat-${index}`}
                  >
                    <div className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl text-white mb-1 sm:mb-2 tracking-tighter tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-[10px] sm:text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
