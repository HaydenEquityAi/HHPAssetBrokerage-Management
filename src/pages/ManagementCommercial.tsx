import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import commercialImage from '@/assets/commercial-building.webp';
import { useSEO } from '@/hooks/useSEO';

const ManagementCommercial = () => {
  useSEO({
    title: 'Office Property Management | HHP Asset Management',
    description: 'Professional management for Class A/B and medical office buildings. Tenant experience, renewals, and operational excellence.'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Office Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Tenant-experience-driven operations for Class A/B and medical office assets to increase renewals and value.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">Higher Renewal Rates</span> | <span className="font-semibold">Cost Optimization</span> | <span className="font-semibold">Transparent Reporting</span>
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
            <Link to="/management/office" className="text-hhp-navy font-semibold hover:text-hhp-accent transition-colors">
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
                At HHP, we deliver comprehensive management solutions that improve tenant satisfaction, optimize building operations, and safeguard long-term asset value.
              </p>

              <h2 className="text-2xl font-display font-semibold text-hhp-navy mb-6">Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Full-service management for Class A, B, and medical office</h3>
                  <p className="text-hhp-charcoal">Comprehensive management tailored to each office building class and tenant needs.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Tenant relations & retention programs</h3>
                  <p className="text-hhp-charcoal">Strategic programs designed to enhance tenant satisfaction and increase renewal rates.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Lease administration & escalations</h3>
                  <p className="text-hhp-charcoal">Precise lease management with accurate escalations and compliance tracking.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Facility management & building systems oversight</h3>
                  <p className="text-hhp-charcoal">Comprehensive oversight of all building systems and facility operations.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Vendor coordination & performance tracking</h3>
                  <p className="text-hhp-charcoal">Strategic vendor management with performance monitoring and optimization.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Budgeting/forecasting & financial reporting</h3>
                  <p className="text-hhp-charcoal">Detailed financial planning and transparent reporting for optimal performance.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Capital planning & project management</h3>
                  <p className="text-hhp-charcoal">Strategic capital planning and project execution for long-term value.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Safety/accessibility compliance</h3>
                  <p className="text-hhp-charcoal">Full compliance with safety regulations and accessibility requirements.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner Benefits</h3>
                <p className="text-hhp-charcoal text-lg">
                  Higher renewal rates, optimized costs, executive dashboards, increased long-term value.
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
            Ready to Optimize Your Office Building Performance?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience tenant-experience-driven office management that increases renewals and maximizes long-term value.
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

export default ManagementCommercial;
