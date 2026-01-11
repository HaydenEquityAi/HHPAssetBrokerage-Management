import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Our Role */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Role</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
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
              
              <Accordion type="single" collapsible className="w-full">
                {/* 1. Asset-Level Financial Analysis */}
                <AccordionItem value="asset-analysis" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Asset-Level Financial Analysis
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We evaluate individual assets to provide a clear picture of performance, risks, and opportunities.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Operating income and expense analysis</li>
                      <li>Cash flow evaluation</li>
                      <li>Expense normalization and benchmarking</li>
                      <li>Performance trend analysis</li>
                      <li>Identification of operational inefficiencies</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Budgeting & Forecasting */}
                <AccordionItem value="budgeting" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Budgeting & Forecasting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We assist owners in building realistic budgets and forward-looking projections grounded in market conditions and operational realities.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Annual operating budgets</li>
                      <li>Short- and mid-term forecasts</li>
                      <li>Sensitivity analysis</li>
                      <li>Capital planning support</li>
                      <li>Variance analysis and explanation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Transaction Financial Support */}
                <AccordionItem value="transaction" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Transaction Financial Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We provide financial analysis to support acquisitions, dispositions, leasing decisions, and owner-user transactions.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Financial review of opportunities</li>
                      <li>Assumption validation</li>
                      <li>Lease impact analysis</li>
                      <li>Hold vs. sell modeling</li>
                      <li>Support during due diligence</li>
                    </ul>
                    <p className="text-base leading-relaxed text-gray-600 mt-3 italic">
                      This service is often integrated with our Investment & Capital Markets and Leasing & Representation work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Owner & Board Reporting */}
                <AccordionItem value="reporting" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Owner & Board Reporting
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      We help ownership groups and boards gain clarity through structured, understandable reporting.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Customized reporting formats</li>
                      <li>Performance summaries for stakeholders</li>
                      <li>Board-ready financial presentations</li>
                      <li>Ongoing financial oversight support</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Portfolio-Level Insight */}
                <AccordionItem value="portfolio" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Portfolio-Level Insight
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg font-semibold leading-relaxed text-gray-600 mb-3">
                      For owners with multiple assets, we provide consolidated views to support portfolio strategy.
                    </p>
                    <p className="text-base font-medium text-gray-600 mb-2">Includes:</p>
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Portfolio performance reviews</li>
                      <li>Asset comparison and prioritization</li>
                      <li>Capital allocation insight</li>
                      <li>Long-term planning support</li>
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
          <h2 className="section-title text-hhp-navy mb-6">
            OUR FINANCIAL SERVICES APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/our-vertically-integrated-approach.png" 
              alt="Our Financial Services Approach"
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
            src="/images/financial-services-hero.jpg" 
            alt="Financial Services"
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
                  trackButtonClick('contact_us_cta', 'financial_services_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work & Who We Work With */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* How We Work */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Work</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-600 list-disc list-inside">
                <li>Defined scope and objectives</li>
                <li>Transparent assumptions</li>
                <li>Clear, decision-ready outputs</li>
                <li>Coordination with CPAs, lenders, and legal advisors as appropriate</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                Our goal is to support better decisions — not to replace existing professional advisors.
              </p>
            </div>

            {/* Who We Work With & How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Work</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-600 list-disc list-inside">
                <li>Defined scope and objectives</li>
                <li>Transparent assumptions</li>
                <li>Clear, decision-ready outputs</li>
                <li>Coordination with CPAs, lenders, and legal advisors as appropriate</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-600 mt-4">
                Our goal is to support better decisions — not to replace existing professional advisors.
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
                <ul className="space-y-3 text-gray-600">
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
                    <span>Boards and fiduciaries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Owner-users with investment components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Clients seeking clarity before major decisions</span>
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
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Real estate-focused analysis (not generic financial advice)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integration with operations, brokerage, and advisory insight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Clear, decision-ready outputs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Support for better decisions without replacing existing advisors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important Disclosure */}
            <div className="bg-gray-50 border-l-4 border-hhp-navy p-6 rounded">
              <h2 className="section-title text-hhp-navy mb-4">Important Disclosure</h2>
              <div className="space-y-3 text-lg leading-relaxed text-gray-600">
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
                  trackButtonClick('visit_faq_cta', 'financial_services_faq');
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
