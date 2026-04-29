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
  backgroundImage = "/images/hero-reference.jpg",
  size = "large",
}: HeroProps) {
  const heightClass = {
    large: "min-h-[100vh]",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  }[size];

  return (
    <section
      className={`relative ${heightClass} flex items-center overflow-hidden bg-black`}
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-black/35" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-32 lg:py-48 w-full flex flex-col justify-center min-h-[85vh] lg:min-h-[95vh]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-4xl text-left -ml-2 md:-ml-4 lg:-ml-8"
        >
          <h1 className="sr-only" data-testid="text-hero-title">
            {title}
          </h1>
          {subtitle && <p className="sr-only" data-testid="text-hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
