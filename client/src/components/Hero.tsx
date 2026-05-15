import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTAs?: boolean;
  backgroundImage?: string;
  backgroundVideo?: string;
  chips?: string[];
  size?: "large" | "medium" | "small";
  showStats?: boolean;
}

const easing = [0.22, 1, 0.36, 1];

export function Hero({
  title,
  subtitle,
  backgroundImage = "/images/hero-construction.png",
  backgroundVideo,
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
      {backgroundVideo ? (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-32 lg:py-48 w-full flex flex-col justify-center min-h-[75vh] lg:min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-3xl text-left mt-20 lg:mt-32"
        >
          {title && (
            <h1 className="font-heading normal-case text-white text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-8" data-testid="text-hero-title">
              <span className="block font-black italic">Construcción e</span>
              <span className="block font-black italic">infraestructura</span>
              <span className="block font-light text-white/60 text-3xl md:text-5xl lg:text-7xl mt-2 tracking-tight">
                de mediana y alta
              </span>
              <span className="block font-light text-white/60 text-3xl md:text-5xl lg:text-7xl tracking-tight">
                complejidad.
              </span>
            </h1>
          )}
          {subtitle && (
            <p className="text-white/50 text-sm md:text-base font-normal max-w-md leading-relaxed mt-6" data-testid="text-hero-subtitle">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
