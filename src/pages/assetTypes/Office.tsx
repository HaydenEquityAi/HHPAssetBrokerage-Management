import AssetTypePage from '@/components/AssetTypePage';
import { Building, TrendingUp, Users, Zap } from 'lucide-react';

const Office = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/multifamily-hero.jpg"
      title="Office"
      tagline="Positioning workplaces for tenant experience and long-term resilience"
      
      // Market Context
      marketContextImage="/images/office-market.jpg"
      marketText="Office markets are undergoing fundamental transformation as hybrid work models reshape space utilization and tenant expectations. Success requires adaptive strategies that balance flexible workspaces, technology integration, and tenant retention in evolving market conditions."
      valueProposition="HHP leverages technology and market intelligence to optimize office operations, enhance tenant satisfaction, and position properties for long-term resilience. Our approach combines flexible space planning, proactive tenant relationships, and data-driven market positioning."
      
      // Services Context
      services={{
        propertyManagement: "Adaptive office management focusing on tenant retention, flexible space utilization, and operational efficiency to maximize value in changing market conditions.",
        advisorySiteSelection: "Strategic location analysis for office tenants and owners, identifying markets with strong workforce growth and tenant demand fundamentals.",
        investmentSales: "Market-timing expertise for office dispositions, leveraging market intelligence to optimize sale timing and pricing strategies.",
        landlordRepresentation: "Forward-thinking leasing strategies accommodating hybrid work models, flexible space requirements, and evolving tenant needs.",
        tenantRepresentation: "Comprehensive office consulting for companies navigating workspace decisions, supporting strategic space planning and relocation services.",
        acquisitionsDevelopment: "Astute underwriting for office acquisitions and repositioning projects, incorporating technology upgrades and tenant amenity improvements."
      }}
      
      // Case Studies
      caseStudies={[
        {
          image: "/images/office-case1.jpg",
          title: "Class A Repositioning",
          description: "Transformed aging Class B office building into premium workspace through strategic renovations and technology upgrades.",
          impact: "45% rent premium achieved, 98% occupancy maintained throughout transition"
        },
        {
          image: "/images/office-case2.jpg",
          title: "Flexible Workspace Innovation",
          description: "Redesigned office floors to accommodate hybrid work models, creating flexible meeting spaces and collaborative areas.",
          impact: "30% increase in tenant satisfaction, 25% improvement in space utilization"
        },
        {
          image: "/images/office-case3.jpg",
          title: "Technology Integration",
          description: "Implemented smart building systems and tenant apps for a 200,000 sq ft office property, enhancing operational efficiency.",
          impact: "22% reduction in operational costs, 90% tenant adoption of building technology"
        }
      ]}
      
      // Technology Advantages
      technologyAdvantages={[
        {
          icon: <Building className="h-8 w-8 text-white" />,
          title: "Smart Building Management",
          description: "IoT-enabled building systems for energy efficiency, space optimization, and predictive maintenance reducing operating costs."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-white" />,
          title: "Market Intelligence Platform",
          description: "Real-time market data and competitor analysis for strategic positioning, lease negotiations, and market timing decisions."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Tenant Experience Technology",
          description: "Integrated tenant apps for amenities, parking, visitor management, and services enhancing satisfaction and retention."
        },
        {
          icon: <Zap className="h-8 w-8 text-white" />,
          title: "Flexible Space Analytics",
          description: "Data-driven insights on space utilization patterns enabling optimal floor plan design and hybrid work solutions."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "The Future of Office: Hybrid Work Implications",
          description: "Analysis of hybrid work trends and their impact on office space design, utilization, and leasing strategies.",
          date: "December 2024"
        },
        {
          title: "Technology Integration in Modern Office Buildings",
          description: "How smart building technologies are reshaping tenant expectations and operational efficiency in office properties.",
          date: "November 2024"
        },
        {
          title: "Office Market Recovery: Secondary Markets Lead",
          description: "Emerging patterns in office market recovery with secondary markets showing strongest tenant demand growth.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/office-cta.jpg"
      ctaTitle="Looking to optimize your Office portfolio? Let's talk."
    />
  );
};

export default Office;