import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const AdvisorySiteSelection = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/site-selection-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Advisory & Site Selection
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Independent Perspective for High-Impact Decisions
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP provides advisory services to owners, boards, and tenants navigating complex real estate decisions where clarity and structure matter.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Advisory Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Advisory Services</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Site selection and relocation analysis</li>
                <li>Market and feasibility studies</li>
                <li>Portfolio review and optimization</li>
                <li>Hold vs sell evaluations</li>
                <li>Strategic planning support</li>
              </ul>
            </div>

            {/* When Clients Engage Us */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">When Clients Engage Us</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Prior to committing capital</li>
                <li>During portfolio transitions</li>
                <li>When internal consensus is unclear</li>
                <li>When third-party validation is needed</li>
              </ul>
            </div>

            {/* Value We Bring */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Value We Bring</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Objective analysis</li>
                <li>Market-grounded assumptions</li>
                <li>Execution awareness</li>
                <li>Clear communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-premium text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('request_advisory_support', 'advisory_site_selection_cta');
              trackLinkClick('Request Advisory Support', '/contact');
            }}
          >
            Request Advisory Support
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AdvisorySiteSelection;
