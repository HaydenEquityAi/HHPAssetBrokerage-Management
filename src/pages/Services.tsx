import { Link } from 'react-router-dom';
import { Building2, Globe, DollarSign, Users, Target, Settings, FileText, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Property Management",
      snippet: "We go beyond operations to deliver NOI growth, compliance excellence, and superior tenant experiences. With RentalAi dashboards and HUD expertise, we transform management into measurable performance.",
      proofPoint: "22% delinquency reduction at HUD property.",
      href: "/services/property-management"
    },
    {
      icon: Globe,
      title: "Advisory & Site Selection",
      snippet: "Real estate decisions hinge on location. We use demographics, GIS mapping, and LeaseAi analytics to match portfolios with workforce, logistics, and long-term growth.",
      proofPoint: "HQ relocation saved 14% OpEx.",
      href: "/services/advisory-site-selection"
    },
    {
      icon: DollarSign,
      title: "Investment Sales",
      snippet: "Our capital markets team combines institutional valuation rigor with AI-powered buyer targeting to unlock liquidity and maximize proceeds.",
      proofPoint: "Nine offers secured within 30 days.",
      href: "/services/investment-sales"
    },
    {
      icon: Building2,
      title: "Landlord Representation",
      snippet: "We accelerate leasing velocity through tenant targeting, dynamic rent optimization, and data-backed marketing campaigns.",
      proofPoint: "Lease-up downtime cut by 60%.",
      href: "/services/landlord-representation"
    },
    {
      icon: Users,
      title: "Tenant Representation",
      snippet: "Occupiers trust us to secure favorable terms, align space with workforce strategy, and forecast occupancy costs with precision.",
      proofPoint: "18% savings achieved through lease renegotiation.",
      href: "/services/tenant-representation"
    },
    {
      icon: Target,
      title: "Acquisitions",
      snippet: "We source and underwrite opportunities with AI-driven deal pipelines, stress-tested models, and disciplined structuring to protect investor capital.",
      proofPoint: "$500M in deals evaluated in 2025.",
      href: "/services/acquisitions"
    },
    {
      icon: Settings,
      title: "Development",
      snippet: "From feasibility to lease-up, we manage ground-up projects with entitlement dashboards, cost controls, and absorption forecasts.",
      proofPoint: "Permitting timelines cut by 30%.",
      href: "/services/development"
    },
    {
      icon: FileText,
      title: "Consulting",
      snippet: "For complex challenges, we provide bespoke consulting — from HUD compliance and operational turnarounds to tech adoption and portfolio strategy.",
      proofPoint: "12% NOI lift achieved via process reengineering.",
      href: "/services/consulting"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Comprehensive Real Estate Services, Reimagined
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              HHP Asset Group delivers the full lifecycle of commercial real estate services — from acquisitions and development to management, leasing, sales, and strategic advisory — all powered by proprietary AI platforms.
            </p>
            <Link 
              to="#services" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant"
              onClick={() => {
                trackButtonClick('explore_services_cta', 'services_hero');
                trackLinkClick('Explore Services', '#services');
              }}
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="premium-card p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
                  onMouseEnter={() => {
                    trackButtonClick(`service_hover_${service.title.toLowerCase().replace(/\s+/g, '_')}`, 'services_grid');
                  }}
                >
                  {/* Service Icon */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl font-display font-bold text-hhp-navy">
                      {service.title}
                    </h2>
                  </div>
                  
                  {/* Service Description */}
                  <p className="text-hhp-charcoal leading-relaxed mb-6">
                    {service.snippet}
                  </p>
                  
                  {/* Proof Point */}
                  <div className="bg-hhp-accent/10 border-l-4 border-hhp-accent p-4 rounded-lg mb-6">
                    <p className="font-semibold text-hhp-navy">
                      <span className="text-hhp-navy">Proof Point:</span> {service.proofPoint}
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-hhp-navy font-medium hover:text-hhp-navy/80 transition-colors duration-300 group-hover:translate-x-2 group"
                    onClick={() => {
                      trackButtonClick(`learn_more_${service.title.toLowerCase().replace(/\s+/g, '_')}`, 'services_grid');
                      trackLinkClick(`Learn More ${service.title}`, service.href);
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Experience the Future of Real Estate?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Whether you're looking to acquire, develop, manage, or sell — our comprehensive services and proprietary AI platforms deliver institutional-grade results with boutique-level service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('consultation_cta', 'services_banner');
                trackLinkClick('Schedule Consultation', '/contact');
              }}
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
              onClick={() => {
                trackButtonClick('explore_platforms_cta', 'services_banner');
                trackLinkClick('Explore Our Platforms', '/technology');
              }}
            >
              Explore Our Platforms
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;