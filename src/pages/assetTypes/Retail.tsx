import AssetTypePage from '@/components/AssetTypePage';
import { ShoppingBag, TrendingUp, Users, MapPin } from 'lucide-react';

const Retail = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/retail-image.jpg"
      title="Retail"
      tagline="Driving traffic and value through tailored merchandising and leasing strategies"
      
      // Market Context
      marketText="Retail real estate operates at the intersection of tenant performance, customer experience, and local market dynamics. Owners must balance tenant mix, foot traffic, operating costs, and lease compliance while maintaining attractive, well-functioning environments that support tenant success. Successful retail centers depend on disciplined operations, consistent common area management, and coordination between property management, leasing strategy, and ownership objectives."
      valueProposition="HHP provides operator-led property management and advisory services for retail assets, focused on operational execution, tenant alignment, and long-term center performance. Our approach emphasizes: Tenant mix support and operational coordination; Common area quality and customer experience; Expense discipline and vendor oversight; Transparent reporting and owner communication. We manage retail properties with a long-term ownership mindset, aligning daily operations with center positioning, leasing strategy, and capital objectives."
      valuePropositionTitle="HHP's Approach to Retail"
      
      // Services Context
      services={{
        propertyManagement: {
          description: "Comprehensive retail property management focused on operational consistency and tenant support.",
          services: [
            "Day-to-day center operations and oversight",
            "Tenant relations and service request coordination",
            "Vendor management and service quality oversight",
            "Preventive maintenance and common area management",
            "Financial management, budgeting, and reporting"
          ]
        },
        advisorySiteSelection: {
          description: "Strategic advisory services supporting acquisition, repositioning, and long-term ownership decisions for retail assets.",
          services: [
            "Market and trade-area analysis",
            "Operational due diligence and asset reviews",
            "Transition planning for new ownership or management",
            "Asset strategy development and repositioning support"
          ]
        },
        investmentSales: {
          description: "Advisory support for ownership transitions, recapitalizations, and strategic portfolio decisions involving retail properties.",
          services: [
            "Valuation and underwriting support",
            "Stakeholder coordination and transaction execution support",
            "Operational transition planning",
            "Post-transaction management integration"
          ]
        },
        landlordRepresentation: {
          description: "Operational coordination supporting leasing execution, tenant stability, and center performance.",
          services: [
            "Coordination between leasing teams and property operations",
            "Tenant onboarding and store opening coordination",
            "Lease compliance oversight",
            "Support for renewals and tenant retention"
          ]
        },
        tenantRepresentation: {
          description: "Structured communication and responsiveness supporting tenant success and stakeholder confidence.",
          services: [
            "Tenant communication and issue resolution",
            "Coordination with service providers and contractors",
            "Stakeholder reporting and operational updates"
          ]
        },
        acquisitionsDevelopment: {
          description: "Support across acquisition, redevelopment, and development phases with a focus on operational readiness and continuity.",
          services: [
            "Acquisition underwriting and operational review",
            "Development and redevelopment advisory",
            "Operational setup for new or repositioned centers",
            "Stabilization planning and ongoing management integration"
          ]
        }
      }}
      serviceTitles={{
        investmentSales: "Transaction Advisory",
        landlordRepresentation: "Leasing & Occupancy Coordination",
        tenantRepresentation: "Tenant & Stakeholder Relations"
      }}
      servicesTitle="Integrated Services for Retail"
      showAboutUs={true}
      
      // Technology Advantages / HHP Advantage
      technologyAdvantages={[
        {
          icon: <ShoppingBag className="h-8 w-8 text-white" />,
          title: "Operational Alignment with Tenant Performance",
          description: "Operations designed to support tenant success, customer experience, and center vitality."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-white" />,
          title: "Common Area & Experience Management",
          description: "Consistent oversight of common areas, shared services, and center presentation."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Expense & Vendor Discipline",
          description: "Structured management of operating expenses, service contracts, and vendor performance."
        },
        {
          icon: <MapPin className="h-8 w-8 text-white" />,
          title: "Leasing & Operations Coordination",
          description: "Close coordination between leasing strategy and day-to-day operations."
        },
        {
          icon: <ShoppingBag className="h-8 w-8 text-white" />,
          title: "Owner Transparency",
          description: "Clear reporting, defined accountability, and proactive communication aligned with institutional ownership standards."
        }
      ]}
      technologyTitle="The HHP Advantage for Retail"
      useModernLayout={true}
      
      // Insights
      insights={[
        {
          title: "Retail Operations & Tenant Retention",
          description: "Perspectives on center operations, tenant coordination, and customer experience.",
          date: "December 2024"
        },
        {
          title: "Trade Area & Center Positioning",
          description: "Insights into market dynamics, tenant mix, and operational alignment.",
          date: "November 2024"
        },
        {
          title: "Long-Term Retail Ownership",
          description: "Guidance on cost control, capital planning, and sustained center performance.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section - Removed
    />
  );
};

export default Retail;