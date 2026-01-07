import { Link } from 'react-router-dom';
import { Bot, BarChart3, Settings, ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Technology = () => {
  const technologyPillars = [
    {
      icon: Bot,
      title: "AI Platforms",
      snippet: "BrokerAi, RentalAi, and LeaseAi power transaction and operations intelligence across acquisitions, leasing, and property management. Real-time comps, absorption forecasts, delinquency/turnover risk scores, and KPI dashboards turn data into action.",
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
      question: "How do your platforms integrate with our existing systems?",
      answer: "Our technology is designed to integrate with common accounting, property management, CRM, and reporting platforms through APIs and structured data workflows. We prioritize minimizing disruption by working within your existing stack wherever possible, rather than forcing full system replacement."
    },
    {
      question: "What platforms do you support integration with?",
      answer: "We support integrations with leading property management, accounting, CRM, document management, and analytics platforms. Specific integrations depend on your current systems and scope, and we assess compatibility during onboarding to ensure a clean and secure connection."
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "Implementation timelines vary by scope, but most engagements range from 2–6 weeks. Simpler integrations can move faster, while larger portfolios or custom workflows may require phased rollouts."
    },
    {
      question: "How does the data migration process work?",
      answer: "We follow a structured migration process that includes data mapping, validation, testing, and reconciliation before go-live. Our goal is to ensure accuracy, continuity, and minimal operational downtime throughout the transition."
    },
    {
      question: "What training and support do you provide?",
      answer: "We provide role-based training for leadership, operators, and on-site teams, along with documentation and live support during rollout. Post-implementation support is available to ensure adoption, performance, and long-term success."
    },
    {
      question: "Can the platforms be customized to our specific workflows?",
      answer: "Yes. Our technology is designed to be configurable and adaptable to your operational workflows, reporting needs, and approval structures. Customization is guided by best practices to avoid unnecessary complexity while preserving flexibility."
    },
    {
      question: "What security and compliance standards do you meet?",
      answer: "We follow industry-standard security practices including access controls, role-based permissions, encrypted data handling, and auditability. Compliance considerations are addressed based on your asset type, jurisdiction, and operational requirements."
    },
    {
      question: "How does pricing work?",
      answer: "Pricing is based on scope, portfolio size, and level of customization or support required. We offer transparent, engagement-based pricing so clients understand costs upfront without hidden usage fees."
    },
    {
      question: "What happens to our data?",
      answer: "Your data remains your property. We maintain clear data ownership, access controls, and export capabilities to ensure transparency, portability, and long-term security."
    },
    {
      question: "How do you handle ongoing support and updates?",
      answer: "We provide ongoing support, performance monitoring, and system updates as part of our technology engagements. Enhancements and improvements are rolled out intentionally to maintain stability while evolving with your operational needs."
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
        <section 
          className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/ai-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-hhp-navy/60"></div>
          <div className="relative z-10 container-premium">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-white mb-8 drop-shadow-lg">
                Technology That Moves Real Estate Forward
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12 drop-shadow-md">
                Our proprietary AI stack and analytics frameworks deliver institutional-grade execution—faster decisions, tighter controls, and measurable ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  to="#technology-pillars" 
                  className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
                  onClick={() => {
                    trackButtonClick('explore_technology_cta', 'technology_hero');
                    trackLinkClick('Explore Technology', '#technology-pillars');
                  }}
                >
                  Explore Technology →
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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
                    
                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {pillar.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-hhp-charcoal">
                          <CheckCircle className="h-4 w-4 text-hhp-navy mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Link 
                      to={pillar.href}
                      className="inline-flex items-center text-hhp-navy font-medium hover:text-hhp-navy/80 transition-colors duration-300 group-hover:translate-x-2 group focus:outline-none focus:ring-2 focus:ring-hhp-navy focus:ring-offset-2 rounded"
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
                    <div className="text-4xl font-bold text-hhp-navy mb-4">
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
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 border-b-0"
                  >
                    <AccordionTrigger className="text-left text-lg font-bold text-hhp-navy hover:text-hhp-navy/80 hover:no-underline px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hhp-navy focus-visible:ring-offset-2 rounded-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-hhp-charcoal px-6 pb-5 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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