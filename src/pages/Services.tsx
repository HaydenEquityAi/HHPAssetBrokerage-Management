import { Link } from 'react-router-dom';
import { Building, Home, Shield, Briefcase, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import commercialImage from '@/assets/commercial-building.webp';
import rentalImage from '@/assets/hero-property.jpg';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Property & Asset Management — AI-Native Platforms
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Enterprise-level property management and asset services across multifamily, HUD, office, industrial, retail, mixed-use, and senior housing. Our RentalAi and LeaseAi platforms deliver institutional-grade performance with predictive analytics and compliance automation.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Multifamily / HUD (RentalAi) */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Multifamily / HUD (RentalAi)</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Comprehensive multifamily and HUD property management powered by RentalAi. Our platform delivers compliance automation, NOI optimization, and resident lifecycle AI across affordable and market-rate housing portfolios nationwide.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">RentalAi Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated HUD and LIHTC compliance',
                    'Predictive maintenance scheduling',
                    'Resident lifecycle AI and retention',
                    'NOI optimization algorithms',
                    'Real-time financial dashboards',
                    'Audit-ready documentation'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Get Multifamily Analysis
              </Link>
            </div>
            
            <div>
              <img 
                src="/images/multifamily-hero.jpg" 
                alt="Modern multifamily apartment building" 
                loading="eager"
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office / Industrial / Retail (LeaseAi) */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Office / Industrial / Retail (LeaseAi)</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Advanced leasing and property management for office, industrial, and retail properties powered by LeaseAi. Our platform delivers lease compliance, CAM reconciliation, and predictive occupancy analytics across diverse commercial portfolios.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">LeaseAi Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated lease abstraction and analysis',
                    'Renewal probability scoring',
                    'Vacancy forecasting and prevention',
                    'CAM reconciliation automation',
                    'Tenant retention optimization',
                    'Market rent benchmarking'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
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
                alt="Modern commercial property" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Senior & Specialized Housing */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Senior & Specialized Housing</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Specialized management for senior living communities, assisted living facilities, and specialized housing properties. Our institutional-grade approach ensures compliance excellence and retention-focused operations across diverse specialized housing portfolios.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Specialized Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Resident care coordination',
                    'Healthcare facility management',
                    'Regulatory compliance excellence',
                    'Family communication systems',
                    'Quality assurance programs',
                    'Institutional-grade reporting'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Senior Housing Analysis
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Specialized Excellence</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">100%</div>
                    <div className="text-hhp-charcoal">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">24/7</div>
                    <div className="text-hhp-charcoal">Care Coordination</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Institutional</div>
                    <div className="text-hhp-charcoal">Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Our Differentiators</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                What sets HHP apart from traditional property management firms: predictive maintenance, vendor optimization, investor dashboards, and audit-ready reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Building className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Predictive Maintenance</h3>
                  <p className="text-white/90">AI-powered maintenance scheduling reduces costs and improves asset performance</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Vendor Optimization</h3>
                  <p className="text-white/90">Data-driven vendor selection and performance tracking</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Investor Dashboards</h3>
                  <p className="text-white/90">Real-time portfolio performance and financial reporting</p>
                </div>
            </div>
            
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <CheckCircle className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Audit-Ready Reporting</h3>
                  <p className="text-white/90">Institutional-grade documentation and compliance reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-hhp-navy mb-6">
            Ready to Transform Your Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-hhp-charcoal mb-12 max-w-3xl mx-auto">
            Experience the future of asset management with our AI-native RentalAi and LeaseAi platforms and institutional-grade expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-hhp-navy text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy hover:text-white transition-all duration-300 inline-block"
            >
              Explore Our Platforms
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;