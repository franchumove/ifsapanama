import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Mismo contenedor carpeta que Capacidades / Contacto — sin quality-container-bg (traía títulos duplicados). */
const FOLDER_BG = "/images/folder-card-bg.png";
const FOLDER_CLIP =
  "polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)";

/** Esquina inferior derecha recortada — tarjetas claras del sitio */
const CARD_CLIP_BOTTOM =
  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)";

const principlesInField = [
  {
    icon: "/images/icon-control.png",
    title: "CONTROL",
    description:
      "Verificar lo crítico antes de avanzar cada etapa de obra. Todo avance se valida contra planos y especificaciones antes de su ejecución.",
  },
  {
    icon: "/images/icon-orden.png",
    title: "ORDEN",
    description:
      "Coordinación de frentes, recursos y seguridad operativa. La planificación evita interferencias y retrabajos durante la ejecución.",
  },
  {
    icon: "/images/icon-trazabilidad.png",
    title: "TRAZABILIDAD",
    description:
      "Evidencia técnica y entregables por etapa. Cada fase queda documentada mediante reportes y controles verificables.",
  },
];

const avoidCol1 = [
  "IMPROVISACIÓN SIN CONTROL TÉCNICO",
  "RETRABAJOS DEBIDO A MALA PLANIFICACIÓN",
];
const avoidCol2 = [
  "EXCESOS EN MATERIALES",
  "EJECUCIÓN SIN VERIFICACIÓN PREVIA",
];

const operationalPrinciples = [
  { icon: "/images/icon-trazabilidad.png", title: "RESPONSABILIDAD OPERATIVA" },
  { icon: "/images/icon-orden.png", title: "EFICIENCIA TÉCNICA" },
  { icon: "/images/icon-control.png", title: "CONTROL DE CALIDAD" },
];

const qualityFaqs = [
  {
    question: "¿CÓMO GARANTIZAN EL CUMPLIMIENTO DE LOS TIEMPOS DE ENTREGA?",
    answer:
      "A través de planificación técnica, control de frentes de trabajo y validación de cada avance antes de continuar. No avanzamos etapas sin cumplir especificaciones, lo que reduce retrabajos y desviaciones de cronograma.",
  },
  {
    question: "¿QUÉ TIPO DE PROYECTOS DE INGENIERÍA DISEÑAN?",
    answer:
      "Diseñamos proyectos de ingeniería civil e infraestructura alineados a normativa vigente y a condiciones reales de campo, incluyendo estructuras, obras hidráulicas, pavimentos y soluciones técnicas específicas según el proyecto.",
  },
  {
    question: "¿ATIENDEN EMERGENCIAS DE MANTENIMIENTO LOCATIVO?",
    answer:
      "Sí. Atendemos mantenimientos preventivos y correctivos en edificaciones comerciales, industriales y residenciales, priorizando seguridad operativa y continuidad de funcionamiento.",
  },
];

function SectionTitle({
  children,
  subtitle,
  id,
}: {
  children: ReactNode;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="text-center mb-8 sm:mb-10">
      <h2
        id={id}
        className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tighter"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-white/50 uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-bold">
          {subtitle}
        </p>
      )}
    </div>
  );
}

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
      className="flex flex-col h-full overflow-hidden rounded-t-xl border border-black/10 border-t-2 border-t-sky-400 bg-[#d4d4d4] shadow-md"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="bg-[#b5b5b5] px-4 sm:px-5 py-4 flex items-center gap-3 border-b border-black/10">
        <img
          src={icon}
          alt=""
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
        />
        <h3 className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-black">
          {title}
        </h3>
      </div>
      <p className="px-4 sm:px-5 py-4 text-[11px] sm:text-xs text-zinc-800 leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

function DarkPrincipleCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <article className="rounded-xl border border-white/15 bg-black/45 backdrop-blur-sm px-4 py-6 flex flex-col items-center justify-center gap-3 text-center min-h-[7.5rem]">
      <img src={icon} alt="" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
      <h3 className="font-heading font-black text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-white leading-snug">
        {title}
      </h3>
    </article>
  );
}

