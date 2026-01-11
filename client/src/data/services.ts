import type { Service, Capability } from "@shared/schema";

// TODO: Replace with real service data provided by IFSA
export const services: Service[] = [
  {
    id: "obra-civil",
    title: "Obra Civil",
    icon: "Building2",
    description: "Ejecución estructurada en campo, coordinación de frentes y entregas.",
    resuelve: "Ejecución estructurada en campo, coordinación de frentes y entregas.",
    como: "Planificación de tareas, supervisión, control de calidad y orden operativo.",
    aplica: "Cuando necesitas avance estable y entregables verificables.",
  },
  {
    id: "infraestructura",
    title: "Infraestructura & Urbanismo",
    icon: "Construction",
    description: "Intervención de redes, drenajes, contención y obras asociadas.",
    resuelve: "Intervención de redes, drenajes, contención y obras asociadas.",
    como: "Replanteo, ejecución por frentes, control de niveles y coordinación operativa.",
    aplica: "Cuando el terreno, el agua o la circulación requieren control técnico.",
  },
  {
    id: "topografia",
    title: "Topografía, Replanteo y Control Geométrico",
    icon: "Compass",
    description: "Precisión en medidas, niveles y trazos para evitar retrabajos.",
    resuelve: "Precisión en medidas, niveles y trazos para evitar retrabajos.",
    como: "Levantamiento, replanteo en sitio y verificación continua.",
    aplica: "Cuando el error de centímetros cuesta semanas.",
  },
  {
    id: "movimiento-tierra",
    title: "Movimiento de Tierra",
    icon: "Mountain",
    description: "Preparación del terreno para estructura y redes.",
    resuelve: "Preparación del terreno para estructura y redes.",
    como: "Organización de frentes, control de niveles, manejo de material y seguridad.",
    aplica: "Cuando necesitas base estable para construir sin sorpresas.",
  },
  {
    id: "redes-drenajes",
    title: "Redes / Drenajes / Colectoras",
    icon: "Droplets",
    description: "Conducción de agua y control de escorrentías.",
    resuelve: "Conducción de agua y control de escorrentías.",
    como: "Trazo, excavación, instalación y verificación por tramos.",
    aplica: "Cuando la infraestructura depende del agua.",
  },
  {
    id: "estructuras-metalicas",
    title: "Estructuras Metálicas / Cerramientos",
    icon: "Fence",
    description: "Soluciones funcionales de cerramiento y estructura auxiliar.",
    resuelve: "Soluciones funcionales de cerramiento y estructura auxiliar.",
    como: "Fabricación/instalación según alcance, seguridad y control de ajustes.",
    aplica: "Cuando se requiere rapidez y precisión.",
  },
  {
    id: "logistica",
    title: "Logística, Transporte y Apoyo de Maquinaria",
    icon: "Truck",
    description: "Operación de apoyo para mantener avance y ritmo.",
    resuelve: "Operación de apoyo para mantener avance y ritmo.",
    como: "Coordinación de recursos y respuesta a campo.",
    aplica: "Cuando el proyecto exige capacidad operativa real.",
  },
];

export const capabilities: Capability[] = [
  {
    id: "metodo-operativo",
    title: "Cómo respondemos en campo",
    items: [
      "Entendemos alcance y restricciones del sitio",
      "Replanteo / verificación inicial (si aplica)",
      "Planificación de frentes y coordinación",
      "Ejecución con supervisión y control",
      "Entregables y cierre por etapas",
    ],
  },
  {
    id: "capacidad-tecnica",
    title: "Capacidad técnica y supervisión",
    items: [
      "Supervisión de obra y control de avance",
      "Coordinación de equipos en sitio",
      "Control de calidad por etapa",
      "Seguridad operativa (según plan)",
    ],
  },
  {
    id: "topografia-tecnologia",
    title: "Topografía y precisión",
    items: [
      "Levantamiento (según necesidad)",
      "Replanteo",
      "Control de niveles y alineaciones",
      "Validación por tramos / etapas",
    ],
  },
  {
    id: "maquinaria-logistica",
    title: "Maquinaria y apoyo operativo",
    items: [
      "Equipos para movimiento de tierra",
      "Transporte de materiales",
      "Coordinación logística",
      "Respuesta operativa en campo",
    ],
  },
];

export const faqs = [
  {
    question: "¿Cómo aseguran calidad y cumplimiento?",
    answer: "Alineamos alcance, verificamos medidas y ejecutamos con supervisión en campo. Documentamos avances y validamos entregables según cada etapa.",
  },
  {
    question: "¿Qué pasa si el proyecto cambia en obra?",
    answer: "Gestionamos cambios por alcance: evaluación, impacto, aprobación y ejecución controlada. Evitamos improvisación sin trazabilidad.",
  },
  {
    question: "¿Cómo controlan tiempos y coordinación?",
    answer: "Organizamos frentes, dependencias y entregas parciales. Priorizamos comunicación operativa para que el avance sea estable.",
  },
  {
    question: "¿Qué documentación entregan?",
    answer: "Depende del proyecto. Podemos incluir reportes de avance, evidencias fotográficas y entregables técnicos acordados.",
  },
  {
    question: "¿Trabajan con cronogramas y entregas parciales?",
    answer: "Sí, definimos etapas y entregables acordados para mantener control de avance.",
  },
  {
    question: "¿Cómo se coordinan con otros contratistas?",
    answer: "Coordinación operativa y comunicación de frentes para evitar interferencias y retrabajos.",
  },
];

export const projectTypes = [
  { value: "infraestructura", label: "Infraestructura & Urbanismo" },
  { value: "industrial", label: "Industrial / Plantas" },
  { value: "obras-publicas", label: "Obras Públicas" },
  { value: "residencial", label: "Residencial" },
  { value: "comercial", label: "Comercial" },
  { value: "otro", label: "Otro" },
];

export const projectStages = [
  { value: "idea", label: "Idea / Concepto" },
  { value: "diseno", label: "En diseño" },
  { value: "ejecucion", label: "En ejecución" },
  { value: "urgente", label: "Urgente" },
];
