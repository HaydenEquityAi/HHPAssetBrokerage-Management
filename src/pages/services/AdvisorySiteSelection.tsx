import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* 1. Site Selection & Relocation Analysis */}
                <AccordionItem value="site-selection" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Site Selection & Relocation Analysis
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We assist tenants, owner-users, and organizations in evaluating location options based on operational, financial, and strategic considerations.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Needs assessment and criteria development</li>
                      <li>Market and submarket evaluation</li>
                      <li>Comparative site analysis</li>
                      <li>Financial impact assessment</li>
                      <li>Support through selection and execution</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Market & Feasibility Studies */}
                <AccordionItem value="feasibility" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Market & Feasibility Studies
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We evaluate market conditions and project feasibility to support informed decision-making.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Market demand and supply analysis</li>
                      <li>Competitive landscape evaluation</li>
                      <li>Use and positioning analysis</li>
                      <li>Preliminary financial feasibility</li>
                      <li>Risk identification and mitigation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Portfolio Review & Optimization */}
                <AccordionItem value="portfolio" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Portfolio Review & Optimization
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We work with owners to assess portfolio performance and identify opportunities for improvement.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Asset-level performance review</li>
                      <li>Portfolio-wide analysis</li>
                      <li>Capital allocation insight</li>
                      <li>Identification of underperforming assets</li>
                      <li>Strategic prioritization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Hold vs. Sell Evaluations */}
                <AccordionItem value="hold-sell" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Hold vs. Sell Evaluations
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide structured analysis to support ownership decisions around disposition timing.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Performance trend analysis</li>
                      <li>Market timing considerations</li>
                      <li>Operational and leasing risk assessment</li>
                      <li>Scenario modeling</li>
                      <li>Objective recommendation support</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Strategic Planning Support */}
                <AccordionItem value="strategic" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Strategic Planning Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support owners and boards with structured planning around real estate strategy.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Long-term real estate planning</li>
                      <li>Alignment with business objectives</li>
                      <li>Capital planning considerations</li>
                      <li>Integration with brokerage and management insight</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Third-Party Validation & Board Support */}
                <AccordionItem value="validation" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Third-Party Validation & Board Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide independent analysis to support governance and stakeholder decision-making.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Board-ready presentations</li>
                      <li>Third-party review and validation</li>
                      <li>Independent perspective for complex decisions</li>
                      <li>Support during critical review processes</li>
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
            OUR ADVISORY & SITE SELECTION APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/our-vertically-integrated-approach.png" 
              alt="Our Advisory & Site Selection Approach"
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
            src="/images/site-selection-hero.jpg" 
            alt="Advisory & Site Selection"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed">
              HHP Asset Management is an operator-led real estate platform combining 
              institutional discipline with hands-on execution. We specialize in vertically 
              integrated asset management, bringing together property management, facilities 
              operations, financial oversight, and strategic advisory under one integrated 
              approach. Our focus is disciplined performance, long-term value creation, and 
              owner-aligned decision-making across every phase of asset ownership.
            </p>
            <div className="pt-8 border-t border-gray-600">
              <h3 className="text-2xl font-bold mb-6 tracking-wide">
                DISCOVER<br/>WHAT WE OFFER
              </h3>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
                onClick={() => {
                  trackButtonClick('contact_us_cta', 'advisory_site_selection_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When Clients Engage Us & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
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

            {/* Who We Work With & How We Differ */}
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
                    <span>Owners navigating operational or organizational transitions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Boards seeking independent, third-party perspective</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Stakeholders managing complex operational challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Firms requiring specialized interim support</span>
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
                    <span>Advisory-first mindset</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>No transactional pressure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integration with brokerage, management, and financial insight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Focus on clarity and decision quality</span>
                  </li>
                </ul>
              </div>
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
                  trackButtonClick('visit_faq_cta', 'advisory_site_selection_faq');
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
