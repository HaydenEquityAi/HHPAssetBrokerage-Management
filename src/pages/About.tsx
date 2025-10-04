import Layout from '@/components/Layout/Layout';
import haydenImage from '@/assets/hayden-ashley.webp';
import philImage from '@/assets/phil-ashley.webp';
import jenniImage from '@/assets/jenni-pollard.webp';
import hannahImage from '@/assets/hannah-fanning.png';
import { Mail } from 'lucide-react';

const About = () => {
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

      {/* Company Description */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              
              <div className="bg-hhp-navy text-white rounded-lg p-6 md:p-8 text-center mb-10">
                <h3 className="text-xl font-display font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To be the next-generation alternative to institutional real estate firms, blending technology-driven insights, compliance precision, and data-backed execution with boutique attentiveness. We manage every property as if it were our own — creating measurable outcomes for owners, investors, tenants, and communities.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-4">
                <p className="text-lg font-medium text-hhp-navy mb-4">Our difference is simple:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-hhp-accent font-bold mr-3">•</span>
                    <span><strong>Boutique & Entrepreneurial</strong> — a hands-on partner delivering custom strategies, not one-size-fits-all solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hhp-accent font-bold mr-3">•</span>
                    <span><strong>Comprehensive Services</strong> — spanning acquisitions, development, property management, advisory & site selection, investment sales, landlord and tenant representation, and consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hhp-accent font-bold mr-3">•</span>
                    <span><strong>Data-Driven Performance</strong> — powered by proprietary technology platforms (BrokerAi, RentalAi, LeaseAi) for insight, precision, and speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hhp-accent font-bold mr-3">•</span>
                    <span><strong>Client-Centric approach</strong> — agile, responsive, and committed to aligning strategies with your goals</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-white py-12">
        <div className="container-premium">
          <div className="text-center mb-8">
            <h2 className="section-title text-hhp-navy mb-6">Leadership Excellence</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our core team brings together decades of experience in operations, real estate, property management, and client relations to deliver exceptional results.
            </p>
          </div>

          {/* Team Grid - Uniform Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Hayden Ashley */}
            <div className="team-box">
              <img 
                src={haydenImage} 
                alt="Hayden Ashley, Managing Principal" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Hayden Ashley</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center italic">Founder & Managing Principal</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Hayden Ashley drives HHP Asset Group's national growth and technology strategy. As Founder & Managing Principal, he leads the development of our proprietary AI ecosystem—BrokerAi, RentalAi, and LeaseAi—while overseeing enterprise operations across multiple markets nationwide.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                With a background spanning institutional real estate, Big Four accounting, and advanced technology, Hayden has positioned HHP as America's first AI-native real estate firm. His experience auditing Fortune 500 companies at Ernst & Young, combined with facilitating over $2.0B in real estate transactions, informs HHP's disciplined, institutional-grade approach.
              </p>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 mt-6">
                <Mail className="h-5 w-5 text-hhp-accent" />
                <a 
                  href="mailto:hayden@hhpasset.com" 
                  className="text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  hayden@hhpasset.com
                </a>
              </div>
            </div>

            {/* Phil Ashley */}
            <div className="team-box">
              <img 
                src={philImage} 
                alt="Phil Ashley, Director of Operations" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Phil Ashley</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center italic">Director of National Operations</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Phil Ashley serves as Director of National Operations, bringing two decades of investment property expertise to HHP's enterprise-level service delivery. His background spans the complete asset lifecycle—from acquisition and performance optimization to value-add execution across all major asset classes.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                Phil combines technical expertise with institutional-grade operational leadership, ensuring consistent performance across national markets. His systematic approach to property operations and investor relations makes him an invaluable strategic resource for HHP's sophisticated client base nationwide.
              </p>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 mt-6">
                <Mail className="h-5 w-5 text-hhp-accent" />
                <a 
                  href="mailto:phil@hhpasset.com" 
                  className="text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  phil@hhpasset.com
                </a>
              </div>
            </div>

            {/* Jenni Pollard */}
            <div className="team-box">
              <img 
                src={jenniImage} 
                alt="Jenni Pollard, Portfolio Manager" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Jenni Pollard</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center italic">Director of Portfolio Strategy & Marketing</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Jenni Pollard directs portfolio strategy and marketing at HHP Asset Group, integrating advanced analytics, market intelligence, and strategic communications to optimize performance across multi-market operations nationwide.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                She leads marketing initiatives, investor reporting, and client engagement strategies that position portfolios for long-term success. As the primary liaison for institutional clients, Jenni delivers transparent dashboards, tailored insights, and strategic recommendations that strengthen HHP's reputation as America's first AI-native real estate firm.
              </p>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 mt-6">
                <Mail className="h-5 w-5 text-hhp-accent" />
                <a 
                  href="mailto:jenni@hhpasset.com" 
                  className="text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  jenni@hhpasset.com
                </a>
              </div>
            </div>

            {/* Hannah Fanning */}
            <div className="team-box">
              <img 
                src={hannahImage} 
                alt="Hannah Fanning, Property Manager" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Hannah Fanning</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center italic">Director of Client Operations</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Hannah Fanning directs client operations at HHP Asset Group, ensuring seamless execution of service standards and administrative oversight across all portfolios nationwide. With a decade of enterprise logistics and communications expertise, she delivers disciplined coordination between owners, residents, and vendors.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                Her leadership ensures transparent reporting, efficient processes, and client-focused service that align with the institutional standards investors expect from HHP's AI-native platform.
              </p>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 mt-6">
                <Mail className="h-5 w-5 text-hhp-accent" />
                <a 
                  href="mailto:hannah@hhpasset.com" 
                  className="text-hhp-navy hover:text-hhp-accent transition-colors duration-200 font-medium"
                >
                  hannah@hhpasset.com
                </a>
              </div>
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