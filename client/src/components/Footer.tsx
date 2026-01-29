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
            <Link href="/" className="inline-block mb-6" data-testid="link-footer-logo">
              <img 
                src="/logo_ifsa.svg" 
                alt="IFSA PANAMÁ" 
                className="h-10 lg:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm max-w-md mb-6">
              Construcción e infraestructura con control real. Obra civil, arquitectura, 
              topografía y maquinaria para proyectos públicos y privados en Panamá.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+50765519061"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4 text-white/40" />
                (507) 6551-9061
              </a>
              <a
                href="tel:+5073972914"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                data-testid="link-phone-2"
              >
                <Phone className="h-4 w-4 text-white/40" />
                (507) 397-2914
              </a>
              <a
                href="mailto:fillette@ifsapanama.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4 text-white/40" />
                fillette@ifsapanama.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm" data-testid="text-address">
                <MapPin className="h-4 w-4 text-white/40 mt-0.5" />
                <span>Panamá Pacifico - Veracruz</span>
              </div>
            </div>
          </div>

          <div data-testid="footer-quick-links">
            <h4 className="font-heading font-bold uppercase tracking-widest text-[10px] text-white/40 mb-6">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                  data-testid={`link-footer-${link.href.replace("/", "")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div data-testid="footer-services-list">
            <h4 className="font-heading font-bold uppercase tracking-widest text-[10px] text-white/40 mb-6">
              Servicios Core
            </h4>
            <nav className="flex flex-col gap-3">
              <span className="text-white/70 text-sm font-medium">Diseños de Ingeniería</span>
              <span className="text-white/70 text-sm font-medium">Obra Civil General</span>
              <span className="text-white/70 text-sm font-medium">Mantenimientos Locativos</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
              © {new Date().getFullYear()} IFSA PANAMÁ. EJECUCIÓN TÉCNICA SIN MARGEN DE ERROR.
            </p>
            <p className="font-heading text-[10px] text-white/60 font-black uppercase tracking-[0.3em]">
              Cuando una obra no puede fallar, el método importa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
