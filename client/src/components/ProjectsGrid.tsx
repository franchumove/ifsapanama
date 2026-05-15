import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@shared/schema";

interface ProjectsGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  limit?: number;
}

const easing = [0.22, 1, 0.36, 1];

export function ProjectsGrid({
  projects,
  title = "Proyectos que prueban ejecución.",
  subtitle = "Cada ficha muestra el reto, la solución y el alcance para que puedas evaluar con claridad.",
  showViewAll = true,
  limit,
}: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-24 lg:py-32" data-testid="section-projects-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex flex-col items-center text-center gap-6 mb-12 sm:mb-16 pt-16 px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl lg:text-4xl text-white mb-4 tracking-tighter uppercase">
              {title}
            </h2>
            <p className="text-white/60 max-w-xl text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
          {showViewAll && (
            <Link href="/proyectos" data-testid="link-view-all-projects">
              <Button variant="outline" size="sm" className="gap-2 font-black uppercase tracking-[0.2em] text-[10px] bg-transparent border-white/30 text-white hover:bg-white hover:text-black rounded-none px-6 py-4 mt-2 transition-all duration-300" data-testid="button-view-all-projects">
                Ver todos los proyectos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
