import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import haydenImage from '@/assets/hayden-ashley.webp';
import philImage from '@/assets/phil-ashley.webp';
import hannahImage from '@/assets/hannah-fanning.png';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const About = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'people' | 'story' | 'approach'>('people');
  const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});

  // Handle URL hash on mount and when location changes
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'people' || hash === 'story' || hash === 'approach') {
      setActiveTab(hash as 'people' | 'story' | 'approach');
    }
  }, [location]);

  // Update URL hash when tab changes
  const handleTabChange = (tab: 'people' | 'story' | 'approach') => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };

  const toggleBio = (memberId: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              About HHP
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              HHP is a vertically integrated commercial real estate firm delivering institutional-grade brokerage, property management, and advisory services. We combine operator-led execution with disciplined strategy and technology-enabled decision-making to support owners across the full asset lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-premium">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-gray-200 pb-4" role="tablist" aria-label="About HHP sections">
            <button
              onClick={() => handleTabChange('people')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('people');
                }
              }}
              id="tab-people"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'people'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'people'}
              aria-controls="panel-people"
              role="tab"
            >
              Our People
              {activeTab === 'people' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
            <button
              onClick={() => handleTabChange('story')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('story');
                }
              }}
              id="tab-story"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'story'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'story'}
              aria-controls="panel-story"
              role="tab"
            >
              Our Story
              {activeTab === 'story' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
            <button
              onClick={() => handleTabChange('approach')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTabChange('approach');
                }
              }}
              id="tab-approach"
              className={`px-6 py-3 text-base font-medium transition-all duration-300 relative ${
                activeTab === 'approach'
                  ? 'text-hhp-navy'
                  : 'text-hhp-charcoal hover:text-hhp-navy'
              }`}
              aria-selected={activeTab === 'approach'}
              aria-controls="panel-approach"
              role="tab"
            >
              Our Approach
              {activeTab === 'approach' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-hhp-navy transform transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div 
            className="transition-opacity duration-300" 
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {/* Tab 1: Our People */}
            {activeTab === 'people' && (
              <div className="fade-in animate-in fade-in duration-300">
                <div className="text-center mb-12">
                  <h2 className="section-title text-hhp-navy mb-6">Leadership Excellence</h2>
                  <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                    Our core team brings together decades of experience in operations, real estate, property management, and client relations to deliver exceptional results.
                  </p>
                </div>

                {/* Team Grid - 3 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                  {/* Hayden Ashley */}
                  <div className="flex flex-col bg-white rounded-lg p-4 sm:p-6">
                    <img 
                      src={haydenImage} 
                      alt="Hayden Ashley, Managing Principal" 
                      className="w-full h-72 sm:h-80 object-contain object-center rounded-lg mb-5"
                    />
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-1 text-center">Hayden Ashley</h3>
                    <h4 className="text-base font-medium text-hhp-navy mb-4 text-center italic">Managing Principal</h4>
                    
                    {/* Email Contact - Always Visible */}
                    <div className="flex items-center justify-center space-x-2 mb-5">
                      <Mail className="h-4 w-4 text-hhp-navy" />
                      <a 
                        href="mailto:hayden@hhpasset.com" 
                        className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200 font-medium"
                      >
                        hayden@hhpasset.com
                      </a>
                    </div>

                    {/* Expandable Bio */}
                    <button
                      onClick={() => toggleBio('hayden')}
                      className="flex items-center justify-center space-x-2 text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200"
                    >
                      <span>{expandedBios.hayden ? 'Hide Bio' : 'View Bio'}</span>
                      {expandedBios.hayden ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedBios.hayden && (
                      <div className="mt-4 space-y-3 text-sm text-hhp-charcoal leading-relaxed">
                        <p>
                          Hayden Ashley drives HHP Asset Group's national growth and technology strategy. As Managing Principal, he leads the development of our proprietary AI ecosystem—BrokerAi, RentalAi, and LeaseAi—while overseeing enterprise operations across multiple markets nationwide.
                        </p>
                        <p>
                          With a background spanning institutional real estate, Big Four accounting, and advanced technology, Hayden has positioned HHP as America's first AI-native real estate firm. His experience auditing Fortune 500 companies at Ernst & Young, combined with facilitating over $2.0B in real estate transactions, informs HHP's disciplined, institutional-grade approach.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Phil Ashley */}
                  <div className="flex flex-col bg-white rounded-lg p-4 sm:p-6">
                    <img 
                      src={philImage} 
                      alt="Phil Ashley, Director of Operations" 
                      className="w-full h-72 sm:h-80 object-contain object-center rounded-lg mb-5"
                    />
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-1 text-center">Phil Ashley</h3>
                    <h4 className="text-base font-medium text-hhp-navy mb-4 text-center italic">Director of Operations</h4>
                    
                    {/* Email Contact - Always Visible */}
                    <div className="flex items-center justify-center space-x-2 mb-5">
                      <Mail className="h-4 w-4 text-hhp-navy" />
                      <a 
                        href="mailto:phil@hhpasset.com" 
                        className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200 font-medium"
                      >
                        phil@hhpasset.com
                      </a>
                    </div>

                    {/* Expandable Bio */}
                    <button
                      onClick={() => toggleBio('phil')}
                      className="flex items-center justify-center space-x-2 text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200"
                    >
                      <span>{expandedBios.phil ? 'Hide Bio' : 'View Bio'}</span>
                      {expandedBios.phil ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedBios.phil && (
                      <div className="mt-4 space-y-3 text-sm text-hhp-charcoal leading-relaxed">
                        <p>
                          Phil Ashley serves as Director of National Operations, bringing two decades of investment property expertise to HHP's enterprise-level service delivery. His background spans the complete asset lifecycle—from acquisition and performance optimization to value-add execution across all major asset classes.
                        </p>
                        <p>
                          Phil combines technical expertise with institutional-grade operational leadership, ensuring consistent performance across national markets. His systematic approach to property operations and investor relations makes him an invaluable strategic resource for HHP's sophisticated client base nationwide.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Hannah Fanning */}
                  <div className="flex flex-col bg-white rounded-lg p-4 sm:p-6">
                    <img 
                      src={hannahImage} 
                      alt="Hannah Fanning, Director of Client Operations" 
                      className="w-full h-72 sm:h-80 object-contain object-center rounded-lg mb-5"
                    />
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-1 text-center">Hannah Fanning</h3>
                    <h4 className="text-base font-medium text-hhp-navy mb-4 text-center italic">Director of Client Operations</h4>
                    
                    {/* Email Contact - Always Visible */}
                    <div className="flex items-center justify-center space-x-2 mb-5">
                      <Mail className="h-4 w-4 text-hhp-navy" />
                      <a 
                        href="mailto:hannah@hhpasset.com" 
                        className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200 font-medium"
                      >
                        hannah@hhpasset.com
                      </a>
                    </div>

                    {/* Expandable Bio */}
                    <button
                      onClick={() => toggleBio('hannah')}
                      className="flex items-center justify-center space-x-2 text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors duration-200"
                    >
                      <span>{expandedBios.hannah ? 'Hide Bio' : 'View Bio'}</span>
                      {expandedBios.hannah ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedBios.hannah && (
                      <div className="mt-4 space-y-3 text-sm text-hhp-charcoal leading-relaxed">
                        <p>
                          Hannah Fanning directs client operations at HHP Asset Group, ensuring seamless execution of service standards and administrative oversight across all portfolios nationwide. With a decade of enterprise logistics and communications expertise, she delivers disciplined coordination between owners, residents, and vendors.
                        </p>
                        <p>
                          Her leadership ensures transparent reporting, efficient processes, and client-focused service that align with the institutional standards investors expect from HHP's AI-native platform.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Our Story */}
            {activeTab === 'story' && (
              <div className="fade-in animate-in fade-in duration-300">
                <h2 className="section-title text-hhp-navy mb-6 text-center">Why HHP Was Built</h2>
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-hhp-charcoal">
                  <p>
                    HHP was founded from a fundamental frustration with the fragmented real estate services model. Traditional firms silo brokerage, management, and advisory—forcing clients to navigate disconnected relationships, inconsistent execution, and misaligned incentives.
                  </p>
                  <p>
                    We started as an operator-first firm, managing our own portfolio before expanding to serve institutional clients. This foundation taught us that successful real estate requires long-term ownership thinking, not transaction-driven short-termism.
                  </p>
                  <p>
                    Our evolution into a vertically integrated platform was intentional. By combining brokerage expertise with hands-on asset management and technology-enabled decision-making, we eliminate the friction that plagues traditional models. Every service we offer—from acquisitions to property management—operates under a single fiduciary mindset: treat every asset as if we own it.
                  </p>
                  <p>
                    Today, HHP represents disciplined growth built on operator credibility. We've maintained our boutique attentiveness while scaling to serve national markets, powered by proprietary AI platforms that enhance—never replace—human judgment and execution.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Our Approach */}
            {activeTab === 'approach' && (
              <div className="fade-in animate-in fade-in duration-300">
                <h2 className="section-title text-hhp-navy mb-12 text-center">How We Operate</h2>
                <div className="max-w-[720px] mx-auto space-y-8 md:space-y-12">
                  <div className="bg-[#f7f9fb] border-t-[3px] border-hhp-navy p-6 md:p-8">
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Brokerage-First Strategy</h3>
                    <p className="text-base font-semibold leading-relaxed text-hhp-charcoal mb-3">
                      Every transaction begins with institutional-grade market intelligence and disciplined underwriting.
                    </p>
                    <p className="text-base leading-relaxed text-hhp-charcoal">
                      Our brokerage foundation ensures acquisitions, dispositions, and leasing decisions are grounded in rigorous analysis—not momentum or market noise.
                    </p>
                  </div>
                  <div className="bg-[#f7f9fb] border-t-[3px] border-hhp-navy p-6 md:p-8">
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Operator-Led Execution</h3>
                    <p className="text-base font-semibold leading-relaxed text-hhp-charcoal mb-3">
                      Decisions are made by operators who have managed real assets—not spreadsheets.
                    </p>
                    <p className="text-base leading-relaxed text-hhp-charcoal">
                      Long-term performance always outweighs short-term optics.
                    </p>
                  </div>
                  <div className="bg-[#f7f9fb] border-t-[3px] border-hhp-navy p-6 md:p-8">
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Data & AI-Enabled Decision Making</h3>
                    <p className="text-base font-semibold leading-relaxed text-hhp-charcoal mb-3">
                      Proprietary platforms augment human expertise with real-time insight, automated compliance, and performance monitoring.
                    </p>
                    <p className="text-base leading-relaxed text-hhp-charcoal">
                      Improving speed and accuracy without sacrificing judgment.
                    </p>
                  </div>
                  <div className="bg-[#f7f9fb] border-t-[3px] border-hhp-navy p-6 md:p-8">
                    <h3 className="text-xl font-display font-semibold text-hhp-navy mb-3">Long-Term Asset Alignment</h3>
                    <p className="text-base font-semibold leading-relaxed text-hhp-charcoal mb-3">
                      We succeed only when properties perform, tenants thrive, and owners achieve outcomes measured in years—not quarters.
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-hhp-charcoal text-center mt-10 md:mt-12 font-medium">
                    This approach governs every engagement, regardless of asset size, market, or service line.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Join Our Team */}
      <section className="bg-hhp-navy text-white py-20">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-4">Join Our Team</h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-10">
            We're building the next-generation real estate services firm — one that combines institutional standards with entrepreneurial ambition. If you're driven to transform real estate with analytics, compliance expertise, and hands-on execution, we want to hear from you.
          </p>
          <Link
            to="/opportunities"
            className="inline-block bg-white text-hhp-navy px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            aria-label="View Opportunities"
            onClick={() => {
              trackButtonClick('view_opportunities', 'about_join_team');
              trackLinkClick('View Opportunities', '/opportunities');
            }}
          >
            View Opportunities
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;