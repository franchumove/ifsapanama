import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" data-testid="layout-container">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20" data-testid="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
