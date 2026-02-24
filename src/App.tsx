import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import SocialPage from "./pages/socialPage";
import Eventos from "./pages/Eventos";
import FormularioAcampadentro from "./pages/FormularioAcampadentro";
import DepartamentoUmademats from "./pages/DepartamentoUmademats";
import FormularioCamisa from "./pages/FormularioCamisa";
import Formularioinscricao from "./pages/FormularioInscricao";


import Departamentos from "./pages/Departamentos";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/redes-sociais" element={<SocialPage />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/formulario-acampadentro" element={<FormularioAcampadentro />} />
          <Route path="/formulario-camisetas" element={<FormularioCamisa />} />

          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/departamentos/umademats" element={<DepartamentoUmademats />} />
          <Route path="/formulario-inscrição" element={<Formularioinscricao />}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;