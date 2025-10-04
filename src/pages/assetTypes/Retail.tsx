import AssetTypePage from '@/components/AssetTypePage';
import { ShoppingBag, TrendingUp, Users, MapPin } from 'lucide-react';

const Retail = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/retail-hero.png"
      title="Retail"
      tagline="Driving traffic and value through tailored merchandising and leasing strategies"
      
      // Market Context
      marketContextImage="/images/retail-market.jpg"
      marketText="Retail real estate continues evolving as omnichannel strategies reshape tenant needs and consumer behavior. Successful retail centers balance physical spaces with digital integration, creating experiential environments that drive foot traffic and tenant profitability."
      valueProposition="HHP delivers strategic retail management combining demographic analysis, traffic patterns, and tenant mix optimization. Our data-driven approach identifies high-performing retail concepts, optimizes merchandising strategies, and creates compelling shopping environments that benefit tenants and owners."
      
      // Services Context
      services={{
        propertyManagement: "Strategic retail management focused on tenant success, traffic generation, and center-wide merchandising strategies to maximize property performance.",
        advisorySiteSelection: "Comprehensive retail site analysis incorporating demographics, traffic patterns, and competition to identify optimal locations for retail concepts.",
        investmentSales: "Expert retail disposition strategies utilizing market positioning, tenant health analysis, and demographic trends to optimize sale outcomes.",
        landlordRepresentation: "Strategic leasing with focus on optimal tenant mix, complementary merchandising, and long-term tenant success in evolving retail landscape.",
        tenantRepresentation: "Strategic retail consulting for brands and businesses seeking optimal locations, supporting site selection and lease negotiations.",
        acquisitionsDevelopment: "Sophisticated retail underwriting including traffic analysis, tenant demand modeling, and repositioning opportunities for value creation."
      }}
      
      // Case Studies
      caseStudies={[
        {
          image: "/images/retail-case1.jpg",
          title: "Shopping Center Repositioning",
          description: "Transformed struggling neighborhood shopping center through strategic tenant mix changes and exterior improvements.",
          impact: "60% increase in foot traffic, 40% improvement in sales per square foot"
        },
        {
          image: "/images/retail-case2.jpg",
          title: "Food Hall Innovation",
          description: "Developed successful food hall concept in downtown mixed-use property, curating complementary food vendors.",
          impact: "Triple-digit sales growth for food vendors, 85% occupancy rate achieved"
        },
        {
          image: "/images/retail-case3.jpg",
          title: "Strip Center Optimization",
          description: "Optimized tenant mix and merchandising for suburban strip center, improving overall center performance.",
          impact: "35% increase in average lease rates, 20% improvement in tenant retention"
        }
      ]}
      
      // Technology Advantages
      technologyAdvantages={[
        {
          icon: <ShoppingBag className="h-8 w-8 text-white" />,
          title: "Traffic Analytics Platform",
          description: "Advanced foot traffic analysis and customer demographics to optimize tenant mix and merchandising strategies."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-white" />,
          title: "Sales Performance Tracking",
          description: "Real-time tenant sales analysis and benchmarking data to identify optimization opportunities and ensure tenant success."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Customer Experience Insights",
          description: "Data-driven insights on shopper behavior and preferences to enhance tenant mix and create compelling shopping environments."
        },
        {
          icon: <MapPin className="h-8 w-8 text-white" />,
          title: "Market Positioning Intelligence",
          description: "Comprehensive market analysis tools for competitive positioning, catchment area analysis, and strategic tenant selection."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "Retail Recovery Patterns: What's Working",
          description: "Analysis of successful retail strategies post-pandemic, focusing on experiential retail and omnichannel integration.",
          date: "December 2024"
        },
        {
          title: "Food & Beverage: Retail's Growth Engine",
          description: "How food halls, entertainment concepts, and experiential dining are driving foot traffic in retail centers.",
          date: "November 2024"
        },
        {
          title: "Demographics Driving Retail Success",
          description: "Understanding changing consumer preferences and their impact on retail tenant mix and center design.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/retail-cta.jpg"
      ctaTitle="Looking to optimize your Retail portfolio? Let's talk."
    />
  );
};

export default Retail;