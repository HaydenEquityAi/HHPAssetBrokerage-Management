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
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{backgroundImage: 'url(/images/multifamily-hero.jpg)'}}
        />
        
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/multifamily-hero.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.play().catch(() => {
              // Silently handle autoplay failures
            });
          }}
        >
          <source src="/images/Subtle_Hero_Background_Animation_Generated%20%281%29.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container-premium text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
              <img 
                src="/images/hhp-logo-navy-letters.png" 
                alt="HHP Asset Group" 
                className="h-18 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-tight text-white mb-4 sm:mb-5 px-2 -mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Vertically Integrated and Innovative Commercial Real Estate Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/asset-management" 
                className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('explore_services', 'home_hero');
                  trackLinkClick('Explore Services', '/asset-management');
                }}
              >
                Explore Services
              </Link>
              <Link 
                to="/asset-types" 
                className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
                onClick={() => {
                  trackButtonClick('explore_asset_types', 'home_hero');
                  trackLinkClick('Explore Asset Types', '/asset-types');
                }}
              >
                Explore Asset Types
              </Link>
              <Link 
                to="/technology" 
                className="bg-white text-hhp-navy px-4 py-2.5 sm:px-6 sm:py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 shadow-elegant min-h-[40px] sm:min-h-[48px] flex items-center justify-center text-xs sm:text-sm w-auto max-w-[240px] sm:max-w-none mx-auto sm:mx-0"
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

      {/* Our Approach Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-hhp-navy mb-6 text-center tracking-[0.06em] uppercase">
              Our approach
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal text-center">
              HHP delivers the full lifecycle of commercial real estate services—from acquisitions and development to management, leasing, sales, and strategic advisory—through a vertically integrated platform designed to operate, not just advise. Proprietary technology supports disciplined underwriting, consistent execution, and long-term asset alignment across every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Core Services</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto px-4">
              Comprehensive solutions across the full real estate lifecycle — from property management to capital markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <Link 
              to="/services/property-management" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[4/5] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/property-management-picture.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('property_management', 'core_services');
                trackLinkClick('Property Management', '/services/property-management');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Property Management
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/leasing-representation" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/leasing-representation-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('leasing_representation', 'core_services');
                trackLinkClick('Leasing & Representation', '/services/leasing-representation');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Leasing & Representation
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/investment-capital-markets" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/investment-sales-capital-markets-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('investment_capital_markets', 'core_services');
                trackLinkClick('Investment & Capital Markets', '/services/investment-capital-markets');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Investment & Capital Markets
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/advisory-site-selection" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/advisory-site-selection-image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('advisory-site-selection', 'core_services');
                trackLinkClick('Advisory & Site Selection', '/services/advisory-site-selection');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Advisory & Site Selection
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/development-advisory" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/development-advisory-image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('development_advisory', 'core_services');
                trackLinkClick('Development Advisory', '/services/development-advisory');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Development Advisory
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/broker-consulting" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/broker-record-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('broker_consulting', 'core_services');
                trackLinkClick('Consulting and Strategic Advisory', '/services/broker-consulting');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Consulting and Strategic Advisory
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/financial-services" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/financial-services-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('financial_services', 'core_services');
                trackLinkClick('Financial Services', '/services/financial-services');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Financial Services
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/services/facilities-management" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('facilities_management', 'core_services');
                trackLinkClick('Facilities Management', '/services/facilities-management');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Facilities Management
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              to="/asset-management" 
              className="btn-hero"
              onClick={() => {
                trackButtonClick('view_all_services', 'core_services');
                trackLinkClick('View All Services', '/asset-management');
              }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="bg-gray-50 pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Asset Types We Serve</h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-hhp-navy max-w-3xl mx-auto px-4">
              Deep expertise across six major commercial real estate asset sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 -mx-4 sm:mx-0">
            <Link 
              to="/asset-types/multifamily" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/multifamily-image-trendy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('multifamily', 'asset_types');
                trackLinkClick('Multifamily', '/asset-types/multifamily');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Multifamily
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/hud-affordable" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/affordable-housing-image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('hud_affordable', 'asset_types');
                trackLinkClick('Affordable Housing', '/asset-types/hud-affordable');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Affordable Housing
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/office" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/office-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('office', 'asset_types');
                trackLinkClick('Office', '/asset-types/office');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Office
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/retail" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/retail-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('retail', 'asset_types');
                trackLinkClick('Retail', '/asset-types/retail');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Retail
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/industrial" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/industrial-image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('industrial', 'asset_types');
                trackLinkClick('Industrial', '/asset-types/industrial');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Industrial
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link 
              to="/asset-types/senior-housing" 
              className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden aspect-[3/4] sm:aspect-auto min-h-[500px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0 w-full"
              style={{ backgroundImage: 'url(/images/senior-housing-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
              onClick={() => {
                trackButtonClick('senior_housing', 'asset_types');
                trackLinkClick('Senior Housing', '/asset-types/senior-housing');
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                  Senior Housing
                </h3>
                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
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
      <section className="bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Technology Advantage</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              We embed automation and AI into every process—leasing, compliance, reporting, and resident experience. Our proprietary platforms streamline operations, reduce errors, and create cost advantages for owners and residents.
            </p>
            
            <Link 
              to="/technology" 
              className="btn-hero"
              onClick={() => {
                trackButtonClick('explore_technology', 'technology_advantage');
                trackLinkClick('Explore Technology', '/technology');
              }}
            >
              Explore Technology
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;