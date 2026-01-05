import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-4">
              Property Management
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6">
              Disciplined Operations for Commercial Assets
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12">
              HHP provides commercial property management services focused on operational control, financial transparency, and long-term asset performance. Our approach is built for owners who want informed oversight, not reactive management.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Management Philosophy */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Management Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Effective property management is not about volume or speed. It is about consistency, accountability, and understanding how daily decisions compound over time.
                </p>
                <p>
                  We manage assets with an owner's mindset — balancing tenant needs, expense control, capital preservation, and risk management.
                </p>
              </div>
            </div>

            {/* Core Management Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Management Functions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Financial Oversight</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Rent collection and receivables monitoring</li>
                    <li>Monthly owner reporting</li>
                    <li>Budget preparation and variance tracking</li>
                    <li>Expense review and cost control</li>
                    <li>Coordination with ownership accounting and tax advisors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Physical Asset Management</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Preventative maintenance planning</li>
                    <li>Vendor sourcing, bidding, and oversight</li>
                    <li>Capital improvement coordination</li>
                    <li>Emergency response protocols</li>
                    <li>Site inspections and condition monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Lease & Tenant Administration</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Lease abstraction and administration</li>
                    <li>Enforcement of lease terms</li>
                    <li>Tenant communication and issue resolution</li>
                    <li>Coordination with leasing and brokerage teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Who This Is For</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Private owners</li>
                <li>Partnerships and boards</li>
                <li>Owner-users with investment components</li>
                <li>Assets requiring hands-on oversight</li>
              </ul>
            </div>

            {/* How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Differ</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Selective portfolio size</li>
                <li>Direct accountability</li>
                <li>No call-center model</li>
                <li>Integrated brokerage and advisory insight</li>
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
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg"
            onClick={() => {
              trackButtonClick('discuss_management_alignment', 'property_management_cta');
              trackLinkClick('Discuss Management Alignment', '/contact');
            }}
          >
            Discuss Management Alignment
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;
