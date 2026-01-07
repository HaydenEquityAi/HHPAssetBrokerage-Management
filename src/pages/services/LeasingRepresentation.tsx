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
              Leasing decisions shape the financial trajectory of an asset for years. HHP approaches leasing as a strategic function — focused on tenant quality, lease structure, and long-term risk mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Landlord Representation */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Landlord Representation</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                We represent owners in the leasing of commercial space with a focus on protecting asset value and improving long-term performance.
              </p>
              <p className="text-lg font-medium text-hhp-navy mb-4">Landlord services include:</p>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Market and competitive analysis</li>
                <li>Rent positioning and concession strategy</li>
                <li>Marketing and exposure</li>
                <li>Tenant qualification</li>
                <li>Lease negotiation and structuring</li>
                <li>Coordination through execution</li>
              </ul>
            </div>

            {/* Tenant Representation */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Tenant Representation</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                We advise tenants on site selection and lease negotiation with an emphasis on operational fit, cost structure, and flexibility.
              </p>
              <p className="text-lg font-medium text-hhp-navy mb-4">Tenant services include:</p>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Needs assessment and market evaluation</li>
                <li>Site selection and tour coordination</li>
                <li>Financial comparison of alternatives</li>
                <li>Lease term negotiation</li>
                <li>Coordination through occupancy</li>
              </ul>
            </div>

            {/* Why Our Approach Matters */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Poorly structured leases often create hidden costs and operational friction. Our leasing work is informed by management and advisory experience — not just deal-making.
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
