import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const AssetTypes = () => {
  const assetTypes = [
    {
      title: "Multifamily",
      proofPoint: "95% tenant satisfaction and 8% NOI growth portfolio-wide.",
      image: "/images/multifamily-image-trendy.jpg",
      href: "/asset-types/multifamily"
    },
    {
      title: "HUD & Affordable Housing",
      proofPoint: "100% HUD audit compliance across three managed communities.",
      image: "/images/hud-hero.jpg",
      href: "/asset-types/hud-affordable"
    },
    {
      title: "Office",
      proofPoint: "15% OpEx savings achieved through workplace realignment.",
      image: "/images/office-hero.png",
      href: "/asset-types/office"
    },
    {
      title: "Retail",
      proofPoint: "Average sales per SF increased 18% post-remerchandising.",
      image: "/images/retail-hero.png",
      href: "/asset-types/retail"
    },
    {
      title: "Industrial & Logistics",
      proofPoint: "Warehouse occupancy and utilization improved 22% via AI forecasting.",
      image: "/images/industrial-hero.png",
      href: "/asset-types/industrial"
    },
    {
      title: "Senior Housing & Healthcare",
      proofPoint: "Occupancy recovery 10% faster than market average post-pandemic.",
      image: "/images/senior-hero.png",
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
        <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.currentTarget.play().catch(() => {
                // Silently handle autoplay failures
              });
            }}
          >
            <source src="/images/real-estate-hero.mp4" type="video/mp4" />
          </video>
          
          <div className="relative z-10 container-premium text-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto fade-in">
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
            </div>
          </div>
        </section>

        {/* Asset Types Grid */}
        <section id="asset-types" className="bg-white section-spacing">
          <div className="container-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {assetTypes.map((assetType, index) => {
                return (
                  <Link
                    key={index}
                    to={assetType.href}
                    className="premium-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col p-0"
                    style={{ backgroundImage: `url(${assetType.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    onClick={() => {
                      trackButtonClick(`asset_type_${assetType.title.toLowerCase().replace(/\s+/g, '_')}`, 'asset_types_grid');
                      trackLinkClick(assetType.title, assetType.href);
                    }}
                  >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />
                    
                    {/* Content at Bottom-Left */}
                    <div className="relative z-10 flex flex-col items-start justify-end text-left p-4 sm:p-6 h-full">
                      <h3 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl mb-3 text-left">
                        {assetType.title}
                      </h3>
                      <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-300 text-base sm:text-lg text-left">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                    
                    {/* Proof Point on Hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6 z-20">
                      <p className="text-white text-center text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold">Proof Point:</span> {assetType.proofPoint}
                      </p>
                    </div>
                  </Link>
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
                className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-flex items-center justify-center w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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
