import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useSEO } from '@/hooks/useSEO';

const ManagementIndustrial = () => {
  useSEO({
    title: 'Industrial Property Management | HHP Asset Management',
    description: 'Operational precision for warehouses, flex, and distribution properties. Proactive maintenance, compliance, and cost control.'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Industrial & Warehouse Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Operational precision for warehouse, distribution, and flex assets focused on uptime and cost control.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">Reduced Downtime</span> | <span className="font-semibold">Predictive Maintenance</span> | <span className="font-semibold">NNN Expertise</span>
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
            <Link to="/management/industrial" className="text-hhp-navy font-semibold hover:text-hhp-accent transition-colors">
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
                Industrial and warehouse assets require reliable oversight. HHP ensures facilities operate efficiently, tenants' logistical needs are met, and ownership achieves consistent long-term performance.
              </p>

              <h2 className="text-2xl font-display font-semibold text-hhp-navy mb-6">Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Full-service management for warehouse, distribution, flex</h3>
                  <p className="text-hhp-charcoal">Comprehensive management tailored to industrial asset types and tenant requirements.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Lease administration for NNN/Modified Gross</h3>
                  <p className="text-hhp-charcoal">Expert lease management for NNN and Modified Gross lease structures.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Preventive maintenance & vendor oversight</h3>
                  <p className="text-hhp-charcoal">Strategic maintenance programs and vendor management for optimal uptime.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Space utilization & TI coordination</h3>
                  <p className="text-hhp-charcoal">Optimized space utilization and tenant improvement coordination.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Environmental/OSHA/safety compliance</h3>
                  <p className="text-hhp-charcoal">Full compliance with environmental, OSHA, and safety regulations.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Budgeting, reporting, capital planning</h3>
                  <p className="text-hhp-charcoal">Comprehensive financial planning and capital investment strategies.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Utility monitoring & efficiency</h3>
                  <p className="text-hhp-charcoal">Strategic utility management and efficiency optimization programs.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Infrastructure upgrade management</h3>
                  <p className="text-hhp-charcoal">Strategic infrastructure planning and upgrade execution.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner Benefits</h3>
                <p className="text-hhp-charcoal text-lg">
                  Lower operating costs, minimized downtime, longer lease terms, value growth through reinvestment.
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
            Ready to Optimize Your Industrial Operations?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience operational precision for your warehouse, distribution, and flex assets with focus on uptime and cost control.
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

export default ManagementIndustrial;
