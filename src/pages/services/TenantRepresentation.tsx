import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building2, Target, BarChart3, Users, MapPin, CheckCircle, DollarSign, Calculator, Zap, Globe, TrendingUp, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const TenantRepresentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Space That Works for You
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Occupier strategy, workplace, and growth advisory.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">18%</div>
                <div className="text-white/90">Lease Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">20%</div>
                <div className="text-white/90">Productivity Gains</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('secure_right_space_cta', 'tenant_representation_hero');
                trackLinkClick('Secure the right space', '/contact');
              }}
            >
              Secure the right space
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
                Tenants need advocates. HHP ensures occupiers secure favorable lease terms while aligning 
                locations to workforce and growth strategy.
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
                <Building2 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Portfolio Optimization</h3>
                  <p className="text-hhp-charcoal">Strategic space allocation across multiple locations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Calculator className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Occupancy Cost Modeling</h3>
                  <p className="text-hhp-charcoal">Comprehensive cost analysis and budgeting tools.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Workforce Commute + Sentiment Mapping</h3>
                  <p className="text-hhp-charcoal">Employee location analytics and satisfaction insights.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Globe className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Site Tours + Shortlists</h3>
                  <p className="text-hhp-charcoal">Curated property viewings and comparative analysis.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <FileText className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Lease Negotiation</h3>
                  <p className="text-hhp-charcoal">Expert contract negotiation and terms optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Risk Analysis of Lease Terms</h3>
                  <p className="text-hhp-charcoal">Contract risk assessment and mitigation strategies.</p>
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
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Discovery</h3>
                  <p className="text-hhp-charcoal">Comprehensive needs assessment and business analysis.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Market Scan</h3>
                  <p className="text-hhp-charcoal">Thorough market research and opportunity identification.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Tours/Shortlists</h3>
                  <p className="text-hhp-charcoal">Property visits and comparative site selection.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Financial Modeling</h3>
                  <p className="text-hhp-charcoal">Cost analysis and return on investment projections.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Negotiation</h3>
                  <p className="text-hhp-charcoal">Strategic deal structuring and terms optimization.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Post-Occupancy Review</h3>
                  <p className="text-hhp-charcoal">Performance assessment and continuous optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Data & Tech Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">BrokerAi Lease Comps</h3>
                  <p className="text-hhp-charcoal">Comprehensive lease comparables and market intelligence.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Workforce Commute Analytics</h3>
                  <p className="text-hhp-charcoal">Employee transportation analysis and location optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Zap className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">AI-Powered Lease Clause Benchmarking</h3>
                  <p className="text-hhp-charcoal">Intelligent contract analysis and terms comparison.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Occupancy Analytics Platform</h3>
                  <p className="text-hhp-charcoal">Real-time space utilization and performance tracking.</p>
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
                  "18% savings on relocation."
                </h3>
                <p className="text-hhp-charcoal text-sm">Strategic tenant representation success.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Report
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Future of Workplace Strategy"
                </h3>
                <p className="text-hhp-charcoal text-sm">Occupier trends and strategic insights.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Renewal vs Relocation Cost Model"
                </h3>
                <p className="text-hhp-charcoal text-sm">Financial decision intelligence dashboard.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Thought Piece
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Tenants & Data Advantage"
                </h3>
                <p className="text-hhp-charcoal text-sm">Technology-enabled tenant advocacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Level the playing field.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_tenant_advocacy_cta', 'tenant_representation_banner');
              trackLinkClick('Request Tenant Advocacy', '/contact');
            }}
          >
            Request Tenant Advocacy
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TenantRepresentation;