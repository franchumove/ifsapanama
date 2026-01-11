import { useParams, Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
              Proyecto no encontrado
            </h1>
            <Link href="/proyectos" data-testid="link-back-projects-404">
              <Button variant="outline" className="gap-2" data-testid="button-back-projects-404">
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
      <section className="relative min-h-[50vh] flex items-end overflow-hidden" data-testid="section-project-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ifsa-black via-ifsa-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/proyectos" data-testid="link-back-projects">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 mb-4 gap-2"
                data-testid="button-back-projects"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver a proyectos
              </Button>
            </Link>

            <Badge className="bg-primary text-primary-foreground border-0 mb-4">
              {project.typeLabel}
            </Badge>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              {project.title}
            </h1>

            {project.location && (
              <p className="text-white/70 text-lg">{project.location}</p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-background" data-testid="section-project-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                El reto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                La solución IFSA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Alcance de trabajo
              </h2>
              <ul className="space-y-3">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Resultado / entregable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>

            {project.gallery.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                data-testid="section-project-gallery"
              >
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Galería
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="gallery-grid">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden" data-testid={`gallery-image-${index}`}>
                      <img
                        src={image}
                        alt={`${project.title} - Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {project.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="border-border/50 bg-muted/30" data-testid="card-project-cta">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  ¿Quieres algo similar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cuéntanos ubicación y etapa. Te decimos el siguiente paso técnico.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto" data-testid="link-project-cta">
                    <Button className="gap-2 w-full sm:w-auto" data-testid="button-project-cta">
                      Solicitar visita técnica
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <WhatsAppLink
                    message={`Hola IFSA PANAMÁ, vi el proyecto "${project.title}" y me gustaría solicitar información similar.`}
                    className="inline-flex"
                  >
                    <Button variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-project-whatsapp">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
                  </WhatsAppLink>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
