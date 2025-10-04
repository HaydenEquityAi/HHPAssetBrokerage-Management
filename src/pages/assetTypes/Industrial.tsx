import AssetTypePage from '@/components/AssetTypePage';
import { Warehouse, Truck, BarChart3, Zap } from 'lucide-react';

const Industrial = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/industrial-hero.png"
      title="Industrial"
      tagline="Optimizing logistics, last-mile, and manufacturing real estate performance"
      
      // Market Context
      marketContextImage="/images/industrial-market.jpg"
      marketText="Industrial real estate benefits from e-commerce growth, supply chain optimization, and manufacturing reshoring trends. Modern industrial properties require sophisticated logistics planning, technology integration, and tenant-focused operations to capitalize on market opportunities."
      valueProposition="HHP delivers operational excellence in industrial real estate through predictive maintenance, logistics optimization, and tenant partnership strategies. Our technology platforms enhance building efficiency while supporting tenant operations for mutual success and long-term value creation."
      
      // Services Context
      services={{
        propertyManagement: "Comprehensive industrial asset management emphasizing operational efficiency, tenant operational support, and strategic capital improvements for competitive advantage.",
        advisorySiteSelection: "Strategic site analysis for industrial users incorporating logistics optimization, workforce access, and supply chain connectivity for operational success.",
        investmentSales: "Industrial disposition strategies leveraging location advantages, tenant credit quality, and development potential to optimize investment returns.",
        landlordRepresentation: "Industrial leasing focused on operational efficiency, lease structures supporting tenant growth, and facilities matching tenant operational requirements.",
        tenantRepresentation: "Strategic industrial consulting for businesses seeking optimal logistics facilities, distribution centers, and manufacturing locations.",
        acquisitionsDevelopment: "Industrial investment analysis incorporating tenant credit, operational efficiency, and repositioning potential for value creation opportunities."
      }}
      
      
      // Technology Advantages
      technologyAdvantages={[
        {
          icon: <Warehouse className="h-8 w-8 text-white" />,
          title: "Smart Warehouse Management",
          description: "IoT-enabled building systems for energy optimization, predictive maintenance, and tenant operational support."
        },
        {
          icon: <Truck className="h-8 w-8 text-white" />,
          title: "Logistics Intelligence",
          description: "Data analytics for traffic patterns, delivery optimization, and tenant logistics efficiency improvements."
        },
        {
          icon: <BarChart3 className="h-8 w-8 text-white" />,
          title: "Tenant Performance Analytics",
          description: "Comprehensive operational metrics and benchmarking to support tenant success and optimize facility utilization."
        },
        {
          icon: <Zap className="h-8 w-8 text-white" />,
          title: "Predictive Maintenance",
          description: "Advanced maintenance scheduling and equipment monitoring to minimize downtime and optimize operational efficiency."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "E-commerce Transformation: Industrial Real Estate Impact",
          description: "How changing consumer shopping habits are reshaping industrial property requirements and tenant needs.",
          date: "December 2024"
        },
        {
          title: "Supply Chain Optimization Strategies",
          description: "Best practices for optimizing industrial properties to support efficient supply chain operations and tenant success.",
          date: "November 2024"
        },
        {
          title: "Technology Integration in Modern Warehouses",
          description: "Case studies of smart building technologies improving efficiency and tenant satisfaction in industrial properties.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/industrial-cta.jpg"
      ctaTitle="Looking to optimize your Industrial portfolio? Let's talk."
    />
  );
};

export default Industrial;