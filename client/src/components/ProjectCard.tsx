import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const easing = [0.22, 1, 0.36, 1];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: easing }}
    >
      <Link href={`/proyectos/${project.slug}`} data-testid={`link-project-${project.slug}`}>
        <Card 
          className="border-0 cursor-pointer group h-full transition-all duration-500 rounded-none bg-[#e6e6e6]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
          data-testid={`card-project-${project.slug}`}
        >
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 ease-premium group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <Badge 
              className="absolute top-5 left-5 bg-[#2F2F2F] text-white border-0 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm"
              data-testid={`badge-project-type-${project.slug}`}
            >
              {project.typeLabel}
            </Badge>
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-flex items-center text-white font-medium text-sm gap-2">
                Ver ficha completa
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
          <CardContent className="p-6 lg:p-7">
            <h3 className="font-heading font-black text-[13px] uppercase tracking-wider text-black mb-2 line-clamp-2 transition-colors duration-300">
              {project.title}
            </h3>
            {project.location && (
              <p className="text-black/50 font-medium text-xs mt-3">{project.location}</p>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
