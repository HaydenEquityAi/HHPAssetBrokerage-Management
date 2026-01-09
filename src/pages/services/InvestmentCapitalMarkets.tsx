import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InvestmentCapitalMarkets = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/Investment-capital-markets-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Investment & Capital Markets
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Transaction Strategy Informed by Operations
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP advises owners, investors, and owner-users on acquisitions, dispositions, and strategic transactions with an understanding of how assets perform beyond the closing table.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              Our work integrates market insight, underwriting discipline, and operational awareness to support decisions that hold up over time — not just at closing.
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
                  We serve as both broker and advisor, providing structured guidance throughout the transaction lifecycle.
                </p>
                <p>
                  Our role is to help clients evaluate opportunities clearly, structure transactions thoughtfully, and execute with discipline — while remaining aligned with long-term ownership objectives.
                </p>
              </div>
            </div>

            {/* Core Investment & Capital Markets Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Investment & Capital Markets Functions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* 1. Investment Sales Representation */}
                <AccordionItem value="sales" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Investment Sales Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We represent owners in the disposition of commercial assets with a focus on pricing discipline, positioning, and execution.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Asset valuation and pricing strategy</li>
                      <li>Market positioning and buyer targeting</li>
                      <li>Marketing and exposure coordination</li>
                      <li>Offer evaluation and negotiation</li>
                      <li>Coordination through closing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Acquisition Advisory */}
                <AccordionItem value="acquisition" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Acquisition Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We advise buyers on the evaluation and acquisition of commercial real estate.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Market and submarket analysis</li>
                      <li>Financial review and assumption validation</li>
                      <li>Risk identification and mitigation</li>
                      <li>Support through due diligence</li>
                      <li>Transaction structuring and execution</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Owner-User Transactions */}
                <AccordionItem value="owner-user" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Owner-User Transactions
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support owner-users acquiring or disposing of real estate with both operational and investment considerations.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Site and asset evaluation</li>
                      <li>Financial comparison of alternatives</li>
                      <li>Transaction structuring</li>
                      <li>Lease and occupancy considerations</li>
                      <li>Coordination through closing and occupancy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Pricing, Valuation & Underwriting */}
                <AccordionItem value="pricing" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Pricing, Valuation & Underwriting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide valuation guidance grounded in realistic assumptions and market context.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Income and expense analysis</li>
                      <li>Comparable sales review</li>
                      <li>Sensitivity and scenario analysis</li>
                      <li>Consideration of leasing and operational risk</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Deal Structuring & Negotiation */}
                <AccordionItem value="structuring" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Deal Structuring & Negotiation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We focus on structuring transactions to align risk, economics, and flexibility.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Deal structure evaluation</li>
                      <li>Negotiation strategy</li>
                      <li>Coordination with legal and financial advisors</li>
                      <li>Alignment with ownership objectives</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Transaction Management & Execution */}
                <AccordionItem value="execution" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Transaction Management & Execution
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We manage the transaction process from initial strategy through closing.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Timeline and process coordination</li>
                      <li>Due diligence oversight</li>
                      <li>Communication management</li>
                      <li>Closing support</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* How We Approach Transactions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Approach Transactions</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside mb-4">
                <li>Clear underwriting assumptions</li>
                <li>Realistic view of income, expenses, and capital requirements</li>
                <li>Consideration of operational and leasing risk</li>
                <li>Objective analysis without pressure or forced outcomes</li>
              </ul>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                We are aligned with long-term decision-making, not transaction volume.
              </p>
            </div>

            {/* Who We Work With */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Who We Work With</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Private capital</li>
                <li>Small and mid-sized investors</li>
                <li>Owner-users</li>
                <li>Long-term holders</li>
              </ul>
            </div>

            {/* Why Our Approach Matters */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Transactions that ignore operational realities often underperform after closing.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mt-4">
                Our approach integrates brokerage execution with management and advisory insight, allowing clients to make informed decisions with a clear view of both risk and opportunity.
              </p>
            </div>

            {/* How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Differ</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Strategy-driven, not volume-driven</li>
                <li>Operationally informed underwriting</li>
                <li>Clear communication and disciplined execution</li>
                <li>Alignment with ownership and portfolio goals</li>
              </ul>
            </div>

            {/* Optional Closing Line */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                Sound transaction decisions are built on clear assumptions, disciplined execution, and an understanding of how assets perform over time.
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
              trackButtonClick('discuss_opportunity', 'investment_capital_markets_cta');
              trackLinkClick('Discuss an Opportunity', '/contact');
            }}
          >
            Discuss an Opportunity
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default InvestmentCapitalMarkets;
