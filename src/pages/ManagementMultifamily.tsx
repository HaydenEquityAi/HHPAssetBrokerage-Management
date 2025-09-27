import { Link } from 'react-router-dom';
import { Building, CheckCircle, TrendingUp, Users, Shield, BarChart3, Download, Home, Wrench, DollarSign, Heart, Settings } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import multifamilyImage from '@/assets/multifamily-property.webp';
import { useSEO } from '@/hooks/useSEO';

const ManagementMultifamily = () => {
  useSEO({
    title: 'Multifamily Property Management | HHP Asset Management',
    description: 'Institutional-grade multifamily management across Oklahoma. We deliver occupancy growth, retention, and NOI performance for apartment communities.'
  });

  const coreServices = [
    {
      icon: Home,
      title: 'Full-Service Operations',
      description: 'Complete day-to-day management including leasing, maintenance, and resident services.'
    },
    {
      icon: Users,
      title: 'Amenity & Community Management',
      description: 'Strategic oversight of amenities and community programs to enhance resident satisfaction.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Leasing Strategies',
      description: 'Data-driven leasing approaches that optimize occupancy and rental rates.'
    },
    {
      icon: DollarSign,
      title: 'Financial Performance',
      description: 'Comprehensive budgeting, forecasting, and financial reporting for optimal NOI.'
    },
    {
      icon: Heart,
      title: 'Resident Lifecycle Management',
      description: 'From move-in to renewal, we optimize the entire resident experience.'
    },
    {
      icon: Wrench,
      title: 'Maintenance Excellence',
      description: 'Predictive maintenance programs that minimize costs and maximize resident satisfaction.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Higher Occupancy',
      description: 'Data-driven leasing strategies that consistently achieve optimal occupancy rates.'
    },
    {
      title: 'Improved Retention',
      description: 'Resident-focused programs that reduce turnover and increase lease renewals.'
    },
    {
      title: 'Reduced Operating Risk',
      description: 'Predictive maintenance and operational excellence minimize unexpected costs.'
    },
    {
      title: 'Stronger Long-Term Value',
      description: 'Institutional-grade management that enhances property value and investor returns.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s multifamily management has transformed our portfolio performance with their data-driven approach and resident-focused operations.',
    author: 'Sarah Johnson',
    title: 'Portfolio Manager, Regional Investment Group'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${multifamilyImage})` }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Multifamily Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Institutional-grade operations that maximize occupancy, retention, and NOI for large-scale apartment communities.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">15%+ NOI Lift</span> | <span className="font-semibold">Executive Dashboards</span> | <span className="font-semibold">Predictive Maintenance</span>
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
        title="Ready to Maximize Your Multifamily Performance?"
        description="Experience institutional-grade multifamily management that delivers measurable results and long-term value growth."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementMultifamily;
