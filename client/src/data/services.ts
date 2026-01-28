import type { Service, Capability } from "@shared/schema";

export const services: Service[] = [
  {
    id: "disenos-ingenieria",
    title: "Diseños de Ingeniería",
    icon: "Building2",
    description: "Cálculos, consultorías y soluciones técnicas precisas.",
    resuelve: "Definición técnica y normativa del proyecto para evitar errores de diseño.",
    como: "Uso de tecnología de vanguardia y especialistas calificados.",
    aplica: "En fases iniciales de proyectos arquitectónicos y civiles.",
  },
  {
    id: "obra-civil-general",
    title: "Obra Civil General",
    icon: "Construction",
    description: "Movimiento de tierras, construcción, redes y estructura metálica.",
    resuelve: "Ejecución integral de infraestructura con estricto control de calidad.",
    como: "Equipos capacitados y maquinaria propia para abordar diversos grados de complejidad.",
    aplica: "Proyectos gubernamentales y privados que exigen cumplimiento de especificaciones.",
  },
  {
    id: "infraestructura-sanitaria",
    title: "Infraestructura Sanitaria e Hidráulica",
    icon: "Droplets",
    description: "Gestión hídrica, enrocados de protección y sistemas colectores.",
    resuelve: "Implementación de obras hidráulicas que requieren rellenos y compactación específicos.",
    como: "Instalación de tuberías HDPE/PVC, hidrantes y redes de contraincendios.",
    aplica: "Obras de protección, saneamiento y gestión de recursos hídricos.",
  },
  {
    id: "mantenimientos-locativos",
    title: "Mantenimientos Locativos",
    icon: "CheckCircle2",
    description: "Servicios preventivos y correctivos para instalaciones.",
    resuelve: "Preservación del valor y funcionalidad de las infraestructuras.",
    como: "Atención técnica especializada y respuesta eficiente.",
    aplica: "Edificaciones comerciales, industriales y residenciales.",
  },
  {
    id: "viales-pavimentos",
    title: "Obras Viales y Pavimentos",
    icon: "Truck",
    description: "Superficies de rodadura y accesos para tránsito liviano y pesado.",
    resuelve: "Desarrollo de infraestructura vial duradera y segura.",
    como: "Cumplimiento de especificaciones de diseño vial y control de materiales.",
    aplica: "Nuevos desarrollos urbanos y rehabilitación de vías existentes.",
  },
  {
    id: "estructuras-cimentaciones",
    title: "Estructuras y Cimentaciones",
    icon: "Fence",
    description: "Concreto reforzado, muros de contención y seguridad perimetral.",
    resuelve: "Estabilidad estructural y cerramiento seguro de predios.",
    como: "Construcción de fundaciones especiales e instalación de cerca de malla ciclón.",
    aplica: "Obras civiles y proyectos de infraestructura segura.",
  },
];

export const capabilities: Capability[] = [
  {
    id: "metodo-operativo",
    title: "Cómo respondemos en campo",
    items: [
      "Entendemos alcance y restricciones del sitio",
      "Replanteo / verificación inicial con tecnología de vanguardia",
      "Planificación de frentes y coordinación operativa sólida",
      "Ejecución con estricto control de calidad",
      "Entregables y cierre por etapas conforme a especificaciones",
    ],
  },
  {
    id: "capacidad-tecnica",
    title: "Capacidad técnica y supervisión",
    items: [
      "Equipo técnico altamente calificado",
      "Filosofía de cumplimiento basada en eficiencia y transparencia",
      "Supervisión y ejecución de proyectos de alta complejidad",
      "Control y calidad en el servicio de principio a fin",
    ],
  },
  {
    id: "topografia-tecnologia",
    title: "Dibujo y Topografía",
    items: [
      "Tecnología de vanguardia en dibujo técnico",
      "Levantamientos topográficos precisos",
      "Control geométrico de obra",
      "Trazado y replanteo de alta fidelidad",
    ],
  },
  {
    id: "maquinaria-logistica",
    title: "Infraestructura de Maquinaria",
    items: [
      "Sólida flota de maquinaria y transporte",
      "Equipos para movimiento de tierra masivo",
      "Logística propia para optimización de costos",
      "Desarrollo continuo en negocios relacionados",
    ],
  },
];

export const faqs = [
  {
    question: "¿Cómo aseguran la calidad en sus proyectos?",
    answer: "Mantenemos un estricto control de calidad en todos nuestros productos finales, asegurando que cada fase del proyecto cumpla con las expectativas del cliente y las normas técnicas.",
  },
  {
    question: "¿En qué tipos de obras se especializan?",
    answer: "Nos enfocamos tanto en construcción de obras gubernamentales como privadas, especializándonos en infraestructura, obra civil, hidráulica y pavimentos.",
  },
  {
    question: "¿Cuál es su capacidad operativa?",
    answer: "Contamos con una sólida infraestructura de maquinaria, transporte y un equipo técnico altamente calificado para abordar proyectos de diversa complejidad en todo Panamá.",
  },
  {
    question: "¿Ofrecen servicios de consultoría y diseño?",
    answer: "Sí, nuestras áreas de servicio incluyen diseños de ingeniería, cálculos y consultorías técnicas especializadas.",
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
