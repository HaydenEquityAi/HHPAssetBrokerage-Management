import Layout from '@/components/Layout/Layout';
import haydenImage from '@/assets/hayden-ashley.webp';
import philImage from '@/assets/phil-ashley.webp';
import jenniImage from '@/assets/jenni-pollard.webp';
import hannahImage from '@/assets/hannah-fanning.png';
import { Award, Target, Users, Zap, Building2, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              National Leadership in AI-Native Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Our institutional leadership team brings together decades of Big Four, Fortune 500, and $2B+ transaction experience to deliver enterprise-grade solutions for sophisticated investors nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-8">About HHP Asset Management</h2>
            <div className="space-y-6 text-lg leading-relaxed text-hhp-charcoal">
              <p>
                HHP Asset Management is a full-stack, multi-asset property management firm pioneering AI-native solutions that deliver institutional-grade performance for investors and property owners across national markets. Through our proprietary RentalAi platform and vertically integrated approach, we manage diversified portfolios across multifamily, office, industrial, retail, mixed-use, senior living, and specialized housing with enterprise-level efficiency and transparency.
              </p>
              <p>
                Our systematic methodology combines advanced technology with deep market expertise across every major asset class, enabling us to optimize property performance while reducing operational overhead. We serve sophisticated investors, institutions, REITs, private equity funds, and family offices nationwide who demand both innovation and results.
              </p>
              <p>
                In addition to direct property management, HHP provides licensing opportunities for its proprietary RentalAi platform, enabling institutions and operators nationwide to integrate enterprise-grade AI into their own portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hayden Ashley - Hero Treatment */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="section-title text-hhp-navy mb-4">Hayden Ashley</h2>
                <h3 className="text-xl font-medium text-hhp-navy mb-6">Founder & Managing Principal</h3>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Hayden Ashley drives HHP Asset Management's national growth and technology strategy. As Founder & Managing Principal, he leads the development of RentalAi—America's first AI-native property management platform—while overseeing enterprise operations across multiple markets.
              </p>
              <p className="text-lg leading-relaxed text-hhp-charcoal">
                With a background spanning institutional real estate, Big Four accounting, and advanced technology, Hayden has positioned HHP as a national leader in property management innovation. His experience auditing Fortune 500 companies at Ernst & Young, combined with facilitating over $2.0B in real estate transactions with Newmark and Colliers, informs HHP's disciplined, institutional-grade approach. His vision of uniting enterprise systems with proprietary AI has made HHP a trusted partner for sophisticated investors and institutions seeking performance beyond the limits of traditional firms.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 icon-accent" />
                  <div>
                    <div className="font-semibold text-hhp-navy">$2.0B+</div>
                    <div className="text-sm text-hhp-charcoal">Real Estate Facilitated</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 icon-accent" />
                  <div>
                    <div className="font-semibold text-hhp-navy">Data-Driven</div>
                    <div className="text-sm text-hhp-charcoal">Performance Focus</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6 icon-accent" />
                  <div>
                    <div className="font-semibold text-hhp-navy">Financial</div>
                    <div className="text-sm text-hhp-charcoal">Discipline</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 icon-accent" />
                  <div>
                    <div className="font-semibold text-hhp-navy">Ernst & Young</div>
                    <div className="text-sm text-hhp-charcoal">Audit Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={haydenImage} 
                alt="Hayden Ashley, Managing Principal" 
                className="w-full max-w-md mx-auto rounded-lg shadow-premium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">Leadership Excellence</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              Our core team brings together decades of experience in operations, real estate, property management, and client relations to deliver exceptional results.
            </p>
          </div>

          {/* Team Grid - 2x2 Premium Rectangular Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Phil Ashley */}
            <div className="team-box">
              <img 
                src={philImage} 
                alt="Phil Ashley, Director of Operations" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Phil Ashley</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Director of National Operations</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Phil Ashley serves as Director of National Operations, bringing two decades of investment property expertise to HHP's enterprise-level service delivery. His background spans the complete asset lifecycle—from acquisition and performance optimization to value-add execution.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                Phil combines technical expertise with institutional-grade operational leadership, ensuring consistent performance across national markets. His systematic approach to property operations and investor relations makes him an invaluable strategic resource for HHP's sophisticated client base.
              </p>
            </div>

            {/* Jenni Pollard */}
            <div className="team-box">
              <img 
                src={jenniImage} 
                alt="Jenni Pollard, Portfolio Manager" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Jenni Pollard</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Director of Portfolio Strategy & Marketing</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Jenni Pollard directs portfolio strategy and marketing at HHP Asset Management, integrating advanced analytics, market intelligence, and strategic communications to optimize performance across multi-market operations.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                She leads marketing initiatives, investor reporting, and client engagement strategies that position portfolios for long-term success. As the primary liaison for institutional clients, Jenni delivers transparent dashboards, tailored insights, and strategic recommendations that strengthen HHP's reputation as a national leader in sophisticated property management.
              </p>
            </div>

            {/* Hannah Fanning */}
            <div className="team-box">
              <img 
                src={hannahImage} 
                alt="Hannah Fanning, Property Manager" 
                className="w-48 h-56 object-contain rounded-lg mx-auto mb-6 shadow-subtle"
              />
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Hannah Fanning</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Director of Client Operations</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Hannah Fanning directs client operations at HHP Asset Management, ensuring seamless execution of service standards and administrative oversight across all portfolios. With a decade of enterprise logistics and communications expertise, she delivers disciplined coordination between owners, residents, and vendors.
              </p>
              <p className="text-hhp-charcoal leading-relaxed">
                Her leadership ensures transparent reporting, efficient processes, and client-focused service that align with the institutional standards investors expect from HHP.
              </p>
            </div>

            {/* Future Team Member Placeholder */}
            <div className="team-box opacity-75 border-dashed border-2 border-hhp-accent">
              <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-hhp-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-2 text-center">Growing Team</h3>
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Future Team Member</h4>
              <p className="text-hhp-charcoal leading-relaxed text-center">
                As HHP continues to expand across national markets, we're building our team with the best talent in property management and real estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-12">Our Values Drive Excellence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Award className="h-12 w-12 text-hhp-accent mx-auto" />
                <h3 className="text-xl font-display font-semibold text-white">Vertically Integrated</h3>
                <p className="text-white/90 leading-relaxed">
                  Complete control over every aspect of property management from acquisition to optimization.
                </p>
              </div>
              
              <div className="space-y-4">
                <Target className="h-12 w-12 text-hhp-accent mx-auto" />
                <h3 className="text-xl font-display font-semibold text-white">Data Driven</h3>
                <p className="text-white/90 leading-relaxed">
                  Every decision backed by comprehensive market analysis and performance metrics.
                </p>
              </div>
              
              <div className="space-y-4">
                <Zap className="h-12 w-12 text-hhp-accent mx-auto" />
                <h3 className="text-xl font-display font-semibold text-white">Forward Thinking</h3>
                <p className="text-white/90 leading-relaxed">
                  Pioneering AI-native solutions that transform property management efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;