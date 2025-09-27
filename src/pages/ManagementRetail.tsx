import { Link } from 'react-router-dom';
import { Building, TrendingUp, CheckCircle, BarChart3, Users, Target, Download } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useSEO } from '@/hooks/useSEO';

const ManagementRetail = () => {
  useSEO({
    title: 'Retail Property Management | HHP Asset Management',
    description: 'Retail property management built for performance. Tenant mix, CAM precision, and marketing strategies that drive occupancy and sales.'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Retail Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Tenant-mix strategy, CAM precision, and marketing execution for centers that perform.
            </p>
            <div className="text-white/80 mb-8">
              <span className="font-semibold">Optimized CAM</span> | <span className="font-semibold">Faster Re-Tenanting</span> | <span className="font-semibold">Sales Uplift</span>
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
            <Link to="/management/retail" className="text-hhp-navy font-semibold hover:text-hhp-accent transition-colors">
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
                Retail properties demand a unique focus on tenant mix, marketing, and operational execution. HHP provides specialized retail management that maximizes foot traffic, drives tenant performance, and keeps the property a vibrant destination.
              </p>

              <h2 className="text-2xl font-display font-semibold text-hhp-navy mb-6">Core Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Day-to-day operations for centers and mixed-use</h3>
                  <p className="text-hhp-charcoal">Comprehensive operational management for retail centers and mixed-use properties.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Lease administration & co-tenancy enforcement</h3>
                  <p className="text-hhp-charcoal">Precise lease management with co-tenancy clause enforcement and compliance.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Tenant-mix strategy</h3>
                  <p className="text-hhp-charcoal">Strategic tenant selection and mix optimization to maximize foot traffic and sales.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Property marketing & community engagement</h3>
                  <p className="text-hhp-charcoal">Comprehensive marketing strategies and community engagement programs.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">CAM oversight & reconciliation</h3>
                  <p className="text-hhp-charcoal">Accurate CAM calculations, billing, and reconciliation processes.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Vendor coordination (landscaping, cleaning, security)</h3>
                  <p className="text-hhp-charcoal">Strategic vendor management for all property services and maintenance.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Capital improvements & re-tenanting</h3>
                  <p className="text-hhp-charcoal">Strategic capital planning and efficient re-tenanting processes.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy">Real-time performance tracking</h3>
                  <p className="text-hhp-charcoal">Comprehensive performance monitoring and reporting for optimal results.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">Owner Benefits</h3>
                <p className="text-hhp-charcoal text-lg">
                  Stronger tenant performance, optimized CAM recoveries, reduced vacancy, enhanced competitiveness.
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
            Ready to Drive Retail Performance?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience specialized retail management that maximizes foot traffic, drives tenant performance, and keeps your property competitive.
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

export default ManagementRetail;
