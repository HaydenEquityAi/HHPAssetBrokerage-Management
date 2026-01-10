import AssetTypePage from '@/components/AssetTypePage';
import { BarChart3, Users, Zap, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Multifamily = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Multifamily Property Management & Investment Services | HHP Asset Group</title>
        <meta 
          name="description" 
          content="Expert multifamily property management, investment sales, and advisory services. Enhance value across stabilized, lease-up, and mixed-use communities." 
        />
        <meta 
          name="keywords" 
          content="multifamily property management, apartment management, multifamily investment, lease-up services, NOI optimization, RentalAi, mixed-use development" 
        />
        <meta property="og:title" content="Multifamily Property Management Services | HHP Asset Group" />
        <meta property="og:description" content="Enhancing value across stabilized, lease-up, and mixed-use communities with AI-powered property management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpassetgroup.com/services/multifamily" />
        <meta property="og:image" content="https://hhpassetgroup.com/images/multifamily-image-header.jpg" />
        <link rel="canonical" href="https://hhpassetgroup.com/services/multifamily" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multifamily Property Management Services | HHP Asset Group" />
        <meta name="twitter:description" content="Enhancing value across stabilized, lease-up, and mixed-use communities." />
        <meta name="twitter:image" content="https://hhpassetgroup.com/images/multifamily-image-header.jpg" />
      </Helmet>

      <AssetTypePage
        // Hero Section
        heroImage="/images/multifamily-image-trendy.jpg"
        title="Multifamily"
        tagline="Institutional management and advisory across stabilized, lease-up, and mixed-use communities"
        heroButtonText="Schedule a Consultation"
        
        // Market Context
        marketText="Multifamily remains one of the most durable sectors in U.S. real estate, supported by long-term housing undersupply, affordability constraints, and shifting demographic preferences. As renters prioritize flexibility, quality of service, and community experience, execution—not just location—has become the primary driver of asset performance. Owners today require disciplined operations, transparent reporting, and adaptive strategies to navigate rising operating costs, regulatory pressure, and evolving tenant expectations."
        valueProposition="HHP delivers operator-led multifamily management and advisory services grounded in institutional standards and real-world execution. We combine rigorous financial oversight with resident-centric operations and technology-enabled decision-making to improve asset performance across the full lifecycle. Our platform is designed to support owners focused on long-term value creation, capital preservation, and operational accountability."
        valuePropositionTitle="HHP's Approach to Multifamily"
        
        // Services Context
        services={{
          propertyManagement: "Full-service management focused on operational efficiency, resident retention, and NOI growth across stabilized, value-add, lease-up, and mixed-use communities.",
          advisorySiteSelection: "Market-driven analysis supporting development, acquisition, and repositioning decisions, with a focus on rental fundamentals, absorption, and long-term viability.",
          investmentSales: "Strategic disposition advisory for multifamily assets, leveraging market intelligence, pricing discipline, and targeted execution to maximize outcomes.",
          landlordRepresentation: "Leasing strategies aligned with demographic trends and amenity preferences, supporting occupancy stability and sustainable rent growth.",
          tenantRepresentation: "Customized housing solutions for employers, relocations, and short-term needs, designed to reduce vacancy friction and enhance portfolio utilization.",
          acquisitionsDevelopment: "Institutional underwriting and feasibility analysis for acquisitions and ground-up or mixed-use development, identifying value-creation opportunities and execution risk."
        }}
        servicesTitle="Integrated Services for Multifamily"
        servicesSubtitle="Comprehensive solutions aligned to ownership objectives"
        serviceTitles={{
          tenantRepresentation: "Tenant & Corporate Housing Representation"
        }}
        
        // Technology Advantages
        technologyAdvantages={[
          {
            icon: <BarChart3 className="h-8 w-8 text-white" />,
            title: "Predictive Portfolio Insights",
            description: "Forward-looking analytics to anticipate demand shifts, maintenance needs, and revenue performance."
          },
          {
            icon: <Users className="h-8 w-8 text-white" />,
            title: "Resident Experience Platform",
            description: "Unified resident portal for communication, service requests, and community engagement—designed to improve satisfaction and retention."
          },
          {
            icon: <Zap className="h-8 w-8 text-white" />,
            title: "Smart Operations & Building Systems",
            description: "Technology-supported maintenance planning and energy efficiency initiatives that reduce operating costs and improve asset reliability."
          },
          {
            icon: <DollarSign className="h-8 w-8 text-white" />,
            title: "Dynamic Revenue Optimization",
            description: "Data-informed pricing and renewal strategies aligned with market conditions and asset positioning."
          }
        ]}
        technologyTitle="Technology-Enabled Advantage"
        technologySubtitle="Purpose-built tools that support better decisions—not noise"
        
        // Insights
        insights={[
          {
            title: "The Future of Multifamily: Technology Integration Trends",
            description: "How data-driven operations are reshaping asset management.",
            date: "December 2024"
          },
          {
            title: "Secondary Market Multifamily Opportunities",
            description: "Identifying growth markets beyond primary metros.",
            date: "November 2024"
          },
          {
            title: "Renewal Strategies for Long-Term Performance",
            description: "Operational practices that support retention and income stability.",
            date: "October 2024"
          }
        ]}
        insightsTitle="Insights & Research"
        insightsSubtitle="Perspectives shaping multifamily performance"
        
        // CTA Section
        ctaImage="/images/multifamily-cta.jpg"
        ctaTitle="Looking to improve performance across your multifamily portfolio?"
      />
    </>
  );
};

export default Multifamily;