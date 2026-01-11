import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/capacidades", label: "Capacidades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-ifsa-black text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" data-testid="link-footer-logo">
              <span className="font-heading font-bold text-2xl text-white">
                IFSA <span className="text-primary">PANAMÁ</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm max-w-md mb-6">
              Construcción e infraestructura con control real. Obra civil, arquitectura, 
              topografía y maquinaria para proyectos públicos y privados en Panamá.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5073972914"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4 text-primary" />
                +507 397-2914
              </a>
              <a
                href="mailto:info@ifsapanama.com"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@ifsapanama.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm" data-testid="text-address">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Ciudad de Panamá, Panamá</span>
              </div>
            </div>
          </div>

          <div data-testid="footer-quick-links">
            <h4 className="font-heading font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid={`link-footer-${link.href.replace("/", "")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div data-testid="footer-services-list">
            <h4 className="font-heading font-semibold text-white mb-4">
              Servicios
            </h4>
            <nav className="flex flex-col gap-2">
              <span className="text-white/70 text-sm" data-testid="text-footer-service-obra-civil">Obra Civil</span>
              <span className="text-white/70 text-sm" data-testid="text-footer-service-infraestructura">Infraestructura</span>
              <span className="text-white/70 text-sm" data-testid="text-footer-service-topografia">Topografía</span>
              <span className="text-white/70 text-sm" data-testid="text-footer-service-movimiento">Movimiento de Tierra</span>
              <span className="text-white/70 text-sm" data-testid="text-footer-service-maquinaria">Maquinaria</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} IFSA PANAMÁ. Todos los derechos reservados.
            </p>
            <p className="font-heading text-sm text-primary font-medium tracking-wide" data-testid="text-footer-mantra">
              Responsabilidad. Eficiencia. Control de calidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
