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
        title=""
        size="small"
        backgroundVideo="/video_infraestructura.mp4"
      />

      <section className="py-12 lg:py-24 bg-black" data-testid="section-projects-list">
        <div 
          className="max-w-6xl mx-auto relative min-h-[500px]"
          style={{ 
            backgroundImage: "url('/images/folder-card-bg.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            clipPath: 'polygon(0 0, 75% 0, 75% 10px, 99.5% 10px, 99.5% 100%, 0 100%)'
          }}
        >
          <div className="px-6 pt-48 pb-16 md:px-12 md:pt-64 md:pb-20 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center flex flex-col items-center"
            >
              <img 
                src="/images/title-proyectos.png" 
                alt="Encuentra un proyecto similar al tuyo" 
                className="w-full max-w-[800px] object-contain mb-14"
              />
              <ProjectFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </motion.div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-12" data-testid="no-projects">
                <p className="text-white/60">
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
        </div>
      </section>

      <CTASection
        title="¿Buscas algo similar?"
        subtitle="Cuéntanos ubicación y etapa. Te decimos el siguiente paso técnico."
      />
    </Layout>
  );
}
