import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building2, MapPin, Calculator, FileText, Wrench, Link as LinkIcon, CheckCircle, Target, Users, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const DevelopmentAdvisory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/development-advisory-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              Development Advisory
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8 drop-shadow-md">
              Strategic Guidance from Concept Through Execution
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-8 drop-shadow-md">
              HHP provides development advisory services to owners and developers seeking structured insight during the planning, feasibility, and execution phases of commercial real estate projects.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('discuss_development_project_cta', 'development_advisory_hero');
                trackLinkClick('Discuss a Project', '/contact');
              }}
            >
              Discuss a Project
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 text-center">Our Advisory Role</h2>
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Our role is to help clients evaluate risk, test assumptions, and make informed decisions before and during capital deployment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Development projects carry layered risk — market, entitlement, financial, and execution-related.
              </p>
              <p className="text-lg leading-relaxed">
                HHP acts as an advisor and coordinator, helping clients understand feasibility, evaluate alternatives, and navigate complexity with discipline and clarity.
              </p>
              <p className="text-lg leading-relaxed mt-6 font-semibold text-hhp-navy">
                We advise and support — we do not speculate or self-develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Development Advisory Functions */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Core Development Advisory Functions</h2>
          
          <div className="space-y-8">
            {/* Market Feasibility Analysis */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Market Feasibility Analysis</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We assess market conditions to determine whether proposed projects are supportable.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Market demand and absorption analysis
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Competitive project review
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Use and positioning analysis
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Preliminary risk assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Site Evaluation & Positioning */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Site Evaluation & Positioning</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We evaluate sites based on location, access, constraints, and long-term viability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Site and location analysis
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Access, visibility, and infrastructure considerations
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Zoning and use review
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Positioning recommendations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preliminary Financial Modeling */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Calculator className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Preliminary Financial Modeling</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We support early-stage financial evaluation to test assumptions and identify sensitivities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        High-level development modeling
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Cost and revenue assumptions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Sensitivity and scenario analysis
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Capital requirement evaluation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entitlement & Planning Coordination */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <FileText className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Entitlement & Planning Coordination</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We coordinate with planning professionals and stakeholders during entitlement and pre-development phases.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Coordination with planners, architects, and engineers
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Support during entitlement processes
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Timeline and process oversight
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Risk identification during approvals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Advisory & Oversight */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Wrench className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Execution Advisory & Oversight</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We provide advisory support during execution to help manage risk and maintain alignment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Advisory support during construction and delivery
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Coordination with consultants and third parties
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Issue identification and resolution support
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Alignment with leasing and operations strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration with Leasing, Operations & Exit Strategy */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <LinkIcon className="h-8 w-8 text-hhp-navy" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-4">Integration with Leasing, Operations & Exit Strategy</h3>
                  <p className="text-hhp-charcoal mb-4">
                    We ensure development decisions support long-term performance and exit flexibility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Leasing strategy alignment
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Operational readiness considerations
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Exit and hold strategy evaluation
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        Integration with brokerage and advisory services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Clients & How We Differ */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Ideal Clients */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-hhp-navy" />
                </div>
                <h2 className="section-title text-hhp-navy">Ideal Clients</h2>
              </div>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>First-time developers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Owner-users pursuing development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Investors evaluating development risk</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Owners seeking third-party development insight</span>
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
                  <span>Advisory-only role — no speculative development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Disciplined, assumption-driven analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Integration with leasing, management, and capital markets insight</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                  <span>Clear communication throughout complex processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed text-hhp-charcoal font-medium">
              Development success depends on disciplined planning, realistic assumptions, and informed execution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Ready to discuss your development project?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('discuss_development_project_cta', 'development_advisory_banner');
              trackLinkClick('Discuss a Project', '/contact');
            }}
          >
            Discuss a Project
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentAdvisory;
