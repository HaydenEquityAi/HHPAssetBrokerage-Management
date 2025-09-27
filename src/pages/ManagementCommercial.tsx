import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import commercialImage from '@/assets/commercial-building.webp';

const ManagementCommercial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Office / Industrial / Retail Management — Powered by LeaseAi
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Advanced leasing and property management for office, industrial, and retail properties powered by LeaseAi. Our platform delivers lease compliance, CAM reconciliation, and predictive occupancy analytics across diverse commercial portfolios.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* LeaseAi Capabilities */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
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

              <Link to="/contact" className="btn-hero inline-block">
                Schedule Commercial Consultation
              </Link>
            </div>
            
            <div>
              <img 
                src={commercialImage} 
                alt="Commercial property management" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Asset Classes We Manage</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Comprehensive management solutions across all major commercial asset types.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <Building className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Office Buildings</h3>
                  <p className="text-white/90">Class A, B, and C office properties with strategic leasing and tenant retention</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <TrendingUp className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Industrial Properties</h3>
                  <p className="text-white/90">Warehouses, distribution centers, and manufacturing facilities</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <BarChart3 className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Retail Properties</h3>
                  <p className="text-white/90">Shopping centers, strip malls, and standalone retail buildings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">LeaseAi Impact</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Measurable results from our AI-powered commercial leasing platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <TrendingUp className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-2">90% Faster</h3>
                  <p className="text-hhp-charcoal">Lease Processing</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <Users className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-2">25% Higher</h3>
                  <p className="text-hhp-charcoal">Tenant Retention</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <Target className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-hhp-navy mb-2">AI-Driven</h3>
                  <p className="text-hhp-charcoal">Occupancy Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Optimize Your Commercial Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of commercial property management with our AI-native LeaseAi platform and institutional-grade expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore LeaseAi Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagementCommercial;
