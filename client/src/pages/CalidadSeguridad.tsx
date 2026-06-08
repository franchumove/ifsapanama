import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Panel glassmorphism — mismo asset que el diseño de calidad del sitio */
const GLASS_BG = "/images/quality-container-bg.png";

/** Esquina inferior derecha recortada (componente estándar del sitio) */
const CARD_CLIP =
  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)";

const principles = [
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

const avoidItems = [
  "IMPROVISACIÓN SIN CONTROL TÉCNICO",
  "EXCESOS EN MATERIALES",
  "RETRABAJOS DEBIDO A MALA PLANIFICACIÓN",
  "EJECUCIÓN SIN VERIFICACIÓN PREVIA",
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

function PrincipleCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-t-xl bg-[#d4d4d4] shadow-md border border-black/10 h-full flex flex-col"
      style={{ clipPath: CARD_CLIP }}
    >
      <div className="bg-[#b5b5b5] px-4 sm:px-5 py-4 flex items-center gap-3 border-b border-black/10">
        <img src={icon} alt="" className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0" />
        <h3 className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-black">
          {title}
        </h3>
      </div>
      <p className="px-4 sm:px-5 py-4 text-[11px] sm:text-xs text-zinc-800 leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}

export default function CalidadSeguridad() {
  return (
    <Layout>
      <div className="bg-black min-h-screen">
        {/* Hero — fondo negro, foto operario, marca de agua superior derecha */}
        <section
          className="relative w-full min-h-[36vh] sm:min-h-[42vh] md:min-h-[48vh] flex items-end overflow-hidden bg-black pt-24 sm:pt-28"
          aria-labelledby="calidad-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[70%_30%] sm:object-[75%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
          <img
            src="/images/intent-card.png"
            alt=""
            className="absolute top-20 right-0 w-[45%] max-w-md opacity-[0.12] pointer-events-none object-contain object-right"
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10">
            <h1
              id="calidad-heading"
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-[0.95]"
            >
              Sistemas de
              <br />
              ejecución
            </h1>
            <p className="mt-4 max-w-lg text-white/75 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium leading-relaxed">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </section>

        {/* Panel glassmorphism */}
        <div className="w-full px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 pt-5 sm:pt-6">
          <div
            className="relative w-full max-w-7xl mx-auto z-10 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border border-white/10"
            style={{
              backgroundImage: `url(${GLASS_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              clipPath:
                "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            <div className="px-5 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12 md:px-10 md:pt-24 md:pb-14 lg:px-12">
              {/* A — Principios en obra */}
              <div className="mb-10 sm:mb-12 lg:mb-14">
                <h2 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tighter text-center mb-8 sm:mb-10">
                  Principios en obra
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {principles.map((p) => (
                    <PrincipleCard key={p.title} {...p} />
                  ))}
                </div>
              </div>

              {/* B — Lo que evitamos */}
              <div
                className="mb-10 sm:mb-12 lg:mb-14 overflow-hidden rounded-2xl bg-[#d4d4d4] border border-black/10 shadow-lg"
                style={{ clipPath: CARD_CLIP }}
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
                    <h2 className="font-heading font-black text-base sm:text-lg uppercase tracking-tight text-black leading-tight">
                      Lo que evitamos
                    </h2>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-600 font-bold mt-1 mb-4">
                      (porque cuesta caro)
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 list-none m-0 p-0">
                      {avoidItems.map((item) => (
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
                  </div>
                </div>
              </div>

              {/* C — FAQ acordeón */}
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tighter text-center mb-3">
                  Preguntas frecuentes
                </h2>
                <p className="text-white/50 uppercase tracking-[0.18em] text-[10px] sm:text-[11px] font-bold text-center mb-8 sm:mb-10">
                  Lo que más preguntan antes de contratar una constructora
                </p>
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
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </div>
    </Layout>
  );
}
