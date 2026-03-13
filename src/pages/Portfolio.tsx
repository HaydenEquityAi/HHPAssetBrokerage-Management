import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const properties = [
  {
    name: 'Mayor Wallis Manor',
    location: 'Pryor, OK',
    type: 'Senior Housing',
    units: 31,
    status: 'Active',
  },
  {
    name: 'Venture Villa I',
    location: 'Pryor, OK',
    type: 'Senior Housing',
    units: 24,
    status: 'Active',
  },
  {
    name: 'Venture Villa II',
    location: 'Pryor, OK',
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

      {/* Map Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-premium px-4 sm:px-6">
          <div className="rounded-lg overflow-hidden shadow-elegant" style={{ minHeight: '400px' }}>
            <iframe
              title="Portfolio Map — Pryor, Oklahoma"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25800!2d-95.3161!3d36.3084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Property Cards */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container-premium px-4 sm:px-6">
          <h2 className="section-title text-hhp-navy mb-8 sm:mb-12 text-center">Managed Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {properties.map((property) => (
              <div
                key={property.name}
                className="bg-white rounded-lg shadow-subtle hover:shadow-elegant transition-shadow duration-300 p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-heading text-hhp-navy">{property.name}</h3>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block" />
                    {property.status}
                  </span>
                </div>
                <div className="space-y-2 text-hhp-charcoal">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-hhp-accent flex-shrink-0" />
                    <span className="text-sm">{property.location}</span>
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
      </section>

      {/* Stats Bar */}
      <section className="bg-hhp-navy py-10 sm:py-12">
        <div className="container-premium px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-heading text-white font-bold">85</p>
              <p className="text-sm sm:text-base text-white/70 mt-1">Total Units</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-heading text-white font-bold">3</p>
              <p className="text-sm sm:text-base text-white/70 mt-1">Properties</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-heading text-white font-bold">1</p>
              <p className="text-sm sm:text-base text-white/70 mt-1">State</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-heading text-white font-bold tracking-wide">Growing</p>
              <p className="text-sm sm:text-base text-white/70 mt-1">Status</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container-premium text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-hhp-navy mb-4 sm:mb-6 tracking-[0.06em] uppercase">
            Partner With Us
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-hhp-charcoal max-w-2xl mx-auto mb-8">
            Whether you own a single property or an entire portfolio, our AI-native management platform is built to scale with you.
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
