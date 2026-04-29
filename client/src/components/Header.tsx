import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-background border-b border-border"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col gap-0" data-testid="link-home-logo">
            <span className="text-foreground font-heading font-black text-2xl tracking-tighter leading-none">Ifsa</span>
            <span className="text-foreground/60 font-heading font-medium text-xs tracking-[0.2em] uppercase leading-none ml-0.5">Panamá</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                  location === link.href
                    ? "text-white underline underline-offset-8"
                    : "text-foreground/60 hover:text-foreground"
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
                className="font-semibold"
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
                className="text-foreground hover:bg-foreground/10"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-background border-l border-border p-0"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex flex-col gap-0 mb-8">
                  <span className="text-foreground font-heading font-black text-2xl tracking-tighter leading-none">Ifsa</span>
                  <span className="text-foreground/60 font-heading font-medium text-xs tracking-[0.2em] uppercase leading-none ml-0.5">Panamá</span>
                </div>
                <nav className="flex flex-col gap-2" data-testid="nav-mobile">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors border border-transparent ${
                        location === link.href
                        ? "text-foreground bg-foreground/10 border-border"
                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
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
