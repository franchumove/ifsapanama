import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { capabilities } from "@/data/services";
import { Check } from "lucide-react";

const PAGE_BG = "#2b2b2b";
const PHOTO = "/images/hero-construction.png";

function FieldPhoto({ alt }: { alt: string }) {
  return (
    <img
      src={PHOTO}
      alt={alt}
      className="w-full rounded-[15px] object-cover aspect-[4/3] shadow-md"
    />
  );
}

function ChecksListLeft({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4 sm:gap-5 list-none m-0 p-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <Check
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 text-white stroke-[2.5]"
            aria-hidden
          />
          <span className="font-heading font-bold text-[11px] sm:text-xs uppercase tracking-[0.14em] text-white leading-snug pt-0.5">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ChecksListRight({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4 sm:gap-5 list-none m-0 p-0 items-end">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start justify-end max-w-full">
          <span className="font-heading font-bold text-[11px] sm:text-xs uppercase tracking-[0.14em] text-white leading-snug pt-0.5 text-right">
            {item}
          </span>
          <Check
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 text-white stroke-[2.5]"
            aria-hidden
          />
        </li>
      ))}
    </ul>
  );
}

export default function Capacidades() {
  const cap = capabilities;
  const machinery = cap[3];

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: PAGE_BG }}>
        <section className="w-full pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-10 xl:px-16">
          {/* Panel central: gradiente y borde sutil — sin PNG de carpeta ni línea azul */}
          <div
            className="max-w-6xl mx-auto rounded-t-3xl sm:rounded-[1.25rem] border border-white/15 shadow-xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 bg-gradient-to-b from-[#3d3d3d] via-[#353535] to-[#2e2e2e]"
          >
            {/* 1 — foto izquierda, texto derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
              <FieldPhoto alt="Equipo en obra — cómo respondemos en campo" />
              <div>
                <h2 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white mb-6 sm:mb-8 leading-tight">
                  {cap[0].title}
                </h2>
                <ChecksListLeft items={cap[0].items} />
              </div>
            </div>

            {/* 2 — texto izquierda, foto derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white mb-6 sm:mb-8 leading-tight text-right">
                  {cap[1].title}
                </h2>
                <ChecksListRight items={cap[1].items} />
              </div>
              <div className="order-1 lg:order-2">
                <FieldPhoto alt="Supervisión técnica en campo" />
              </div>
            </div>

            {/* 3 — foto izquierda, texto derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11 xl:gap-14 items-center mb-14 sm:mb-16 lg:mb-20">
              <FieldPhoto alt="Trabajo de precisión y topografía" />
              <div>
                <h2 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white mb-6 sm:mb-8 leading-tight">
                  {cap[2].title}
                </h2>
                <ChecksListLeft items={cap[2].items} />
              </div>
            </div>

            {/* 4 — tarjeta clara */}
            <div className="rounded-2xl bg-[#d4d4d4] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-10 items-stretch md:items-center">
              <div className="flex shrink-0 justify-center md:justify-start">
                <div className="rounded-xl bg-zinc-800 w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center p-6">
                  <img
                    src="/images/icon-maquinaria.png"
                    alt=""
                    className="w-full max-w-[5.5rem] object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 min-w-0 text-zinc-900">
                <h2 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight leading-tight text-balance">
                  {machinery.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-800">
                  {machinery.description}
                </p>
                <ul className="flex flex-col gap-3 list-none m-0 p-0 mt-1">
                  {machinery.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 bg-orange-500"
                        aria-hidden
                      />
                      <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.12em] text-zinc-900">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Si tu obra no puede fallar, empecemos con una visita técnica." />
      </div>
    </Layout>
  );
}
