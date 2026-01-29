import type { Project } from "@shared/schema";

export const projects: Project[] = [
  {
    title: "Bordillos y Andenes Estación San Miguelito",
    slug: "estacion-san-miguelito",
    category: "obra-civil",
    typeLabel: "Obra Civil / Metro",
    location: "Estación San Miguelito, Panamá",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
    ],
    challenge: "Desarrollo de 1,794 ml de bordillos y andenes en una de las estaciones de mayor tráfico del sistema Metro.",
    solution: "Construcción de bordillos tipo 1, 4, 5 y 6 en hormigón armado de 21 MPA, incluyendo suministro e instalación de relleno de mediana.",
    scope: [
      "Desarrollo de 1,794 ml de bordillos",
      "Hormigón armado 21 MPA",
      "Construcción tramo 01 tipo 1-4-5",
      "Suministro e instalación de relleno de mediana",
      "Construcción bordillos tipo 1-6"
    ],
    outcome: "Infraestructura entregada conforme a especificaciones del Metro de Panamá con un monto de contrato de B/. 117,953.63.",
    tags: ["metro", "bordillos", "hormigón"],
    featured: true,
  },
  {
    title: "Enrocado de Protección Colectora Punta del Este",
    slug: "colectora-punta-del-este",
    category: "hidraulica",
    typeLabel: "Hidráulica / Protección",
    location: "Punta del Este, Panamá",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop",
    ],
    challenge: "Protección de talud para unidad colectora crítica mediante sistema de enrocado especializado.",
    solution: "Excavación, relleno y compactación para talud, instalación de geomembrana, suministro de tosca, grava 3/4 y matacán para enrocado.",
    scope: [
      "Excavación, relleno y compactación",
      "Instalación de geo membrana",
      "Suministro de tosca y grava 3/4",
      "Enrocado en matacán para protección"
    ],
    outcome: "Estabilización exitosa del talud de protección con un monto de contrato de B/. 141,408.50.",
    tags: ["enrocado", "protección", "hidráulica"],
    featured: true,
  },
  {
    title: "Cerca Perimetral 1 Etapa",
    slug: "cerca-perimetral-etapa-1",
    category: "obra-civil",
    typeLabel: "Seguridad / Obra Civil",
    location: "Panamá",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop",
    ],
    challenge: "Instalación de cerramiento de seguridad perimetral de alta durabilidad bajo normas técnicas.",
    solution: "Instalación de cerca de malla ciclón de alambre galvanizado calibre No. 9, con cimentación de concreto de 21 MPa en todos los postes.",
    scope: [
      "Cerca de malla ciclón calibre No. 9",
      "Cimentación de concreto 21 MPa",
      "Dimensiones y especificaciones según plano"
    ],
    outcome: "Cerramiento entregado satisfactoriamente con un monto de contrato de B/. 83,181.00.",
    tags: ["seguridad", "malla-ciclón", "perímetro"],
    featured: true,
  },
  {
    title: "Diseño y Construcción Red Contraincendio",
    slug: "red-contraincendio-diseno-construccion",
    category: "hidraulica",
    typeLabel: "Hidráulica / Seguridad",
    location: "Panamá",
    thumbnail: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1200&h=800&fit=crop",
    ],
    challenge: "Implementación integral de sistema de red contraincendio en polietileno de alta densidad.",
    solution: "Instalación de tubería HDPE de 4 y 6 pulgadas, válvulas, hidrantes y cajas de inspección en concreto reforzado de 21 PPM.",
    scope: [
      "Tubería HDPE de 4 y 6 pulgadas",
      "Instalación de válvulas e hidrantes",
      "Caja de inspección en concreto reforzado"
    ],
    outcome: "Sistema operativo certificado con un monto de contrato de B/. 256,180.56.",
    tags: ["HDPE", "contraincendio", "redes"],
    featured: true,
  },
  {
    title: "Canales Eléctricos para Servicios Energéticos",
    slug: "canales-electricos-servicios-energeticos",
    category: "infraestructura",
    typeLabel: "Infraestructura / Eléctrica",
    location: "Panamá",
    thumbnail: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=800&fit=crop",
    ],
    challenge: "Ejecución de canalizaciones eléctricas de gran escala para fuerza, procesamiento, iluminación y comunicaciones.",
    solution: "Excavación, relleno y compactación para vigaductos con tuberías de PVC (2in a 6in) cubiertas de hormigón 105MPA.",
    scope: [
      "Instalación tuberías PVC (2in, 3in, 4in, 6in)",
      "Cubiertas de hormigón 105MPA",
      "Vigaductos y canalizaciones eléctricas",
      "Cajas de inspección de 21 MPA y tapas de acero"
    ],
    outcome: "Infraestructura entregada exitosamente con un monto de contrato de B/. 680,709.00.",
    tags: ["eléctrica", "vigaductos", "comunicaciones"],
    featured: true,
  },
];

export const projectCategories = [
  { value: "obra-civil", label: "Obra Civil" },
  { value: "hidraulica", label: "Infraestructura Hidráulica" },
  { value: "industrial", label: "Industrial / Galeras" },
  { value: "infraestructura", label: "Infraestructura Eléctrica" },
];
