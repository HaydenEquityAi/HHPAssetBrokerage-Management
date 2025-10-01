import { Link } from 'react-router-dom';
import { Bot, Building, TrendingUp, CheckCircle, ArrowRight, Zap, BarChart3, Users, Target, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout/Layout';

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Technology That Lowers Cost and Increases Control
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Our proprietary AI platforms deliver institutional-grade performance and set us apart from traditional firms. Experience the future of real estate with BrokerAi, RentalAi, and LeaseAi.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Explore Our Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Pillar Ecosystem Overview */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Our AI-Native Platform Ecosystem</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Three integrated platforms working together to deliver comprehensive real estate services with institutional-grade efficiency and performance.
              </p>
            </div>

            {/* 3-Pillar Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* BrokerAi */}
              <div className="text-center">
                <div className="bg-gray-200 text-hhp-navy p-8 rounded-lg shadow-elegant hover-lift">
                  <Bot className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-4">BrokerAi</h3>
                  <p className="text-hhp-charcoal mb-6">Transaction cycle platform for investment sales, leasing, and capital markets</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">AI deal-matching</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Automated underwriting</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">CRM integration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RentalAi */}
              <div className="text-center">
                <div className="bg-gray-200 text-hhp-navy p-8 rounded-lg shadow-elegant hover-lift">
                  <Building className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-4">RentalAi</h3>
                  <p className="text-hhp-charcoal mb-6">Multifamily/HUD property management platform with compliance automation</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Predictive operations</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Resident lifecycle AI</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Compliance automation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LeaseAi */}
              <div className="text-center">
                <div className="bg-gray-200 text-hhp-navy p-8 rounded-lg shadow-elegant hover-lift">
                  <TrendingUp className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-4">LeaseAi</h3>
                  <p className="text-hhp-charcoal mb-6">Office, industrial, retail leasing SaaS with advanced analytics</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Lease abstraction</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Renewal scoring</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-hhp-accent" />
                      <span className="text-hhp-charcoal">Vacancy forecasting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Integration */}
            <div className="text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Integrated Ecosystem</h3>
                <p className="text-hhp-charcoal max-w-3xl mx-auto">
                  All three platforms work together seamlessly, sharing data and insights to provide a comprehensive view of your real estate portfolio and maximize performance across all asset classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BrokerAi Deep Dive */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">BrokerAi Platform</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Our comprehensive transaction cycle platform revolutionizes how we approach investment sales, leasing, and capital markets. BrokerAi combines AI-powered deal matching, automated underwriting, and predictive analytics to accelerate transactions and maximize value.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Core Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'AI-powered buyer and tenant matching',
                    'Automated underwriting and risk assessment',
                    'Predictive market analysis and pricing',
                    'Transaction timeline optimization',
                    'CRM integration and client management',
                    'Due diligence automation'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/brokerage" className="btn-hero inline-block">
                Explore Brokerage Services
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">BrokerAi Performance</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">50% Faster</div>
                    <div className="text-hhp-charcoal">Transaction Velocity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">95% Accuracy</div>
                    <div className="text-hhp-charcoal">Deal Matching</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">AI-Powered</div>
                    <div className="text-hhp-charcoal">Risk Assessment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RentalAi Deep Dive */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">RentalAi Platform</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                The most advanced multifamily and HUD property management platform available. RentalAi automates compliance, optimizes NOI, and manages the complete resident lifecycle with predictive analytics and institutional-grade reporting.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Advanced Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated HUD and LIHTC compliance',
                    'Predictive maintenance scheduling',
                    'Resident lifecycle AI and retention',
                    'NOI optimization algorithms',
                    'Real-time financial dashboards',
                    'Audit-ready documentation'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/management" className="btn-hero inline-block">
                Explore Management Services
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">RentalAi Results</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">99%+</div>
                    <div className="text-hhp-charcoal">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">15% Higher</div>
                    <div className="text-hhp-charcoal">NOI Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Predictive</div>
                    <div className="text-hhp-charcoal">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LeaseAi Deep Dive */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">LeaseAi Platform</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Specialized SaaS platform for office, industrial, and retail leasing operations. LeaseAi streamlines lease administration, provides predictive occupancy analytics, and optimizes tenant relationships with AI-powered insights.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Leasing Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated lease abstraction and analysis',
                    'Renewal probability scoring',
                    'Vacancy forecasting and prevention',
                    'CAM reconciliation automation',
                    'Tenant retention optimization',
                    'Market rent benchmarking'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/management" className="btn-hero inline-block">
                Explore Leasing Services
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">LeaseAi Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">90% Faster</div>
                    <div className="text-hhp-charcoal">Lease Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">25% Higher</div>
                    <div className="text-hhp-charcoal">Tenant Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">AI-Driven</div>
                    <div className="text-hhp-charcoal">Occupancy Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">How Technology Integrates with Our Services</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our technology platforms seamlessly integrate with asset management and brokerage services to deliver comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                Work-Order Automation Systems
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                Automated work order generation, vendor dispatch, and completion tracking with predictive maintenance scheduling.
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                Vendor Scorecard Tracking
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                Real-time vendor performance monitoring with automated scoring and quality assurance protocols.
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                AI-Powered Document Abstraction
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                Automated lease abstraction, contract analysis, and document processing with 99%+ accuracy.
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                Compliance Dashboards
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                Real-time compliance monitoring with automated reporting and audit preparation for HUD and LIHTC properties.
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                Real-Time P&L Rollups
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                Automated financial reporting with real-time P&L consolidation and performance analytics across portfolios.
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                Predictive Analytics
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                AI-driven insights for vacancy forecasting, rent optimization, and tenant retention strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Licensing */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-8">SaaS Licensing Opportunities</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Our proprietary AI platforms are available for licensing to institutional operators nationwide. Bring enterprise-grade technology to your portfolio with our proven SaaS solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Zap className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-white/90">Quick implementation with minimal disruption to existing operations</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Proven ROI</h3>
                  <p className="text-white/90">Measurable performance improvements and cost savings</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Users className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Ongoing Support</h3>
                  <p className="text-white/90">Comprehensive training and technical support</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn-hero">
              Learn About Licensing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Discover how our proprietary AI ecosystem can transform your real estate operations and deliver institutional-grade performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Talk to HHP
            </Link>
            <Link 
              to="/asset-management" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
