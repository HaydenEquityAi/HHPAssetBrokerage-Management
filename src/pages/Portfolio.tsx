import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const properties = [
  {
    name: 'Mayor Wallis Manor',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 31,
    status: 'Active',
  },
  {
    name: 'Venture Villa I',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 24,
    status: 'Active',
  },
  {
    name: 'Venture Villa II',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 30,
    status: 'Active',
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy py-16 sm:py-20 lg:py-24">
        <div className="container-premium text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-4 sm:mb-6 tracking-[0.06em] uppercase">
            Our Portfolio
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            AI-native property management across senior housing communities — delivering smarter operations, better resident experiences, and stronger asset performance.
          </p>
        </div>
      </section>

      {/* Map + Property List */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container-premium px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Map */}
            <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-elegant">
              <iframe
                title="Portfolio Map — Pryor, Oklahoma"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225!2d-95.3097!3d36.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b7e1f5c5c5c5c5%3A0x0!2s901+SE+9th+St%2C+Pryor%2C+OK+74361!5e0!3m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px] lg:min-h-[600px]"
              />
            </div>

            {/* Property Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {properties.map((property) => (
                <div
                  key={property.name}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-elegant transition-shadow duration-300 p-6 flex-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-hhp-navy">{property.name}</h3>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block" />
                      {property.status}
                    </span>
                  </div>
                  <div className="space-y-3 text-hhp-charcoal">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-hhp-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{property.address}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-hhp-charcoal/70">Type</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-hhp-charcoal/70">Units</span>
                      <span className="font-medium">{property.units}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium text-center px-4 sm:px-6">
          <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal max-w-2xl mx-auto mb-8">
            Interested in adding your property to the platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-hhp-navy text-white px-6 py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition-all duration-300 shadow-elegant min-h-[48px] flex items-center justify-center text-sm"
              onClick={() => {
                trackButtonClick('request_consultation', 'portfolio_cta');
                trackLinkClick('Request a Consultation', '/contact');
              }}
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              to="/services/property-management"
              className="bg-white text-hhp-navy border-2 border-hhp-navy px-6 py-3 rounded-none font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/5 transition-all duration-300 min-h-[48px] flex items-center justify-center text-sm"
              onClick={() => {
                trackButtonClick('learn_services', 'portfolio_cta');
                trackLinkClick('Learn About Our Services', '/services/property-management');
              }}
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
