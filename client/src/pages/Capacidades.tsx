import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";

export default function Capacidades() {
  return (
    <Layout>
      <div className="bg-black">
        {/* Full-bleed capacidades: sin hero, espacio bajo header fijo */}
        <section className="min-h-screen w-full pt-24 sm:pt-28 lg:pt-32">
          <div
            className="w-full max-w-[1920px] mx-auto min-h-[calc(100dvh-6rem)] bg-no-repeat px-4 sm:px-8 lg:px-14 xl:px-20 2xl:px-24 py-10 sm:py-14 lg:py-16 xl:py-20"
            style={{
              backgroundImage: "url('/images/capabilities-container-bg.png')",
              backgroundSize: "100% 100%",
            }}
          >
            {/* Sección 1 — imagen izquierda, lista derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-20 lg:mb-28">
              <img
                src="/images/capabilities-title-1.png"
                alt="Cómo respondemos en campo"
                className="w-full rounded-2xl object-contain"
              />
              <div className="flex gap-3 sm:gap-4 items-start justify-center lg:justify-start">
                <img
                  src="/images/capabilities-checks-1.png"
                  alt=""
                  className="w-7 sm:w-8 shrink-0 object-contain mt-0.5"
                />
                <ul className="flex flex-col gap-3 sm:gap-4 pt-0.5 list-none m-0 p-0">
                  {capabilities[0].items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-widest text-white/90 leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sección 2 — lista izquierda (alineada a la derecha), imagen derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-20 lg:mb-28">
              <div className="flex gap-3 sm:gap-4 items-start justify-center lg:justify-end order-2 lg:order-1">
                <ul className="flex flex-col gap-3 sm:gap-4 pt-0.5 list-none m-0 p-0 text-right">
                  {capabilities[1].items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-widest text-white/90 leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <img
                  src="/images/capabilities-checks-2.png"
                  alt=""
                  className="w-7 sm:w-8 shrink-0 object-contain mt-0.5"
                />
              </div>
              <img
                src="/images/capabilities-title-2.png"
                alt="Capacidad técnica y supervisión"
                className="w-full rounded-2xl object-contain order-1 lg:order-2"
              />
            </div>

            {/* Sección 3 — imagen izquierda, lista derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-20 lg:mb-28">
              <img
                src="/images/capabilities-title-3.png"
                alt="Topografía y precisión"
                className="w-full rounded-2xl object-contain"
              />
              <div className="flex gap-3 sm:gap-4 items-start justify-center lg:justify-start">
                <img
                  src="/images/capabilities-checks-3.png"
                  alt=""
                  className="w-7 sm:w-8 shrink-0 object-contain mt-0.5"
                />
                <ul className="flex flex-col gap-3 sm:gap-4 pt-0.5 list-none m-0 p-0">
                  {capabilities[2].items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-widest text-white/90 leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sección 4 — tarjeta clara ancha */}
            <div className="rounded-2xl bg-neutral-300/95 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center shadow-lg">
              <div className="relative shrink-0 w-full max-w-[200px] md:max-w-[220px] lg:w-[26%] lg:max-w-none aspect-square md:aspect-auto md:h-44 lg:h-52">
                <img
                  src="/images/capabilities-maquinaria-bg.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
                <img
                  src="/images/icon-maquinaria.png"
                  alt="Maquinaria y apoyo operativo"
                  className="absolute inset-0 m-auto w-16 sm:w-20 object-contain"
                />
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
                  alt="Coordinación de recursos, transporte de materiales y equipos"
                  className="w-full max-w-xl object-contain object-left"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Si tu obra no puede fallar, empecemos con una visita técnica." />
      </div>
    </Layout>
  );
}
