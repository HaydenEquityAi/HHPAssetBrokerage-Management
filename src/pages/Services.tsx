import { Link } from 'react-router-dom';
import { Building, Home, Shield, Briefcase, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import multifamilyImage from '@/assets/multifamily-property.webp';
import commercialImage from '@/assets/commercial-building.webp';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-hhp-navy mb-8">
              Comprehensive Property Management Services
            </h1>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              From single-family homes to large multifamily complexes, HHP Asset Management delivers expert property management solutions across all asset classes in Oklahoma.
            </p>
          </div>
        </div>
      </section>

      {/* Multifamily Property Management */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Multifamily Property Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                We specialize in the management of large-scale apartment communities, delivering systems that maximize occupancy and resident satisfaction. From day-to-day operations and amenity management to advanced leasing strategies and retention programs, we ensure multifamily assets operate at peak performance and deliver consistent returns.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Key Services Include:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Large-scale apartment complex management and daily operations',
                    'Community amenity management and facility oversight',
                    'Advanced leasing strategies and resident retention programs',
                    'Comprehensive financial reporting and performance optimization',
                    'Property marketing and vacancy minimization strategies',
                    'Professional resident screening and background verification',
                    'Maintenance coordination and emergency response services',
                    'Lease administration and renewal management'
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

      {/* HUD & Specialized Housing */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">HUD & Specialized Housing Services</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Managing affordable housing requires precision, compliance, and experience. HHP Asset Management provides expert administration of HUD and Section 8 housing programs, as well as Low-Income Housing Tax Credit (LIHTC) properties. We handle complex regulations, audits, and reporting requirements with accuracy, ensuring both compliance and strong resident outcomes.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Specialized Expertise:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Affordable housing management and HUD program administration',
                    'Section 8 housing assistance program coordination and compliance',
                    'Low-Income Housing Tax Credit (LIHTC) property management',
                    'Specialized housing program compliance and regulatory reporting',
                    'Tenant certification and comprehensive income verification processes',
                    'Government housing program liaison services and audit preparation',
                    'Fair housing compliance and resident advocacy programs'
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
                    <span>100% Audit Compliance Record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span>Expert HUD Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span>LIHTC Specialization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-hhp-accent flex-shrink-0" />
                    <span>Fair Housing Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Property Management */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Home className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Residential Property Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Whether it's a single rental home or a growing portfolio, HHP provides turnkey residential management solutions across Oklahoma. We handle everything — tenant screening, leasing, rent collection, and professional maintenance — giving owners peace of mind and reliable, steady cash flow.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Comprehensive Services:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Single-family home management across Oklahoma',
                    'Duplex and small multifamily property oversight',
                    'Professional tenant screening, placement, and relations management',
                    'Efficient rent collection and comprehensive financial reporting',
                    'Property maintenance and repair coordination with licensed contractors',
                    'Lease administration, renewal management, and legal compliance',
                    'Property inspections and preventive maintenance programs',
                    'Owner reporting and transparent financial dashboards'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Start Residential Management
              </Link>
            </div>
            
            <div>
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6 text-center">Why Choose HHP for Residential?</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">95%+</div>
                    <div className="text-hhp-charcoal">Average Occupancy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">24/7</div>
                    <div className="text-hhp-charcoal">Emergency Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-2">Local</div>
                    <div className="text-hhp-charcoal">Oklahoma Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Office Management */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Briefcase className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Commercial & Office Management</h2>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Our commercial services are built to optimize property value and tenant satisfaction across office and retail assets. We oversee daily operations, lease administration, facility management, and vendor coordination with a focus on efficiency, professionalism, and long-term tenant retention.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-4">Professional Services:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Office building management and professional tenant services',
                    'Retail property management and comprehensive lease administration',
                    'Industrial property oversight and maintenance coordination',
                    'Commercial tenant relations and retention programs',
                    'Property marketing and strategic space leasing services',
                    'Facility management and building operations oversight',
                    'Vendor coordination and service provider management',
                    'Capital improvement project management and execution'
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 icon-accent mt-0.5 flex-shrink-0" />
                      <span className="text-hhp-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-hero inline-block">
                Commercial Property Consultation
              </Link>
            </div>
            
            <div className="lg:order-first">
              <img 
                src={commercialImage} 
                alt="Modern commercial building" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Experience Professional Property Management?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Let HHP Asset Management handle the complexities of property management while you focus on growing your investment portfolio.
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