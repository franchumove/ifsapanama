import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Proyectos from "@/pages/Proyectos";
import ProyectoDetalle from "@/pages/ProyectoDetalle";
import Servicios from "@/pages/Servicios";
import Capacidades from "@/pages/Capacidades";
import CalidadSeguridad from "@/pages/CalidadSeguridad";
import Nosotros from "@/pages/Nosotros";
import Contacto from "@/pages/Contacto";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/proyectos/:slug" component={ProyectoDetalle} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/capacidades" component={Capacidades} />
      <Route path="/calidad-seguridad" component={CalidadSeguridad} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/contacto" component={Contacto} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
