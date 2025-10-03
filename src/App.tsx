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

// New Service Pages
import PropertyManagement from "./pages/services/PropertyManagement";
import AdvisorySiteSelection from "./pages/services/AdvisorySiteSelection";
import InvestmentSales from "./pages/services/InvestmentSales";
import LandlordRepresentation from "./pages/services/LandlordRepresentation";
import TenantRepresentation from "./pages/services/TenantRepresentation";
import Acquisitions from "./pages/services/Acquisitions";
import Development from "./pages/services/Development";
import Consulting from "./pages/services/Consulting";

// New Asset Type Pages
import MultifamilyAssetType from "./pages/assetTypes/Multifamily";
import HudAffordable from "./pages/assetTypes/HudAffordable";
import OfficeAssetType from "./pages/assetTypes/Office";
import RetailAssetType from "./pages/assetTypes/Retail";
import IndustrialAssetType from "./pages/assetTypes/Industrial";
import SeniorHousingAssetType from "./pages/assetTypes/SeniorHousing";

// New Technology Pages
import AiPlatforms from "./pages/technology/AiPlatforms";
import AdvisoryAnalytics from "./pages/technology/AdvisoryAnalytics";
import CustomSolutions from "./pages/technology/CustomSolutions";

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
            
            {/* Services Routes */}
            <Route path="/services/property-management" element={<PropertyManagement />} />
            <Route path="/services/advisory-site-selection" element={<AdvisorySiteSelection />} />
            <Route path="/services/investment-sales" element={<InvestmentSales />} />
            <Route path="/services/landlord-representation" element={<LandlordRepresentation />} />
            <Route path="/services/tenant-representation" element={<TenantRepresentation />} />
            <Route path="/services/acquisitions" element={<Acquisitions />} />
            <Route path="/services/development" element={<Development />} />
            <Route path="/services/consulting" element={<Consulting />} />
            
            {/* Asset Types Routes */}
            <Route path="/asset-types" element={<Services />} />
            <Route path="/asset-types/multifamily" element={<MultifamilyAssetType />} />
            <Route path="/asset-types/hud-affordable" element={<HudAffordable />} />
            <Route path="/asset-types/office" element={<OfficeAssetType />} />
            <Route path="/asset-types/retail" element={<RetailAssetType />} />
            <Route path="/asset-types/industrial" element={<IndustrialAssetType />} />
            <Route path="/asset-types/senior-housing" element={<SeniorHousingAssetType />} />
            
            {/* Technology Routes */}
            <Route path="/technology/ai-platforms" element={<AiPlatforms />} />
            <Route path="/technology/advisory-analytics" element={<AdvisoryAnalytics />} />
            <Route path="/technology/custom-solutions" element={<CustomSolutions />} />
            
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
