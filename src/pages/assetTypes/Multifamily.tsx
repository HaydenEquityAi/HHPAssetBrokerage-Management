import AssetTypePage from '@/components/AssetTypePage';
import { BarChart3, Users, Zap, DollarSign } from 'lucide-react';

const Multifamily = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/multifamily-hero.jpg"
      title="Multifamily"
      tagline="Enhancing value across stabilized, lease-up, and mixed-use communities"
      
      // Market Context
      marketContextImage="/images/multifamily-market.jpg"
      marketText="The multifamily sector continues to be a cornerstone of the U.S. real estate market, with urbanization trends, housing affordability challenges, and demographic shifts driving sustained demand. Rental markets are experiencing structural changes as millennials and Gen Z prioritize flexibility and urban amenities."
      valueProposition="HHP combines institutional-grade operations with resident-focused technology to drive NOI growth, reduce turnover, and position properties for long-term appreciation. Our RentalAi platform automates every aspect of property management while maintaining personal touchpoints that residents prioritize."
      
      // Services Context
      services={{
        propertyManagement: "Full-service management optimizing resident retention, reducing operational costs, and maximizing NOI across all multifamily asset classes.",
        advisorySiteSelection: "Strategic site analysis for multifamily development and acquisitions, leveraging market data to identify high-potential locations with strong rental fundamentals.",
        investmentSales: "Sophisticated disposition strategies for multifamily assets, utilizing market intelligence to optimize timing and pricing for maximum investor returns.",
        landlordRepresentation: "Comprehensive leasing strategies tailored to demographic shifts and amenity preferences, ensuring optimal tenant mix and rental income maximization.",
        tenantRepresentation: "Custom leasing solutions for corporate housing needs, supporting businesses with strategic relocation and temporary housing solutions.",
        acquisitionsDevelopment: "Institutional-grade underwriting for multifamily acquisitions and mixed-use developments, identifying value-add opportunities and development feasibility."
      }}
      
      // Case Studies
      caseStudies={[
        {
          image: "/images/multifamily-case1.jpg",
          title: "Downtown Apartment Complex",
          description: "Renovated a 200-unit Class B building in emerging market, optimizing unit layouts and adding modern amenities.",
          impact: "42% NOI increase within 18 months, 95% occupancy rate achieved"
        },
        {
          image: "/images/multifamily-case2.jpg",
          title: "Mixed Use Development",
          description: "Successfully marketed and leased retail space while managing residential tower, creating synergistic community environment.",
          impact: "35% premium on retail rents, 20% increase in resident retention"
        },
        {
          image: "/images/multifamily-case3.jpg",
          title: "Lease-Up Specialists",
          description: "Managed rapid lease-up of 300-unit luxury community, executing targeted marketing and streamlined application processes.",
          impact: "2.5x faster lease-up than market average, 98% occupancy within 8 months"
        }
      ]}
      
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
          description: "IoT-enabled building systems for energy efficiency, predictive maintenance, and comfort optimization reducing operational costs by up to 25%."
        },
        {
          icon: <DollarSign className="h-8 w-8 text-white" />,
          title: "Dynamic Pricing Engine",
          description: "Real-time rental rate optimization based on market conditions, competitor analysis, and demand forecasting for revenue maximization."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "The Future of Multifamily: Technology Integration Trends",
          description: "Examining how smart building technologies and resident experience platforms are reshaping multifamily operations.",
          date: "December 2024"
        },
        {
          title: "Market Analysis: Secondary City Multifamily Opportunities",
          description: "Deep dive into emerging multifamily markets and investment strategies for non-coastal urban areas.",
          date: "November 2024"
        },
        {
          title: "Renewal Strategies for High-Performing Properties",
          description: "Best practices for converting short-term tenants to long-term residents while maximizing revenue growth.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/multifamily-cta.jpg"
      ctaTitle="Looking to optimize your Multifamily portfolio? Let's talk."
    />
  );
};

export default Multifamily;