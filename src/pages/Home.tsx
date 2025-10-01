import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap, TrendingUp, ArrowRight, Building2, BarChart3, HeadphonesIcon, Bot, Target, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import commercialImage from '@/assets/commercial-building.webp';
import heroImage from '@/assets/hero-property.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/multifamily-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-hhp-navy/40" />
        
        <div className="relative z-10 container-premium text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-8">
              Full-Service Real Estate Solutions. AI-Native Performance.
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              A national real estate services firm delivering brokerage, management, and advisory solutions — powered by proprietary AI platforms and automation enhancement technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brokerage" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                Explore Brokerage
              </Link>
              <Link to="/asset-management" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
                Explore Management
              </Link>
              <Link to="/technology" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300">
                Explore Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">What We Do</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              We create solutions across the full real estate lifecycle:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                Invest
              </h3>
              <p className="text-hhp-charcoal text-sm">
                Strategic acquisitions & dispositions
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                Lease & Occupy
              </h3>
              <p className="text-hhp-charcoal text-sm">
                Tenant & owner representation
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                Design & Build
              </h3>
              <p className="text-hhp-charcoal text-sm">
                Tailored improvements that maximize asset value
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                Manage
              </h3>
              <p className="text-hhp-charcoal text-sm">
                Institutional-grade property & asset management
              </p>
            </div>

            <div className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                Optimize
              </h3>
              <p className="text-hhp-charcoal text-sm">
                Cost savings and efficiency through automation & AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Research */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Insights & Research</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Real estate decisions are only as strong as the data behind them. At HHP, we deliver market intelligence and thought leadership to keep our clients ahead:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="premium-card text-center">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  AI's Impact on Real Estate Workforces
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  How automation is transforming property management and brokerage operations
                </p>
              </div>
              
              <div className="premium-card text-center">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  Capital Market Trends
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  Market analysis as rates stabilize and investment patterns shift
                </p>
              </div>
              
              <div className="premium-card text-center">
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  Growth Sectors
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  Multifamily, industrial, and life sciences sector opportunities
                </p>
              </div>
            </div>

            <Link to="/insights" className="btn-hero">
              Explore Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
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

      {/* Our Commitment */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Our Commitment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="premium-card text-center">
                <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  Client Outcomes
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  Aligned success through efficiency, compliance, and tenant satisfaction
                </p>
              </div>
              
              <div className="premium-card text-center">
                <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  Responsibility & Sustainability
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  Ethical partnerships and smarter building operations
                </p>
              </div>
              
              <div className="premium-card text-center">
                <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                  People & Culture
                </h3>
                <p className="text-hhp-charcoal text-sm">
                  Investing in our team to deliver institutional-level service with a local touch
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
            HHP Asset Group isn't just a property manager—we are your full-service real estate partner.
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of commercial real estate with our AI-native platform and institutional-grade expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Get in Touch
            </Link>
            <Link 
              to="/asset-management" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;