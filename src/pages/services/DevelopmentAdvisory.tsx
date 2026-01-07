import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const DevelopmentAdvisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/development-advisory-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Development Advisory
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Strategic Guidance from Concept Through Execution
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP provides development advisory services to owners and developers seeking structured insight during planning, feasibility, and execution phases.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Development Support */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Development Support</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Market feasibility analysis</li>
                <li>Site evaluation and positioning</li>
                <li>Preliminary financial modeling</li>
                <li>Coordination with planners and consultants</li>
                <li>Advisory support during entitlement and execution</li>
              </ul>
            </div>

            {/* Our Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Role</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                We advise and support — we do not speculate or self-develop. Our role is to help clients make informed decisions and manage risk.
              </p>
            </div>

            {/* Ideal Clients */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Ideal Clients</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>First-time developers</li>
                <li>Owner-users pursuing development</li>
                <li>Investors evaluating development risk</li>
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
              trackButtonClick('discuss_project', 'development_advisory_cta');
              trackLinkClick('Discuss a Project', '/contact');
            }}
          >
            Discuss a Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentAdvisory;
