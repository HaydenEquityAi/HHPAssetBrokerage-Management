import { Link } from 'react-router-dom';
import { Building, CheckCircle, TrendingUp, Users, Shield, BarChart3 } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import multifamilyImage from '@/assets/multifamily-property.webp';

const ManagementMultifamily = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Multifamily / HUD Management — Powered by RentalAi
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Comprehensive multifamily and HUD property management powered by RentalAi. Our platform delivers compliance automation, NOI optimization, and resident lifecycle AI across affordable and market-rate housing portfolios nationwide.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* RentalAi Capabilities */}
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

              <Link to="/contact" className="btn-hero inline-block">
                Get Multifamily Analysis
              </Link>
            </div>
            
            <div>
              <img 
                src={multifamilyImage} 
                alt="Multifamily property management" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">RentalAi Results</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Proven performance metrics demonstrating the power of our AI-native multifamily management platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <CheckCircle className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">99%+</h3>
                  <p className="text-white/90">Compliance Rate</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <TrendingUp className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">15% Higher</h3>
                  <p className="text-white/90">NOI Growth</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-8 rounded-lg">
                  <BarChart3 className="h-16 w-16 text-hhp-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Predictive</h3>
                  <p className="text-white/90">Operations</p>
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
            Ready to Transform Your Multifamily Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of multifamily management with our AI-native RentalAi platform and institutional-grade expertise.
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
              Explore RentalAi Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagementMultifamily;
