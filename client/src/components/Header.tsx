import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/capacidades", label: "Capacidades" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      data-testid="header"
    >
      {/* Top bar: Unified folder tab using actual asset */}
      <div 
        className="w-full flex items-start justify-between relative"
        style={{
          backgroundImage: "url('/images/header-unified-bg.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '1.5rem',
          minHeight: '90px'
        }}
      >
        {/* LOGO AREA */}
        <div className="pl-12 py-8 lg:pl-32 lg:py-9">
          <Link href="/" className="shrink-0" data-testid="link-home-logo">
            <img
              src="/images/ifsa-logo.png"
              alt="IFSA Panamá"
              className="h-12 lg:h-16 w-auto block"
              data-testid="img-logo-header"
            />
          </Link>
        </div>

        {/* NAV AREA */}
        <div className="flex flex-col items-end pr-8 lg:pr-12 pt-8 lg:pt-9">
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-4" data-testid="nav-desktop">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-black uppercase tracking-[0.2em] transition-colors ${
                    location === link.href
                      ? "text-black border-b-2 border-black"
                      : "text-black/60 hover:text-black"
                  }`}
                  data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center">
              <Link href="/contacto" data-testid="link-cta-header">
                <Button
                  className="font-black text-xs tracking-[0.2em] uppercase bg-black text-white hover:bg-black/80 px-8 py-6 rounded-none"
                  data-testid="button-cta-header"
                >
                  Solicitar visita técnica
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile menu toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 mt-4 mr-4"
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
    </header>
  );
}
