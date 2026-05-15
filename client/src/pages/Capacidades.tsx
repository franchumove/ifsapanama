import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";

/** Sustituye `client/public/images/capabilities-folder-bg.png` por la carpeta final (sin raya azul). */
const FOLDER_BG = "/images/capabilities-folder-bg.png";
/** Icono excavadora (naranja sobre negro) + foto de contexto — coloca los PNG en `client/public/images/`. */
const MAQUINARIA_ICON = "/images/maquinaria-excavadora.png";
const MAQUINARIA_FOTO = "/images/maquinaria-foto.png";

export default function Capacidades() {
  const machinery = capabilities[3];

  return (
    <Layout>
      <div className="bg-black">
        {/* Superior — más compacto */}
        <section
          className="relative w-full min-h-[32vh] sm:min-h-[36vh] md:min-h-[40vh] flex items-end overflow-hidden bg-black pt-24 sm:pt-28"
          aria-labelledby="capacidades-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8">
            <h1
              id="capacidades-heading"
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-none"
            >
              Capacidades
            </h1>
            <p className="mt-3 max-w-xl text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </section>

        {/* Carpeta — padding y huecos reducidos */}
        <div className="w-full px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
          <div
            className="relative w-full max-w-7xl mx-auto z-10 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border border-white/10"
            style={{
              backgroundImage: `url(${FOLDER_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              clipPath:
                "polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)",
            }}
          >
            <div className="px-5 pt-20 pb-10 sm:px-8 sm:pt-24 sm:pb-11 md:px-10 md:pt-28 md:pb-12 lg:px-12 lg:pt-28 lg:pb-14">
              {/* 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-center mb-8 sm:mb-10 lg:mb-11">
                <img
                  src="/images/capabilities-image-1.png"
                  alt="Operarios en obra"
                  className="w-full rounded-[15px] object-cover shadow-md aspect-[4/3] max-h-[220px] sm:max-h-[260px] lg:max-h-[280px]"
                />
                <div className="flex flex-col gap-3 sm:gap-4">
                  <img
                    src="/images/capabilities-title-1.png"
                    alt="Cómo respondemos en campo"
                    className="w-full max-w-md object-contain object-left"
                  />
                  <img
                    src="/images/capabilities-checks-1.png"
                    alt="Planificación de frentes, ejecución, supervisión, cumplimiento y responsabilidad operativa"
                    className="w-full max-w-md object-contain object-left"
                  />
                </div>
              </div>

              {/* 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-center mb-8 sm:mb-10 lg:mb-11">
                <div className="flex flex-col gap-3 sm:gap-4 items-end order-2 lg:order-1">
                  <img
                    src="/images/capabilities-title-2.png"
                    alt="Capacidad técnica y supervisión"
                    className="w-full max-w-md object-contain object-right"
                  />
                  <img
                    src="/images/capabilities-checks-2.png"
                    alt="Equipo técnico, método, supervisión compleja y control de calidad"
                    className="w-full max-w-md object-contain object-right"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/images/capabilities-image-1.png"
                    alt="Supervisión en campo"
                    className="w-full rounded-[15px] object-cover shadow-md aspect-[4/3] max-h-[220px] sm:max-h-[260px] lg:max-h-[280px]"
                  />
                </div>
              </div>

              {/* 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-center mb-8 sm:mb-10 lg:mb-12">
                <img
                  src="/images/capabilities-image-1.png"
                  alt="Topografía y precisión"
                  className="w-full rounded-[15px] object-cover shadow-md aspect-[4/3] max-h-[220px] sm:max-h-[260px] lg:max-h-[280px]"
                />
                <div className="flex flex-col gap-3 sm:gap-4">
                  <img
                    src="/images/capabilities-title-3.png"
                    alt="Topografía y precisión"
                    className="w-full max-w-md object-contain object-left"
                  />
                  <img
                    src="/images/capabilities-checks-3.png"
                    alt="Levantamiento, replanteo, control de niveles y validación por tramos"
                    className="w-full max-w-md object-contain object-left"
                  />
                </div>
              </div>

              {/* 4 — icono excavadora + foto; lista con el mismo icono repetido en cada ítem */}
              <div
                className="relative w-full overflow-hidden rounded-2xl bg-[#c4c4c4] shadow-lg border border-black/10"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
                }}
              >
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-7 items-stretch p-5 sm:p-6 md:py-6 md:px-7">
                  <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-4 shrink-0">
                    <div className="rounded-xl bg-black w-[7.25rem] h-[7.25rem] sm:w-[7.75rem] sm:h-[7.75rem] flex items-center justify-center p-3 shadow-inner">
                      <img
                        src={MAQUINARIA_ICON}
                        alt=""
                        className="max-h-[5rem] sm:max-h-[5.25rem] w-auto max-w-full object-contain"
                      />
                    </div>
                    <img
                      src={MAQUINARIA_FOTO}
                      alt=""
                      className="rounded-xl object-cover w-[7.25rem] h-[7.25rem] sm:w-[7.75rem] sm:h-[7.75rem] shadow-md border border-black/10"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-2.5 sm:gap-3 text-left justify-center">
                    <h2 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-black leading-tight">
                      {machinery.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                      {machinery.description}
                    </p>
                    <ul className="flex flex-col gap-2.5 sm:gap-3 list-none m-0 p-0 mt-1">
                      {machinery.items.map((item, i) => (
                        <li key={i} className="flex gap-3 items-center">
                          <img
                            src={MAQUINARIA_ICON}
                            alt=""
                            className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 object-contain"
                          />
                          <span className="font-heading font-bold text-[11px] sm:text-xs uppercase tracking-[0.12em] text-zinc-900 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection title="Si tu obra no puede fallar, empecemos con una visita técnica." />
      </div>
    </Layout>
  );
}
