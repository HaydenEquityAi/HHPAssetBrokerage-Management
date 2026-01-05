import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const BrokerConsulting = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Broker of Record & Consulting Services
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Custom solutions for complex problems. Tailored strategies, compliance guidance, and special projects with institutional-grade expertise.
            </p>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-hhp-accent hover:text-white transition-all duration-200 shadow-lg"
              onClick={() => {
                trackButtonClick('partner_with_hhp_cta', 'broker_consulting_hero');
                trackLinkClick('Partner with HHP', '/contact');
              }}
            >
              Partner with HHP
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrokerConsulting;

