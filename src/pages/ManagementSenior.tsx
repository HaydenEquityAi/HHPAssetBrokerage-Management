import { Link } from 'react-router-dom';
import { Building, CheckCircle, Users, Heart, Shield, BarChart3, Download } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useSEO } from '@/hooks/useSEO';

const ManagementSenior = () => {
  useSEO({
    title: 'Senior Housing Management | HHP Asset Management',
    description: 'Compassionate care meets institutional operations. Senior living management with compliance excellence and retention-focused oversight.'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Senior Housing Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Compassionate resident experience with institutional-grade operations for senior living and specialized communities.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">100% Compliance</span> | <span className="font-semibold">24/7 Coordination</span> | <span className="font-semibold">Institutional Standards</span>
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
            <Link to="/management/hud" className="text-hhp-charcoal hover:text-hhp-accent transition-colors">
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
            <Link to="/management/senior" className="text-hhp-navy font-semibold hover:text-hhp-accent transition-colors">
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
                Our senior housing management combines compassionate care with rigorous operating discipline. We understand the unique requirements of senior living and assisted living communities, ensuring resident satisfaction and operational excellence.
              </p>

              <h2 className="text-2xl font-display font-semibold text-hhp-navy mb-6">Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Resident care coordination & family communication systems</h3>
                  <p className="text-hhp-charcoal">Comprehensive care coordination with transparent family communication.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Healthcare facility & vendor management</h3>
                  <p className="text-hhp-charcoal">Strategic management of healthcare facilities and specialized vendors.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Regulatory compliance & audit readiness</h3>
                  <p className="text-hhp-charcoal">Full compliance with senior housing regulations and audit preparation.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Quality assurance programs & incident tracking</h3>
                  <p className="text-hhp-charcoal">Comprehensive quality assurance and incident management systems.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Staffing oversight, scheduling, and training standards</h3>
                  <p className="text-hhp-charcoal">Strategic staffing management with comprehensive training programs.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Institutional-grade reporting and KPIs</h3>
                  <p className="text-hhp-charcoal">Detailed reporting and key performance indicators for operational excellence.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner Benefits</h3>
                <p className="text-hhp-charcoal text-lg">
                  Stronger resident outcomes, reduced regulatory risk, predictable operations, and transparent reporting.
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
            Ready to Enhance Your Senior Housing Community?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience compassionate care with institutional-grade operations for your senior living community.
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

export default ManagementSenior;
