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
      <div className="bg-black min-h-screen">
        <section
          className="relative isolate w-full min-h-[50vh] flex flex-col justify-center overflow-hidden bg-black pt-[140px]"
          aria-labelledby="proyectos-heading"
        >
          <img
            src="/images/hero-construction.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[72%_28%] sm:object-[78%_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-12">
            <h1
              id="proyectos-heading"
              className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight text-center"
            >
              Encuentra un proyecto similar al tuyo.
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-white/75 text-xs sm:text-sm uppercase tracking-[0.16em] font-medium leading-relaxed text-center">
              Si tu proyecto exige control y respuesta operativa, aquí verás cómo
              estructuramos la ejecución.
            </p>
          </div>
        </section>

        <section
          className="bg-[#111111] pb-24 pt-10 sm:pt-12"
          data-testid="section-projects-list"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {filteredProjects.length === 0 ? (
              <div className="text-center py-12" data-testid="no-projects">
                <p className="text-white/60">
                  No hay proyectos en esta categoría todavía.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-10">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
