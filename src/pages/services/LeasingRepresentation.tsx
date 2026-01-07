import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const LeasingRepresentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/leasing-representation-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Leasing & Representation
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Stabilization Through Strategy, Not Speed
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              Leasing decisions shape the financial trajectory of an asset for years. Poor tenant selection, weak lease structure, or rushed execution can quietly erode value long after a deal is signed.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP approaches leasing as a strategic function — focused on tenant quality, lease economics, and long-term risk mitigation — not just filling space.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Leasing Philosophy */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Leasing Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Leasing is not a marketing exercise. It is a capital decision.
                </p>
                <p>
                  We approach leasing with an owner's mindset, evaluating how tenant mix, lease structure, concessions, and flexibility impact cash flow, operations, and future exit options. Every recommendation is made with an understanding of how the asset will be managed after execution.
                </p>
              </div>
            </div>

            {/* Core Leasing & Representation Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Leasing & Representation Functions</h2>
              
              <div className="space-y-8">
                {/* 1. Market & Asset Positioning */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">1. Market & Asset Positioning</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We begin with a clear understanding of the asset's position within its competitive set.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Market and submarket analysis</li>
                    <li>Competitive property review</li>
                    <li>Rent positioning and pricing strategy</li>
                    <li>Concession and incentive evaluation</li>
                    <li>Assessment of tenant demand and absorption</li>
                  </ul>
                </div>

                {/* 2. Landlord Representation */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">2. Landlord Representation</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We represent owners in the leasing of commercial space with a focus on protecting asset value and supporting long-term performance.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-4">Landlord representation services include:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Leasing strategy development</li>
                    <li>Marketing coordination and exposure</li>
                    <li>Tenant qualification and underwriting</li>
                    <li>Lease negotiation and structuring</li>
                    <li>Coordination through execution and delivery</li>
                  </ul>
                </div>

                {/* 3. Tenant Representation */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">3. Tenant Representation</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We advise tenants on site selection and lease negotiation with an emphasis on operational fit, cost structure, and long-term flexibility.
                  </p>
                  <p className="text-lg font-medium text-hhp-navy mb-4">Tenant representation services include:</p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Needs assessment and market evaluation</li>
                    <li>Site selection and tour coordination</li>
                    <li>Financial comparison of alternatives</li>
                    <li>Lease term negotiation</li>
                    <li>Coordination through occupancy</li>
                  </ul>
                </div>

                {/* 4. Lease Structuring & Risk Mitigation */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">4. Lease Structuring & Risk Mitigation</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We focus on the details that materially impact long-term outcomes.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Lease term and renewal structure</li>
                    <li>Expense recovery and escalation analysis</li>
                    <li>Responsibility allocation and risk exposure</li>
                    <li>Flexibility and exit considerations</li>
                    <li>Alignment with ownership objectives</li>
                  </ul>
                </div>

                {/* 5. Execution & Coordination */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">5. Execution & Coordination</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    We manage the leasing process through execution to ensure consistency and accountability.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Coordination with ownership and management</li>
                    <li>Interface with legal counsel as needed</li>
                    <li>Timeline management</li>
                    <li>Documentation oversight</li>
                    <li>Transition support through occupancy</li>
                  </ul>
                </div>

                {/* 6. Integration with Management & Advisory */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">6. Integration with Management & Advisory</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-4">
                    Our leasing work is informed by real operational experience.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Alignment with property management strategy</li>
                    <li>Consideration of maintenance and operational impact</li>
                    <li>Integration with asset-level financial analysis</li>
                    <li>Support for broader ownership and portfolio goals</li>
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
                <li>Owner-users</li>
                <li>Tenants seeking strategic representation</li>
                <li>Assets requiring thoughtful stabilization</li>
              </ul>
            </div>

            {/* Why Our Approach Matters */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Poorly structured leases often create hidden costs, operational friction, and long-term constraints.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mt-4">
                Our leasing work is informed by management, advisory, and financial insight — not just deal-making — allowing us to deliver outcomes that support both near-term stability and long-term value.
              </p>
            </div>

            {/* How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Differ</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Strategy-first leasing approach</li>
                <li>Focus on lease quality, not just occupancy</li>
                <li>Integration with management and advisory services</li>
                <li>Clear communication and disciplined execution</li>
              </ul>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                Leasing decisions should support the asset long after the ink dries. Our approach is designed to do exactly that.
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
              trackButtonClick('evaluate_leasing_strategy', 'leasing_representation_cta');
              trackLinkClick('Evaluate a Leasing Strategy', '/contact');
            }}
          >
            Evaluate a Leasing Strategy
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LeasingRepresentation;
