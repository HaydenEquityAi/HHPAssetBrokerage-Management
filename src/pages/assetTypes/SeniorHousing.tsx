import AssetTypePage from '@/components/AssetTypePage';
import { Heart, Shield, Users, Calendar } from 'lucide-react';

const SeniorHousing = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/senior-hero.png"
      title="Senior Housing"
      tagline="Delivering operational stability and resident-focused care solutions"
      
      // Market Context
      marketContextImage="/images/senior-market.jpg"
      marketText="Senior housing markets benefit from demographic tailwinds as baby boomers enter retirement age, creating sustained demand for quality senior living options. Success requires specialized expertise in healthcare regulations, resident care protocols, and operational excellence."
      valueProposition="HHP delivers specialized senior housing management combining healthcare expertise with hospitality-focused service excellence. Our ResidentAi platform supports resident care coordination while maintaining operational efficiency and regulatory compliance across independent living, assisted living, and memory care communities."
      
      // Services Context
      services={{
        propertyManagement: "Specialized senior housing management ensuring excellence in resident care, regulatory compliance, and operational efficiency across all care levels.",
        advisorySiteSelection: "Strategic guidance for senior housing development and acquisitions, incorporating healthcare access, demographics, and regulatory considerations.",
        investmentSales: "Expert disposition strategies for senior housing portfolios, understanding unique buyer base and operational complexity considerations.",
        landlordRepresentation: "Specialized leasing for senior housing communities, ensuring optimal resident mix and maintaining care level balances.",
        tenantRepresentation: "Representation for families seeking senior living solutions, guiding selection and transition processes.",
        acquisitionsDevelopment: "Sophisticated underwriting for senior housing acquisitions and developments, incorporating care regulations and operational requirements."
      }}
      
      // Case Studies
      caseStudies={[
        {
          image: "/images/senior-case1.jpg",
          title: "Memory Care Excellence",
          description: "Implemented specialized memory care programming and resident services in 120-unit assisted living community.",
          impact: "95% resident satisfaction rating, zero deficiency survey findings for consecutive year"
        },
        {
          image: "/images/senior-case2.jpg",
          title: "Independent Living Upgrade",
          description: "Enhanced independent living community amenities and services, attracting younger active adult residents.",
          impact: "100% occupancy achieved, 25% premium on entrance fees"
        },
        {
          image: "/images/senior-case3.jpg",
          title: "Care Continuum Optimization",
          description: "Optimized care level transitions and resident services across independent living, assisted living, and memory care.",
          impact: "90% resident retention rate, 30% improvement in operational efficiency"
        }
      ]}
      
      // Technology Advantages
      technologyAdvantages={[
        {
          icon: <Heart className="h-8 w-8 text-white" />,
          title: "Resident Care Coordination",
          description: "Integrated care planning and resident health monitoring to ensure optimal outcomes and family communication."
        },
        {
          icon: <Shield className="h-8 w-8 text-white" />,
          title: "Compliance Management",
          description: "Automated tracking for healthcare regulations, survey preparation, and care documentation requirements."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Family Communication Platform",
          description: "Seamless communication tools connecting families, residents, and care teams for transparent care coordination."
        },
        {
          icon: <Calendar className="h-8 w-8 text-white" />,
          title: "Activity & Wellness Tracking",
          description: "Comprehensive resident engagement and wellness monitoring to support active and healthy lifestyles."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "Aging Population Trends: Senior Housing Demand",
          description: "Market analysis of demographic shifts and their impact on senior housing demand across different care levels.",
          date: "December 2024"
        },
        {
          title: "Technology Integration in Senior Living",
          description: "Case studies of technology adoption improving resident care and operational efficiency in senior communities.",
          date: "November 2024"
        },
        {
          title: "Care Continuum Strategies",
          description: "Best practices for optimizing resident transitions and maintaining care quality across senior housing levels.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/senior-cta.jpg"
      ctaTitle="Looking to optimize your Senior Housing portfolio? Let's talk."
    />
  );
};

export default SeniorHousing;