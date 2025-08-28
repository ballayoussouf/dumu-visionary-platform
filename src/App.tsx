import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import SeoSchema from "./components/layout/SeoSchema";
import Index from "./pages/Index";
import CGV from "./pages/CGV";
import Privacy from "./pages/Privacy";
import FastComPro from "./pages/FastComPro";
import Pricing from "./pages/Pricing";
import DuluBeta from "./pages/DuluBeta";
import PhotodropBeta from "./pages/PhotodropBeta";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <SeoSchema />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/fastcom-pro" element={<FastComPro />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dulu-beta" element={<DuluBeta />} />
          <Route path="/photodrop-beta" element={<PhotodropBeta />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;