import { useState, type ReactNode } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  flip?: boolean;
  /** minimal = overlay ligero (Servicios); gradient = título legible (Capacidades/Calidad) */
  overlay?: "minimal" | "gradient";
  ariaLabelledBy?: string;
  children?: ReactNode;
}

const DEFAULT_POSTER = "/images/hero-construction.png";

export function HeroVideo({
  src,
  poster = DEFAULT_POSTER,
  flip = false,
  overlay = "gradient",
  ariaLabelledBy,
  children,
}: HeroVideoProps) {
  const [ready, setReady] = useState(false);

  const mediaClass = `hero-media transition-opacity duration-300 ${
    flip ? "-scale-x-100" : ""
  }`;

  return (
    <section className="hero-container" aria-labelledby={ariaLabelledBy}>
      <img
        src={poster}
        alt=""
        aria-hidden
        className={`${mediaClass} ${ready ? "opacity-0" : "opacity-100"}`}
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
        className={`${mediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
      />

      {overlay === "minimal" ? (
        <div className="hero-overlay-minimal" />
      ) : (
        <div className="hero-overlay-gradient" />
      )}

      {children && <div className="hero-content">{children}</div>}
    </section>
  );
}
