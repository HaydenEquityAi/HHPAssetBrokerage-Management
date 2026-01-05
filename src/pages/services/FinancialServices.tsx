import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const FinancialServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Financial Services
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Financial Clarity for Real Estate Decisions
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-4 drop-shadow-md">
              HHP provides real estate–focused financial services designed to support ownership, operational, and transactional decision-making. Our work centers on asset-level analysis, performance transparency, and forward-looking planning — not generic financial advice.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              We help owners understand how their real estate actually performs and how decisions today affect outcomes tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Role</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Real estate financial performance is often obscured by fragmented reporting, incomplete assumptions, or backward-looking data.
                </p>
                <p>
                  HHP bridges the gap between operations, brokerage, and financial analysis, delivering practical insight that owners can rely on when allocating capital, evaluating risk, or planning next steps.
                </p>
                <p>
                  We do not offer banking, lending, tax preparation, or regulated investment advisory services. Our role is analytical, advisory, and execution-aware.
                </p>
              </div>
            </div>

            {/* Core Financial Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Financial Services</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Asset-Level Financial Analysis</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We evaluate individual assets to provide a clear picture of performance, risks, and opportunities.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-2">Includes:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Operating income and expense analysis</li>
                    <li>Cash flow evaluation</li>
                    <li>Expense normalization and benchmarking</li>
                    <li>Performance trend analysis</li>
                    <li>Identification of operational inefficiencies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Budgeting & Forecasting</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We assist owners in building realistic budgets and forward-looking projections grounded in market conditions and operational realities.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-2">Includes:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Annual operating budgets</li>
                    <li>Short- and mid-term forecasts</li>
                    <li>Sensitivity analysis</li>
                    <li>Capital planning support</li>
                    <li>Variance analysis and explanation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Transaction Financial Support</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We provide financial analysis to support acquisitions, dispositions, leasing decisions, and owner-user transactions.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-2">Includes:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Financial review of opportunities</li>
                    <li>Assumption validation</li>
                    <li>Lease impact analysis</li>
                    <li>Hold vs. sell modeling</li>
                    <li>Support during due diligence</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mt-3 italic">
                    This service is often integrated with our Investment & Capital Markets and Leasing & Representation work.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner & Board Reporting</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We help ownership groups and boards gain clarity through structured, understandable reporting.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-2">Includes:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Customized reporting formats</li>
                    <li>Performance summaries for stakeholders</li>
                    <li>Board-ready financial presentations</li>
                    <li>Ongoing financial oversight support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Portfolio-Level Insight</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    For owners with multiple assets, we provide consolidated views to support portfolio strategy.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-2">Includes:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Portfolio performance reviews</li>
                    <li>Asset comparison and prioritization</li>
                    <li>Capital allocation insight</li>
                    <li>Long-term planning support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Who This Is For</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Commercial property owners</li>
                <li>Partnerships and ownership groups</li>
                <li>Boards and fiduciaries</li>
                <li>Owner-users with investment components</li>
                <li>Clients seeking clarity before major decisions</li>
              </ul>
            </div>

            {/* How We Work */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Work</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Defined scope and objectives</li>
                <li>Transparent assumptions</li>
                <li>Clear, decision-ready outputs</li>
                <li>Coordination with CPAs, lenders, and legal advisors as appropriate</li>
              </ul>
              <p className="text-lg leading-relaxed text-hhp-charcoal mt-4">
                Our goal is to support better decisions — not to replace existing professional advisors.
              </p>
            </div>

            {/* Important Disclosure */}
            <div className="bg-gray-50 border-l-4 border-hhp-navy p-6 rounded">
              <h2 className="section-title text-hhp-navy mb-4">Important Disclosure</h2>
              <div className="space-y-3 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  HHP provides real estate financial analysis and advisory services only. We do not provide tax advice, legal advice, lending services, or regulated investment advisory services.
                </p>
                <p>
                  Clients should consult their independent tax, legal, and financial professionals for matters outside the scope of real estate analysis.
                </p>
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
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg"
            onClick={() => {
              trackButtonClick('discuss_financial_review', 'financial_services_cta');
              trackLinkClick('Discuss a Financial Review or Request Financial Analysis Support', '/contact');
            }}
          >
            Discuss a Financial Review or Request Financial Analysis Support
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialServices;
