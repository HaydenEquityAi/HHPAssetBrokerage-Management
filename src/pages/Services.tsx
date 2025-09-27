import { Link } from 'react-router-dom';
import { Building, Home, Shield, Briefcase, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import multifamilyImage from '@/assets/multifamily-property.webp';
import commercialImage from '@/assets/commercial-building.webp';
import rentalImage from '@/assets/hero-property.jpg';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-hhp-navy mb-8">
              Diversified Institutional Property Management Powered by RentalAi
            </h1>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              HHP Asset Management is a full-stack, multi-asset manager delivering institutional-grade solutions across every major property type. Our vertically integrated model, enhanced by RentalAi technology, enables unmatched efficiency, transparency, and portfolio performance.
            </p>
          </div>
        </div>
      </section>

      {/* Multifamily Portfolio Management */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Multifamily Portfolio Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Enterprise-level management for large-scale apartment communities and multifamily portfolios. Our AI-native platform combines automated leasing optimization, advanced resident retention systems, and institutional-grade financial reporting to maximize property performance and investor returns across multiple markets.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Core Capabilities:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Portfolio-scale operations',
                    'AI-driven leasing',
                    'Predictive maintenance',
                    'Institutional reporting',
                    'Resident lifecycle management'
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
                src={multifamilyImage} 
                alt="Modern multifamily property" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Property Management */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Office Property Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Sophisticated management solutions for office buildings and corporate real estate portfolios. Our enterprise-level approach encompasses strategic leasing, facility optimization, and institutional-grade tenant services that maximize asset value and tenant satisfaction.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Professional Services:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Strategic lease administration',
                    'Facility management systems',
                    'Tenant retention technology',
                    'Capital improvement coordination',
                    'Institutional reporting'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Schedule Office Consultation
              </Link>
            </div>
            
            <div>
              <img 
                src={commercialImage} 
                alt="Modern office building" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial & Warehouse Management */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Industrial & Warehouse Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Specialized management for industrial properties, warehouses, and distribution centers. Our technology-driven approach optimizes operational efficiency, tenant relations, and asset performance across complex industrial portfolios.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Industrial Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Distribution center optimization',
                    'Industrial tenant relations',
                    'Facility maintenance coordination',
                    'Logistics integration',
                    'Performance analytics'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Industrial Portfolio Analysis
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Why Choose HHP for Industrial?</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">99%+</div>
                    <div className="text-hhp-charcoal">Occupancy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">24/7</div>
                    <div className="text-hhp-charcoal">Operations Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">AI-Powered</div>
                    <div className="text-hhp-charcoal">Efficiency Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Property Management */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Retail Property Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Comprehensive management for retail properties, shopping centers, and mixed-use retail developments. Our platform-driven approach maximizes tenant satisfaction, foot traffic, and revenue optimization across diverse retail portfolios.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Retail Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Shopping center management',
                    'Tenant mix optimization',
                    'Foot traffic analytics',
                    'Lease administration',
                    'Marketing coordination'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Retail Portfolio Review
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Retail Performance</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">95%+</div>
                    <div className="text-hhp-charcoal">Tenant Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">AI-Driven</div>
                    <div className="text-hhp-charcoal">Tenant Mix Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Real-Time</div>
                    <div className="text-hhp-charcoal">Performance Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed-Use Development Management */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Mixed-Use Development Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Integrated management for complex mixed-use developments combining residential, retail, office, and hospitality components. Our sophisticated platform coordinates diverse asset types while maximizing overall portfolio performance and tenant synergies.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Mixed-Use Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Multi-asset coordination',
                    'Tenant synergy optimization',
                    'Integrated amenity management',
                    'Cross-asset reporting',
                    'Development oversight'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Mixed-Use Consultation
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Mixed-Use Excellence</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Integrated</div>
                    <div className="text-hhp-charcoal">Asset Management</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Synergistic</div>
                    <div className="text-hhp-charcoal">Tenant Relations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Platform</div>
                    <div className="text-hhp-charcoal">Coordination Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Living Management */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Senior Living Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Specialized management for senior living communities, assisted living facilities, and independent living properties. Our compassionate yet efficient approach ensures resident satisfaction while maintaining operational excellence and regulatory compliance.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Senior Living Solutions:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Resident care coordination',
                    'Healthcare facility management',
                    'Regulatory compliance',
                    'Family communication systems',
                    'Quality assurance programs'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Senior Living Analysis
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Senior Living Care</h3>
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
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Family</div>
                    <div className="text-hhp-charcoal">Communication Portal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUD & Specialized Housing Administration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">HUD & Specialized Housing Administration</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Comprehensive management of affordable housing portfolios with advanced compliance automation and audit-ready documentation. Our proprietary technology ensures seamless Section 8 coordination, LIHTC compliance, and regulatory adherence that exceeds institutional standards.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Specialized Expertise:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Automated compliance systems',
                    'Government program administration',
                    'Institutional-grade audit preparation',
                    'Regulatory technology solutions'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                HUD Compliance Consultation
              </Link>
            </div>
            
            <div className="lg:order-first">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-white mb-6">Compliance Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span className="text-white">100% Audit Compliance Record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span className="text-white">Expert HUD Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span className="text-white">LIHTC Specialization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span className="text-white">Fair Housing Certified</span>
                  </div>
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
            Ready to Transform Your Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of institutional property management with our AI-native platform and full-stack multi-asset expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule Free Property Analysis
            </Link>
            <Link 
              to="/rental-ai" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              See Our Technology Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;