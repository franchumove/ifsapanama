import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";

const FOLDER_BG = "/images/folder-card-bg.png";
const FOLDER_CLIP =
  "polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)";

const CARD_DARK_BG = "/images/quality-card-dark-bg.png";

const CARD_CLIP_BOTTOM =
  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)";

const DARK_TILE_STYLE = {
  backgroundImage: `url(${CARD_DARK_BG})`,
  backgroundSize: "100% 100%" as const,
  backgroundPosition: "center" as const,
  backgroundRepeat: "no-repeat" as const,
};

const operationalPrinciples = [
  {
    icon: "/images/about-icon-shield-check.png",
    title: "RESPONSABILIDAD OPERATIVA",
    description:
      "Compromiso absoluto con los plazos y especificaciones técnicas del proyecto.",
  },
  {
    icon: "/images/about-icon-gear-check.png",
    title: "EFICIENCIA TÉCNICA",
    description:
      "Optimización de recursos mediante planificación rigurosa y supervisión en campo.",
  },
  {
    icon: "/images/about-icon-gear-check.png",
    title: "CONTROL DE CALIDAD",
    description:
      "Verificación constante de normativas y estándares de ingeniería en cada etapa.",
  },
];

function SectionTitle({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="text-center mb-6 sm:mb-8">
      <h2
        id={id}
        className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-tighter"
      >
        {children}
      </h2>
    </div>
  );
}

/** Mismo componente que Principios en Obra — cabecera oscura + cuerpo claro */
function LightPrincipleCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article
      className="flex flex-col h-full overflow-hidden rounded-xl border border-black/10 bg-[#d4d4d4] shadow-md"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="p-2.5 sm:p-3">
        <div
          className="flex flex-row items-center gap-3 px-3 py-3.5 sm:px-4 sm:py-4 rounded-[10px]"
          style={DARK_TILE_STYLE}
        >
          <img
            src={icon}
            alt=""
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
          />
          <h3 className="font-heading font-black text-[11px] sm:text-xs uppercase tracking-tight text-black leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <p className="px-3 sm:px-4 pb-4 sm:pb-5 text-[10px] sm:text-[11px] text-zinc-800 leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

/** Mismo patrón que Lo que evitamos / Capacidad en Calidad */
function CompactWideCard({
  iconSrc,
  title,
  children,
  titleId,
}: {
  iconSrc: string;
  title: string;
  children: ReactNode;
  titleId?: string;
}) {
  return (
    <article
      className="overflow-hidden rounded-xl bg-[#d4d4d4] border border-black/10 shadow-lg"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="flex flex-row items-stretch gap-5 sm:gap-7 p-5 sm:p-7 md:p-8">
        <div
          className="shrink-0 w-[32%] sm:w-[35%] aspect-square flex items-center justify-center p-4 sm:p-6 rounded-[10px]"
          style={DARK_TILE_STYLE}
        >
          <img
            src={iconSrc}
            alt=""
            className="w-full max-w-[5.5rem] sm:max-w-[6.5rem] h-auto object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center py-1 sm:py-2">
          <h3
            id={titleId}
            className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-black leading-tight"
          >
            {title}
          </h3>
          <div className="mt-4 sm:mt-5">{children}</div>
        </div>
      </div>
    </article>
  );
}

export default function Nosotros() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        <section
          className="hero-container"
          aria-labelledby="nosotros-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="hero-media"
          />
          <div className="hero-overlay-gradient" />
          <div className="hero-content">
            <h1
              id="nosotros-heading"
              className="font-heading font-black heading-hero-page text-white uppercase tracking-tighter"
            >
              Método y
              <br />
              ejecución
            </h1>
            <p className="mt-3 max-w-xl text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </section>

        <div className="relative w-full px-[15px] sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
          <div
            className="relative w-full max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border border-white/10"
            style={{
              backgroundImage: `url(${FOLDER_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              clipPath: FOLDER_CLIP,
            }}
          >
            <div className="relative max-w-[52rem] mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-14 px-5 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14">
              <section
                aria-labelledby="nuestra-filosofia"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
              >
                <div>
                  <h2
                    id="nuestra-filosofia"
                    className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tighter mb-5 sm:mb-6"
                  >
                    Nuestra filosofía
                  </h2>
                  <div className="space-y-4 text-white/70 text-sm sm:text-[15px] leading-relaxed">
                    <p>
                      IFSA PANAMÁ nace para responder a proyectos donde el control
                      técnico y la capacidad operativa marcan la diferencia. No
                      vendemos sueños, ejecutamos obras que no pueden fallar.
                    </p>
                    <p>
                      Nos especializamos en obra civil, infraestructura, topografía y
                      apoyo de maquinaria para proyectos que exigen precisión absoluta.
                      Nuestra filosofía no se basa en promesas comerciales, sino en la
                      aplicación estricta de métodos de ingeniería.
                    </p>
                  </div>
                </div>
                <img
                  src="/images/about-engineers-photo.png"
                  alt="Ingenieros revisando planos en obra"
                  className="w-full rounded-[12px] object-cover aspect-[4/3] grayscale shadow-md"
                  loading="lazy"
                />
              </section>

              <section aria-labelledby="principios-operativos">
                <SectionTitle id="principios-operativos">
                  Principios operativos
                </SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {operationalPrinciples.map((p) => (
                    <LightPrincipleCard key={p.title} {...p} />
                  ))}
                </div>
              </section>

              <section aria-labelledby="capacidad-tecnica">
                <CompactWideCard
                  iconSrc="/images/about-icon-head-gear.png"
                  title="Capacidad técnica y supervisión"
                  titleId="capacidad-tecnica"
                >
                  <p className="text-[10px] sm:text-[11px] text-zinc-800 leading-relaxed">
                    Contamos con un equipo técnico y operativo orientado
                    exclusivamente a la ejecución en campo. Nuestra infraestructura de
                    maquinaria y transporte nos permite mantener un control total sobre
                    los costos y tiempos de cada proyecto, garantizando responsabilidad
                    operativa de principio a fin.
                  </p>
                </CompactWideCard>
              </section>
            </div>
          </div>
        </div>

        <CTASection
          title="Si tu obra no puede fallar, empecemos con una visita técnica."
          subtitle="Hablemos de los requerimientos técnicos de tu proyecto."
        />
      </div>
    </Layout>
  );
}
