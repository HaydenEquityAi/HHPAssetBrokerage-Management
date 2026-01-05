import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const Development = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              From Dirt to Delivery, Done Right
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Site planning, entitlements, and ground-up execution.
            </p>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-hhp-accent hover:text-white transition-all duration-200 shadow-lg"
              onClick={() => {
                trackButtonClick('partner_with_hhp_cta', 'development_hero');
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

export default Development;
