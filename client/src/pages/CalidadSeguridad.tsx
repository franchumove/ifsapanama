import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckSquare, XCircle, Search, Layers, FileText } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "Control",
    description: "Verificar lo crítico antes de avanzar cada etapa de obra. Todo avance se valida contra planos y especificaciones antes de su ejecución.",
  },
  {
    icon: Layers,
    title: "Orden",
    description: "Coordinación de frentes, recursos y seguridad operativa. La planificación evita interferencias y retrabajos durante la ejecución.",
  },
  {
    icon: FileText,
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
      {/* Hero Section */}
      <section className="bg-black pt-32 pb-20 text-center px-6">
        <h1 className="font-heading font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-4">
          SISTEMAS DE<br />EJECUCIÓN
        </h1>
        <p className="text-white/60 uppercase tracking-[0.3em] font-medium text-sm">
          Cuando una obra no puede fallar, el método importa.
        </p>
      </section>

      <section className="bg-black pb-40 overflow-hidden flex flex-col items-center">
        <div 
          className="relative w-full max-w-[1100px] min-h-[1600px] flex flex-col pt-32 pb-24 px-12 md:px-20"
          style={{ 
            backgroundImage: "url('/images/quality-container-bg.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl text-white uppercase tracking-tighter">
              PRINCIPIOS EN OBRA
            </h2>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 relative overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/20 rounded-lg">
                    <img 
                      src={`/images/icon-${principle.title.toLowerCase()}.png`} 
                      alt={principle.title}
                      className="w-8 h-8 object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="font-heading font-black text-lg text-white uppercase tracking-tighter">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Avoid Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 rounded-[2rem] p-10 flex flex-col md:flex-row gap-12 items-center mb-32 shadow-2xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)'
            }}
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src="/images/icon-engineering.png" 
                alt="Avoid Icon" 
                className="w-full h-full object-contain brightness-0 grayscale opacity-80"
              />
            </div>
            <div className="flex-grow">
              <h2 className="font-heading font-black text-2xl text-black mb-6 uppercase tracking-tighter">
                LO QUE EVITAMOS<br />(PORQUE CUESTA CARO)
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avoidItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-black/70 text-[11px] font-black uppercase tracking-widest">
                    <span className="text-black/30">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* FAQs Section */}
          <div className="mt-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-black text-4xl text-white uppercase tracking-tighter mb-2">
                PREGUNTAS FRECUENTES
              </h2>
              <p className="text-white/40 uppercase tracking-widest text-[10px] font-black">
                LO QUE MÁS PREOCUPA ANTES DE CONTRATAR UNA CONSTRUCTORA
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {qualityFaqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 pb-8 group cursor-pointer">
                  <h3 className="text-white font-black uppercase tracking-widest text-xs mb-4 flex justify-between items-center group-hover:text-white/80 transition-colors">
                    {faq.question}
                    <span className="text-white/30 group-hover:translate-y-1 transition-transform">▼</span>
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
