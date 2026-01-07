import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

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
              HHP advises owners and investors on acquisitions, dispositions, and owner-user transactions with an understanding of how assets perform beyond the closing table.
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
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                We serve as both broker and advisor — providing market insight, underwriting perspective, and execution support throughout the transaction lifecycle.
              </p>
            </div>

            {/* Services Offered */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Services Offered</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Investment sales representation</li>
                <li>Acquisition advisory</li>
                <li>Owner-user transactions</li>
                <li>Pricing and valuation guidance</li>
                <li>Deal structuring and negotiation</li>
                <li>Transaction management</li>
              </ul>
            </div>

            {/* How We Approach Transactions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Approach Transactions</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Clear underwriting assumptions</li>
                <li>Realistic view of income and expenses</li>
                <li>Consideration of operational and leasing risk</li>
                <li>No forced outcomes</li>
                <li>We are aligned with long-term decision-making, not transaction volume</li>
              </ul>
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
