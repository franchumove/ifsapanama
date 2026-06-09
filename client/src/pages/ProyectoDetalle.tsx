import { useParams, Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-[#111111]">
          <div className="text-center">
            <h1 className="font-heading font-bold text-2xl text-white mb-4">
              Proyecto no encontrado
            </h1>
            <Link href="/proyectos">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a proyectos
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <section 
        className="relative flex items-end pb-32"
        style={{ 
          height: "60vh", 
          backgroundImage: `url(${project.thumbnail})`, 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Filtro negro oscurecido */}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/proyectos">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10 mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
          </Link>

          <h1 className="font-heading font-black text-4xl md:text-6xl text-white uppercase max-w-4xl leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Contenedor Principal (Glassmorphism) */}
      <section className="bg-[#111111] pb-24 px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-5xl mx-auto relative rounded-2xl p-6 md:p-12"
          style={{ 
            marginTop: "-100px", 
            background: "rgba(255, 255, 255, 0.05)", 
            backdropFilter: "blur(10px)", 
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 20
          }}
        >
          {/* Ficha Técnica (Tarjeta Carpeta) */}
          <div 
            className="mb-12"
            style={{
              backgroundColor: "#E5E5E5",
              padding: "25px",
              clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Cliente</p>
                <p className="text-black font-black uppercase text-sm md:text-base">{project.client || "Corporativo"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Ubicación</p>
                <p className="text-black font-black uppercase text-sm md:text-base">{project.location || "Panamá"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Categoría</p>
                <p className="text-[#FF6600] font-black uppercase text-sm md:text-base">{project.typeLabel}</p>
              </div>
            </div>
          </div>

          {/* Descripción Técnica */}
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-white font-bold text-xl mb-4 uppercase">El Reto</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-white font-bold text-xl mb-4 uppercase">La Solución</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-4 uppercase">Alcance de Trabajo</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.scope.map((item, index) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Galería */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <h2 className="text-white font-bold text-xl mb-6 uppercase">Galería del Proceso</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-video overflow-hidden" style={{ borderRadius: "8px" }}>
                    <img src={img} alt={`Galería ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Llamado a la Acción (Final) */}
          <div className="bg-black p-8 md:p-12 text-center rounded-xl border border-white/10">
            <h3 className="text-white font-black text-2xl md:text-3xl uppercase mb-6">
              SI TU OBRA NO PUEDE FALLAR, EMPECEMOS CON UNA VISITA TÉCNICA
            </h3>
            <div className="flex justify-center">
              <WhatsAppLink
                message={`Hola IFSA PANAMÁ, vi el proyecto "${project.title}" y me gustaría solicitar información similar.`}
                className="inline-flex"
              >
                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md gap-3 text-lg flex items-center">
                  <MessageCircle className="h-6 w-6" />
                  HABLAR POR WHATSAPP
                </Button>
              </WhatsAppLink>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
