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

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/proyectos/${project.slug}`} data-testid={`link-project-${project.slug}`}>
        <Card 
          className="overflow-hidden border-border/50 hover-elevate cursor-pointer group h-full"
          data-testid={`card-project-${project.slug}`}
        >
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <Badge 
              className="absolute top-4 left-4 bg-primary text-primary-foreground border-0"
              data-testid={`badge-project-type-${project.slug}`}
            >
              {project.typeLabel}
            </Badge>
          </div>
          <CardContent className="p-5">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.location && (
              <p className="text-muted-foreground text-sm mb-4">{project.location}</p>
            )}
            <span className="inline-flex items-center text-primary font-medium text-sm gap-2 group-hover:gap-3 transition-all">
              Ver ficha
              <ArrowRight className="h-4 w-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
