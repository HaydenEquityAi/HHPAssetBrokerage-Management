import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import multifamilyImage from '@/assets/multifamily-property.webp';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury property management in Oklahoma" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 section-spacing">
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
                  <span>Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span>Locally Owned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span>Technology-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - Alternating Sections */}
      {/* Section 1: Local Market Mastery */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Local Market Mastery</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Deep understanding of Oklahoma real estate markets, rental trends, and regulatory requirements across Tulsa, Owasso, Bixby, Jenks, Sapulpa, Glenpool, Pryor, Sand Springs, and surrounding communities.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200 font-medium"
              >
                Learn about our team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="lg:order-first">
              <img 
                src={multifamilyImage} 
                alt="Modern multifamily property with pool" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI-Powered Innovation */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Zap className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">AI-Powered Innovation</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                State-of-the-art property management software, owner portals, and our proprietary RentalAi system deliver transparency and efficiency unmatched in Oklahoma.
              </p>
              <Link 
                to="/rental-ai" 
                className="inline-flex items-center text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200 font-medium"
              >
                Discover RentalAi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img 
                src={commercialImage} 
                alt="Modern commercial building" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant hover-lift"
              />
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
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">$2.0B+</div>
                <p className="text-hhp-charcoal">Real Estate Facilitated</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">4.0 GPA</div>
                <p className="text-hhp-charcoal">MBA Academic Excellence</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">40+ Years</div>
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