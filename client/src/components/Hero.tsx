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
}

export function Hero({
  title,
  subtitle,
  showCTAs = false,
  backgroundImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop",
  chips,
  size = "large",
}: HeroProps) {
  const heightClass = {
    large: "min-h-[90vh]",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  }[size];

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ifsa-black/80 via-ifsa-black/70 to-ifsa-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </motion.p>
          )}

          {showCTAs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contacto" data-testid="link-hero-cta-primary">
                <Button size="lg" className="font-semibold w-full sm:w-auto gap-2" data-testid="button-hero-cta-primary">
                  Solicitar visita técnica
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/proyectos" data-testid="link-hero-cta-secondary">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
              data-testid="hero-chips"
            >
              {chips.map((chip, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/10"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
