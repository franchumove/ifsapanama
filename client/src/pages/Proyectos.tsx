import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

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
      <Hero
        title="Proyectos"
        subtitle="Filtra por tipo de obra para ver fichas con contexto, alcance y entregables."
        size="small"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=800&fit=crop"
      />

      <section className="py-12 lg:py-16 bg-background" data-testid="section-projects-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-heading font-bold text-xl text-foreground mb-2">
              Encuentra un proyecto similar al tuyo.
            </h2>
            <p className="text-muted-foreground mb-6">
              Si tu proyecto exige control y respuesta operativa, aquí verás cómo estructuramos la ejecución.
            </p>
            <ProjectFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </motion.div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12" data-testid="no-projects">
              <p className="text-muted-foreground">
                No hay proyectos en esta categoría todavía.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="¿Buscas algo similar?"
        subtitle="Cuéntanos ubicación y etapa. Te decimos el siguiente paso técnico."
      />
    </Layout>
  );
}
