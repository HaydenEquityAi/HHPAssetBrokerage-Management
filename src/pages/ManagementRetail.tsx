import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download, ShoppingBag, Megaphone, DollarSign, Wrench, Calendar, Eye, FileText } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementRetail = () => {
  useSEO({
    title: 'Retail Property Management | HHP Asset Management',
    description: 'Retail property management built for performance. Tenant mix, CAM precision, and marketing strategies that drive occupancy and sales.'
  });

  const coreServices = [
    {
      icon: Building,
      title: 'Day-to-day operations for centers and mixed-use',
      description: 'Comprehensive operational management for retail centers and mixed-use properties.'
    },
    {
      icon: FileText,
      title: 'Lease administration & co-tenancy enforcement',
      description: 'Precise lease management with co-tenancy clause enforcement and compliance.'
    },
    {
      icon: ShoppingBag,
      title: 'Tenant-mix strategy',
      description: 'Strategic tenant selection and mix optimization to maximize foot traffic and sales.'
    },
    {
      icon: Megaphone,
      title: 'Property marketing & community engagement',
      description: 'Comprehensive marketing strategies and community engagement programs.'
    },
    {
      icon: DollarSign,
      title: 'CAM oversight & reconciliation',
      description: 'Accurate CAM calculations, billing, and reconciliation processes.'
    },
    {
      icon: Wrench,
      title: 'Vendor coordination (landscaping, cleaning, security)',
      description: 'Strategic vendor management for all property services and maintenance.'
    },
    {
      icon: Calendar,
      title: 'Capital improvements & re-tenanting',
      description: 'Strategic capital planning and efficient re-tenanting processes.'
    },
    {
      icon: Eye,
      title: 'Real-time performance tracking',
      description: 'Comprehensive performance monitoring and reporting for optimal results.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Stronger Tenant Performance',
      description: 'Strategic tenant mix and support programs drive higher sales and satisfaction.'
    },
    {
      title: 'Optimized CAM Recoveries',
      description: 'Precise CAM management maximizes recoverable expenses and tenant satisfaction.'
    },
    {
      title: 'Reduced Vacancy',
      description: 'Effective marketing and tenant retention strategies minimize vacancy periods.'
    },
    {
      title: 'Enhanced Competitiveness',
      description: 'Professional management keeps properties competitive in the retail market.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s retail management has transformed our shopping center performance. Their tenant mix strategy and marketing approach have significantly increased foot traffic.',
    author: 'David Thompson',
    title: 'Property Owner, Regional Shopping Centers'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/retail-hero.png)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Retail Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Tenant-mix strategy, CAM precision, and marketing execution for centers that perform.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">Optimized CAM</span> | <span className="font-semibold">Faster Re-Tenanting</span> | <span className="font-semibold">Sales Uplift</span>
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
        title="Ready to Drive Retail Performance?"
        description="Experience specialized retail management that maximizes foot traffic, drives tenant performance, and keeps your property competitive."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementRetail;
