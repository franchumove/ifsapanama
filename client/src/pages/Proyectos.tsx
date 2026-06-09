import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Proyectos() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split("?")[1] || "");
  const initialCategory = urlParams.get("tipo");
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout>
      {/* 
        Contenedor Maestro y Fondo gris oscuro corporativo
        Max-width centrado (max-w-7xl es approx 1280px)
      */}
      <section className="min-h-screen bg-[#111111] pt-32 pb-24" data-testid="section-projects-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabecera (Header) */}
          <div className="text-center mb-10">
            <h1 className="text-white text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight">
              ENCUENTRA UN PROYECTO SIMILAR AL TUYO.
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto uppercase tracking-wide">
              SI TU PROYECTO EXIGE CONTROL Y RESPUESTA OPERATIVA, AQUÍ VERÁS CÓMO ESTRUCTURAMOS LA EJECUCIÓN.
            </p>
          </div>

          {/* Barra de Filtros Dinámicos */}
          <ProjectFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Cuadrícula de Resultados (Grid) */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12" data-testid="no-projects">
              <p className="text-white/60">
                No hay proyectos en esta categoría todavía.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">

              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          )}
          
        </div>
      </section>
    </Layout>
  );
}
