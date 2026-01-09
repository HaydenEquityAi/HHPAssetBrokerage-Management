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
        heroImage="/images/multifamily-image-header.jpg"
        title="Multifamily"
        tagline="Enhancing value across stabilized, lease-up, and mixed-use communities"
        
        // Market Context
        marketText="The multifamily sector remains a cornerstone of U.S. real estate, driven by urbanization, housing affordability challenges, and demographic shifts. As millennials and Gen Z prioritize flexibility and urban amenities, professional management and strategic positioning are critical for success."
        valueProposition="HHP combines institutional-grade operations with resident-focused technology to drive NOI growth and reduce turnover. Our RentalAi platform delivers 22% reduction in delinquency rates, 8% NOI growth, and 95% tenant satisfaction."
        
        // Services Context
        services={{
          propertyManagement: "Full-service management optimizing resident retention, reducing operational costs, and maximizing NOI across all multifamily asset classes from luxury high-rises to value-add opportunities.",
          advisorySiteSelection: "Strategic site analysis for multifamily development and acquisitions, leveraging market data to identify high-potential locations with strong rental fundamentals.",
          investmentSales: "Sophisticated disposition strategies for multifamily assets, utilizing market intelligence to optimize timing and pricing for maximum investor returns.",
          landlordRepresentation: "Comprehensive leasing strategies tailored to demographic shifts and amenity preferences, ensuring optimal tenant mix and rental income maximization.",
          tenantRepresentation: "Custom corporate housing solutions for businesses with strategic relocation and temporary housing needs.",
          acquisitionsDevelopment: "Institutional-grade underwriting for multifamily acquisitions and mixed-use developments, identifying value-add opportunities and development feasibility."
        }}
        
       
        
        // Technology Advantages
        technologyAdvantages={[
          {
            icon: <BarChart3 className="h-8 w-8 text-white" />,
            title: "Predictive Analytics",
            description: "AI-powered forecasting for demand patterns, maintenance schedules, and rent optimization to maximize portfolio performance."
          },
          {
            icon: <Users className="h-8 w-8 text-white" />,
            title: "Resident Experience Platform",
            description: "Integrated resident portal with maintenance requests, amenity bookings, and community features to enhance satisfaction and retention."
          },
          {
            icon: <Zap className="h-8 w-8 text-white" />,
            title: "Smart Building Management",
            description: "IoT-enabled building systems for energy efficiency and predictive maintenance, reducing operational costs by up to 25%."
          },
          {
            icon: <DollarSign className="h-8 w-8 text-white" />,
            title: "Dynamic Pricing Engine",
            description: "Real-time rental rate optimization based on market conditions, competitor analysis, and demand forecasting."
          }
        ]}
        
        // Insights
        insights={[
          {
            title: "The Future of Multifamily: Technology Integration Trends",
            description: "How smart building technologies and resident platforms are reshaping operations.",
            date: "December 2024"
          },
          {
            title: "Market Analysis: Secondary City Multifamily Opportunities",
            description: "Deep dive into emerging multifamily markets and investment strategies.",
            date: "November 2024"
          },
          {
            title: "Renewal Strategies for High-Performing Properties",
            description: "Best practices for converting short-term tenants to long-term residents.",
            date: "October 2024"
          }
        ]}
        
        // CTA Section
        ctaImage="/images/multifamily-cta.jpg"
        ctaTitle="Looking to optimize your Multifamily portfolio? Let's talk."
      />
    </>
  );
};

export default Multifamily;