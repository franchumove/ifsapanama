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

const easing = [0.22, 1, 0.36, 1];

export function Hero({
  title,
  subtitle,
  showCTAs = false,
  backgroundImage = "/images/hero-reference.jpg",
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
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-black`}
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-reference.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-32 lg:py-48 w-full flex flex-col justify-center min-h-[85vh] lg:min-h-[95vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-4xl"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
