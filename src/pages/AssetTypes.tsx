import { Link } from 'react-router-dom';
import { Building2, Home, Building, ShoppingBag, Warehouse, Heart } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const AssetTypes = () => {
  const assetTypes = [
    {
      icon: Home,
      title: "Multifamily",
      snippet: "Enhancing value across stabilized, lease-up, and mixed-use communities through strategic management, tenant experience, and AI-powered retention analytics.",
      proofPoint: "95% tenant satisfaction and 8% NOI growth portfolio-wide.",
      href: "/asset-types/multifamily"
    },
    {
      icon: Building2,
      title: "HUD & Affordable Housing",
      snippet: "Specialized compliance and operations expertise for HUD-regulated and affordable portfolios. We combine RentalAi automation with deep knowledge of HUD 50059 and EIV to ensure accuracy, transparency, and sustained compliance.",
      proofPoint: "100% HUD audit compliance across three managed communities.",
      href: "/asset-types/hud-affordable"
    },
    {
      icon: Building,
      title: "Office",
      snippet: "Positioning workplaces for tenant experience, resilience, and hybrid adaptation. Our data-driven leasing strategies and workplace analytics align space with productivity and ROI.",
      proofPoint: "15% OpEx savings achieved through workplace realignment.",
      href: "/asset-types/office"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      snippet: "Driving foot traffic and value through curated tenant mixes, merchandising analytics, and data-backed leasing strategies. We optimize visibility, sales capture, and rent rolls.",
      proofPoint: "Average sales per SF increased 18% post-remerchandising.",
      href: "/asset-types/retail"
    },
    {
      icon: Warehouse,
      title: "Industrial & Logistics",
      snippet: "Optimizing logistics, last-mile, and manufacturing real estate with data-driven site selection, space utilization, and facility efficiency modeling.",
      proofPoint: "Warehouse occupancy and utilization improved 22% via AI forecasting.",
      href: "/asset-types/industrial"
    },
    {
      icon: Heart,
      title: "Senior Housing & Healthcare",
      snippet: "Delivering operational stability, resident-focused care, and regulatory compliance across senior living, assisted living, and healthcare facilities.",
      proofPoint: "Occupancy recovery 10% faster than market average post-pandemic.",
      href: "/asset-types/senior-housing"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>HHP Asset Group | Asset Types We Serve</title>
        <meta 
          name="description" 
          content="Explore HHP's expertise across Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing—powered by AI, analytics, and institutional execution." 
        />
        <meta 
          name="keywords" 
          content="asset types, multifamily, office, retail, industrial, senior housing, HUD affordable housing, property management, real estate services" 
        />
        <meta property="og:title" content="HHP Asset Group | Asset Types We Serve" />
        <meta property="og:description" content="Explore HHP's expertise across Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing—powered by AI, analytics, and institutional execution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hhpassetgroup.com/asset-types" />
        <meta property="og:image" content="https://hhpassetgroup.com/images/hhp-logo.png" />
        <link rel="canonical" href="https://hhpassetgroup.com/asset-types" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HHP Asset Group | Asset Types We Serve" />
        <meta name="twitter:description" content="Explore HHP's expertise across Multifamily, HUD & Affordable, Office, Retail, Industrial, and Senior Housing." />
        <meta name="twitter:image" content="https://hhpassetgroup.com/images/hhp-logo.png" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="bg-hhp-navy section-spacing">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="hero-title text-white mb-8">
                Every Asset Class, One Integrated Platform
              </h1>
              <p className="text-xl leading-relaxed text-white/90 mb-12">
                HHP Asset Group operates across every major property type—from multifamily and affordable housing to office, retail, industrial, and senior living. Our integrated services, technology, and analytics deliver performance, compliance, and value no matter the asset class.
              </p>
              <Link 
                to="#asset-types" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant"
                onClick={() => {
                  trackButtonClick('explore_asset_types_cta', 'asset_types_hero');
                  trackLinkClick('Explore Asset Types', '#asset-types');
                }}
              >
                Explore Asset Types →
              </Link>
              
              {/* Optional KPI chips */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  100% HUD Audit Compliance
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  8% NOI Lift
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                  50% Faster Lease-Up
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Grid */}
        <section id="asset-types" className="bg-white section-spacing">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {assetTypes.map((assetType, index) => {
                const IconComponent = assetType.icon;
                return (
                  <div 
                    key={index}
                    className="premium-card p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group focus-within:ring-2 focus-within:ring-hhp-accent focus-within:ring-offset-2"
                    tabIndex={0}
                    onMouseEnter={() => {
                      trackButtonClick(`asset_type_hover_${assetType.title.toLowerCase().replace(/\s+/g, '_')}`, 'asset_types_grid');
                    }}
                  >
                    {/* Asset Type Icon */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="icon-accent p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-hhp-navy">
                        {assetType.title}
                      </h2>
                    </div>
                    
                    {/* Asset Type Description */}
                    <p className="text-hhp-charcoal leading-relaxed mb-6">
                      {assetType.snippet}
                    </p>
                    
                    {/* Proof Point */}
                    <div className="bg-hhp-accent/10 border-l-4 border-hhp-accent p-4 rounded-lg mb-6">
                      <p className="font-semibold text-hhp-navy">
                        <span className="text-hhp-accent">Proof Point:</span> {assetType.proofPoint}
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <Link 
                      to={assetType.href}
                      className="inline-flex items-center text-hhp-accent font-medium hover:text-hhp-navy transition-colors duration-300 group-hover:translate-x-2 group focus:outline-none focus:ring-2 focus:ring-hhp-accent focus:ring-offset-2 rounded"
                      onClick={() => {
                        trackButtonClick(`learn_more_${assetType.title.toLowerCase().replace(/\s+/g, '_')}`, 'asset_types_grid');
                        trackLinkClick(`Learn More ${assetType.title}`, assetType.href);
                      }}
                      aria-label={`Learn more about ${assetType.title}`}
                    >
                      <span>Learn More</span>
                      <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
              Ready to Optimize Your Portfolio?
            </h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
              Whether you're managing multifamily, office, retail, industrial, or specialized assets — our integrated platform delivers institutional-grade results with boutique-level service across every asset class.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('consultation_cta', 'asset_types_banner');
                  trackLinkClick('Schedule Consultation', '/contact');
                }}
              >
                Schedule Consultation
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center"
                onClick={() => {
                  trackButtonClick('explore_services_cta', 'asset_types_banner');
                  trackLinkClick('Explore Our Services', '/services');
                }}
              >
                Explore Our Services
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AssetTypes;
