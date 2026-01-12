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
  { value: "15+", label: "Años de experiencia" },
  { value: "120+", label: "Proyectos completados" },
  { value: "500K+", label: "Metros cuadrados" },
];

const easing = [0.22, 1, 0.36, 1];

export function Hero({
  title,
  subtitle,
  showCTAs = false,
  backgroundImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop",
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
      <div className="absolute inset-0 bg-gradient-to-b from-ifsa-black/70 via-ifsa-black/60 to-ifsa-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-ifsa-black/50 via-transparent to-transparent" />
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(var(--gold) / 0.08), transparent)"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "4rem" }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="h-1 bg-gradient-to-r from-primary to-gold-dark mb-8"
          />

          <h1
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 tracking-tight"
            data-testid="text-hero-title"
          >
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
              className="text-lg sm:text-xl lg:text-2xl text-white/75 max-w-2xl mb-10 font-light leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </motion.p>
          )}

          {showCTAs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easing }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/contacto" data-testid="link-hero-cta-primary">
                <Button 
                  size="lg" 
                  className="font-semibold w-full sm:w-auto gap-2 shadow-gold transition-all duration-500 hover:shadow-xl" 
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
                  className="font-semibold w-full sm:w-auto gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 backdrop-blur-sm transition-all duration-500"
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
            className="absolute bottom-0 left-0 right-0"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: easing }}
                    className="text-center sm:text-left p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    data-testid={`stat-${index}`}
                  >
                    <div className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
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
