import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { motion } from "framer-motion";

/** Sustituye `client/public/images/capabilities-folder-bg.png` por la carpeta final (sin raya azul). */
const FOLDER_BG = "/images/capabilities-folder-bg.png";
/** Foto principal de las 3 secciones superiores (operarios en obra). */
const FIELD_PHOTO = "/images/capabilities-photo-main.png";
/** Icono excavadora naranja para el bloque Maquinaria. */
const MAQUINARIA_ICON = "/images/maquinaria-excavadora.png";

export default function Capacidades() {
  const machinery = capabilities[3];

  return (
    <Layout>
      <div className="bg-black">
        <HeroVideo
          src="/video-capacidades.mp4"
          poster="/images/poster-capacidades.jpg"
          overlay="gradient"
          ariaLabelledBy="capacidades-heading"
        >
          <h1
            id="capacidades-heading"
            className="font-heading font-black heading-hero-page text-white uppercase tracking-tighter"
          >
            Capacidades
          </h1>
          <p className="mt-3 max-w-xl text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
            Cuando una obra no puede fallar, el método importa.
          </p>
        </HeroVideo>

        {/* Carpeta — padding y huecos reducidos */}
        <div className="w-full px-[15px] sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
          <div
            className="folder-shell max-w-7xl mx-auto z-10"
            style={{
              backgroundImage: `url(${FOLDER_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="folder-inner">
              {/* 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-center mb-8 sm:mb-10 lg:mb-11">
                <img
                  src={FIELD_PHOTO}
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
                    src={FIELD_PHOTO}
                    alt="Supervisión en campo"
                    className="w-full rounded-[15px] object-cover shadow-md aspect-[4/3] max-h-[220px] sm:max-h-[260px] lg:max-h-[280px]"
                  />
                </div>
              </div>

              {/* 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-center mb-8 sm:mb-10 lg:mb-12">
                <img
                  src={FIELD_PHOTO}
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

              {/* 4 — tarjeta clara con icono excavadora + texto */}
              <div
                className="relative w-full overflow-hidden rounded-2xl bg-[#d4d4d4] shadow-lg border border-black/10"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
                }}
              >
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 items-stretch sm:items-center p-5 sm:p-6 md:py-7 md:px-8">
                  <div className="flex justify-center sm:justify-start shrink-0">
                    <div className="rounded-xl bg-[#9a9a9a]/90 w-[7.5rem] h-[7.5rem] sm:w-[8.25rem] sm:h-[8.25rem] flex items-center justify-center p-4 shadow-inner">
                      <img
                        src={MAQUINARIA_ICON}
                        alt=""
                        className="max-h-[5rem] sm:max-h-[5.5rem] w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-2.5 sm:gap-3 text-left">
                    <h2 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-black leading-tight">
                      {machinery.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                      {machinery.description}
                    </p>
                    <ul className="flex flex-col gap-2 list-none m-0 p-0 mt-1">
                      {machinery.items.map((item, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-zinc-800"
                            aria-hidden
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
