import Layout from '@/components/Layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceStubProps {
  title: string;
  description: string;
  serviceType: string;
}

const ServiceStub = ({ title, description, serviceType }: ServiceStubProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              {title}
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              {description}
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-8">Coming Soon</h2>
            <p className="text-lg leading-relaxed text-hhp-charcoal mb-8">
              We're currently developing comprehensive content for our {serviceType.toLowerCase()} services. 
              Our team is working to provide you with detailed information about our capabilities, 
              processes, and how we can help achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-hhp-navy text-white px-6 py-3 rounded font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/about" 
                className="border border-hhp-navy text-hhp-navy px-6 py-3 rounded font-medium hover:bg-hhp-navy hover:text-white transition-colors duration-200"
              >
                Learn About HHP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceStub;
