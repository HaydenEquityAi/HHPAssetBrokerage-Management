import AssetTypePage from '@/components/AssetTypePage';
import { Warehouse, Truck, BarChart3, Zap } from 'lucide-react';

const Industrial = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/industrial-image.webp"
      title="Industrial"
      tagline="Optimizing logistics, last-mile, and manufacturing real estate performance"
      
      // Market Context
      marketText="Industrial real estate supports critical tenant operations where reliability, access, and efficiency are essential. Owners must maintain building systems, site infrastructure, and lease compliance while managing operating costs and long-term capital needs. Industrial assets perform best when operations are predictable, facilities are well maintained, and communication with tenants is clear and responsive. Operational disruptions directly impact tenant businesses, making disciplined management a core driver of retention and asset value."
      valueProposition="HHP provides operator-led property management and advisory services for industrial assets, focused on operational reliability, cost discipline, and long-term ownership performance. Our approach emphasizes: Facility uptime and operational continuity; Preventive maintenance and infrastructure oversight; Tenant coordination and responsiveness; Expense control and transparent reporting. We manage industrial properties with a long-term ownership mindset, aligning daily operations with tenant requirements, lease structures, and asset strategy."
      valuePropositionTitle="HHP's Approach to Industrial"
      
      // Services Context
      services={{
        propertyManagement: {
          description: "Comprehensive industrial property management focused on reliability, efficiency, and tenant support.",
          services: [
            "Day-to-day property operations and oversight",
            "Tenant communication and service coordination",
            "Vendor management and service quality oversight",
            "Preventive maintenance and infrastructure monitoring",
            "Financial management, budgeting, and reporting"
          ]
        },
        advisorySiteSelection: {
          description: "Strategic advisory services supporting acquisition, development, and long-term ownership decisions for industrial assets.",
          services: [
            "Market and location analysis",
            "Operational due diligence and asset reviews",
            "Transition planning for new ownership or management",
            "Asset strategy and long-term planning support"
          ]
        },
        investmentSales: {
          description: "Advisory support for ownership transitions, recapitalizations, and strategic portfolio decisions involving industrial properties.",
          services: [
            "Valuation and underwriting support",
            "Stakeholder coordination and transaction execution support",
            "Operational transition planning",
            "Post-transaction management integration"
          ]
        },
        landlordRepresentation: {
          description: "Operational coordination supporting lease compliance and tenant stability.",
          services: [
            "Coordination with leasing teams",
            "Tenant onboarding and move-in coordination",
            "Lease compliance oversight",
            "Support for renewals and tenant retention"
          ]
        },
        tenantRepresentation: {
          description: "Clear communication and responsiveness supporting tenant operations and stakeholder confidence.",
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
            "Operational setup for new or repositioned facilities",
            "Stabilization planning and ongoing management integration"
          ]
        }
      }}
      serviceTitles={{
        investmentSales: "Transaction Advisory",
        landlordRepresentation: "Leasing & Occupancy Coordination",
        tenantRepresentation: "Tenant & Stakeholder Relations"
      }}
      servicesTitle="Integrated Services for Industrial"
      showAboutUs={true}
      
      
      // Technology Advantages / HHP Advantage
      technologyAdvantages={[
        {
          icon: <Warehouse className="h-8 w-8 text-white" />,
          title: "Reliability-First Operations",
          description: "Operational execution designed to support tenant uptime, access, and uninterrupted business activity."
        },
        {
          icon: <Truck className="h-8 w-8 text-white" />,
          title: "Facility & Infrastructure Oversight",
          description: "Disciplined management of building systems, site infrastructure, and preventive maintenance."
        },
        {
          icon: <BarChart3 className="h-8 w-8 text-white" />,
          title: "Cost & Vendor Discipline",
          description: "Structured oversight of operating expenses, service contracts, and vendor performance."
        },
        {
          icon: <Zap className="h-8 w-8 text-white" />,
          title: "Tenant Coordination",
          description: "Clear, responsive communication supporting tenant needs and lease compliance."
        },
        {
          icon: <Warehouse className="h-8 w-8 text-white" />,
          title: "Owner Transparency",
          description: "Straightforward reporting, accountability, and communication aligned with institutional ownership standards."
        }
      ]}
      technologyTitle="The HHP Advantage for Industrial"
      useModernLayout={true}
      
      // Insights
      insights={[
        {
          title: "Industrial Operations & Tenant Retention",
          description: "Perspectives on facility reliability, tenant coordination, and operational best practices.",
          date: "December 2024"
        },
        {
          title: "Cost Management in Industrial Assets",
          description: "Insights into expense control, maintenance planning, and vendor oversight.",
          date: "November 2024"
        },
        {
          title: "Long-Term Industrial Ownership",
          description: "Guidance on capital planning, operational efficiency, and asset performance.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section - Removed
    />
  );
};

export default Industrial;