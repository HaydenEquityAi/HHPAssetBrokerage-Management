import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const BrokerConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/broker-consulting-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Broker of Record & Consulting Services
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Regulatory Excellence and Expert Guidance
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP provides integrated Broker of Record services and consulting support for brokerages and owners navigating operational and transition challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Broker of Record Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Broker of Record Services</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                HHP provides Broker of Record services in Oklahoma for independent brokerages and teams seeking licensed supervision, compliance oversight, and operational support.
              </p>
              <p className="text-lg font-medium text-hhp-navy mb-4">Services include:</p>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside mb-8">
                <li>Broker supervision</li>
                <li>Transaction review and oversight</li>
                <li>License compliance support</li>
                <li>Policy and procedure frameworks</li>
                <li>Regulatory guidance</li>
              </ul>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Who This Is For (BOR)</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Independent commercial brokerages</li>
                    <li>Specialty firms</li>
                    <li>Teams exiting national platforms</li>
                    <li>Brokerages seeking continuity and stability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Why HHP</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal">
                    We understand brokerage operations from the inside and provide oversight without unnecessary interference.
                  </p>
                </div>
              </div>
            </div>

            {/* Consulting Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Consulting Services</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                HHP provides consulting services for owners, boards, and stakeholders facing operational, governance, or transition-related challenges.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Consulting Engagements</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Management transitions</li>
                    <li>Operational and financial reviews</li>
                    <li>Board advisory</li>
                    <li>Special situations</li>
                    <li>Interim support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Engagement Style</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Defined scope</li>
                    <li>Clear deliverables</li>
                    <li>Independent perspective</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Who This Is For (Consulting)</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Owners navigating transitions</li>
                    <li>Boards seeking independent perspective</li>
                    <li>Stakeholders managing operational challenges</li>
                    <li>Firms seeking specialized interim support</li>
                  </ul>
                </div>
              </div>
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
              trackButtonClick('explore_services_consulting', 'broker_consulting_cta');
              trackLinkClick('Explore Services or Request Consulting Support', '/contact');
            }}
          >
            Explore Services or Request Consulting Support
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BrokerConsulting;
