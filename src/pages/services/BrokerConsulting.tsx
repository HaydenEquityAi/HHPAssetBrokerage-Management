import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const BrokerConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/broker-consulting-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Broker of Record & Consulting Services
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Regulatory Excellence and Expert Guidance
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              HHP provides integrated Broker of Record services and consulting support for brokerages, ownership groups, and stakeholders navigating regulatory requirements, operational complexity, and organizational transitions.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-12 drop-shadow-md">
              Our approach emphasizes compliance, clarity, and disciplined oversight, delivered without unnecessary bureaucracy or interference.
            </p>
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

              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">1. Broker Supervision & Oversight</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We provide licensed supervision consistent with state requirements and industry best practices.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Ongoing broker supervision</li>
                    <li>Associate oversight and guidance</li>
                    <li>Transaction review protocols</li>
                    <li>Regulatory compliance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">2. Transaction Review & Risk Management</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We review transactions to ensure compliance, documentation integrity, and risk mitigation.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Contract and transaction review</li>
                    <li>Compliance verification</li>
                    <li>Risk identification and issue escalation</li>
                    <li>Guidance on complex or non-standard transactions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">3. License & Regulatory Compliance Support</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We support brokerages in maintaining licensing and regulatory standing.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>License compliance oversight</li>
                    <li>Regulatory guidance and interpretation</li>
                    <li>Support during audits or inquiries</li>
                    <li>Ongoing compliance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">4. Policy & Procedure Frameworks</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We help establish clear, defensible operational frameworks.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Brokerage policies and procedures</li>
                    <li>Compliance documentation</li>
                    <li>Governance structure support</li>
                    <li>Ongoing refinement as regulations evolve</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">5. Strategic Support for Brokerage Operations</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We provide perspective informed by real brokerage operations.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Support during platform transitions</li>
                    <li>Guidance on operational structure</li>
                    <li>Advisory input as needed</li>
                  </ul>
                </div>
              </div>

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

              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">1. Management Transitions</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We support ownership and boards during management changes and organizational transitions.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Transition planning and oversight</li>
                    <li>Interim operational support</li>
                    <li>Risk identification and mitigation</li>
                    <li>Stakeholder coordination</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">2. Operational & Financial Reviews</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We provide independent reviews to assess performance and identify improvement opportunities.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Operational assessments</li>
                    <li>Financial performance review</li>
                    <li>Process and structure evaluation</li>
                    <li>Objective findings and recommendations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">3. Board & Ownership Advisory</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We support boards and ownership groups requiring independent perspective.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Board-ready analysis and reporting</li>
                    <li>Third-party validation</li>
                    <li>Strategic input for high-impact decisions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">4. Special Situations & Interim Support</h3>
                  <p className="text-lg leading-relaxed text-hhp-charcoal mb-3">
                    We provide targeted support during complex or time-sensitive situations.
                  </p>
                  <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                    <li>Special projects</li>
                    <li>Interim leadership or advisory support</li>
                    <li>Short-term, high-impact engagements</li>
                  </ul>
                </div>
              </div>

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

            {/* How We Differ */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">How We Differ</h2>
              <ul className="space-y-2 text-lg leading-relaxed text-hhp-charcoal list-disc list-inside">
                <li>Regulatory-first mindset</li>
                <li>Disciplined, non-intrusive oversight</li>
                <li>Integration with brokerage, advisory, and financial insight</li>
                <li>Focus on stability, continuity, and long-term outcomes</li>
              </ul>
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
