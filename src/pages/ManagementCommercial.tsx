import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download, FileText, Settings, DollarSign, Wrench, Shield, Calendar } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import commercialImage from '@/assets/commercial-building.webp';
import { useSEO } from '@/hooks/useSEO';

const ManagementCommercial = () => {
  useSEO({
    title: 'Office Property Management | HHP Asset Management',
    description: 'Professional management for Class A/B and medical office buildings. Tenant experience, renewals, and operational excellence.'
  });

  const coreServices = [
    {
      icon: Building,
      title: 'Full-service management for Class A, B, and medical office',
      description: 'Comprehensive management tailored to each office building class and tenant needs.'
    },
    {
      icon: Users,
      title: 'Tenant relations & retention programs',
      description: 'Strategic programs designed to enhance tenant satisfaction and increase renewal rates.'
    },
    {
      icon: FileText,
      title: 'Lease administration & escalations',
      description: 'Precise lease management with accurate escalations and compliance tracking.'
    },
    {
      icon: Settings,
      title: 'Facility management & building systems oversight',
      description: 'Comprehensive oversight of all building systems and facility operations.'
    },
    {
      icon: Target,
      title: 'Vendor coordination & performance tracking',
      description: 'Strategic vendor management with performance monitoring and optimization.'
    },
    {
      icon: DollarSign,
      title: 'Budgeting/forecasting & financial reporting',
      description: 'Detailed financial planning and transparent reporting for optimal performance.'
    },
    {
      icon: Calendar,
      title: 'Capital planning & project management',
      description: 'Strategic capital planning and project execution for long-term value.'
    },
    {
      icon: Shield,
      title: 'Safety/accessibility compliance',
      description: 'Full compliance with safety regulations and accessibility requirements.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Higher Renewal Rates',
      description: 'Tenant-focused programs and excellent service delivery increase lease renewals.'
    },
    {
      title: 'Optimized Costs',
      description: 'Strategic vendor management and operational efficiency reduce operating expenses.'
    },
    {
      title: 'Executive Dashboards',
      description: 'Real-time reporting and analytics provide clear visibility into property performance.'
    },
    {
      title: 'Increased Long-Term Value',
      description: 'Professional management enhances property value and investor returns.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s office management has significantly improved our tenant satisfaction and renewal rates. Their attention to detail and proactive approach is exceptional.',
    author: 'Jennifer Chen',
    title: 'Asset Manager, Commercial Real Estate Fund'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${commercialImage})` }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Office Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Tenant-experience-driven operations for Class A/B and medical office assets to increase renewals and value.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">Higher Renewal Rates</span> | <span className="font-semibold">Cost Optimization</span> | <span className="font-semibold">Transparent Reporting</span>
            </div>
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

      {/* Core Services Icon Grid */}
      <IconGrid 
        title="Core Services"
        services={coreServices}
        columns={6}
      />

      {/* Owner Benefits Cards */}
      <BenefitsCards 
        benefits={ownerBenefits}
        testimonial={testimonial}
      />

      {/* Premium CTA Banner */}
      <PremiumCTABanner
        title="Ready to Optimize Your Office Building Performance?"
        description="Experience tenant-experience-driven office management that increases renewals and maximizes long-term value."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementCommercial;
