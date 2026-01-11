import AssetTypePage from '@/components/AssetTypePage';
import { Shield, FileCheck, BarChart3, Users } from 'lucide-react';

const HudAffordable = () => {
  return (
    <AssetTypePage
      // Hero Section
      heroImage="/images/affordable-housing-image.jpeg"
      title="HUD & Affordable Housing"
      tagline="Specialized compliance and operations expertise for regulated assets"
      
      // Market Context
      marketText="Affordable housing faces unprecedented demand as housing costs outpace wage growth across markets. HUD programs provide critical housing solutions while requiring specialized compliance expertise. Success in this sector demands institutional knowledge, robust systems, and resident-centered operations."
      valueProposition="HHP delivers institutional-grade compliance management with resident-first service excellence. Our specialized expertise in HUD programs, MOR preparation, and affordable housing regulations ensures seamless operations while optimizing subsidy utilization and resident outcomes."
      
      // Services Context
      services={{
        propertyManagement: "Comprehensive HUD-compliant property management ensuring seamless MOR audits, optimize subsidy performance, and maintain excellence in resident services.",
        advisorySiteSelection: "Strategic guidance for affordable housing development and acquisitions, navigating complex regulatory environments and funding requirements.",
        investmentSales: "Specialized disposition strategies for affordable housing portfolios, understanding unique buyer base and regulatory considerations.",
        landlordRepresentation: "Expert lease administration for affordable housing properties, managing rent restriction compliance and tenant certification processes.",
        tenantRepresentation: "Representation for organizations seeking affordable housing solutions, navigating waitlists and qualification processes.",
        acquisitionsDevelopment: "Institutional underwriting for affordable housing projects, incorporating subsidy structures and regulatory requirements into investment analysis."
      }}
      
      // Case Studies
      caseStudies={[
        {
          image: "/images/hud-case1.jpg",
          title: "HUD Program Excellence",
          description: "Managed transition to new HUD program requirements across 500+ units, implementing comprehensive compliance protocols.",
          impact: "Zero MOR findings for two consecutive years, 15% improvement in subsidy utilization"
        },
        {
          image: "/images/hud-case2.jpg",
          title: "New Construction Transition",
          description: "Established operations for newly constructed affordable housing community, setting up all compliance systems from day one.",
          impact: "100% occupancy within 6 months, perfect audit compliance record maintained"
        },
        {
          image: "/images/hud-case3.jpg",
          title: "Portfolio Optimization",
          description: "Optimized operations across 12 affordable housing properties, standardizing compliance processes and resident services.",
          impact: "25% reduction in administrative costs, 30% improvement in resident satisfaction scores"
        }
      ]}
      
      // Technology Advantages
      technologyAdvantages={[
        {
          icon: <Shield className="h-8 w-8 text-white" />,
          title: "Compliance Automation",
          description: "Automated tracking and reporting for all HUD requirements including tenant certifications, income verification, and subsidy calculations."
        },
        {
          icon: <FileCheck className="h-8 w-8 text-white" />,
          title: "Audit-Ready Documentation",
          description: "Digitized file management with automated compliance checks ensuring MOR preparation and seamless audit experiences."
        },
        {
          icon: <BarChart3 className="h-8 w-8 text-white" />,
          title: "Subsidy Optimization",
          description: "Advanced analytics for subsidy utilization tracking, maximizing program benefits while maintaining compliance efficiency."
        },
        {
          icon: <Users className="h-8 w-8 text-white" />,
          title: "Resident Portal Integration",
          description: "Seamless integration between resident services and compliance requirements, streamlining the tenant experience."
        }
      ]}
      
      // Insights
      insights={[
        {
          title: "Navigating HUD Program Changes: Compliance Updates",
          description: "Essential guide to recent HUD program modifications and their impact on property operations and compliance strategies.",
          date: "December 2024"
        },
        {
          title: "Affordable Housing Investment Strategies",
          description: "Current market analysis and investment strategies for acquiring and managing affordable housing portfolios.",
          date: "November 2024"
        },
        {
          title: "Resident Services Innovation in Affordable Housing",
          description: "Case studies of technology-enabled resident services improving outcomes in affordable housing communities.",
          date: "October 2024"
        }
      ]}
      
      // CTA Section
      ctaImage="/images/hud-cta.jpg"
      ctaTitle="Looking to optimize your HUD & Affordable Housing portfolio? Let's talk."
    />
  );
};

export default HudAffordable;