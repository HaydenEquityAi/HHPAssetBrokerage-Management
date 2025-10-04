import Layout from '@/components/Layout/Layout';
import { ArrowRight, Target, Building2, BarChart3, TrendingUp, DollarSign, CheckCircle, Calculator, Zap, Globe, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Acquisitions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Smarter Deals, Stronger Portfolios
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Strategic sourcing, underwriting, and deal structuring.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">2,500</div>
                <div className="text-white/90">Deals Screened</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">$500M</div>
                <div className="text-white/90">Evaluated in 2025</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('source_better_deals_cta', 'acquisitions_hero');
                trackLinkClick('Source better deals with HHP', '/contact');
              }}
            >
              Source better deals with HHP
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
                Finding the right deal requires discipline. HHP sources and underwrites opportunities with AI models 
                that uncover risk and opportunity with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Target className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Off-Market Pipeline Sourcing</h3>
                  <p className="text-hhp-charcoal">Exclusive opportunity identification and deal origination.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Calculator className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Underwriting Models with Stress Tests</h3>
                  <p className="text-hhp-charcoal">Comprehensive financial analysis and risk assessment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Shield className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Scenario-Based Risk Scoring</h3>
                  <p className="text-hhp-charcoal">AI-powered risk evaluation and opportunity ranking.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Building2 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">JV Structuring</h3>
                  <p className="text-hhp-charcoal">Joint venture formation and partnership optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Capital Introductions</h3>
                  <p className="text-hhp-charcoal">Strategic investor connections and funding optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Market Entry Alignment</h3>
                  <p className="text-hhp-charcoal">Strategic market analysis and entry optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Our Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Deal Sourcing</h3>
                  <p className="text-hhp-charcoal">Off-market opportunity identification and pipeline development.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Screening</h3>
                  <p className="text-hhp-charcoal">Initial opportunity evaluation and qualification.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Underwriting</h3>
                  <p className="text-hhp-charcoal">Comprehensive financial analysis and risk assessment.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Capital Alignment</h3>
                  <p className="text-hhp-charcoal">Funding strategy and investor coordination.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Structuring</h3>
                  <p className="text-hhp-charcoal">Deal structure optimization and partnership formation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Closing</h3>
                  <p className="text-hhp-charcoal">Transaction execution and portfolio integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Data & Tech</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">BrokerAi Comps + Sales Velocity</h3>
                  <p className="text-hhp-charcoal">Market comparables and transaction speed analysis.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">IRR and Sensitivity Dashboards</h3>
                  <p className="text-hhp-charcoal">Investment return modeling and scenario analysis.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Globe className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Growth Heatmaps</h3>
                  <p className="text-hhp-charcoal">Market growth potential and opportunity mapping.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Zap className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Deal Scoring Platform</h3>
                  <p className="text-hhp-charcoal">AI-powered opportunity evaluation and ranking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Case Study
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Avoided failed deal via underwriting discipline."
                </h3>
                <p className="text-hhp-charcoal text-sm">Risk mitigation success story.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Report
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Cap Rate Forecast 2026"
                </h3>
                <p className="text-hhp-charcoal text-sm">Market outlook and valuation trends.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "NOI vs Cap_rate Model"
                </h3>
                <p className="text-hhp-charcoal text-sm">Investment analysis dashboard.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Thought Piece
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "AI in Acquisitions"
                </h3>
                <p className="text-hhp-charcoal text-sm">Technology transformation insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Don't just buy — buy right.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_acquisitions_advisory_cta', 'acquisitions_banner');
              trackLinkClick('Request Acquisitions Advisory', '/contact');
            }}
          >
            Request Acquisitions Advisory
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Acquisitions;