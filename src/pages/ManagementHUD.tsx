import { Link } from 'react-router-dom';
import { Building, CheckCircle, Shield, FileText, Users, Download } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useSEO } from '@/hooks/useSEO';

const ManagementHUD = () => {
  useSEO({
    title: 'HUD Property Management | HHP Asset Management',
    description: 'HUD & Section 8 compliance management with 99%+ accuracy. Trusted by owners for MOR/REAC audit preparation and subsidy performance.'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              HUD Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Precision compliance and resident-focused operations for HUD and Section 8 properties.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">99%+ Compliance</span> | <span className="font-semibold">MOR/REAC Ready</span> | <span className="font-semibold">EIV/50059 Accuracy</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                Schedule Consultation
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Owner Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sub-Navigation */}
      <section className="bg-gray-50 py-4">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/management/multifamily" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
              Multifamily
            </Link>
            <Link to="/management/hud" className="text-hhp-navy font-semibold hover:text-hhp-accent transition-colors">
              HUD
            </Link>
            <Link to="/management/office" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
              Office
            </Link>
            <Link to="/management/retail" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
              Retail
            </Link>
            <Link to="/management/industrial" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
              Industrial
            </Link>
            <Link to="/management/senior" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
              Senior Housing
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-8">
                HUD property management requires precision, compliance, and deep regulatory expertise. HHP Asset Management is fully equipped to handle HUD and Section 8 programs with accuracy and accountability, ensuring compliance while delivering strong resident outcomes.
              </p>

              <h2 className="text-2xl font-display font-semibold text-hhp-navy mb-6">Specialized Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">HUD Administration & Program Oversight</h3>
                  <p className="text-hhp-charcoal">Complete management of HUD programs with full regulatory compliance and reporting.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Tenant Certification & Recertification (50059/EIV)</h3>
                  <p className="text-hhp-charcoal">Accurate tenant income verification and annual recertification processes.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Audit & Review Preparation (MOR, REAC)</h3>
                  <p className="text-hhp-charcoal">Comprehensive preparation for Management and Occupancy Reviews and REAC inspections.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Fair Housing Compliance & Monitoring</h3>
                  <p className="text-hhp-charcoal">Ensuring full compliance with Fair Housing laws and regulations.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Direct Liaison with HUD and Housing Authorities</h3>
                  <p className="text-hhp-charcoal">Direct communication and coordination with HUD and local housing authorities.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Specialized Reporting for Owners and Agencies</h3>
                  <p className="text-hhp-charcoal">Detailed reporting tailored to owner needs and agency requirements.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner Benefits</h3>
                <p className="text-hhp-charcoal text-lg">
                  Reduced compliance risk, seamless audit outcomes, maximized subsidy performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Ensure HUD Compliance Excellence?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Trust HHP Asset Management for precision HUD property management with 99%+ compliance rates and seamless audit outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Owner Brochure
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagementHUD;
