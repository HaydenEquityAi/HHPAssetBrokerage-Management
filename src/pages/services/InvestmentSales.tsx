import Layout from '@/components/Layout/Layout';
import { ArrowRight, DollarSign, TrendingUp, Target, BarChart3, Users, FileText, CheckCircle, Globe, Building2, Zap, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const InvestmentSales = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Unlock Liquidity with Precision
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Dispositions, capital markets, and valuation services.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">9 Offers</div>
                <div className="text-white/90">in 30 Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">$85M</div>
                <div className="text-white/90">Sold in 2025</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('sell_with_confidence_cta', 'investment_sales_hero');
                trackLinkClick('Sell with confidence', '/contact');
              }}
            >
              Sell with confidence
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
                Selling an asset requires more than valuation — it requires strategic positioning and investor targeting. 
                HHP leverages institutional valuation methods with AI-driven campaigns that put your asset in front of the right buyers.
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
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">BOVs with NOI and Cap Rate Benchmarking</h3>
                  <p className="text-hhp-charcoal">Comprehensive valuation analysis with market comparables.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Investor Outreach Segmented by Appetite</h3>
                  <p className="text-hhp-charcoal">Targeted buyer identification and engagement strategies.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Globe className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Marketing Execution</h3>
                  <p className="text-hhp-charcoal">OMs, microsites, campaigns with professional presentation.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Transaction Management</h3>
                  <p className="text-hhp-charcoal">Complete oversight from LOI to closing.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Building2 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Capital Introductions</h3>
                  <p className="text-hhp-charcoal">Debt, equity, and JV partner connections.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Calculator className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Predictive Valuation Scenarios</h3>
                  <p className="text-hhp-charcoal">AI-powered valuation modeling with market dynamics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">
            Our Process
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Asset Valuation</h3>
                  <p className="text-hhp-charcoal">NOI/cap rate analysis with comprehensive market data.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Go-to-Market Strategy</h3>
                  <p className="text-hhp-charcoal">Define investor pool and positioning strategy.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Marketing</h3>
                  <p className="text-hhp-charcoal">Campaigns + OMs with professional presentation materials.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Buyer Engagement</h3>
                  <p className="text-hhp-charcoal">AI prospect prioritization and targeted outreach.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Transaction Oversight</h3>
                  <p className="text-hhp-charcoal">Compliance, diligence, and due process management.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-havy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Closing</h3>
                  <p className="text-hhp-charcoal">Execution + reporting with comprehensive documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">
            Data & Tech Integration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">BrokerAi Cap Rate Curves</h3>
                  <p className="text-hhp-charcoal">Advanced comp analysis and market trend tracking.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Calculator className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Predictive Valuation</h3>
                  <p className="text-hhp-charcoal">Tied to rates with scenario modeling.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Target className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Campaign CTR Analytics</h3>
                  <p className="text-hhp-charcoal">Click-through rates and engagement metrics.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Lead Analytics Platform</h3>
                  <p className="text-hhp-charcoal">Comprehensive buyer behavior and interest tracking.</p>
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
                  "Nine offers in 30 days"
                </h3>
                <p className="text-hhp-charcoal text-sm">Strategic positioning success story.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Report
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Rates & CRE Valuations"
                </h3>
                <p className="text-hhp-charcoal text-sm">Market analysis and impact assessment.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Cap Rate Spreads"
                </h3>
                <p className="text-hhp-charcoal text-sm">Market trend visualization dashboard.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Thought Piece
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Liquidity in Tight Markets"
                </h3>
                <p className="text-hhp-charcoal text-sm">Market conditions and strategy insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Maximize your disposition outcomes.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_valuation_support_cta', 'investment_sales_banner');
              trackLinkClick('Request Valuation Support', '/contact');
            }}
          >
            Request Valuation Support
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );  // <-- ADD THIS LINE (closing parenthesis and semicolon)
};

export default InvestmentSales;  // <-- ADD THIS LINE if it's missing