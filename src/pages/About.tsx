import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import haydenImage from '@/assets/hayden-ashley.webp';
import philImage from '@/assets/phil-ashley.webp';
import hannahImage from '@/assets/hannah-fanning.png';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [expandedBios, setExpandedBios] = useState<{[key: string]: boolean}>({});

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
              About HHP Asset Group
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              America's first AI-native, full-service commercial real estate firm. We deliver institutional-grade brokerage, management, and advisory solutions through proprietary platforms BrokerAi, RentalAi, and LeaseAi.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-white py-12">
        <div className="container-premium">
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
              <h4 className="text-base font-medium text-hhp-navy mb-4 text-center italic">Founder & Managing Principal</h4>
              
              {/* Email Contact - Always Visible */}
              <div className="flex items-center justify-center space-x-2 mb-5">
                <Mail className="h-4 w-4 text-hhp-accent" />
                <a 
                  href="mailto:hayden@hhpasset.com" 
                  className="text-sm text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  hayden@hhpasset.com
                </a>
              </div>

              {/* Expandable Bio */}
              <button
                onClick={() => toggleBio('hayden')}
                className="flex items-center justify-center space-x-2 text-sm text-hhp-accent hover:text-hhp-navy transition-colors duration-200"
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
                    Hayden Ashley drives HHP Asset Group's national growth and technology strategy. As Founder & Managing Principal, he leads the development of our proprietary AI ecosystem—BrokerAi, RentalAi, and LeaseAi—while overseeing enterprise operations across multiple markets nationwide.
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
                <Mail className="h-4 w-4 text-hhp-accent" />
                <a 
                  href="mailto:phil@hhpasset.com" 
                  className="text-sm text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  phil@hhpasset.com
                </a>
              </div>

              {/* Expandable Bio */}
              <button
                onClick={() => toggleBio('phil')}
                className="flex items-center justify-center space-x-2 text-sm text-hhp-accent hover:text-hhp-navy transition-colors duration-200"
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
                <Mail className="h-4 w-4 text-hhp-accent" />
                <a 
                  href="mailto:hannah@hhpasset.com" 
                  className="text-sm text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  hannah@hhpasset.com
                </a>
              </div>

              {/* Expandable Bio */}
              <button
                onClick={() => toggleBio('hannah')}
                className="flex items-center justify-center space-x-2 text-sm text-hhp-accent hover:text-hhp-navy transition-colors duration-200"
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
      </section>

      {/* Join Our Team */}
      <section className="bg-hhp-navy text-white py-20">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-4">Join Our Team</h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-10">
            We're building the next-generation real estate services firm — one that combines institutional standards with entrepreneurial ambition. If you're driven to transform real estate with analytics, compliance expertise, and hands-on execution, we want to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-hhp-navy px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            aria-label="View Opportunities"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;