import { type Service } from "@shared/schema";

export const services: Service[] = [
  {
    id: "disenos-ingenieria",
    title: "Diseños de Ingeniería",
    icon: "PencilRuler",
    description: "Definición técnica y normativa del proyecto para evitar errores de diseño, reprocesos y desviaciones en obra.",
    resuelve: "Definición técnica y normativa del proyecto para evitar errores de diseño, reprocesos y desviaciones en obra.",
    como: "Mediante ingeniería especializada, criterios normativos y soporte técnico aplicado a la ejecución real.",
    aplica: "En fases iniciales de proyectos arquitectónicos, civiles e industriales que requieren precisión técnica antes de construir.",
  },
  {
    id: "obra-civil-general",
    title: "Obra Civil General",
    icon: "Building2",
    description: "La ejecución integral de infraestructura con control de calidad, coordinación de frentes y cumplimiento técnico.",
    resuelve: "La ejecución integral de infraestructura con control de calidad, coordinación de frentes y cumplimiento técnico.",
    como: "Con planificación operativa, personal técnico, supervisión en campo y recursos propios para distintos niveles de complejidad.",
    aplica: "En proyectos públicos o privados que no pueden fallar en tiempos, especificaciones ni ejecución.",
  },
  {
    id: "mantenimientos-locativos",
    title: "Mantenimientos Locativos",
    icon: "Settings2",
    description: "La conservación operativa, funcional y técnica de infraestructuras existentes.",
    resuelve: "La conservación operativa, funcional y técnica de infraestructuras existentes.",
    como: "A través de atención técnica especializada, intervención planificada y respuesta eficiente en sitio.",
    aplica: "En edificaciones comerciales, industriales o residenciales que requieren continuidad operativa.",
  },
];

export const executionLines = [
  { name: "Infraestructura sanitaria e hidráulica", icon: "Droplets" },
  { name: "Obras viales y pavimentos", icon: "Milestone" },
  { name: "Estructuras y cimentaciones", icon: "Construction" },
  { name: "Movimiento de tierra", icon: "Truck" },
  { name: "Topografía y replanteo", icon: "Map" },
  { name: "Redes, drenajes y colectores", icon: "Layers" },
  { name: "Cerramientos y estructuras metálicas", icon: "Container" },
  { name: "Logística, transporte y maquinaria", icon: "Truck" }
];

export const faqs = [
  {
    question: "¿Cómo garantizan el cumplimiento de los tiempos de entrega?",
    answer: "Mediante una planificación operativa rigurosa y supervisión técnica constante en campo, asegurando que cada frente de trabajo avance según el cronograma establecido.",
  },
  {
    question: "¿Qué tipo de proyectos de ingeniería diseñan?",
    answer: "Nos especializamos en la definición técnica y normativa de proyectos arquitectónicos, civiles e industriales, priorizando la viabilidad constructiva.",
  },
  {
    question: "¿Atienden emergencias de mantenimiento locativo?",
    answer: "Sí, contamos con un sistema de respuesta eficiente para asegurar la continuidad operativa de instalaciones comerciales e industriales.",
  },
];

export const projectTypes = [
  { value: "obra-civil", label: "Obra Civil" },
  { value: "infraestructura", label: "Infraestructura" },
  { value: "vial", label: "Vial / Pavimentos" },
  { value: "hidraulica", label: "Hidráulica / Sanitaria" },
  { value: "industrial", label: "Industrial" },
  { value: "otro", label: "Otro" },
];

export const projectStages = [
  { value: "idea", label: "Licitación / Evaluación" },
  { value: "diseno", label: "En diseño / Planos" },
  { value: "ejecucion", label: "En ejecución" },
  { value: "urgente", label: "Urgente / Intervención" },
];
