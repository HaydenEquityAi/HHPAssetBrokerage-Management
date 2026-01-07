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
              HHP provides advisory services to owners, boards, and tenants navigating complex real estate decisions where clarity, structure, and disciplined analysis matter.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              Our advisory work is designed for situations where the cost of a poor decision is high and independent perspective is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Advisory Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Advisory Role</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Real estate decisions often involve competing objectives, incomplete information, and meaningful capital commitments.
                </p>
                <p>
                  HHP serves as an independent advisor, helping clients frame decisions clearly, evaluate options objectively, and understand the operational and financial implications before capital is committed.
                </p>
              </div>
            </div>

            {/* Core Advisory & Site Selection Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Advisory & Site Selection Functions</h2>
              
              <div className="space-y-8">
                {/* 1. Site Selection & Relocation Analysis */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">1. Site Selection & Relocation Analysis</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We assist tenants, owner-users, and organizations in evaluating location options based on operational, financial, and strategic considerations.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Needs assessment and criteria development</li>
                    <li>Market and submarket evaluation</li>
                    <li>Comparative site analysis</li>
                    <li>Financial impact assessment</li>
                    <li>Support through selection and execution</li>
                  </ul>
                </div>

                {/* 2. Market & Feasibility Studies */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">2. Market & Feasibility Studies</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We evaluate market conditions and project feasibility to support informed decision-making.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Market demand and supply analysis</li>
                    <li>Competitive landscape evaluation</li>
                    <li>Use and positioning analysis</li>
                    <li>Preliminary financial feasibility</li>
                    <li>Risk identification and mitigation</li>
                  </ul>
                </div>

                {/* 3. Portfolio Review & Optimization */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">3. Portfolio Review & Optimization</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We work with owners to assess portfolio performance and identify opportunities for improvement.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Asset-level performance review</li>
                    <li>Portfolio-wide analysis</li>
                    <li>Capital allocation insight</li>
                    <li>Identification of underperforming assets</li>
                    <li>Strategic prioritization</li>
                  </ul>
                </div>

                {/* 4. Hold vs. Sell Evaluations */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">4. Hold vs. Sell Evaluations</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We provide structured analysis to support ownership decisions around disposition timing.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Performance trend analysis</li>
                    <li>Market timing considerations</li>
                    <li>Operational and leasing risk assessment</li>
                    <li>Scenario modeling</li>
                    <li>Objective recommendation support</li>
                  </ul>
                </div>

                {/* 5. Strategic Planning Support */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">5. Strategic Planning Support</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We support owners and boards with structured planning around real estate strategy.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Long-term real estate planning</li>
                    <li>Alignment with business objectives</li>
                    <li>Capital planning considerations</li>
                    <li>Integration with brokerage and management insight</li>
                  </ul>
                </div>

                {/* 6. Third-Party Validation & Board Support */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">6. Third-Party Validation & Board Support</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We provide independent analysis to support governance and stakeholder decision-making.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Board-ready presentations</li>
                    <li>Third-party review and validation</li>
                    <li>Independent perspective for complex decisions</li>
                    <li>Support during critical review processes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* When Clients Engage Us */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">When Clients Engage Us</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Prior to committing capital</li>
                <li>During portfolio transitions</li>
                <li>When internal consensus is unclear</li>
                <li>When third-party validation is required</li>
              </ul>
            </div>

            {/* Value We Bring */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Value We Bring</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Objective, independent analysis</li>
                <li>Market-grounded assumptions</li>
                <li>Awareness of execution and operational realities</li>
                <li>Clear, disciplined communication</li>
              </ul>
            </div>

            {/* How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Differ</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Advisory-first mindset</li>
                <li>No transactional pressure</li>
                <li>Integration with brokerage, management, and financial insight</li>
                <li>Focus on clarity and decision quality</li>
              </ul>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                High-impact real estate decisions benefit from independent perspective, disciplined analysis, and clear communication.
              </p>
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
