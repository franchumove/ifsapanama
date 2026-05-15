import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";

/** Sustituye `client/public/images/capabilities-folder-bg.png` por la carpeta final (sin raya azul). */
const FOLDER_BG = "/images/capabilities-folder-bg.png";

export default function Capacidades() {
  return (
    <Layout>
      <div className="bg-black">
        {/* Superior: imagen a pantalla como el resto del sitio */}
        <section
          className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-end overflow-hidden bg-black pt-24 sm:pt-28"
          aria-labelledby="capacidades-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-14">
            <h1
              id="capacidades-heading"
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter leading-none"
            >
              Capacidades
            </h1>
            <p className="mt-4 max-w-xl text-white/75 text-sm sm:text-base uppercase tracking-[0.2em] font-medium leading-relaxed">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </section>

        {/* Bloque carpeta — solo assets, sin texto duplicado encima */}
        <div className="w-full px-4 sm:px-6 md:px-8 pb-28 pt-8 lg:pt-12">
          <div
            className="relative w-full max-w-7xl mx-auto z-10 rounded-[3rem] overflow-hidden border border-white/10"
            style={{
              backgroundImage: `url(${FOLDER_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              clipPath:
                "polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)",
            }}
          >
            <div className="px-6 pt-28 pb-14 md:px-12 md:pt-36 md:pb-16 lg:px-16 lg:pt-40 lg:pb-20">
              {/* 1 — foto | título + lista (assets) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
                <img
                  src="/images/capabilities-image-1.png"
                  alt="Operarios en obra"
                  className="w-full rounded-[15px] object-cover shadow-lg aspect-[4/3]"
                />
                <div className="flex flex-col gap-6">
                  <img
                    src="/images/capabilities-title-1.png"
                    alt="Cómo respondemos en campo"
                    className="w-full max-w-xl object-contain object-left"
                  />
                  <img
                    src="/images/capabilities-checks-1.png"
                    alt="Planificación de frentes, ejecución, supervisión, cumplimiento y responsabilidad operativa"
                    className="w-full max-w-xl object-contain object-left"
                  />
                </div>
              </div>

              {/* 2 — título + lista | foto */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
                <div className="flex flex-col gap-6 items-end order-2 lg:order-1">
                  <img
                    src="/images/capabilities-title-2.png"
                    alt="Capacidad técnica y supervisión"
                    className="w-full max-w-xl object-contain object-right"
                  />
                  <img
                    src="/images/capabilities-checks-2.png"
                    alt="Equipo técnico, método, supervisión compleja y control de calidad"
                    className="w-full max-w-xl object-contain object-right"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/images/capabilities-image-1.png"
                    alt="Supervisión en campo"
                    className="w-full rounded-[15px] object-cover shadow-lg aspect-[4/3]"
                  />
                </div>
              </div>

              {/* 3 — foto | título + lista */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
                <img
                  src="/images/capabilities-image-1.png"
                  alt="Topografía y precisión"
                  className="w-full rounded-[15px] object-cover shadow-lg aspect-[4/3]"
                />
                <div className="flex flex-col gap-6">
                  <img
                    src="/images/capabilities-title-3.png"
                    alt="Topografía y precisión"
                    className="w-full max-w-xl object-contain object-left"
                  />
                  <img
                    src="/images/capabilities-checks-3.png"
                    alt="Levantamiento, replanteo, control de niveles y validación por tramos"
                    className="w-full max-w-xl object-contain object-left"
                  />
                </div>
              </div>

              {/* 4 — tarjeta maquinaria (fondo + icono + bloques tipográficos en PNG) */}
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-black/5 shadow-xl"
                style={{
                  backgroundImage: "url('/images/capabilities-maquinaria-bg.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="shrink-0 flex justify-center md:justify-start w-full md:w-auto">
                    <div className="rounded-xl bg-[#5a5a5a] w-36 h-36 sm:w-40 sm:h-44 flex items-center justify-center p-5 shadow-inner">
                      <img
                        src="/images/icon-maquinaria.png"
                        alt=""
                        className="w-full max-w-[6rem] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 flex-1 min-w-0 w-full">
                    <img
                      src="/images/capabilities-title-4.png"
                      alt="Maquinaria y apoyo operativo"
                      className="w-full max-w-2xl object-contain object-left"
                    />
                    <img
                      src="/images/capabilities-desc-4.png"
                      alt=""
                      className="w-full max-w-3xl object-contain object-left"
                    />
                    <img
                      src="/images/capabilities-checks-4.png"
                      alt="Coordinación de recursos, transporte de materiales, equipos de movimiento de tierra"
                      className="w-full max-w-2xl object-contain object-left"
                    />
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
