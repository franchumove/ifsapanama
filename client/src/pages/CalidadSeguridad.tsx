import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FOLDER_BG = "/images/folder-card-bg.png";
const FOLDER_CLIP =
  "polygon(0 0, 75% 0, 76% 15px, 100% 15px, 100% 100%, 0 100%)";

/** Contenedor estrecho ~832px — proporción vertical tipo referencia 5/8 */
const NARROW_MAX = "max-w-[52rem]";

const CARD_CLIP_BOTTOM =
  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)";

const ICON_BOX_CLIP =
  "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)";

const principlesInField = [
  {
    icon: "/images/quality-icon-control.png",
    title: "CONTROL",
    description:
      "Verificar lo crítico antes de avanzar cada etapa de obra. Todo avance se valida contra planos y especificaciones antes de su ejecución.",
  },
  {
    icon: "/images/quality-icon-orden.png",
    title: "ORDEN",
    description:
      "Coordinación de frentes, recursos y seguridad operativa. La planificación evita interferencias y retrabajos durante la ejecución.",
  },
  {
    icon: "/images/quality-icon-trazabilidad.png",
    title: "TRAZABILIDAD",
    description:
      "Evidencias técnicas y entregables por etapa. Cada fase queda documentada mediante reportes y controles verificables.",
  },
];

const avoidItems = [
  "IMPROVISACIÓN SIN CONTROL TÉCNICO",
  "CAMBIOS SIN TRAZABILIDAD",
  "RETRABAJOS POR FALTA DE REPLANTEO",
  "AVANCES SIN VERIFICACIÓN PREVIA",
];

const operationalPrinciples = [
  { icon: "/images/quality-icon-trazabilidad.png", title: "RESPONSABILIDAD OPERATIVA" },
  { icon: "/images/quality-icon-orden.png", title: "EFICIENCIA TÉCNICA" },
  { icon: "/images/quality-icon-control.png", title: "CONTROL DE CALIDAD" },
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
    <div className="text-center mb-6 sm:mb-8">
      <h2
        id={id}
        className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-tighter"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-white/50 uppercase tracking-[0.16em] text-[10px] sm:text-[11px] font-bold leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Tarjeta clara — icono centrado arriba, esquina inferior derecha recortada */
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
      className="flex flex-col h-full overflow-hidden border border-black/10 bg-[#d4d4d4] shadow-md"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="bg-[#b5b5b5] px-3 py-5 flex flex-col items-center text-center border-b border-black/10">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#c4c4c4] mb-3"
          style={{ clipPath: ICON_BOX_CLIP }}
        >
          <img
            src={icon}
            alt=""
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />
        </div>
        <h3 className="font-heading font-black text-[11px] sm:text-xs uppercase tracking-tight text-black leading-tight">
          {title}
        </h3>
      </div>
      <p className="px-3 py-4 text-[10px] sm:text-[11px] text-zinc-800 leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

/** Tarjeta oscura vertical — mismas proporciones que las claras */
function DarkPrincipleCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <article
      className="flex flex-col items-center text-center overflow-hidden border border-white/15 bg-[#3a3a3a] shadow-md min-h-[9rem]"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="px-3 py-5 flex flex-col items-center w-full">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#2a2a2a] mb-3"
          style={{ clipPath: ICON_BOX_CLIP }}
        >
          <img
            src={icon}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain brightness-0 invert opacity-90"
          />
        </div>
        <h3 className="font-heading font-black text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-white leading-snug px-1">
          {title}
        </h3>
      </div>
    </article>
  );
}

function AvoidXList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 items-start">
          <span
            className="mt-0.5 w-5 h-5 rounded-full shrink-0 bg-zinc-900 flex items-center justify-center text-white text-xs font-bold leading-none"
            aria-hidden
          >
            ×
          </span>
          <span className="font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-zinc-900 leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Bloque compacto icono izquierda + texto derecha (Lo que evitamos / Capacidad técnica) */
function CompactWideCard({
  iconSrc,
  iconAlt = "",
  title,
  children,
  iconBoxClass = "bg-[#5a5a5a]",
}: {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  children: ReactNode;
  iconBoxClass?: string;
}) {
  return (
    <article
      className="overflow-hidden bg-[#d4d4d4] border border-black/10 shadow-lg"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="flex flex-row gap-4 sm:gap-5 items-stretch p-4 sm:p-5">
        <div
          className={`shrink-0 w-24 sm:w-28 min-h-[7.5rem] flex items-center justify-center p-3 ${iconBoxClass}`}
          style={{ clipPath: ICON_BOX_CLIP }}
        >
          <img
            src={iconSrc}
            alt={iconAlt}
            className="max-h-[4.5rem] w-auto max-w-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 py-1">
          <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-black leading-tight">
            {title}
          </h3>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </article>
  );
}

export default function CalidadSeguridad() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
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
            {/* Panel estrecho centrado — todo el contenido */}
            <div
              className={`relative ${NARROW_MAX} mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12 px-5 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 md:pt-28 md:pb-14`}
            >
              <section aria-labelledby="principios-obra">
                <SectionTitle id="principios-obra">Principios en obra</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {principlesInField.map((p) => (
                    <LightPrincipleCard key={p.title} {...p} />
                  ))}
                </div>
              </section>

              <section aria-labelledby="lo-que-evitamos">
                <CompactWideCard
                  iconSrc="/images/quality-icon-warning-gear.png"
                  title="Lo que evitamos (porque cuesta caro)"
                  iconBoxClass="bg-[#5a5a5a]"
                >
                  <AvoidXList items={avoidItems} />
                </CompactWideCard>
              </section>

              <section aria-labelledby="principios-operativos">
                <SectionTitle id="principios-operativos">
                  Principios operativos
                </SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-5">
                  {operationalPrinciples.map((p) => (
                    <DarkPrincipleCard key={p.title} {...p} />
                  ))}
                </div>
                <CompactWideCard
                  iconSrc="/images/quality-icon-orden.png"
                  title="Capacidad técnica y supervisión"
                  iconBoxClass="bg-[#9a9a9a]/90"
                >
                  <p className="text-[10px] sm:text-[11px] text-zinc-800 leading-relaxed">
                    Equipo técnico altamente calificado, supervisión de proyectos de alta
                    complejidad y control de calidad en cada fase de ejecución.
                  </p>
                </CompactWideCard>
              </section>

              <section aria-labelledby="faq-calidad" className="w-full">
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
                      <AccordionTrigger className="text-left font-heading font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-white hover:text-white/90 hover:no-underline py-4 sm:py-5 [&>svg]:text-white/50">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/65 text-[11px] sm:text-xs leading-relaxed pb-4 sm:pb-5 font-medium">
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
