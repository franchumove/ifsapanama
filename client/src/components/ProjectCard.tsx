import { Link } from "wouter";
import { motion } from "framer-motion";
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
      className="h-full"
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="project-card transition-transform duration-300 hover:-translate-y-2"
        style={{ display: "flex", flexDirection: "column", textDecoration: "none", width: "100%", height: "100%" }}
        data-testid={`card-project-${project.slug}`}
      >
        {/* Imagen superior — 250px, object-fit cover */}
        <div className="card-image-wrapper" style={{ width: "100%", height: "250px", overflow: "hidden" }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Contenido con clip-path en esquina inferior derecha */}
        <div
          className="card-content"
          style={{
            backgroundColor: "#E5E5E5",
            padding: "25px",
            position: "relative",
            flexGrow: 1,
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
          }}
        >
          <span style={{ color: "#FF6600", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
            {project.typeLabel}
          </span>

          <h3 style={{ color: "#000", fontSize: "18px", fontWeight: 800, marginBottom: "8px", textTransform: "uppercase" }}>
            {project.title}
          </h3>

          {project.location && (
            <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>
              {project.client ? `${project.client} — ` : ""}{project.location}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
