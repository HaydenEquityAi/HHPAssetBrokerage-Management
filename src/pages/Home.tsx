import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import multifamilyImage from '@/assets/multifamily-property.webp';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden hero-background">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-hhp-navy/55"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] py-12 md:min-h-[70vh] sm:min-h-[80vh]">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="hero-title text-white mb-8">
                Vertically integrated. Data driven. Forward thinking.
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
                HHP Asset Management provides performance-driven property management for multifamily, commercial, and residential assets across Oklahoma — combining local expertise with AI-powered innovation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                  Get Free Property Analysis
                </Link>
                <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300">
                  Schedule Consultation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Locally Owned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Technology-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Expertise & Solutions */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Strategic Expertise */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Strategic Expertise</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Deep knowledge of Oklahoma real estate markets, HUD compliance, and investment strategies. We align market insight with owner objectives to maximize property value.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>In-depth understanding of multifamily, residential, and commercial assets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Regulatory expertise in HUD, Section 8, and LIHTC programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Proven strategies for long-term appreciation and stable cash flow</span>
                </li>
              </ul>
            </div>

            {/* Comprehensive Solutions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <BarChart3 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Comprehensive Solutions</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Full-service property management built to handle every detail.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Tenant screening, leasing, and renewals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Maintenance coordination and vendor management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Compliance, accounting, and investor reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client-Centered Service & AI-Powered Innovation */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Client-Centered Service */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <HeadphonesIcon className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Client-Centered Service</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                We operate with the mindset that every property is unique and every client deserves tailored service.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Dedicated account managers with local expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>24/7 support for owners and residents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Transparent communication every step of the way</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Innovation */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">AI-Powered Innovation</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                State-of-the-art property management software, owner portals, and our proprietary <strong>RentalAi</strong> system deliver transparency and efficiency unmatched in Oklahoma.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Real-time financial dashboards for owners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Predictive analytics to optimize rent and reduce vacancies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Automated compliance tracking and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Proven Results */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <TrendingUp className="h-12 w-12 icon-accent" />
              <h2 className="section-title text-hhp-navy">Proven Results</h2>
            </div>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Track record of improving net operating income, reducing vacancy rates, and enhancing property values for Oklahoma real estate investors.
            </p>
            
            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">15+ Oklahoma Cities Served</div>
                <p className="text-hhp-charcoal">Cities Served Statewide</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">24/7 Emergency Response</div>
                <p className="text-hhp-charcoal">Emergency Response Available</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">40+ Years Combined Experience</div>
                <p className="text-hhp-charcoal">Combined Team Experience</p>
              </div>
            </div>

            <Link to="/services" className="btn-hero">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Join the Oklahoma property owners who trust HHP Asset Management to maximize their returns and minimize their stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Get Your Free Property Analysis
            </Link>
            <Link 
              to="/rental-ai" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              See RentalAi Demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;