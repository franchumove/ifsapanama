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

export function ProjectsGrid({
  projects,
  title = "Proyectos que prueban ejecución.",
  subtitle = "Cada ficha muestra el reto, la solución y el alcance para que puedas evaluar con claridad.",
  showViewAll = true,
  limit,
}: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-projects-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {subtitle}
            </p>
          </div>
          {showViewAll && (
            <Link href="/proyectos" data-testid="link-view-all-projects">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-projects">
                Ver todos los proyectos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
