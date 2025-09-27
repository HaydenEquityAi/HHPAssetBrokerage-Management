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
      <section className="relative bg-hhp-navy overflow-hidden hero-background">
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] py-12 md:min-h-[55vh] sm:min-h-[60vh]">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="hero-headline text-white mb-8">
                Vertically Integrated. AI-Powered. Performance-Driven.
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
                Enterprise-level property management powered by proprietary AI technology
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
                  <span className="text-white trust-badge-text">Institutionally Owned</span>
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
                Institutional knowledge across multifamily, office, industrial, retail, mixed-use, senior living, and specialized housing assets—combined with proprietary AI systems—to maximize portfolio performance across every major asset class.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Full-stack, multi-asset management expertise across diverse property types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Institutional-grade compliance across all asset classes including HUD, Section 8, and LIHTC programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Performance strategies designed for scalable NOI growth and long-term value creation across REITs, private equity, and family office portfolios</span>
                </li>
              </ul>
            </div>

            {/* Comprehensive Solutions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <BarChart3 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Enterprise Solutions</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                End-to-end property management engineered for sophisticated investors, supported by vertically integrated systems across every major asset class.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>AI-driven leasing, tenant lifecycle management, and renewals across multifamily, office, industrial, and retail portfolios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Predictive maintenance coordination and vendor performance tracking for complex multi-asset environments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Enterprise-level accounting, compliance, and institutional reporting tailored to REITs, private equity, and family offices</span>
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
                <h2 className="section-title text-hhp-navy">Investor Alignment</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Every portfolio is unique. Our systems and people deliver tailored strategies that align directly with ownership objectives.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Dedicated relationship managers with institutional expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Executive-level dashboards and investor communication</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Scalable solutions that flex across markets and asset classes</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Innovation */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">AI-Native Innovation</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Our proprietary RentalAi platform transforms property management into a performance engine.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Real-time financial dashboards with institutional reporting standards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Predictive analytics to reduce vacancy and optimize rents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Automated compliance, audit-ready documentation, and risk management</span>
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
              Delivering measurable results across national markets with enterprise-level consistency.
            </p>
            
            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">NOI Growth</div>
                <p className="text-hhp-charcoal">Reduced vacancies, enhanced long-term asset value</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">Multi-Market</div>
                <p className="text-hhp-charcoal">Portfolio oversight across expanding U.S. regions</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">Institutional Trust</div>
                <p className="text-hhp-charcoal">Earned through scalable systems and disciplined execution</p>
              </div>
            </div>

            <Link to="/services" className="btn-hero">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <Building2 className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">Full-Stack Multi-Asset Platform</h3>
                <p className="text-white/90">Comprehensive management across all major property types nationwide</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <Bot className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">AI-Native Technology</h3>
                <p className="text-white/90">Proprietary RentalAi powering institutional portfolios across every asset class</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <TrendingUp className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">Institutional Leadership</h3>
                <p className="text-white/90">Decades of Big Four, Fortune 500, and $2B+ transaction experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Experience the Future of Property Management
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Join sophisticated investors nationwide who trust HHP Asset Management's AI-native platform to deliver institutional-grade results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule Free Property Analysis
            </Link>
            <Link 
              to="/rental-ai" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              See Our Technology Platform
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;