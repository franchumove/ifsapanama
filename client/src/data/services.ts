import { type Service } from "@shared/schema";

export const services: Service[] = [
  {
    id: "disenos-ingenieria",
    title: "Diseños de Ingeniería",
    icon: "PencilRuler",
    description: "Definición técnica y normativa del proyecto para evitar errores de diseño, sobrecostos y retrabajos en obra.",
    resuelve: "Definición técnica y normativa del proyecto para evitar errores de diseño, sobrecostos y retrabajos en obra.",
    como: "Cálculos estructurales y técnicos, consultoría especializada y diseño alineado a normativa y condiciones reales de campo.",
    aplica: "En fases iniciales de proyectos arquitectónicos, civiles e infraestructura.",
  },
  {
    id: "obra-civil-general",
    title: "Obra Civil General",
    icon: "Building2",
    description: "Ejecución integral de obras civiles con control técnico, coordinación de frentes y cumplimiento de especificaciones.",
    resuelve: "Ejecución integral de obras civiles con control técnico, coordinación de frentes y cumplimiento de especificaciones.",
    como: "Movimiento de tierras, construcción civil, redes, estructuras metálicas y coordinación operativa en campo.",
    aplica: "Proyectos públicos y privados que exigen orden, control y responsabilidad técnica.",
  },
  {
    id: "infraestructura-sanitaria",
    title: "Infraestructura Sanitaria e Hidráulica",
    icon: "Droplets",
    description: "Gestión, protección y conducción de recursos hídricos describe obras hidráulicas complejas.",
    resuelve: "Gestión, protección y conducción de recursos hídricos describe obras hidráulicas complejas.",
    como: "Instalación de tuberías HDPE / PVC, sistemas colectores, enrocados de protección, rellenos y compactaciones específicas.",
    aplica: "Obras de saneamiento, drenaje, protección hidráulica y redes sanitarias.",
  },
  {
    id: "obras-viales",
    title: "Obras Viales y Pavimentos",
    icon: "Milestone",
    description: "Construcción y rehabilitación de infraestructura vial segura y duradera.",
    resuelve: "Construcción y rehabilitación de infraestructura vial segura y duradera.",
    como: "Desarrollo de pavimentos, andenes, bordillos, accesos viales y control de materiales.",
    aplica: "Nuevos desarrollos urbanos o rehabilitación de vías existentes.",
  },
  {
    id: "estructuras-cimentaciones",
    title: "Estructuras y Cimentaciones",
    icon: "Construction",
    description: "Estabilidad estructural y cerramiento seguro de predios e infraestructuras.",
    resuelve: "Estabilidad estructural y cerramiento seguro de predios e infraestructuras.",
    como: "Fundaciones especiales, estructuras de concreto reforzado, muros de contención y cercas perimetrales.",
    aplica: "Proyectos que requieren soporte estructural y seguridad física.",
  },
  {
    id: "mantenimientos-locativos",
    title: "Mantenimientos Locativos",
    icon: "Settings2",
    description: "Preservación del valor, operatividad y seguridad de infraestructuras existentes.",
    resuelve: "Preservación del valor, operatividad y seguridad de infraestructuras existentes.",
    como: "Mantenimiento preventivo, correctivo y atención técnica especializada.",
    aplica: "Edificaciones comerciales, industriales y residenciales.",
  },
];

export const capabilities = [
  {
    id: "metodo-operativo",
    title: "Cómo respondemos en campo",
    items: [
      "Planificación de frentes",
      "Coordinación operativa",
      "Supervisión constante",
      "Control de tiempos y especificaciones",
      "Responsabilidad de principio a fin"
    ],
  },
  {
    id: "capacidad-tecnica",
    title: "Capacidad técnica y supervisión",
    items: [
      "Equipo técnico calificado",
      "Supervisión de alta complejidad",
      "Control de calidad por fases"
    ],
  },
  {
    id: "topografia-precision",
    title: "Topografía y precisión",
    items: [
      "Levantamientos",
      "Replanteo",
      "Control geométrico",
      "Validación por tramos"
    ],
  },
  {
    id: "maquinaria-apoyo",
    title: "Maquinaria y apoyo operativo",
    items: [
      "Coordinación de recursos",
      "Transporte",
      "Movimiento de tierra según necesidad"
    ],
  }
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
