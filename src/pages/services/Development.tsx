import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building2, Users, TrendingUp, BarChart3, CheckCircle, Target, Zap, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Development = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              From Dirt to Delivery, Done Right
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Site planning, entitlements, and ground-up execution.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">30%</div>
                <div className="text-white/90">Faster Permits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-white/90">On-Budget Delivery</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('develop_with_hhp_cta', 'development_hero');
                trackLinkClick('Develop with HHP', '/contact');
              }}
            >
              Develop with HHP
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
                HHP manages every stage of development, from feasibility to lease-up, with AI forecasts, 
                entitlement dashboards, and transparent cost controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Feasibility Studies</h3>
                  <p className="text-hhp-charcoal">Comprehensive market analysis and financial modeling.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Entitlement Tracking</h3>
                  <p className="text-hhp-charcoal">Streamlined permit processes and regulatory compliance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Building2 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Design Coordination</h3>
                  <p className="text-hhp-charcoal">Architectural oversight and design optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">GC/CM Oversight</h3>
                  <p className="text-hhp-charcoal">Construction management and contractor coordination.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Lease-up Absorption Models</h3>
                  <p className="text-hhp-charcoal">AI-powered market demand and absorption forecasting.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Target className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Risk + Budget Controls</h3>
                  <p className="text-hhp-charcoal">Comprehensive risk management and budget monitoring.</p>
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
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Feasibility</h3>
                  <p className="text-hhp-charcoal">Market analysis, financial modeling, and risk assessment.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Entitlement</h3>
                  <p className="text-hhp-charcoal">Streamlined permitting and regulatory approval processes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Design</h3>
                  <p className="text-hhp-charcoal">Architectural coordination and design optimization.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Construction</h3>
                  <p className="text-hhp-charcoal">Project management and construction oversight.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Lease-up</h3>
                  <p className="text-hhp-charcoal">AI-powered absorption and tenant acquisition.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Stabilization</h3>
                  <p className="text-hhp-charcoal">Performance optimization and operational handoff.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Data & Technology Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">LeaseAi Absorption Forecasts</h3>
                  <p className="text-hhp-charcoal">Predictive market demand analysis and absorption insights.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <DollarSign className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Construction Inflation Modeling</h3>
                  <p className="text-hhp-charcoal">Advanced cost forecasting and budget optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Project Dashboards with Alerts</h3>
                  <p className="text-hhp-charcoal">Real-time monitoring and automated notifications.</p>
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
                  "Entitlements cut permitting 30%."
                </h3>
                <p className="text-hhp-charcoal text-sm">Streamlined approval process results.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Report
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Construction Cost Trends."
                </h3>
                <p className="text-hhp-charcoal text-sm">Market intelligence and cost analysis.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Absorption Curves."
                </h3>
                <p className="text-hhp-charcoal text-sm">Visualizing market demand patterns.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Thought Piece
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Future of Development."
                </h3>
                <p className="text-hhp-charcoal text-sm">Innovation insights and industry trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            De-risk your projects.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_development_support_cta', 'development_banner');
              trackLinkClick('Request Development Support', '/contact');
            }}
          >
            Request Development Support
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Development;