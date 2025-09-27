import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Brokerage from "./pages/Brokerage";
import Services from "./pages/Services";
import ManagementMultifamily from "./pages/ManagementMultifamily";
import ManagementHUD from "./pages/ManagementHUD";
import ManagementCommercial from "./pages/ManagementCommercial";
import ManagementRetail from "./pages/ManagementRetail";
import ManagementIndustrial from "./pages/ManagementIndustrial";
import ManagementSenior from "./pages/ManagementSenior";
import Technology from "./pages/Technology";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brokerage" element={<Brokerage />} />
          <Route path="/brokerage/investment-sales" element={<Brokerage />} />
          <Route path="/brokerage/leasing" element={<Brokerage />} />
          <Route path="/brokerage/capital-markets" element={<Brokerage />} />
          <Route path="/brokerage/valuations" element={<Brokerage />} />
          <Route path="/management" element={<Services />} />
          <Route path="/management/multifamily" element={<ManagementMultifamily />} />
          <Route path="/management/hud" element={<ManagementHUD />} />
          <Route path="/management/office" element={<ManagementCommercial />} />
          <Route path="/management/retail" element={<ManagementRetail />} />
          <Route path="/management/industrial" element={<ManagementIndustrial />} />
          <Route path="/management/senior" element={<ManagementSenior />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy routes for backward compatibility */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/multifamily" element={<Services />} />
          <Route path="/services/hud-housing" element={<Services />} />
          <Route path="/services/residential" element={<Services />} />
          <Route path="/services/commercial" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
