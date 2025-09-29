import { Link } from 'react-router-dom';
import { Building, CheckCircle, Users, Heart, Shield, BarChart3, Download, Stethoscope, ClipboardCheck, GraduationCap, Clock } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import ServicesSubNav from '@/components/ServicesSubNav';
import IconGrid from '@/components/IconGrid';
import BenefitsCards from '@/components/BenefitsCards';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const ManagementSenior = () => {
  useSEO({
    title: 'Senior Housing Management | HHP Asset Management',
    description: 'Compassionate care meets institutional operations. Senior living management with compliance excellence and retention-focused oversight.'
  });

  const coreServices = [
    {
      icon: Users,
      title: 'Resident care coordination & family communication systems',
      description: 'Comprehensive care coordination with transparent family communication.'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare facility & vendor management',
      description: 'Strategic management of healthcare facilities and specialized vendors.'
    },
    {
      icon: Shield,
      title: 'Regulatory compliance & audit readiness',
      description: 'Full compliance with senior housing regulations and audit preparation.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality assurance programs & incident tracking',
      description: 'Comprehensive quality assurance and incident management systems.'
    },
    {
      icon: GraduationCap,
      title: 'Staffing oversight, scheduling, and training standards',
      description: 'Strategic staffing management with comprehensive training programs.'
    },
    {
      icon: BarChart3,
      title: 'Institutional-grade reporting and KPIs',
      description: 'Detailed reporting and key performance indicators for operational excellence.'
    }
  ];

  const ownerBenefits = [
    {
      title: 'Stronger Resident Outcomes',
      description: 'Compassionate care programs and quality assurance ensure excellent resident satisfaction.'
    },
    {
      title: 'Reduced Regulatory Risk',
      description: 'Expert compliance management minimizes regulatory violations and penalties.'
    },
    {
      title: 'Predictable Operations',
      description: 'Institutional-grade systems ensure consistent, reliable operations and reporting.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Comprehensive reporting provides clear visibility into all aspects of operations.'
    }
  ];

  const testimonial = {
    quote: 'HHP\'s senior housing management combines compassionate care with professional excellence. Our residents and families consistently praise their attention to detail.',
    author: 'Robert Kim',
    title: 'Executive Director, Senior Living Community'
  };

  return (
    <Layout>
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/multifamily-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Senior Housing Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Compassionate resident experience with institutional-grade operations for senior living and specialized communities.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">100% Compliance</span> | <span className="font-semibold">24/7 Coordination</span> | <span className="font-semibold">Institutional Standards</span>
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
        title="Ready to Enhance Your Senior Housing Community?"
        description="Experience compassionate care with institutional-grade operations for your senior living community."
        primaryCTA="Schedule a Consultation"
        primaryLink="/contact"
        secondaryCTA="See All Services"
        secondaryLink="/management"
      />
    </Layout>
  );
};

export default ManagementSenior;