import { Link } from 'react-router-dom';
import { Bot, BarChart3, Settings, ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const Technology = () => {
  const technologyPillars = [
    {
      icon: Bot,
      title: "AI Platforms",
      snippet: "BrokerAi, RentalAi, and LeaseAi power transaction and operations intelligence across acquisitions, leasing, and property management. Real-time comps, absorption forecasts, delinquency/turnover risk scores, and KPI dashboards turn data into action.",
      proofPoint: "Nine offers in 30 days driven by AI buyer targeting.",
      highlights: [
        "Live comps, cap-rate curves, and sales velocity (BrokerAi)",
        "Rent/absorption forecasting and tenant churn risk (LeaseAi, RentalAi)",
        "Owner dashboards: NOI, delinquency, expense variance"
      ],
      href: "/technology/ai-platforms"
    },
    {
      icon: BarChart3,
      title: "Advisory & Analytics",
      snippet: "Dashboards, comps, underwriting models, and portfolio intelligence that make strategy measurable. From market screening and site scoring to feasibility and sensitivity analysis, we deliver boardroom-ready insights.",
      proofPoint: "HQ relocation analysis saved 14% OpEx.",
      highlights: [
        "Trade area/drive-time heatmaps, workforce analytics",
        "Feasibility + sensitivity models (IRR, payback, downside cases)",
        "Portfolio KPIs, variance tracking, and benchmarking"
      ],
      href: "/technology/advisory-analytics"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      snippet: "Bespoke databases, workflow automations, and client-tailored websites/microsites that integrate with your stack (Yardi, RealPage, Google Workspace, n8n, etc.).",
      proofPoint: "12% NOI lift from ops reengineering + automation.",
      highlights: [
        "HUD compliance automation (50059/EIV logs)",
        "Deal rooms, listing microsites, and marketing automation",
        "Data pipelines + executive dashboards (owner/lender views)"
      ],
      href: "/technology/custom-solutions"
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Discovery & Goals",
      description: "KPIs, systems, constraints"
    },
    {
      step: "02", 
      title: "Data Intake",
      description: "Connect PMS/ERP/CRM + market feeds"
    },
    {
      step: "03",
      title: "Modeling & Dashboards", 
      description: "Forecasts, comps, risk scoring"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Automations, training, change mgmt"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Quarterly reviews, roadmap, new features"
    }
  ];

  const kpiCards = [
    {
      icon: Clock,
      title: "Faster Decisions",
      metric: "2×",
      description: "reduction in time from data to decision"
    },
    {
      icon: DollarSign,
      title: "Lower Cost to Operate", 
      metric: "10–15%",
      description: "savings via automation/analytics"
    },
    {
      icon: TrendingUp,
      title: "Improved Performance",
      metric: "6–10%",
      description: "NOI improvement potential with retention & optimization"
    }
  ];


  const faqItems = [
    {
      question: "How do your platforms integrate with our PMS/ERP?",
      answer: "Our platforms seamlessly integrate with major systems including Yardi, RealPage, and custom APIs through secure, standardized connectors."
    },
    {
      question: "Do you support HUD/affordable workflows?",
      answer: "Yes, we provide specialized HUD compliance automation including 50059/EIV logs and regulatory reporting features."
    },
    {
      question: "What's a typical implementation timeline?",
      answer: "Implementation typically takes 4-8 weeks depending on complexity, including data integration, training, and optimization phases."
    },
    {
      question: "Can we license platforms independently?",
      answer: "Yes, our AI platforms can be licensed individually or as part of our comprehensive technology suite."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>HHP Asset Group | Technology</title>
        <meta 
          name="description" 
          content="Explore HHP's Technology: AI Platforms, Advisory & Analytics, and Custom Solutions that deliver measurable performance, faster decisions, and institutional-grade execution." 
        />
        <meta 
          name="keywords" 
          content="real estate technology, AI platforms, property management software, real estate analytics, BrokerAi, RentalAi, LeaseAi, custom solutions" 
        />
        <meta property="og:title" content="HHP Asset Group | Technology" />
        <meta property="og:description" content="Explore HHP's Technology: AI Platforms, Advisory & Analytics, and Custom Solutions that deliver measurable performance, faster decisions, and institutional-grade execution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpassetgroup.com/technology" />
        <meta property="og:image" content="https://hhpassetgroup.com/images/hhp-logo.png" />
        <link rel="canonical" href="https://hhpassetgroup.com/technology" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HHP Asset Group | Technology" />
        <meta name="twitter:description" content="Explore HHP's Technology: AI Platforms, Advisory & Analytics, and Custom Solutions." />
        <meta name="twitter:image" content="https://hhpassetgroup.com/images/hhp-logo.png" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="bg-hhp-navy section-spacing">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="hero-title text-white mb-8">
                Technology That Moves Real Estate Forward
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12">
                Our proprietary AI stack and analytics frameworks deliver institutional-grade execution—faster decisions, tighter controls, and measurable ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="#technology-pillars" 
                  className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant"
                  onClick={() => {
                    trackButtonClick('explore_technology_cta', 'technology_hero');
                    trackLinkClick('Explore Technology', '#technology-pillars');
                  }}
                >
                  Explore Technology →
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300"
                  onClick={() => {
                    trackButtonClick('talk_to_hhp_cta', 'technology_hero');
                    trackLinkClick('Talk to HHP', '/contact');
                  }}
                >
                  Talk to HHP
                </Link>
              </div>
              
              {/* KPI chips */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  2x faster decisions
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  14% OpEx savings
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  22% delinquency reduction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Pillars Grid */}
        <section id="technology-pillars" className="bg-white section-spacing">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={index}
                    className="premium-card p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group focus-within:ring-2 focus-within:ring-hhp-accent focus-within:ring-offset-2"
                    tabIndex={0}
                    onMouseEnter={() => {
                      trackButtonClick(`tech_pillar_hover_${pillar.title.toLowerCase().replace(/\s+/g, '_')}`, 'technology_pillars');
                    }}
                  >
                    {/* Pillar Icon */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="icon-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-hhp-navy">
                        {pillar.title}
                      </h2>
                    </div>
                    
                    {/* Pillar Description */}
                    <p className="text-hhp-charcoal leading-relaxed mb-6">
                      {pillar.snippet}
                    </p>
                    
                    {/* Proof Point */}
                    <div className="bg-hhp-accent/10 border-l-4 border-hhp-accent p-4 rounded-lg mb-6">
                      <p className="font-semibold text-hhp-navy">
                        <span className="text-hhp-accent">Proof Point:</span> {pillar.proofPoint}
                      </p>
                    </div>
                    
                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {pillar.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-hhp-charcoal">
                          <CheckCircle className="h-4 w-4 text-hhp-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Link 
                      to={pillar.href}
                      className="inline-flex items-center text-hhp-accent font-medium hover:text-hhp-navy transition-colors duration-300 group-hover:translate-x-2 group focus:outline-none focus:ring-2 focus:ring-hhp-accent focus:ring-offset-2 rounded"
                      onClick={() => {
                        trackButtonClick(`learn_more_${pillar.title.toLowerCase().replace(/\s+/g, '_')}`, 'technology_pillars');
                        trackLinkClick(`Learn More ${pillar.title}`, pillar.href);
                      }}
                      aria-label={`Learn more about ${pillar.title}`}
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

        {/* Value Banner */}
        <section className="bg-hhp-navy text-white section-spacing">
          <div className="container-premium text-center">
            <h2 className="section-title text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
              Discover how our proprietary AI ecosystem and analytics can streamline processes, reduce risk, and drive measurable ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('talk_to_hhp_cta', 'value_banner');
                  trackLinkClick('Talk to HHP', '/contact');
                }}
              >
                Talk to HHP
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('explore_services_cta', 'value_banner');
                  trackLinkClick('Explore Services', '/services');
                }}
              >
                Explore Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white section-spacing">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">How It Works</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                Our proven implementation process ensures seamless integration and maximum ROI from day one.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-hhp-navy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-hhp-charcoal text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Outcomes */}
        <section className="bg-gray-50 section-spacing">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Featured Outcomes</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                Measurable results that drive real business value across every implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kpiCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div key={index} className="premium-card text-center p-8">
                    <div className="icon-accent mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-hhp-navy mb-2">
                      {card.title}
                    </h3>
                    <div className="text-4xl font-bold text-hhp-accent mb-4">
                      {card.metric}
                    </div>
                    <p className="text-hhp-charcoal">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 section-spacing">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Frequently Asked Questions</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                Common questions about our technology solutions and implementation process.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="premium-card p-6">
                  <h3 className="text-lg font-display font-semibold text-hhp-navy mb-3">
                    {item.question}
                  </h3>
                  <p className="text-hhp-charcoal leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Band */}
        <section className="bg-hhp-navy text-white section-spacing">
          <div className="container-premium text-center">
            <h2 className="section-title text-white mb-6">
              Let's Build Your Technology Advantage
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
              Ready to transform your operations with AI-powered insights and automation? Let's discuss your specific needs and implementation timeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('request_demo_cta', 'final_cta');
                  trackLinkClick('Request a Demo', '/contact');
                }}
              >
                Request a Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                to="/technology/ai-platforms" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('see_pricing_cta', 'final_cta');
                  trackLinkClick('See Pricing & Licensing', '/technology/ai-platforms');
                }}
              >
                See Pricing & Licensing
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Technology;