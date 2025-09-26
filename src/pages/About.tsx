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
              Leadership Excellence in Oklahoma Property Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Our seasoned leadership team brings together decades of real estate expertise, financial acumen, and innovative technology to deliver exceptional results for property owners across Oklahoma.
            </p>
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
                <h3 className="text-xl font-medium text-hhp-navy mb-6">Managing Principal</h3>
              </div>
              
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Hayden Ashley is the founder and Managing Principal of HHP Asset Management, built on the belief that property owners deserve proactive, performance-focused management. After facilitating over $2.0B in real estate across all 50 states with Newmark and Colliers, he saw firsthand how better property-level execution unlocks value. He launched HHP to bring a vertically integrated, data-driven approach rooted in financial discipline, drawing on his background auditing public companies at Ernst & Young.
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
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Director of Operations</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Phil Ashley brings four decades of operations and real estate experience to HHP. He owned the largest janitorial company in Tulsa for 10+ years and has specialized in investment property acquisition for 20 years. As a CCIM candidate, he combines technical expertise with hands-on experience.
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
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Portfolio Manager</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Jenni Pollard drives operational excellence and strategic marketing across HHP's entire portfolio. She manages tenant relations, vendor coordination, and comprehensive reporting while serving as the primary liaison for owners and investors with transparent dashboards and strategic recommendations.
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
              <h4 className="text-lg font-medium text-hhp-navy mb-4 text-center">Property Manager</h4>
              <p className="text-hhp-charcoal leading-relaxed">
                Hannah Fanning oversees daily operations ensuring smooth property management and responsive client support. With 10 years at Melton Truck Lines and a Communications degree from Oklahoma Baptist University, she brings logistical expertise and a people-first approach.
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
                As HHP continues to expand across Oklahoma, we're building our team with the best talent in property management and real estate.
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