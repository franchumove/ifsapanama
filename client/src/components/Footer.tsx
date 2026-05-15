import { Link } from "wouter";
import { Phone, Mail, MapPin, ArrowDownLeft } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-10" data-testid="link-footer-logo">
              <div className="flex flex-col">
                <span className="text-white font-heading font-black text-5xl tracking-tighter leading-[0.8]">Ifsa</span>
                <span className="text-white font-heading font-medium text-2xl tracking-[0.1em] uppercase leading-none mt-1">Panamá</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm font-medium leading-relaxed max-w-xs mb-10">
              Construcción e infraestructura con control real. Obra civil, arquitectura, 
              topografía y maquinaria para proyectos públicos y privados en Panamá.
            </p>
            <div className="space-y-5">
              <a href="tel:+50765519061" className="flex items-center gap-4 text-white hover:text-[#FF9B26] transition-colors group">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-base font-black">(507) 6551-9061</span>
              </a>
              <a href="tel:+5073972914" className="flex items-center gap-4 text-white hover:text-[#FF9B26] transition-colors group">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-base font-black">(507) 397-2914</span>
              </a>
              <a href="mailto:fillette@ifsapanama.com" className="flex items-center gap-4 text-white hover:text-[#FF9B26] transition-colors group">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-base font-black uppercase tracking-tight">fillette@ifsapanama.com</span>
              </a>
              <div className="flex items-start gap-4 text-white group">
                <MapPin className="h-5 w-5 text-white mt-1" />
                <span className="text-base font-black uppercase tracking-tight">Panamá Pacifico - Veracruz</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div 
              className="bg-[#333333] rounded-[2.5rem] border border-white/10 p-10 min-h-[400px] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 75% 0, 76% 10px, 100% 10px, 100% 100%, 0 100%)' }}
            >
              <div className="relative z-10">
                <h4 className="font-heading font-black uppercase tracking-tight text-xl text-white/40 mb-8 flex items-center gap-3">
                  Enlaces Rápidos
                  <ArrowDownLeft className="h-6 w-6" />
                </h4>
                <nav className="flex flex-col gap-5">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white hover:text-[#FF9B26] transition-colors text-sm font-black uppercase tracking-widest"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div 
              className="bg-[#333333] rounded-[2.5rem] border border-white/10 p-10 min-h-[400px] relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 75% 0, 76% 10px, 100% 10px, 100% 100%, 0 100%)' }}
            >
              <div className="relative z-10">
                <h4 className="font-heading font-black uppercase tracking-tight text-xl text-white/40 mb-8 flex items-center gap-3">
                  Servicios Core
                  <ArrowDownLeft className="h-6 w-6" />
                </h4>
                <nav className="flex flex-col gap-5">
                  {[
                    "Diseños de Ingeniería",
                    "Obra Civil General",
                    "Infraestructura Sanitaria",
                    "Obras Viales",
                    "Estructuras y Cimentaciones",
                    "Mantenimientos Locativos"
                  ].map((service) => (
                    <span key={service} className="text-white hover:text-[#FF9B26] transition-colors text-sm font-black uppercase tracking-widest cursor-default">
                      {service}
                    </span>
                  ))}
                </nav>
              </div>
            </div>
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
