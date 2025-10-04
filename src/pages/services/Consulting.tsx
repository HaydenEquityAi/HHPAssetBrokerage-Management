import Layout from '@/components/Layout/Layout';
import { ArrowRight, Lightbulb, Shield, BarChart3, Users, Settings, FileText, CheckCircle, TrendingUp } from 'lucide-react';import { Link } from 'react-router-dom';

const Consulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Custom Solutions for Complex Problems
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Tailored strategies, compliance guidance, and special projects.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">12%</div>
                <div className="text-sm text-white/80">NOI Lift</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white/80">HUD Audit Compliance</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Engage HHP Consulting
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
                When challenges don't fit a box, HHP provides consulting that spans compliance, operations, 
                and technology adoption.
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">HUD Compliance Audits</h3>
              <p className="text-hhp-charcoal">Comprehensive compliance reviews and remediation strategies.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Operational Turnarounds</h3>
              <p className="text-hhp-charcoal">Performance improvement strategies and implementation support.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Technology Adoption Advisory</h3>
              <p className="text-hhp-charcoal">Strategic guidance on technology implementation and optimization.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Owner Advisory</h3>
              <p className="text-hhp-charcoal">Hold/sell analysis and strategic portfolio guidance.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Process Reengineering</h3>
              <p className="text-hhp-charcoal">Workflow optimization and operational efficiency improvements.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Bespoke Dashboards + Automations</h3>
              <p className="text-hhp-charcoal">Custom reporting solutions and workflow automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Our Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Discovery</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Data Collection</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Analysis + Benchmarking</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Strategy Design</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Implementation</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-hhp-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Monitoring</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Data & Technology Integration</h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="h-12 w-12 text-hhp-navy mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">HUD Automation</h3>
                <p className="text-hhp-charcoal">Automated compliance tracking and reporting systems.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <BarChart3 className="h-12 w-12 text-hhp-navy mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">Custom Dashboards</h3>
                <p className="text-hhp-charcoal">Tailored reporting and performance monitoring solutions.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <CheckCircle className="h-12 w-12 text-hhp-navy mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">AI Benchmarking Tools</h3>
                <p className="text-hhp-charcoal">Advanced analytics and competitive benchmarking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/insights" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                Case Study
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">NOI up 12% after operational turnaround</h3>
              <ArrowRight className="h-5 w-5 text-hhp-accent" />
            </Link>
            
            <Link to="/insights" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                Report
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">HUD Compliance Simplified</h3>
              <ArrowRight className="h-5 w-5 text-hhp-accent" />
            </Link>
            
            <Link to="/insights" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                Visualization
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Efficiency benchmarking chart</h3>
              <ArrowRight className="h-5 w-5 text-hhp-accent" />
            </Link>
            
            <Link to="/insights" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                Thought Piece
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Consulting in an AI-Driven CRE Market</h3>
              <ArrowRight className="h-5 w-5 text-hhp-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Solve the unsolvable
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Custom consulting solutions for unique real estate challenges.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Request Consulting
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consulting;