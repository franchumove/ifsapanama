import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Control",
    description: "Verificar lo crítico antes de avanzar cada etapa de obra. Todo avance se valida contra planos y especificaciones antes de su ejecución.",
  },
  {
    title: "Orden",
    description: "Coordinación de frentes, recursos y seguridad operativa. La planificación evita interferencias y retrabajos durante la ejecución.",
  },
  {
    title: "Trazabilidad",
    description: "Evidencias técnicas y entregables por etapa. Cada fase queda documentada mediante reportes y controles verificables.",
  },
];

const avoidItems = [
  "Improvisación sin control técnico",
  "Cambios sin trazabilidad",
  "Retrabajos por falta de replanteo",
  "Avances sin verificación previa",
];

const qualityFaqs = [
  {
    question: "¿Cómo garantizan el cumplimiento de los tiempos de entrega?",
    answer: "A través de planificación técnica, control de frentes de trabajo y validación de cada avance antes de continuar. No avanzamos etapas sin cumplir especificaciones, lo que reduce retrabajos y desviaciones de cronograma.",
  },
  {
    question: "¿Qué tipo de proyectos de ingeniería diseñan?",
    answer: "Diseñamos proyectos de ingeniería civil e infraestructura alineados a normativa vigente y a condiciones reales de campo, incluyendo estructuras, obras hidráulicas, pavimentos y soluciones técnicas específicas según el proyecto.",
  },
  {
    question: "¿Atienden emergencias de mantenimiento locativo?",
    answer: "Sí. Atendemos mantenimientos preventivos y correctivos en edificaciones comerciales, industriales y residenciales, priorizando seguridad operativa y continuidad de funcionamiento.",
  },
];

export default function CalidadSeguridad() {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        title="Calidad y Seguridad"
        subtitle="Cuando una obra no puede fallar, el método importa."
        size="small"
      />

      {/* Single folder — full width */}
      <section className="bg-black pb-0">
        <div
          className="w-full"
          style={{
            backgroundImage: "url('/images/quality-container-bg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            padding: "80px 80px 120px",
          }}
        >

          {/* SECTION 1: Principios en Obra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="font-heading font-black text-3xl text-white uppercase tracking-tighter mb-12 text-center">
              PRINCIPIOS EN OBRA
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {principles.map((p, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h3 className="font-black text-base text-white uppercase tracking-widest border-b border-white/20 pb-3">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-white/70 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 2: Lo que evitamos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="font-heading font-black text-3xl text-white uppercase tracking-tighter mb-8 text-center">
              LO QUE EVITAMOS
              <span className="block text-lg text-white/50 font-medium tracking-widest mt-1">(PORQUE CUESTA CARO)</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {avoidItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-white/40 text-xl flex-shrink-0">●</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 3: Preguntas Frecuentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-3xl text-white uppercase tracking-tighter mb-4 text-center">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-[10px] font-black text-center mb-12">
              LO QUE MÁS PREOCUPA ANTES DE CONTRATAR UNA CONSTRUCTORA
            </p>
            <div className="max-w-3xl mx-auto space-y-10">
              {qualityFaqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-10">
                  <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4 flex justify-between items-center">
                    {faq.question}
                    <span className="text-white/30 ml-4 flex-shrink-0">▼</span>
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <CTASection
        title="El primer paso es técnico, no comercial."
        subtitle="Solicita una visita técnica y te respondemos con un diagnóstico claro de alcance y ejecución."
      />
    </Layout>
  );
}
