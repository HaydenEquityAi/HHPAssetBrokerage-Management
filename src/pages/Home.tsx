import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot, Target, DollarSign, FileText, Globe, Shield, Home as HomeIcon, ShoppingBag, Factory, Heart, Settings, MapPin, Handshake } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/multifamily-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        
        <div className="relative z-10 container-premium text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
              <img 
                src="/images/HHP Logo White Letters.png" 
                alt="HHP Asset Group" 
                className="h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 mb-6 sm:mb-8 px-2">
              Vertically Integrated and Innovative Commercial Real Estate Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/asset-management" 
                className="bg-white text-hhp-navy px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm sm:text-base"
                onClick={() => {
                  trackButtonClick('explore_services', 'home_hero');
                  trackLinkClick('Explore Services', '/asset-management');
                }}
              >
                Explore Services
              </Link>
              <Link 
                to="/asset-types" 
                className="bg-white text-hhp-navy px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm sm:text-base"
                onClick={() => {
                  trackButtonClick('explore_asset_types', 'home_hero');
                  trackLinkClick('Explore Asset Types', '/asset-types');
                }}
              >
                Explore Asset Types
              </Link>
              <Link 
                to="/technology" 
                className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 min-h-[48px] flex items-center justify-center text-sm sm:text-base"
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

      {/* Core Services Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Core Services</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Comprehensive solutions across the full real estate lifecycle — from property management to capital markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Link 
              to="/services/property-management" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/property-management-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Property Management
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/leasing-representation" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/leasing-representation-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('leasing_representation', 'core_services');
                trackLinkClick('Leasing & Representation', '/services/leasing-representation');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Handshake className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Leasing & Representation
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/investment-capital-markets" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/Investment-capital-markets-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('investment_capital_markets', 'core_services');
                trackLinkClick('Investment & Capital Markets', '/services/investment-capital-markets');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Investment & Capital Markets
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/advisory-site-selection" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/site-selection-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('advisory-site-selection', 'core_services');
                trackLinkClick('Advisory & Site Selection', '/services/advisory-site-selection');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Advisory & Site Selection
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/development-advisory" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/development-advisory-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('development_advisory', 'core_services');
                trackLinkClick('Development Advisory', '/services/development-advisory');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Settings className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Development Advisory
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/broker-consulting" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/broker-consulting-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('broker_consulting', 'core_services');
                trackLinkClick('Broker of Record & Consulting Services', '/services/broker-consulting');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Broker of Record & Consulting Services
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/financial-services" 
              className="premium-card text-center p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('financial_services', 'core_services');
                trackLinkClick('Financial Services', '/services/financial-services');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-4 sm:mb-6">
                  Financial Services
                </h3>
                <div className="flex items-center justify-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span className="text-white">Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2 text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Asset Types We Serve</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-navy max-w-3xl mx-auto px-4">
              Deep expertise across six major commercial real estate asset sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Link 
              to="/asset-types/multifamily" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/property-management-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  Multifamily
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Market-rate and value-add strategies that stabilize NOI and elevate communities.
                </p>
              </div>
            </Link>

            <Link 
              to="/asset-types/hud-affordable" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/hud-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('HUD & Affordable', '/asset-types/hud-affordable');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <HomeIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  HUD & Affordable
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Compliance-driven management with unmatched HUD expertise.
                </p>
              </div>
            </Link>

            <Link 
              to="/asset-types/office" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/office-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('office', 'asset_types');
                trackLinkClick('Office', '/asset-types/office');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  Office
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Workplace management to reduce costs and improve tenant satisfaction.
                </p>
              </div>
            </Link>

            <Link 
              to="/asset-types/retail" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/retail-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('retail', 'asset_types');
                trackLinkClick('Retail', '/asset-types/retail');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  Retail
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Tenant mix optimization, anchor repositioning, and center performance.
                </p>
              </div>
            </Link>

            <Link 
              to="/asset-types/industrial" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/industrial-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('industrial', 'asset_types');
                trackLinkClick('Industrial', '/asset-types/industrial');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Factory className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  Industrial
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Predictive maintenance and energy benchmarking for logistics & warehousing.
                </p>
              </div>
            </Link>

            <Link 
              to="/asset-types/senior-housing" 
              className="premium-card text-center p-4 sm:p-6 lg:p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[280px] sm:min-h-[320px]"
              style={{ backgroundImage: 'url(/images/senior-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10">
                <div className="icon-accent mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                  Senior Housing
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                  Compliance, compassion, and operational rigor for senior communities.
                </p>
              </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* AI Platforms Card */}
              {/* AI Platforms Card */}
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Bot className="h-8 w-8 text-hhp-navy mx-auto mb-4" />
                  <h3 className="text-base font-display font-semibold text-white">AI Platforms</h3>
                </div>
              </div>
              
              {/* Advisory & Analytics Card */}
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-hhp-navy mx-auto mb-4" />
                  <h3 className="text-base font-display font-semibold text-white">Advisory & Analytics</h3>
                </div>
              </div>
              
              {/* Custom Solutions Card */}
              <div className="text-center">
                <div className="bg-hhp-navy text-white p-6 rounded-lg">
                  <Settings className="h-8 w-8 text-hhp-navy mx-auto mb-4" />
                  <h3 className="text-base font-display font-semibold text-white">Custom Solutions</h3>
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
                <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-3">
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
                  className="text-hhp-navy font-medium hover:underline"
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
                <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-3">
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
                  className="text-hhp-navy font-medium hover:underline"
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
                <span className="inline-block bg-hhp-accent/10 text-hhp-navy px-3 py-1 rounded-full text-sm font-medium mb-3">
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
                  className="text-hhp-navy font-medium hover:underline"
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