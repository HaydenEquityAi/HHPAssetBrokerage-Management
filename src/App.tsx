import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { usePageTracking, useScrollTracking, useTimeOnPageTracking } from "./hooks/useAnalytics";
import Home from "./pages/Home";
import Brokerage from "./pages/Brokerage";
import BrokerageTenantRep from "./pages/BrokerageTenantRep";
import BrokerageLandlordRep from "./pages/BrokerageLandlordRep";
import BrokerageInvestmentSales from "./pages/BrokerageInvestmentSales";
import BrokerageSiteSelection from "./pages/BrokerageSiteSelection";
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

// Component to handle analytics tracking
const AnalyticsTracker = () => {
  usePageTracking();
  useScrollTracking();
  useTimeOnPageTracking();
  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Asset Management Routes */}
            <Route path="/asset-management" element={<Services />} />
            <Route path="/asset-management/multifamily" element={<ManagementMultifamily />} />
            <Route path="/asset-management/hud" element={<ManagementHUD />} />
            <Route path="/asset-management/senior" element={<ManagementSenior />} />
            <Route path="/asset-management/office" element={<ManagementCommercial />} />
            <Route path="/asset-management/retail" element={<ManagementRetail />} />
            <Route path="/asset-management/industrial" element={<ManagementIndustrial />} />
            
            {/* Brokerage Routes */}
            <Route path="/brokerage" element={<Brokerage />} />
            <Route path="/brokerage/tenant-rep" element={<BrokerageTenantRep />} />
            <Route path="/brokerage/landlord-rep" element={<BrokerageLandlordRep />} />
            <Route path="/brokerage/investment-sales" element={<BrokerageInvestmentSales />} />
            <Route path="/brokerage/site-selection" element={<BrokerageSiteSelection />} />
            
            {/* Other Routes */}
            <Route path="/technology" element={<Technology />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resident-login" element={<NotFound />} />
            <Route path="/owner-login" element={<NotFound />} />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/management" element={<Services />} />
            <Route path="/management/multifamily" element={<ManagementMultifamily />} />
            <Route path="/management/hud" element={<ManagementHUD />} />
            <Route path="/management/office" element={<ManagementCommercial />} />
            <Route path="/management/retail" element={<ManagementRetail />} />
            <Route path="/management/industrial" element={<ManagementIndustrial />} />
            <Route path="/management/senior" element={<ManagementSenior />} />
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
  </ErrorBoundary>
);

export default App;
