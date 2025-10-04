import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot, Target, DollarSign, FileText, Globe, Shield, Home as HomeIcon, ShoppingBag, Factory, Heart, Settings, MapPin } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/multifamily-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Full-Service Real Estate Solutions. Data Driven Performance.
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              HHP Asset Group is a national real estate services firm delivering brokerage, management, and advisory solutions — powered by proprietary AI platforms and automation enhancement technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/asset-management" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant"
                onClick={() => {
                  trackButtonClick('explore_services', 'home_hero');
                  trackLinkClick('Explore Services', '/asset-management');
                }}
              >
                Explore Services
              </Link>
              <Link 
                to="/asset-types" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant"
                onClick={() => {
                  trackButtonClick('explore_asset_types', 'home_hero');
                  trackLinkClick('Explore Asset Types', '/asset-types');
                }}
              >
                Explore Asset Types
              </Link>
              <Link 
                to="/technology" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300"
                onClick={() => {
                  trackButtonClick('explore_technology', 'home_hero');
                  trackLinkClick('Explore Technology', '/technology');
                }}
              >
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-hhp-navy mb-2">$2.0B+</div>
              <div className="text-hhp-charcoal">Transactions Facilitated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-hhp-navy mb-2">500+</div>
              <div className="text-hhp-charcoal">Properties Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-hhp-navy mb-2">15+</div>
              <div className="text-hhp-charcoal">Markets Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-hhp-navy mb-2">98%</div>
              <div className="text-hhp-charcoal">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Core Services</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Comprehensive solutions across the full real estate lifecycle — from acquisitions to advisory.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 1 */}
            <Link 
              to="/services/property-management" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Building2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Property Management
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                We go beyond operations to deliver NOI growth, compliance excellence, and tenant satisfaction.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/advisory-site-selection" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('advisory-site-selection', 'core_services');
                trackLinkClick('Advisory & Site Selection', '/services/advisory-site-selection');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <MapPin className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Advisory & Site Selection
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Data-driven market analysis and GIS intelligence to align location with business strategy.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/investment-sales" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('investment_sales', 'core_services');
                trackLinkClick('Investment Sales', '/services/investment-sales');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <DollarSign className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Investment Sales
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Institutional-grade marketing and valuation to maximize asset disposition outcomes.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/landlord-representation" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('landlord_representation', 'core_services');
                trackLinkClick('Landlord Representation', '/services/landlord-representation');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Building2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Landlord Representation
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Leasing strategies that enhance occupancy, optimize rent, and reduce downtime.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            {/* Row 2 */}
            <Link 
              to="/services/tenant-representation" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('tenant_representation', 'core_services');
                trackLinkClick('Tenant Representation', '/services/tenant-representation');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Users className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Tenant Representation
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Advisory focused on cost control, flexibility, and alignment with workforce strategy.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/acquisitions" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('acquisitions', 'core_services');
                trackLinkClick('Acquisitions', '/services/acquisitions');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Target className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Acquisitions
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                AI-powered sourcing, underwriting, and structuring to identify and secure opportunities.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/development" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('development', 'core_services');
                trackLinkClick('Development', '/services/development');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Settings className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Development
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Ground-up execution from entitlement through stabilization with performance tracking.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link 
              to="/services/consulting" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('consulting', 'core_services');
                trackLinkClick('Consulting', '/services/consulting');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <FileText className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Consulting
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium mb-4">
                Tailored advisory for HUD, operations, technology, and portfolio optimization.
              </p>
              <div className="flex items-center justify-center text-hhp-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Service</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Asset Types We Serve</h2>
            <p className="text-xl leading-relaxed text-hhp-navy max-w-3xl mx-auto">
              Deep expertise across six major commercial real estate asset sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link 
              to="/asset-types/multifamily" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Building2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Multifamily
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Market-rate and value-add strategies that stabilize NOI and elevate communities.
              </p>
            </Link>

            <Link 
              to="/asset-types/hud-affordable" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('HUD & Affordable', '/asset-types/hud-affordable');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <HomeIcon className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                HUD & Affordable
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Compliance-driven management with unmatched HUD expertise.
              </p>
            </Link>

            <Link 
              to="/asset-types/office" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('office', 'asset_types');
                trackLinkClick('Office', '/asset-types/office');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Building2 className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Office
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Workplace management to reduce costs and improve tenant satisfaction.
              </p>
            </Link>

            <Link 
              to="/asset-types/retail" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('retail', 'asset_types');
                trackLinkClick('Retail', '/asset-types/retail');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Retail
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Tenant mix optimization, anchor repositioning, and center performance.
              </p>
            </Link>

            <Link 
              to="/asset-types/industrial" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('industrial', 'asset_types');
                trackLinkClick('Industrial', '/asset-types/industrial');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Factory className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Industrial
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Predictive maintenance and energy benchmarking for logistics & warehousing.
              </p>
            </Link>

            <Link 
              to="/asset-types/senior-housing" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="icon-accent mx-auto mb-6 w-16 h-16 md:w--20 md:h-20 flex items-center justify-center">
                <Heart className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-hhp-navy mb-4">
                Senior Housing
              </h3>
              <p className="text-base md:text-lg text-hhp-charcoal font-medium">
                Compliance, compassion, and operational rigor for senior communities.
              </p>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              to="/asset-types" 
              className="btn-hero"
              onClick={() => {
                trackButtonClick('view_all_asset_classes', 'asset_types');
                trackLinkClick('View All Asset Classes', '/asset-types');
              }}
            >
              View All Asset Classes →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Advantage Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Technology Advantage</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              We embed automation and AI into every process—leasing, compliance, reporting, and resident experience. Our proprietary platforms like RentalAi streamline operations, reduce errors, and create cost advantages for owners and residents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Bot className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Automation</h3>
                  <p className="text-white/90">Streamlined processes across all operations</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">AI Integration</h3>
                  <p className="text-white/90">Intelligent insights and predictive analytics</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <DollarSign className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Cost Advantages</h3>
                  <p className="text-white/90">Reduced errors and operational efficiency</p>
                </div>
              </div>
            </div>

            <Link to="/technology" className="btn-hero">
              Explore Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Insights & Intelligence Section */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Insights & Intelligence</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Stay ahead with market reports, compliance updates, and analytics-driven strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="premium-card">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Technology
                </span>
                <h3 className="text-xl font-display font-bold text-hhp-navy mb-3">
                  AI's Impact on Real Estate Workforces
                </h3>
                <p className="text-hhp-charcoal mb-4">
                  How automation is reshaping property and brokerage operations.
                </p>
                <div className="text-sm text-hhp-charcoal/70 mb-4">Dec 2024</div>
                <Link 
                  to="/insights" 
                  className="text-hhp-accent font-medium hover:underline"
                  onClick={() => {
                    trackButtonClick('ai_real_estate_workforce', 'insights');
                    trackLinkClick('AI Real Estate Workforce', '/insights');
                  }}
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="premium-card">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Finance
                </span>
                <h3 className="text-xl font-display font-bold text-hhp-navy mb-3">
                  Capital Market Trends 2025
                </h3>
                <p className="text-hhp-charcoal mb-4">
                  Rates remain elevated; secondary markets are emerging winners.
                </p>
                <div className="text-sm text-hhp-charcoal/70 mb-4">Oct 2024</div>
                <Link 
                  to="/insights" 
                  className="text-hhp-accent font-medium hover:underline"
                  onClick={() => {
                    trackButtonClick('capital_markets_2025', 'insights');
                    trackLinkClick('Capital Markets 2025', '/insights');
                  }}
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="premium-card">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Market Analysis
                </span>
                <h3 className="text-xl font-display font-bold text-hhp-navy mb-3">
                  Growth Sectors in Multifamily
                </h3>
                <p className="text-hhp-charcoal mb-4">
                  Affordable & workforce housing driving demand and absorption.
                </p>
                <div className="text-sm text-hhp-charcoal/70 mb-4">Nov 2024</div>
                <Link 
                  to="/insights" 
                  className="text-hhp-accent font-medium hover:underline"
                  onClick={() => {
                    trackButtonClick('growth_sectors_multifamily', 'insights');
                    trackLinkClick('Growth Sectors Multifamily', '/insights');
                  }}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/insights" 
              className="btn-hero"
              onClick={() => {
                trackButtonClick('explore_insights', 'insights');
                trackLinkClick('Explore Insights', '/insights');
              }}
            >
              Explore Insights →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-hhp-navy text-white py-20">
        <div className="container-premium text-center">
          <div className="text-2xl md:text-3xl font-display leading-relaxed text-white/90 mb-12 max-w-4xl mx-auto">
            "HHP Asset Group is the next-generation real estate partner delivering boutique, client-focused service enhanced by proprietary analytics platforms."
          </div>
          
          <Link 
            to="/about" 
            className="btn-hero bg-white text-hhp-navy hover:bg-white/90"
            onClick={() => {
              trackButtonClick('learn_about_hhp', 'cta_banner');
              trackLinkClick('Learn About HHP', '/about');
            }}
          >
            Learn About HHP →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;