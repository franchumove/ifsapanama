import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/capacidades", label: "Capacidades" },
  { href: "/calidad-seguridad", label: "Calidad & Seguridad" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundImage: "url('/images/nav-bar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="shrink-0" data-testid="link-home-logo">
            <img
              src="/images/ifsa-logo.png"
              alt="IFSA Panamá"
              className="h-9 lg:h-10 w-auto block"
              data-testid="img-logo-header"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                  location === link.href
                    ? "text-white underline underline-offset-8"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contacto" data-testid="link-cta-header">
              <Button
                className="font-semibold text-xs tracking-widest uppercase"
                data-testid="button-cta-header"
              >
                Solicitar visita técnica
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-[#111] border-l border-white/10 p-0"
            >
              <div className="flex flex-col h-full p-8">
                <div className="mb-8">
                  <img
                    src="/images/ifsa-logo.png"
                    alt="IFSA Panamá"
                    className="h-9 w-auto block brightness-0 invert opacity-80"
                  />
                </div>
                <nav className="flex flex-col gap-2" data-testid="nav-mobile">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors border border-transparent ${
                        location === link.href
                          ? "text-white bg-white/10 border-white/10"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      data-testid={`link-mobile-${link.href.replace("/", "") || "home"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Link href="/contacto" onClick={() => setIsOpen(false)} data-testid="link-cta-mobile">
                    <Button className="w-full font-semibold" data-testid="button-cta-mobile">
                      Solicitar visita técnica
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
