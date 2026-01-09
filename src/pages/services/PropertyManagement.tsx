import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/property-management-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Property Management
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Disciplined Operations for Commercial Assets
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
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
                  Effective property management is not about volume or speed. It is about consistency, accountability, and disciplined execution over time.
                </p>
                <p>
                  We manage assets with an owner's mindset — balancing tenant needs, expense control, capital preservation, and risk management. Daily decisions are evaluated based on their long-term impact on asset performance.
                </p>
              </div>
            </div>

            {/* Core Management Functions */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Core Management Functions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* 1. Financial Oversight & Reporting */}
                <AccordionItem value="financial" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Financial Oversight & Reporting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We maintain tight financial controls to provide transparency, predictability, and decision-ready information.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Rent collection and receivables monitoring</li>
                      <li>Monthly owner financial reporting</li>
                      <li>Budget preparation and variance analysis</li>
                      <li>Expense review and cost control</li>
                      <li>Coordination with ownership accounting and tax advisors</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Physical Asset Management */}
                <AccordionItem value="asset" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Physical Asset Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We focus on proactive maintenance and disciplined oversight to preserve asset condition and control long-term costs.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Preventative maintenance planning</li>
                      <li>Vendor sourcing, bidding, and oversight</li>
                      <li>Capital improvement coordination</li>
                      <li>Emergency response protocols</li>
                      <li>Regular site inspections and condition monitoring</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Lease Administration */}
                <AccordionItem value="lease" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Lease Administration
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We manage leases as legal and financial instruments, not just documents.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Lease abstraction and administration</li>
                      <li>Critical date tracking</li>
                      <li>Rent escalations and reconciliations</li>
                      <li>Enforcement of lease terms</li>
                      <li>Coordination with legal and brokerage teams</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Tenant Relations & Issue Resolution */}
                <AccordionItem value="tenant" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Tenant Relations & Issue Resolution
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We prioritize professional, consistent tenant communication to support stability and reduce friction.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Tenant communication and issue resolution</li>
                      <li>Coordination of service requests</li>
                      <li>Lease compliance monitoring</li>
                      <li>Support for renewals and extensions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Risk Management & Compliance */}
                <AccordionItem value="risk" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Risk Management & Compliance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We identify and mitigate operational and regulatory risk before issues escalate.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Insurance coordination and compliance tracking</li>
                      <li>Safety and risk assessments</li>
                      <li>Regulatory and lease compliance oversight</li>
                      <li>Documentation and audit support</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Strategic Planning & Ownership Support */}
                <AccordionItem value="strategic" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Strategic Planning & Ownership Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support ownership with forward-looking insight beyond day-to-day operations.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Operating and capital planning support</li>
                      <li>Performance trend analysis</li>
                      <li>Hold / sell / reposition input</li>
                      <li>Coordination with advisory and brokerage services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Optional Closing Line */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                  Our management platform is designed to support stable operations today while preserving flexibility and value for future ownership decisions.
                </p>
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
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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