function AvoidList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 items-start">
          <span
            className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-zinc-800"
            aria-hidden
          />
          <span className="font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-zinc-900 leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CalidadSeguridad() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        {/* Hero — título solo aquí, una vez */}
        <section
          className="relative isolate w-full min-h-[36vh] sm:min-h-[42vh] md:min-h-[48vh] flex items-end overflow-hidden bg-black pt-24 sm:pt-28"
          aria-labelledby="calidad-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[72%_28%] sm:object-[78%_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10">
            <h1
              id="calidad-heading"
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-[0.95]"
            >
              Sistemas de
              <br />
              ejecución
            </h1>
            <p className="mt-4 max-w-xl text-white/80 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </section>

        {/* Contenedor carpeta — flujo vertical limpio, sin capas duplicadas */}
        <div className="relative w-full px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
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
            <div className="relative flex flex-col gap-10 sm:gap-12 lg:gap-14 px-5 pt-20 pb-10 sm:px-8 sm:pt-24 sm:pb-12 md:px-10 md:pt-28 md:pb-14 lg:px-12">
              {/* A — Principios en obra */}
              <section aria-labelledby="principios-obra">
                <SectionTitle id="principios-obra">Principios en obra</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {principlesInField.map((p) => (
                    <LightPrincipleCard key={p.title} {...p} />
                  ))}
                </div>
              </section>

              {/* B — Lo que evitamos */}
              <section aria-labelledby="lo-que-evitamos">
                <article
                  className="overflow-hidden rounded-2xl bg-[#d4d4d4] border border-black/10 shadow-lg"
                  style={{ clipPath: CARD_CLIP_BOTTOM }}
                >
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-stretch sm:items-center p-5 sm:p-6 md:p-8">
                    <div className="flex justify-center sm:justify-start shrink-0">
                      <div className="rounded-xl bg-[#9a9a9a]/90 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center p-4 shadow-inner">
                        <img
                          src="/images/icon-engineering.png"
                          alt=""
                          className="max-h-[4.5rem] w-auto max-w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        id="lo-que-evitamos"
                        className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-black leading-tight"
                      >
                        Lo que evitamos (porque cuesta caro)
                      </h2>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                        <AvoidList items={avoidCol1} />
                        <AvoidList items={avoidCol2} />
                      </div>
                    </div>
                  </div>
                </article>
              </section>

              {/* C — Principios operativos + capacidad técnica */}
              <section aria-labelledby="principios-operativos">
                <SectionTitle id="principios-operativos">
                  Principios operativos
                </SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
                  {operationalPrinciples.map((p) => (
                    <DarkPrincipleCard key={p.title} {...p} />
                  ))}
                </div>
                <article
                  className="overflow-hidden rounded-2xl bg-[#d4d4d4] border border-black/10 shadow-lg"
                  style={{ clipPath: CARD_CLIP_BOTTOM }}
                >
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center p-5 sm:p-6 md:p-8">
                    <div className="shrink-0 rounded-xl bg-[#9a9a9a]/90 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center p-4 shadow-inner">
                      <img
                        src="/images/icon-engineering.png"
                        alt=""
                        className="max-h-[4.5rem] w-auto max-w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-black leading-tight">
                        Capacidad técnica y supervisión
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                        Equipo técnico altamente calificado, supervisión de proyectos de alta
                        complejidad y control de calidad en cada fase de ejecución.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* D — FAQ */}
              <section aria-labelledby="faq-calidad" className="max-w-3xl w-full mx-auto">
                <SectionTitle
                  id="faq-calidad"
                  subtitle="Lo que más preguntan antes de contratar una constructora"
                >
                  Preguntas frecuentes
                </SectionTitle>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  data-testid="accordion-faq-calidad"
                >
                  {qualityFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-b border-white/10"
                    >
                      <AccordionTrigger className="text-left font-heading font-bold text-[11px] sm:text-xs uppercase tracking-[0.1em] text-white hover:text-white/90 hover:no-underline py-5 [&>svg]:text-white/50">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/65 text-xs sm:text-sm leading-relaxed pb-5 font-medium">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>
          </div>
        </div>

        <CTASection />
      </div>
    </Layout>
  );
}
