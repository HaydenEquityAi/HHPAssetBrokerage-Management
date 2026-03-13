import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

// Replace with your Mapbox public token from https://account.mapbox.com/
const MAPBOX_TOKEN = 'pk.YOUR_MAPBOX_TOKEN_HERE';

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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const isPlaceholderToken = MAPBOX_TOKEN === 'pk.YOUR_MAPBOX_TOKEN_HERE';

  useEffect(() => {
    if (isPlaceholderToken) return;

    // Load Mapbox CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
    document.head.appendChild(cssLink);

    // Load Mapbox JS
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js';
    script.onload = () => {
      if (!mapContainerRef.current || mapRef.current) return;

      const mapboxgl = (window as any).mapboxgl;
      mapboxgl.accessToken = MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-95.3097, 36.3045],
        zoom: 14,
      });

      mapRef.current = map;

      map.on('load', () => {
        setMapLoaded(true);
      });

      // Add marker
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<strong>HHP Managed Properties</strong><br/>901 SE 9th Street, Pryor, OK 74361'
      );

      new mapboxgl.Marker({ color: '#0A2342' })
        .setLngLat([-95.3097, 36.3045])
        .setPopup(popup)
        .addTo(map);

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    };
    document.head.appendChild(script);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      cssLink.remove();
      script.remove();
    };
  }, [isPlaceholderToken]);

  return (
    <Layout>
      {/* Map + Property List — full viewport */}
      <div
        className="flex flex-col lg:flex-row"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        {/* Map */}
        <div className="lg:w-3/5 min-h-[400px] lg:min-h-0 relative">
          {isPlaceholderToken ? (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Map loading — Mapbox token required</p>
            </div>
          ) : (
            <div ref={mapContainerRef} className="w-full h-full" />
          )}
        </div>

        {/* Property List */}
        <div className="lg:w-2/5 bg-white overflow-y-auto p-6">
          <p className="text-sm text-gray-500 mb-4">({properties.length}) Properties Found</p>

          <div className="flex flex-col gap-4">
            {properties.map((property) => (
              <div
                key={property.name}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-elegant transition-all duration-300 overflow-hidden border-l-4 border-l-transparent hover:border-l-[#C8952E]"
              >
                {/* Navy banner */}
                <div className="bg-hhp-navy h-16 rounded-t-lg flex items-center justify-center px-4">
                  <h3 className="text-white font-heading font-bold text-lg tracking-wide">{property.name}</h3>
                </div>

                {/* Card body */}
                <div className="p-5 space-y-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 inline-block" />
                    {property.status}
                  </span>

                  <div className="flex items-start gap-2 text-hhp-charcoal">
                    <MapPin className="h-4 w-4 text-hhp-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{property.address}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-hhp-charcoal">
                    <div>
                      <span className="text-hhp-charcoal/70">Type</span>
                      <p className="font-medium">{property.type}</p>
                    </div>
                    <div>
                      <span className="text-hhp-charcoal/70">Units</span>
                      <p className="font-medium">{property.units}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
