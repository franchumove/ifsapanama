import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
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

const CARD_DARK_BG = "/images/quality-card-dark-bg.png";
const AVOID_TITLE_IMG = "/images/quality-avoid-title.png";

/** Contenedor estrecho ~832px */
const NARROW_MAX = "max-w-[52rem]";

const CARD_CLIP_BOTTOM =
  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)";

const DARK_TILE_STYLE = {
  backgroundImage: `url(${CARD_DARK_BG})`,
  backgroundSize: "100% 100%" as const,
  backgroundPosition: "center" as const,
  backgroundRepeat: "no-repeat" as const,
};

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
        className="font-heading font-black heading-section text-white uppercase tracking-tighter"
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

/** Tarjeta clara — cabecera oscura horizontal (icono izq + título der), img 9 */
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

function DarkPrincipleCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <article
      className="flex flex-col items-center text-center overflow-hidden rounded-xl border border-white/15 bg-[#3a3a3a] shadow-md min-h-[9rem]"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
    >
      <div className="p-2.5 sm:p-3 w-full">
        <div
          className="flex flex-row items-center justify-center gap-2.5 px-3 py-3.5 rounded-[10px]"
          style={DARK_TILE_STYLE}
        >
          <img
            src={icon}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain brightness-0 invert opacity-90 shrink-0"
          />
          <h3 className="font-heading font-black text-[8px] sm:text-[9px] uppercase tracking-[0.08em] text-white leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}

function AvoidXList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3 items-start">
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

/** Lo que evitamos — título PNG + bloque oscuro ancho (~35%) */
function AvoidSection({ items }: { items: string[] }) {
  return (
    <article
      className="overflow-hidden rounded-xl bg-[#d4d4d4] border border-black/10 shadow-lg"
      style={{ clipPath: CARD_CLIP_BOTTOM }}
      aria-labelledby="lo-que-evitamos"
    >
      <div className="flex flex-row items-stretch gap-5 sm:gap-7 p-5 sm:p-7 md:p-8">
        <div
          className="shrink-0 w-[32%] sm:w-[35%] aspect-square flex items-center justify-center p-4 sm:p-6 rounded-[10px]"
          style={DARK_TILE_STYLE}
        >
          <img
            src="/images/quality-icon-warning-gear.png"
            alt=""
            className="w-full max-w-[5.5rem] sm:max-w-[6.5rem] h-auto object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center py-1 sm:py-2">
          <img
            id="lo-que-evitamos"
            src={AVOID_TITLE_IMG}
            alt="Lo que evitamos (porque cuesta caro)"
            className="w-full max-w-lg object-contain object-left"
          />
          <div className="mt-4 sm:mt-5">
            <AvoidXList items={items} />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Bloque compacto icono izquierda + texto derecha */
function CompactWideCard({
  iconSrc,
  iconAlt = "",
  title,
  children,
}: {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  children: ReactNode;
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
            alt={iconAlt}
            className="w-full max-w-[4.5rem] sm:max-w-[5.5rem] h-auto object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center py-1 sm:py-2">
          <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-black leading-tight">
            {title}
          </h3>
          <div className="mt-4 sm:mt-5">{children}</div>
        </div>
      </div>
    </article>
  );
}

export default function CalidadSeguridad() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        <HeroVideo
          src="/video-calidad.mp4"
          overlay="gradient"
          ariaLabelledBy="calidad-heading"
        >
          <h1
            id="calidad-heading"
            className="font-heading font-black heading-hero-page text-white uppercase tracking-tighter"
          >
            Sistemas de
            <br />
            ejecución
          </h1>
          <p className="mt-3 max-w-xl text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
            Cuando una obra no puede fallar, el método importa.
          </p>
        </HeroVideo>

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

              <section>
                <AvoidSection items={avoidItems} />
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
