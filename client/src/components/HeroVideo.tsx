import { useState, type ReactNode } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  flip?: boolean;
  /** minimal = overlay ligero (Servicios); gradient = título legible (Capacidades/Calidad) */
  overlay?: "minimal" | "gradient";
  objectPosition?: string;
  /** Escala ancho del media (>1 = más cobertura lateral, sin estirar píxeles) */
  horizontalExpand?: number;
  ariaLabelledBy?: string;
  children?: ReactNode;
}

const DEFAULT_POSTER = "/images/hero-construction.png";

export function HeroVideo({
  src,
  poster = DEFAULT_POSTER,
  flip = false,
  overlay = "gradient",
  objectPosition = "center center",
  horizontalExpand = 1,
  ariaLabelledBy,
  children,
}: HeroVideoProps) {
  const [ready, setReady] = useState(false);

  const expandedMediaStyle =
    horizontalExpand > 1
      ? {
          objectPosition,
          width: `${horizontalExpand * 100}%`,
          height: "100%",
          top: 0,
          left: "50%",
          transform: flip
            ? `translateX(-50%) scaleX(-1)`
            : "translateX(-50%)",
        }
      : { objectPosition };

  const expandedMediaClass =
    horizontalExpand > 1
      ? "absolute object-cover transition-opacity duration-300"
      : `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          flip ? "-scale-x-100" : ""
        }`;

  return (
    <section
      className="relative isolate w-full min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center overflow-hidden bg-black pt-[140px]"
      aria-labelledby={ariaLabelledBy}
    >
      <img
        src={poster}
        alt=""
        aria-hidden
        className={`${expandedMediaClass} ${ready ? "opacity-0" : "opacity-100"}`}
        style={expandedMediaStyle}
      />

      <video
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        onLoadedData={() => setReady(true)}
        onCanPlay={() => setReady(true)}
        className={`${expandedMediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
        style={expandedMediaStyle}
      />

      {overlay === "minimal" ? (
        <div className="absolute inset-0 bg-black/20" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      )}

      {children && (
        <div className="relative z-10 w-full max-w-7xl mx-auto px-[15px] sm:px-8 lg:px-12 pb-6 sm:pb-10">
          {children}
        </div>
      )}
    </section>
  );
}
