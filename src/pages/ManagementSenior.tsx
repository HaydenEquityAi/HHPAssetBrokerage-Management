import { Link } from 'react-router-dom';
import { Building, CheckCircle, Users, Heart, Shield, BarChart3 } from 'lucide-react';
import Layout from '@/components/Layout/Layout';

const ManagementSenior = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Senior & Specialized Housing Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Specialized management for senior living communities, assisted living facilities, and specialized housing properties. Our institutional-grade approach ensures compliance excellence and retention-focused operations across diverse specialized housing portfolios.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Specialized Expertise</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Our specialized housing management combines compassionate care with institutional-grade operations. We understand the unique requirements of senior living, assisted living, and specialized housing communities, ensuring both resident satisfaction and operational excellence.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Core Services:</h3>
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

      {/* Housing Types */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Housing Types We Manage</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Comprehensive management solutions for diverse specialized housing communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <Heart className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Independent Living</h3>
                  <p className="text-white/90">Active senior communities with comprehensive amenities and services</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <Users className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Assisted Living</h3>
                  <p className="text-white/90">Supportive care communities with personalized assistance programs</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <Shield className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-xl font-display font-semibold text-white mb-4">Memory Care</h3>
                  <p className="text-white/90">Specialized communities for residents with cognitive challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Quality */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Compliance & Quality Excellence</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Our institutional-grade approach ensures the highest standards of care and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-2">Regulatory Compliance</h3>
                  <p className="text-hhp-charcoal text-sm">100% compliance with state and federal regulations</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-2">Quality Assurance</h3>
                  <p className="text-hhp-charcoal text-sm">Continuous monitoring and improvement programs</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-2">Family Communication</h3>
                  <p className="text-hhp-charcoal text-sm">Transparent reporting and regular family updates</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-2">Resident Satisfaction</h3>
                  <p className="text-hhp-charcoal text-sm">High satisfaction rates and resident retention</p>
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
            Ready to Enhance Your Senior Housing Community?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience institutional-grade management for your senior living community with our specialized expertise and compassionate approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/management" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore All Management Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagementSenior;
