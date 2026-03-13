import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

const properties = [
  { name: 'Mayor Wallis Manor', address: '901 SE 9th Street, Pryor, OK 74361', type: 'Senior Housing', units: 31, status: 'Active' },
  { name: 'Venture Villa I', address: '901 SE 9th Street, Pryor, OK 74361', type: 'Senior Housing', units: 24, status: 'Active' },
  { name: 'Venture Villa II', address: '901 SE 9th Street, Pryor, OK 74361', type: 'Senior Housing', units: 30, status: 'Active' },
];

const Portfolio = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!MAPBOX_TOKEN) return;

    // Load Mapbox CSS
    if (!document.getElementById('mapbox-css')) {
      const link = document.createElement('link');
      link.id = 'mapbox-css';
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
      document.head.appendChild(link);
    }

    // Load Mapbox JS
    const loadMap = () => {
      if (!mapContainer.current || mapRef.current) return;
      const mapboxgl = (window as any).mapboxgl;
      if (!mapboxgl) return;

      mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-95.3078362685698, 36.29323680677572],
        zoom: 16,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add marker
      const markerEl = document.createElement('div');
      markerEl.style.width = '32px';
      markerEl.style.height = '32px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = '#0A2342';
      markerEl.style.border = '3px solid #C8952E';
      markerEl.style.cursor = 'pointer';
      markerEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<div style="font-family:sans-serif;padding:4px 0;">' +
        '<strong style="font-size:14px;color:#0A2342;">HHP Managed Properties</strong><br/>' +
        '<span style="font-size:12px;color:#666;">901 SE 9th Street<br/>Pryor, OK 74361</span><br/>' +
        '<span style="font-size:11px;color:#16A34A;font-weight:600;">● 3 Properties · 85 Units</span>' +
        '</div>'
      );

      new mapboxgl.Marker(markerEl)
        .setLngLat([-95.3078362685698, 36.29323680677572])
        .setPopup(popup)
        .addTo(map);

      mapRef.current = map;
    };

    if ((window as any).mapboxgl) {
      loadMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js';
      script.onload = loadMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <Layout>
      {/* Full-screen map + property list */}
      <div className="flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Map */}
        <div className="w-full lg:w-3/5 relative bg-gray-100 h-[400px] lg:h-full">
          <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
        </div>

        {/* Property List */}
        <div className="w-full lg:w-2/5 bg-white overflow-y-auto h-auto lg:h-full">
          <div className="p-6 sm:p-8">
            <p className="text-sm text-hhp-charcoal/60 mb-6 font-medium">({properties.length}) Properties Found</p>

            <div className="flex flex-col gap-5">
              {properties.map((property) => (
                <div
                  key={property.name}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 hover:border-l-4 hover:border-l-[#C8952E]"
                >
                  {/* Navy banner */}
                  <div className="bg-hhp-navy px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-white/70" />
                      <h3 className="font-heading font-bold text-white text-base sm:text-lg tracking-wide uppercase">{property.name}</h3>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                      {property.status}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 bg-white">
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-hhp-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-hhp-charcoal">{property.address}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-hhp-charcoal/50 uppercase tracking-wider">Type</span>
                        <p className="text-sm font-semibold text-hhp-navy mt-0.5">{property.type}</p>
                      </div>
                      <div>
                        <span className="text-xs text-hhp-charcoal/50 uppercase tracking-wider">Units</span>
                        <p className="text-sm font-semibold text-hhp-navy mt-0.5">{property.units}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA inside the right column */}
          <div className="border-t border-gray-200 p-6 sm:p-8 mt-4">
            <p className="text-base sm:text-lg font-heading text-hhp-navy mb-4 tracking-wide uppercase">Interested in adding your property?</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="bg-hhp-navy text-white px-6 py-3 rounded font-semibold text-sm hover:bg-hhp-navy/90 transition-colors text-center"
                onClick={() => { trackButtonClick('portfolio_cta_consultation', 'portfolio'); trackLinkClick('Request a Consultation', '/contact'); }}
              >
                Request a Consultation
              </Link>
              <Link
                to="/services/property-management"
                className="border border-hhp-navy text-hhp-navy px-6 py-3 rounded font-semibold text-sm hover:bg-hhp-navy hover:text-white transition-colors text-center"
                onClick={() => { trackButtonClick('portfolio_cta_services', 'portfolio'); trackLinkClick('Learn About Our Services', '/services/property-management'); }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
