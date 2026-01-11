import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
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
          </div>
        </div>
      </section>

      {/* Service Approach Chart */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-premium">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 text-hhp-navy tracking-[0.06em] uppercase">
            OUR PROPERTY MANAGEMENT APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/our-vertically-integrated-approach.png" 
              alt="Our Property Management Approach"
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
            src="/images/property-management-hero.jpg" 
            alt="Property Management"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              PROPERTY MANAGEMENT
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              HHP provides commercial property management services focused on operational control, financial transparency, and long-term asset performance. Our approach is built for owners who want informed oversight, not reactive management.
            </p>
            <div className="pt-8 border-t border-gray-600">
              <h3 className="text-2xl font-bold mb-6 tracking-wide">
                DISCOVER<br/>WHAT WE OFFER
              </h3>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
                onClick={() => {
                  trackButtonClick('contact_us_cta', 'property_management_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With & How We Differ */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
                    <span>Private owners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Partnerships and boards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Owner-users with investment components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Assets requiring hands-on oversight</span>
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
                    <span>Selective portfolio size</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Direct accountability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>No call-center model</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integrated brokerage and advisory insight</span>
                  </li>
                </ul>
              </div>
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
                  trackButtonClick('visit_faq_cta', 'property_management_faq');
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
