import Layout from '@/components/Layout/Layout';
import { ArrowRight, Brain, BarChart3, Building2, Users, DollarSign, Clock, CheckCircle, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const AiPlatforms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Proprietary AI Platforms Transforming Real Estate
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              From acquisitions to tenant retention, HHP's suite of proprietary AI engines accelerates 
              decision-making, eliminates inefficiencies, and drives institutional-level performance 
              across every asset class.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('request_demo_cta', 'ai_platforms_hero');
                trackLinkClick('Request a Demo', '/contact');
              }}
            >
              Request a Demo
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 text-center">Overview</h2>
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Unlike traditional firms that rely on static reports or generic SaaS tools, HHP has 
                engineered vertical-specific AI platforms that continuously learn from proprietary and 
                market data. Each platform is embedded into daily operations, producing real-time, 
                predictive, and prescriptive insights that give clients an edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platforms */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Core Platforms</h2>
          
          <div className="space-y-8">
            {/* BrokerAi */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-hhp-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">BrokerAi — Deal Intelligence Engine</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Automated valuation models with live market comps, cap rate trending, and sensitivity analysis.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Predictive deal scoring:</strong> ranks opportunities based on NOI growth potential, market absorption, and investor risk tolerance.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Live valuation models</strong> with cap rate trending and sensitivity analysis.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Instant underwriting models</strong> with AI-generated offering memoranda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LeaseAi */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Building2 className="h-8 w-8 text-hhp-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">LeaseAi — Portfolio & Leasing Optimizer</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Predictive rent roll modeling with scenario-based vacancy and renewal simulations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Smart prospect targeting:</strong> AI identifies high-probability tenants and matches them to spaces.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Scenario modeling</strong> with vacancy and renewal simulations.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Digital leasing assistant</strong> that automates scheduling, LOIs, and document workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RentalAi */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Users className="h-8 w-8 text-hhp-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">RentalAi — Multifamily Performance Suite</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Rent optimization using demand signals, local comps, and seasonality.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Tenant retention engine</strong> predicting turnover 90+ days in advance.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Dynamic rent optimization</strong> using demand signals and local comps.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>AI-driven maintenance prioritization</strong> for lower operating costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CapitalAi */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-hhp-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-hhp-navy mb-2">CapitalAi — Financial Automation Hub</h3>
                  <p className="text-lg text-hhp-charcoal mb-4">
                    Continuous variance tracking across budgets, forecasts, and actuals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Automated reconciliations</strong> integrated with Yardi, RealPage, Oracle, and Dayforce.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-hhp-accent mr-3 mt-1 flex-shrink-0" />
                      <p className="text-sm text-hhp-charcoal">
                        <strong>Predictive forecasting models:</strong> interest rate scenarios, NOI sensitivity, refinance timing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Why It Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Speed</h3>
              <p className="text-hhp-charcoal">Insights delivered instantly, not weeks later.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Precision</h3>
              <p className="text-hhp-charcoal">Models trained specifically on real estate data, not generalized AI.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Value Creation</h3>
              <p className="text-hhp-charcoal">Higher NOI, lower costs, faster leasing cycles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Transparency</h3>
              <p className="text-hhp-charcoal">Dashboards and reports built for boards, lenders, and investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Tab Examples */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights Tab Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Case Study
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "BrokerAi reduced underwriting time by 70% across a $100M multifamily pipeline."
              </h3>
              <p className="text-hhp-charcoal">
                Real-world results from our AI-powered deal intelligence platform.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                Whitepaper
              </span>
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">
                "Lease Optimization in the Age of Predictive AI"
              </h3>
              <p className="text-hhp-charcoal">
                Comprehensive analysis of AI-driven leasing strategies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Ready to transform your real estate operations with AI?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_demo_cta', 'ai_platforms_banner');
              trackLinkClick('Request a Demo', '/contact');
            }}
          >
            Request a Demo
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AiPlatforms;