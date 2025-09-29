import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
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
                Full-Service Commercial Real Estate. AI-Native Performance.
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
                A national real estate services firm delivering brokerage, management, and advisory solutions — powered by proprietary AI platforms BrokerAi, RentalAi, and LeaseAi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link to="/brokerage" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                  Explore Brokerage
                </Link>
                <Link to="/management" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                  Explore Management
                </Link>
                <Link to="/technology" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300">
                  Explore Technology
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">National Leader</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">AI-Native</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Institutional Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-hhp-accent" />
                  <span className="text-white trust-badge-text">Proven Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage & Management Services */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Brokerage Services */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Brokerage Services</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Institutional-grade investment sales, leasing, and capital markets solutions across multifamily, office, industrial, retail, mixed-use, and senior housing — powered by BrokerAi.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Investment Sales: $5M–$500M+ transactions with AI underwriting and predictive buyer matching</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Leasing Services: Tenant & landlord representation with AI vacancy forecasting and rent benchmarking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Capital Markets: Debt & equity placement with AI risk modeling and capital optimization</span>
                </li>
              </ul>
            </div>

            {/* Management Services */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <BarChart3 className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">Asset Management</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Enterprise-level property management and asset services powered by RentalAi and LeaseAi platforms across all major asset classes.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Multifamily/HUD (RentalAi): Compliance automation, NOI optimization, resident lifecycle AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Office/Industrial/Retail (LeaseAi): Lease compliance, CAM reconciliation, predictive occupancy analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Senior & Specialized Housing: Institutional-grade compliance and retention-focused operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem & National Scale */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technology Ecosystem */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">AI-Native Technology</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Our proprietary SaaS ecosystem delivers institutional-grade performance and sets us apart from traditional firms.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>BrokerAi: Transaction cycle platform for investment sales, leasing, and capital markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>RentalAi: Multifamily/HUD property management with compliance automation and predictive operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>LeaseAi: Office, industrial, retail leasing SaaS with lease abstraction and renewal scoring</span>
                </li>
              </ul>
            </div>

            {/* National Scale */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <HeadphonesIcon className="h-12 w-12 icon-accent" />
                <h2 className="section-title text-hhp-navy">National Leadership</h2>
              </div>
              <p className="text-xl leading-relaxed text-hhp-charcoal mb-6">
                Scaling across U.S. markets with consistent institutional performance, supported by SaaS licensing opportunities for operators nationwide.
              </p>
              <ul className="space-y-3 text-hhp-charcoal">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Proven expertise from Newmark, Colliers, and Big Four firms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>Multi-market operations with institutional-grade consistency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                  <span>SaaS licensing opportunities for operators nationwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
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
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">National Scale</div>
                <p className="text-hhp-charcoal">Portfolio oversight across expanding U.S. markets</p>
              </div>
              <div className="premium-card text-center">
                <div className="text-3xl font-display font-bold text-hhp-navy mb-2">Institutional Trust</div>
                <p className="text-hhp-charcoal">Earned through scalable systems and disciplined execution</p>
              </div>
            </div>

            <Link to="/brokerage" className="btn-hero">
              Explore Brokerage Services
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
                <h3 className="text-lg font-display font-semibold text-white mb-2">Full-Service Platform</h3>
                <p className="text-white/90">Brokerage, management, and advisory across all major property types nationwide</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <Bot className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">AI-Native Ecosystem</h3>
                <p className="text-white/90">Proprietary BrokerAi, RentalAi, and LeaseAi platforms powering institutional portfolios</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-hhp-navy text-white p-8 rounded-lg">
                <TrendingUp className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                <h3 className="text-lg font-display font-semibold text-white mb-2">National Leadership</h3>
                <p className="text-white/90">Proven expertise from Newmark, Colliers, and Big Four firms with $2B+ transaction experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Experience the Future of Real Estate
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Schedule a consultation today and discover how our AI-native platform delivers institutional-grade results for sophisticated investors nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore Our Platforms
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;