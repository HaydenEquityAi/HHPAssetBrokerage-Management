import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download, Wrench, DollarSign, Shield, Zap, Calendar, FileText } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementIndustrial = () => {
  useSEO({
    title: 'Industrial Property Management | HHP Asset Management',
    description: 'Operational precision for warehouses, flex, and distribution properties. Proactive maintenance, compliance, and cost control.'
  });

  const coreServices = [
    {
      icon: Building,
      title: 'Full-service management for warehouse, distribution, flex',
      description: 'Comprehensive management tailored to industrial asset types and tenant requirements.'
    },
    {
      icon: FileText,
      title: 'Lease administration for NNN/Modified Gross',
      description: 'Expert lease management for NNN and Modified Gross lease structures.'
    },
    {
      icon: Wrench,
      title: 'Preventive maintenance & vendor oversight',
      description: 'Strategic maintenance programs and vendor management for optimal uptime.'
    },
    {
      icon: Target,
      title: 'Space utilization & TI coordination',
      description: 'Optimized space utilization and tenant improvement coordination.'
    },
    {
      icon: Shield,
      title: 'Environmental/OSHA/safety compliance',
      description: 'Full compliance with environmental, OSHA, and safety regulations.'
    },
    {
      icon: DollarSign,
      title: 'Budgeting, reporting, capital planning',
      description: 'Comprehensive financial planning and capital investment strategies.'
    },
    {
      icon: Zap,
      title: 'Utility monitoring & efficiency',
      description: 'Strategic utility management and efficiency optimization programs.'
    },
    {
      icon: Calendar,
      title: 'Infrastructure upgrade management',
      description: 'Strategic infrastructure planning and upgrade execution.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Lower Operating Costs',
      description: 'Strategic maintenance and operational efficiency reduce overall property expenses.'
    },
    {
      title: 'Minimized Downtime',
      description: 'Predictive maintenance and proactive management ensure maximum operational uptime.'
    },
    {
      title: 'Longer Lease Terms',
      description: 'Professional management and tenant satisfaction lead to extended lease commitments.'
    },
    {
      title: 'Value Growth Through Reinvestment',
      description: 'Strategic capital planning and improvements enhance long-term property value.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s industrial management has optimized our warehouse operations significantly. Their focus on uptime and cost control has delivered measurable results.',
    author: 'Lisa Martinez',
    title: 'Operations Director, Distribution Company'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/industrial-hero.png)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Industrial & Warehouse Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Operational precision for warehouse, distribution, and flex assets focused on uptime and cost control.
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
        title="Ready to Optimize Your Industrial Operations?"
        description="Experience operational precision for your warehouse, distribution, and flex assets with focus on uptime and cost control."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementIndustrial;
