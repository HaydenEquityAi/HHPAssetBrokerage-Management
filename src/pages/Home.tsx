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
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/multifamily-hero.jpg"
        >
          <source src="/images/skyline-hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container-premium text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
              <img 
                src="/images/hhp-logo-navy-letters.png" 
                alt="HHP Asset Group" 
                className="h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-tight text-white mb-4 sm:mb-5 px-2 -mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Vertically Integrated and Innovative Commercial Real Estate Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/asset-management" 
                className="bg-white text-hhp-navy px-4 py-3 sm:px-8 sm:py-4 rounded-md font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm sm:text-base w-auto max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('explore_services', 'home_hero');
                  trackLinkClick('Explore Services', '/asset-management');
                }}
              >
                Explore Services
              </Link>
              <Link 
                to="/asset-types" 
                className="bg-white text-hhp-navy px-4 py-3 sm:px-8 sm:py-4 rounded-md font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm sm:text-base w-auto max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('explore_asset_types', 'home_hero');
                  trackLinkClick('Explore Asset Types', '/asset-types');
                }}
              >
                Explore Asset Types
              </Link>
              <Link 
                to="/technology" 
                className="bg-white text-hhp-navy px-4 py-3 sm:px-8 sm:py-4 rounded-md font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm sm:text-base w-auto max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/property-management-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Property Management
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/leasing-representation" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/leasing-representation-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('leasing_representation', 'core_services');
                trackLinkClick('Leasing & Representation', '/services/leasing-representation');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Leasing & Representation
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/investment-capital-markets" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/Investment-capital-markets-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('investment_capital_markets', 'core_services');
                trackLinkClick('Investment & Capital Markets', '/services/investment-capital-markets');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Investment & Capital Markets
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/advisory-site-selection" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/site-selection-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('advisory-site-selection', 'core_services');
                trackLinkClick('Advisory & Site Selection', '/services/advisory-site-selection');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Advisory & Site Selection
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/development-advisory" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/development-advisory-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('development_advisory', 'core_services');
                trackLinkClick('Development Advisory', '/services/development-advisory');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Development Advisory
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/broker-consulting" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/broker-consulting-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('broker_consulting', 'core_services');
                trackLinkClick('Broker of Record & Consulting Services', '/services/broker-consulting');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Broker of Record & Consulting Services
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/financial-services" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('financial_services', 'core_services');
                trackLinkClick('Financial Services', '/services/financial-services');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Financial Services
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
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
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/property-management-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Multifamily
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/hud-affordable" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/hud-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('HUD & Affordable', '/asset-types/hud-affordable');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  HUD & Affordable
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/office" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/office-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('office', 'asset_types');
                trackLinkClick('Office', '/asset-types/office');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Office
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/retail" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/retail-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('retail', 'asset_types');
                trackLinkClick('Retail', '/asset-types/retail');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Retail
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/industrial" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/industrial-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('industrial', 'asset_types');
                trackLinkClick('Industrial', '/asset-types/industrial');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Industrial
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/senior-housing" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-[450px] sm:h-[380px] md:h-[400px] lg:h-[420px] flex flex-col p-0"
              style={{ backgroundImage: 'url(/images/senior-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                  Senior Housing
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
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
              <Link 
                to="/technology/ai-platforms"
                className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[200px] sm:min-h-[240px] flex flex-col p-0"
                style={{ backgroundImage: 'url(/images/ai-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => {
                  trackButtonClick('ai_platforms', 'technology_advantage');
                  trackLinkClick('AI Platforms', '/technology/ai-platforms');
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl">AI Platforms</h3>
                </div>
              </Link>
              
              {/* Advisory & Analytics Card */}
              <Link 
                to="/technology/advisory-analytics"
                className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[200px] sm:min-h-[240px] flex flex-col p-0"
                style={{ backgroundImage: 'url(/images/advisory-analytics-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => {
                  trackButtonClick('advisory_analytics', 'technology_advantage');
                  trackLinkClick('Advisory & Analytics', '/technology/advisory-analytics');
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl">Advisory & Analytics</h3>
                </div>
              </Link>
              
              {/* Custom Solutions Card */}
              <Link 
                to="/technology/custom-solutions"
                className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[200px] sm:min-h-[240px] flex flex-col p-0"
                style={{ backgroundImage: 'url(/images/custom-solutions.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                onClick={() => {
                  trackButtonClick('custom_solutions', 'technology_advantage');
                  trackLinkClick('Custom Solutions', '/technology/custom-solutions');
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-6">
                  <h3 className="text-white font-semibold text-xl sm:text-2xl">Custom Solutions</h3>
                </div>
              </Link>
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

      {/* Divider Line */}
      <div className="w-full h-px bg-white/30 my-12 sm:my-16" />
    </Layout>
  );
};

export default Home;