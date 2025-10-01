import { Link } from 'react-router-dom';
import { DollarSign, Target, FileText, BarChart3, CheckCircle, ArrowRight, TrendingUp, Users } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import PremiumCTABanner from '@/components/PremiumCTABanner';
import { useSEO } from '@/hooks/useSEO';

const BrokerageInvestmentSales = () => {
  useSEO({
    title: 'Investment Sales | HHP Asset Group',
    description: 'Institutional-grade analysis and targeted disposition. Expert investment sales services for optimal transaction outcomes.'
  });

  const services = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Broker Opinion of Value (BOV)',
      description: 'Comprehensive property valuation and market analysis for informed decision-making.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Qualified Buyer Lists',
      description: 'Targeted buyer identification and qualification based on investment criteria.'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Offering Memoranda',
      description: 'Professional marketing materials and comprehensive property documentation.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Marketing Campaign Management',
      description: 'Strategic marketing campaigns across multiple channels and platforms.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Bid Management',
      description: 'Structured bid processes and best/final round negotiations.'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Escrow Management',
      description: 'End-to-end transaction management and closing coordination.'
    }
  ];

  const proofPoints = [
    { metric: '4.2-6.8%', label: 'Cap Rate Range' },
    { metric: '$180-450/SF', label: 'Price per Square Foot' },
    { metric: '90 Days', label: 'Average Marketing Time' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Investment Sales
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Institutional-grade analysis and targeted disposition. Expert investment sales services for optimal transaction outcomes.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Request a BOV
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Comprehensive Sales Services</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our investment sales team delivers institutional-grade expertise for complex commercial real estate transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="premium-card text-center">
                <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-hhp-charcoal leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="section-title text-hhp-navy mb-6">Market Performance</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our data-driven approach consistently delivers optimal pricing and transaction velocity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proofPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-hhp-navy mb-2">
                  {point.metric}
                </div>
                <div className="text-hhp-charcoal font-medium">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Our Sales Process</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              A systematic approach to maximizing value and ensuring smooth transaction execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Valuation & Strategy', description: 'Comprehensive BOV and market positioning strategy development.' },
              { step: '02', title: 'Marketing Launch', description: 'Professional marketing materials and targeted buyer outreach.' },
              { step: '03', title: 'Due Diligence', description: 'Coordinated buyer due diligence and information management.' },
              { step: '04', title: 'Transaction Close', description: 'Final negotiations and seamless closing coordination.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hhp-navy text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-hhp-charcoal leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <PremiumCTABanner
        title="Ready to Maximize Your Property's Value?"
        description="Let our investment sales experts guide you through the entire disposition process with institutional-grade analysis and execution."
        primaryCTA="Request a BOV"
        primaryLink="/contact"
        secondaryCTA="View All Services"
        secondaryLink="/brokerage"
      />
    </Layout>
  );
};

export default BrokerageInvestmentSales;
