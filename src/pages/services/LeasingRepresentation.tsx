import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LeasingRepresentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/leasing-tenant-representation-hero.webp)' }}
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
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* 1. Market & Asset Positioning */}
                <AccordionItem value="market" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Market & Asset Positioning
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We begin with a clear understanding of the asset's position within its competitive set.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Market and submarket analysis</li>
                      <li>Competitive property review</li>
                      <li>Rent positioning and pricing strategy</li>
                      <li>Concession and incentive evaluation</li>
                      <li>Assessment of tenant demand and absorption</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Landlord Representation */}
                <AccordionItem value="landlord" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Landlord Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We represent owners in the leasing of commercial space with a focus on protecting asset value and supporting long-term performance.
                    </p>
                    <p className="text-base font-medium text-hhp-navy mb-3">Landlord representation services include:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Leasing strategy development</li>
                      <li>Marketing coordination and exposure</li>
                      <li>Tenant qualification and underwriting</li>
                      <li>Lease negotiation and structuring</li>
                      <li>Coordination through execution and delivery</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Tenant Representation */}
                <AccordionItem value="tenant" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Tenant Representation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We advise tenants on site selection and lease negotiation with an emphasis on operational fit, cost structure, and long-term flexibility.
                    </p>
                    <p className="text-base font-medium text-hhp-navy mb-3">Tenant representation services include:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Needs assessment and market evaluation</li>
                      <li>Site selection and tour coordination</li>
                      <li>Financial comparison of alternatives</li>
                      <li>Lease term negotiation</li>
                      <li>Coordination through occupancy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Lease Structuring & Risk Mitigation */}
                <AccordionItem value="lease" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Lease Structuring & Risk Mitigation
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We focus on the details that materially impact long-term outcomes.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Lease term and renewal structure</li>
                      <li>Expense recovery and escalation analysis</li>
                      <li>Responsibility allocation and risk exposure</li>
                      <li>Flexibility and exit considerations</li>
                      <li>Alignment with ownership objectives</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Execution & Coordination */}
                <AccordionItem value="execution" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Execution & Coordination
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We manage the leasing process through execution to ensure consistency and accountability.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Coordination with ownership and management</li>
                      <li>Interface with legal counsel as needed</li>
                      <li>Timeline management</li>
                      <li>Documentation oversight</li>
                      <li>Transition support through occupancy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Integration with Management & Advisory */}
                <AccordionItem value="integration" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Integration with Management & Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      Our leasing work is informed by real operational experience.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Alignment with property management strategy</li>
                      <li>Consideration of maintenance and operational impact</li>
                      <li>Integration with asset-level financial analysis</li>
                      <li>Support for broader ownership and portfolio goals</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach Chart */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-premium">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 text-hhp-navy tracking-[0.06em] uppercase">
            OUR LEASING & REPRESENTATION APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/our-vertically-integrated-approach.png" 
              alt="Our Leasing & Representation Approach"
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mid-Page Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
        {/* LEFT: Large property/building image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/images/leasing-tenant-representation-hero.webp" 
            alt="Leasing & Representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>
            <p className="text-lg text-white mb-10 leading-relaxed">
              HHP Asset Management is an operator-led real estate platform combining 
              institutional discipline with hands-on execution. We specialize in vertically 
              integrated asset management, bringing together property management, facilities 
              operations, financial oversight, and strategic advisory under one integrated 
              approach.
            </p>
            <div className="pt-8 border-t border-gray-500">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 tracking-widest text-white">
                DISCOVER<br/>WHAT WE DO
              </h3>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition"
                onClick={() => {
                  trackButtonClick('contact_us_cta', 'leasing_representation_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Approach Matters & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
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

            {/* Who We Work With & How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Why Our Approach Matters</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                Poorly structured leases often create hidden costs, operational friction, and long-term constraints.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mt-4">
                Our leasing work is informed by management, advisory, and financial insight — not just deal-making — allowing us to deliver outcomes that support both near-term stability and long-term value.
              </p>
            </div>

            {/* Who We Work With & How We Differ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <ul className="space-y-3 text-hhp-charcoal">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Commercial property owners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Partnerships and ownership groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Owner-users</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Tenants seeking strategic representation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Assets requiring thoughtful stabilization</span>
                  </li>
                </ul>
              </div>

              {/* How We Differ */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">How We Differ</h2>
                </div>
                <ul className="space-y-3 text-hhp-charcoal">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Strategy-first leasing approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Focus on lease quality, not just occupancy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integration with management and advisory services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Clear communication and disciplined execution</span>
                  </li>
                </ul>
              </div>
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

      {/* FAQ CTA Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="border border-gray-300 rounded-lg my-12 sm:my-16 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-hhp-navy">
                HAVE MORE QUESTIONS?
              </h3>
              <Link 
                to="/faq" 
                className="bg-hhp-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-hhp-navy/90 transition flex-shrink-0"
                onClick={() => {
                  trackButtonClick('visit_faq_cta', 'leasing_representation_faq');
                  trackLinkClick('Visit our FAQ page', '/faq');
                }}
              >
                Visit our FAQ page
              </Link>
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
