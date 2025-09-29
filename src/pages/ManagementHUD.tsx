import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download, ClipboardCheck, Scale, Handshake, BarChart3, AlertTriangle, FileSearch } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementHUD = () => {
  useSEO({
    title: 'HUD Property Management | HHP Asset Management',
    description: 'HUD & Section 8 compliance management with 99%+ accuracy. Trusted by owners for MOR/REAC audit preparation and subsidy performance.'
  });

  const specializedExpertise = [
    {
      icon: Building,
      title: 'HUD Administration & Program Oversight',
      description: 'Complete management of HUD programs with full regulatory compliance and reporting.'
    },
    {
      icon: ClipboardCheck,
      title: 'Tenant Certification & Recertification (50059/EIV)',
      description: 'Accurate tenant income verification and annual recertification processes.'
    },
    {
      icon: FileSearch,
      title: 'Audit & Review Preparation (MOR, REAC)',
      description: 'Comprehensive preparation for Management and Occupancy Reviews and REAC inspections.'
    },
    {
      icon: Scale,
      title: 'Fair Housing Compliance & Monitoring',
      description: 'Ensuring full compliance with Fair Housing laws and regulations.'
    },
    {
      icon: Handshake,
      title: 'Direct Liaison with HUD and Housing Authorities',
      description: 'Direct communication and coordination with HUD and local housing authorities.'
    },
    {
      icon: BarChart3,
      title: 'Specialized Reporting for Owners and Agencies',
      description: 'Detailed reporting tailored to owner needs and agency requirements.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Reduced Compliance Risk',
      description: 'Expert HUD management minimizes regulatory violations and associated penalties.'
    },
    {
      title: 'Seamless Audit Outcomes',
      description: 'Comprehensive preparation ensures successful MOR and REAC inspections.'
    },
    {
      title: 'Maximized Subsidy Performance',
      description: 'Optimized subsidy utilization and accurate reporting maximize revenue.'
    },
    {
      title: 'Professional Oversight',
      description: 'Institutional-grade management ensures consistent compliance and performance.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s HUD expertise has given us complete confidence in our compliance management. Their attention to detail and regulatory knowledge is unmatched.',
    author: 'Michael Rodriguez',
    title: 'Property Owner, Affordable Housing Portfolio'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hud-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              HUD Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Precision compliance and resident-focused operations for HUD and Section 8 properties.
            </p>
                        
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Owner Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sub-Navigation */}
      <ServicesSubNav />

      {/* Specialized Expertise Icon Grid */}
      <IconGrid 
        title="Specialized Expertise"
        services={specializedExpertise}
        columns={6}
      />

      {/* Owner Benefits Cards */}
      <BenefitsCards 
        benefits={ownerBenefits}
        testimonial={testimonial}
      />

      {/* Premium CTA Banner */}
      <PremiumCTABanner
        title="Ready to Ensure HUD Compliance Excellence?"
        description="Trust HHP Asset Management for precision HUD property management with 99%+ compliance rates and seamless audit outcomes."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementHUD;