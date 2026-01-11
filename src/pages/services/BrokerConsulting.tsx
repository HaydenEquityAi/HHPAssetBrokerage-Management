import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BrokerConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/broker-record-hero.png)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Broker of Record & Consulting Services
            </h1>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Broker of Record Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Broker of Record Services</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                HHP provides Broker of Record services in Oklahoma for independent commercial brokerages and teams seeking licensed supervision, compliance oversight, and operational support.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-8">
                Our role is to provide regulatory coverage and professional governance while allowing firms to maintain autonomy and focus on their core business.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-2 mb-8">
                {/* 1. Broker Supervision & Oversight */}
                <AccordionItem value="supervision" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Broker Supervision & Oversight
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide licensed supervision consistent with state requirements and industry best practices.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Ongoing broker supervision</li>
                      <li>Associate oversight and guidance</li>
                      <li>Transaction review protocols</li>
                      <li>Regulatory compliance monitoring</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Transaction Review & Risk Management */}
                <AccordionItem value="transaction" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Transaction Review & Risk Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We review transactions to ensure compliance, documentation integrity, and risk mitigation.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Contract and transaction review</li>
                      <li>Compliance verification</li>
                      <li>Risk identification and issue escalation</li>
                      <li>Guidance on complex or non-standard transactions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. License & Regulatory Compliance Support */}
                <AccordionItem value="license" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    License & Regulatory Compliance Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support brokerages in maintaining licensing and regulatory standing.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>License compliance oversight</li>
                      <li>Regulatory guidance and interpretation</li>
                      <li>Support during audits or inquiries</li>
                      <li>Ongoing compliance monitoring</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Policy & Procedure Frameworks */}
                <AccordionItem value="policy" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Policy & Procedure Frameworks
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We help establish clear, defensible operational frameworks.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Brokerage policies and procedures</li>
                      <li>Compliance documentation</li>
                      <li>Governance structure support</li>
                      <li>Ongoing refinement as regulations evolve</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Strategic Support for Brokerage Operations */}
                <AccordionItem value="strategic" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Strategic Support for Brokerage Operations
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide perspective informed by real brokerage operations.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Support during platform transitions</li>
                      <li>Guidance on operational structure</li>
                      <li>Advisory input as needed</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Who Broker of Record Services Are For</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Independent commercial brokerages</li>
                    <li>Specialty firms and niche practices</li>
                    <li>Teams exiting national platforms</li>
                    <li>Brokerages seeking continuity and long-term stability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Why HHP for Broker of Record Services</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal">
                    We understand brokerage operations from the inside. Our approach provides oversight without micromanagement, allowing firms to operate efficiently while remaining compliant and protected.
                  </p>
                </div>
              </div>
            </div>

            {/* Consulting Services */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Consulting Services</h2>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-6">
                HHP provides consulting services for owners, boards, and stakeholders facing operational, governance, or transition-related challenges.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal mb-8">
                Our consulting engagements are targeted, defined in scope, and designed to deliver clarity in complex situations.
              </p>

              <Accordion type="single" collapsible className="w-full space-y-2 mb-8">
                {/* 1. Management Transitions */}
                <AccordionItem value="transitions" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Management Transitions
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support ownership and boards during management changes and organizational transitions.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Transition planning and oversight</li>
                      <li>Interim operational support</li>
                      <li>Risk identification and mitigation</li>
                      <li>Stakeholder coordination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Operational & Financial Reviews */}
                <AccordionItem value="reviews" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Operational & Financial Reviews
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide independent reviews to assess performance and identify improvement opportunities.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Operational assessments</li>
                      <li>Financial performance review</li>
                      <li>Process and structure evaluation</li>
                      <li>Objective findings and recommendations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Board & Ownership Advisory */}
                <AccordionItem value="board" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Board & Ownership Advisory
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We support boards and ownership groups requiring independent perspective.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Board-ready analysis and reporting</li>
                      <li>Third-party validation</li>
                      <li>Strategic input for high-impact decisions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Special Situations & Interim Support */}
                <AccordionItem value="special" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Special Situations & Interim Support
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <p className="text-lg font-semibold leading-relaxed text-hhp-charcoal mb-4">
                      We provide targeted support during complex or time-sensitive situations.
                    </p>
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Special projects</li>
                      <li>Interim leadership or advisory support</li>
                      <li>Short-term, high-impact engagements</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Engagement Style</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Defined scope and objectives</li>
                    <li>Clear deliverables</li>
                    <li>Independent, objective perspective</li>
                    <li>Professional discretion and accountability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Who Consulting Services Are For</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Owners navigating operational or organizational transitions</li>
                    <li>Boards seeking independent, third-party perspective</li>
                    <li>Stakeholders managing complex operational challenges</li>
                    <li>Firms requiring specialized interim support</li>
                  </ul>
                </div>
              </div>
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
                    <span>Independent commercial brokerages</span>
                  </li>
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
                    <span>Brokerages seeking continuity and long-term stability</span>
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
                    <span>Regulatory-first mindset</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Disciplined, non-intrusive oversight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integration with brokerage, advisory, and financial insight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Focus on stability, continuity, and long-term outcomes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Optional Closing Line */}
            <div className="bg-gray-50 border-l-4 border-hhp-navy p-6 rounded">
              <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                Effective governance and advisory support require clarity, discipline, and experienced perspective — particularly during periods of change.
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
              trackButtonClick('explore_services_consulting', 'broker_consulting_cta');
              trackLinkClick('Explore Services or Request Consulting Support', '/contact');
            }}
          >
            Explore Services or Request Consulting Support
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BrokerConsulting;
