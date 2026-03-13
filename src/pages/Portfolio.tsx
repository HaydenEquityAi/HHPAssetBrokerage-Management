import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight, X, ChevronLeft, Home, Phone, Mail } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

const properties = [
  {
    id: 'mwm',
    name: 'Mayor Wallis Manor',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 31,
    status: 'Active',
    built: '1991',
    beds: '1 BD',
    baths: '1 BA',
    coords: [-95.3078362685698, 36.29323680677572],
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 31-unit HUD Section 202 senior housing community providing affordable, supportive housing for elderly residents in Pryor, Oklahoma.',
  },
  {
    id: 'vv1',
    name: 'Venture Villa I',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 24,
    status: 'Active',
    built: '1985',
    beds: '1 BD',
    baths: '1 BA',
    coords: [-95.3078362685698, 36.29323680677572],
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 24-unit HUD Section 202 senior housing community located on the Pryor campus, serving elderly residents through the PRAC program.',
  },
  {
    id: 'vv2',
    name: 'Venture Villa II',
    address: '901 SE 9th Street, Pryor, OK 74361',
    type: 'Senior Housing',
    units: 30,
    status: 'Active',
    built: '1995',
    beds: '1 BD',
    baths: '1 BA',
    coords: [-95.3078362685698, 36.29323680677572],
    phone: '(918) 825-1250',
    email: 'mwm@hhpasset.com',
    description: 'A 30-unit HUD Section 202 senior housing community, the newest addition to the Pryor campus with modern amenities for senior residents.',
  },
];

const Portfolio = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const popupsRef = useRef<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const flyToProperty = (property: typeof properties[0]) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: property.coords,
      zoom: 17,
      duration: 1200,
    });
    // Open the popup for this property
    popupsRef.current.forEach((p) => p.remove());
    const mapboxgl = (window as any).mapboxgl;
    if (mapboxgl) {
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: true, maxWidth: '280px' })
        .setLngLat(property.coords)
        .setHTML(
          `<div style="font-family:sans-serif;padding:8px 4px;">
            <div style="font-size:15px;font-weight:700;color:#0A2342;margin-bottom:6px;">${property.name}</div>
            <div style="font-size:12px;color:#666;margin-bottom:8px;">${property.address}</div>
            <div style="display:flex;gap:16px;margin-bottom:8px;">
              <div><span style="font-size:10px;color:#999;text-transform:uppercase;letter-spacing:0.5px;">Type</span><div style="font-size:13px;font-weight:600;color:#0A2342;">${property.type}</div></div>
              <div><span style="font-size:10px;color:#999;text-transform:uppercase;letter-spacing:0.5px;">Units</span><div style="font-size:13px;font-weight:600;color:#0A2342;">${property.units}</div></div>
            </div>
            <div style="font-size:11px;color:#16A34A;font-weight:600;">● ${property.status}</div>
          </div>`
        )
        .addTo(mapRef.current);
      popupsRef.current = [popup];
    }
    setSelectedProperty(property.id);
  };

  const openDetail = (property: typeof properties[0]) => {
    setSelectedProperty(property.id);
    setDetailOpen(true);
    flyToProperty(property);
  };

  const closeDetail = () => {
    setDetailOpen(false);
    setSelectedProperty(null);
    popupsRef.current.forEach((p) => p.remove());
    if (mapRef.current) {
      mapRef.current.flyTo({ center: [-95.3078362685698, 36.29323680677572], zoom: 15, duration: 800 });
    }
  };

  useEffect(() => {
    if (!document.getElementById('mapbox-css')) {
      const link = document.createElement('link');
      link.id = 'mapbox-css';
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
      document.head.appendChild(link);
    }

    const loadMap = () => {
      if (!mapContainer.current || mapRef.current) return;
      const mapboxgl = (window as any).mapboxgl;
      if (!mapboxgl) return;

      mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-95.3078362685698, 36.29323680677572],
        zoom: 15,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Built-in marker — eliminates CSS drift on zoom
      const marker = new mapboxgl.Marker({ color: '#0A2342', scale: 1.2 })
        .setLngLat([-95.3078362685698, 36.29323680677572])
        .addTo(map);

      marker.getElement().style.cursor = 'pointer';
      marker.getElement().addEventListener('click', () => {
        popupsRef.current.forEach((p) => p.remove());
        const popup = new mapboxgl.Popup({ offset: 25, closeButton: true, maxWidth: '300px' })
          .setLngLat([-95.3078362685698, 36.29323680677572])
          .setHTML(
            '<div style="font-family:sans-serif;padding:8px 4px;">' +
            '<div style="font-size:16px;font-weight:700;color:#0A2342;margin-bottom:4px;">HHP Managed Properties</div>' +
            '<div style="font-size:13px;color:#666;margin-bottom:6px;">901 SE 9th Street, Pryor, OK 74361</div>' +
            '<div style="font-size:13px;color:#0A2342;font-weight:600;">3 Properties · 85 Units</div>' +
            '<div style="font-size:12px;color:#16A34A;font-weight:600;margin-top:4px;">● All Active</div>' +
            '</div>'
          )
          .addTo(map);
        popupsRef.current = [popup];
      });

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

  const selectedProp = properties.find((p) => p.id === selectedProperty);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Map */}
        <div className="w-full lg:w-3/5 relative bg-gray-100 h-[400px] lg:h-full">
          <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
          {/* Results count overlay */}
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border-l-4 border-l-[#C8952E]">
            <span className="text-sm font-semibold text-hhp-navy">({properties.length}) Properties</span>
            <span className="text-sm text-hhp-charcoal/60 ml-1">· Pryor, OK</span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-2/5 bg-white overflow-y-auto h-auto lg:h-full border-l border-gray-200 border-t-[3px] border-t-[#C8952E]">

          {/* Detail View */}
          {detailOpen && selectedProp ? (
            <div className="animate-in">
              {/* Back button */}
              <button
                onClick={closeDetail}
                className="flex items-center gap-2 text-sm text-hhp-charcoal/60 hover:text-hhp-navy px-6 pt-5 pb-2 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back to all properties
              </button>

              {/* Property banner */}
              <div className="bg-hhp-navy mx-6 rounded-lg p-6 mb-6" style={{ borderBottom: '3px solid #C8952E' }}>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading font-bold text-white text-2xl tracking-wide uppercase">{selectedProp.name}</h2>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                    {selectedProp.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-base">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedProp.address}
                </div>
              </div>

              {/* Overview */}
              <div className="px-6 mb-6">
                <h3 className="text-base font-semibold text-hhp-navy uppercase tracking-wider mb-3">Overview</h3>
                <p className="text-base text-hhp-charcoal/70 leading-relaxed mb-6">{selectedProp.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm text-hhp-charcoal/50 uppercase tracking-wider">Type</span>
                    <p className="text-base font-bold text-hhp-navy mt-1">{selectedProp.type}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm text-hhp-charcoal/50 uppercase tracking-wider">Units</span>
                    <p className="text-base font-bold text-hhp-navy mt-1">{selectedProp.units}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm text-hhp-charcoal/50 uppercase tracking-wider">Bedrooms</span>
                    <p className="text-base font-bold text-hhp-navy mt-1">{selectedProp.beds}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-sm text-hhp-charcoal/50 uppercase tracking-wider">Bathrooms</span>
                    <p className="text-base font-bold text-hhp-navy mt-1">{selectedProp.baths}</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="px-6 mb-6">
                <h3 className="text-base font-semibold text-hhp-navy uppercase tracking-wider mb-3">Contact</h3>
                <div className="space-y-3">
                  <a href={`tel:${selectedProp.phone}`} className="flex items-center gap-3 text-base font-medium text-hhp-charcoal hover:text-hhp-navy transition-colors">
                    <Phone className="w-5 h-5 text-hhp-accent" />
                    {selectedProp.phone}
                  </a>
                  <a href={`mailto:${selectedProp.email}`} className="flex items-center gap-3 text-base font-medium text-hhp-charcoal hover:text-hhp-navy transition-colors">
                    <Mail className="w-5 h-5 text-hhp-accent" />
                    {selectedProp.email}
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-8">
                <div className="flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="bg-hhp-navy text-white px-6 py-3 rounded font-semibold text-base hover:bg-hhp-navy/90 transition-colors text-center"
                    onClick={() => { trackButtonClick('property_detail_contact', 'portfolio'); }}
                  >
                    Contact About This Property
                  </Link>
                  <Link
                    to="/services/property-management"
                    className="border border-hhp-navy text-hhp-navy px-6 py-3 rounded font-semibold text-base hover:bg-hhp-navy hover:text-white transition-colors text-center"
                    onClick={() => { trackButtonClick('property_detail_services', 'portfolio'); }}
                  >
                    Learn About Our Management
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* List View */
            <div>
              <div className="p-6 pb-3">
                <h2 className="font-heading text-xl font-bold text-hhp-navy tracking-wide uppercase mb-1">Managed Properties</h2>
                <p className="text-base text-hhp-charcoal/50">({properties.length}) Results Found</p>
              </div>

              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 gap-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => openDetail(property)}
                      className={`border-l-4 border-l-[#C8952E] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                        selectedProperty === property.id ? 'border-[#C8952E]' : 'hover:border-[#C8952E]'
                      }`}
                    >
                      {/* Navy header */}
                      <div className="bg-hhp-navy px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-white/60" />
                          <h3 className="font-heading font-bold text-white text-base tracking-wide uppercase">{property.name}</h3>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                          {property.status}
                        </span>
                      </div>

                      {/* Card body */}
                      <div className="p-4 bg-white">
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className="h-3.5 w-3.5 text-hhp-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-hhp-charcoal">{property.address}</span>
                        </div>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <span className="text-hhp-charcoal/40 uppercase tracking-wider">Type</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.type}</p>
                          </div>
                          <div>
                            <span className="text-hhp-charcoal/40 uppercase tracking-wider">Units</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.units}</p>
                          </div>
                          <div>
                            <span className="text-hhp-charcoal/40 uppercase tracking-wider">Beds</span>
                            <p className="font-bold text-hhp-navy mt-0.5">{property.beds}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-200 p-6">
                <p className="font-heading text-base text-hhp-navy mb-3 tracking-wide uppercase">Interested in adding your property?</p>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    className="bg-hhp-navy text-white px-6 py-3 rounded font-semibold text-sm hover:bg-hhp-navy/90 transition-colors"
                    onClick={() => { trackButtonClick('portfolio_cta_consultation', 'portfolio'); trackLinkClick('Request a Consultation', '/contact'); }}
                  >
                    Request a Consultation
                  </Link>
                  <Link
                    to="/services/property-management"
                    className="border border-hhp-navy text-hhp-navy px-6 py-3 rounded font-semibold text-sm hover:bg-hhp-navy hover:text-white transition-colors"
                    onClick={() => { trackButtonClick('portfolio_cta_services', 'portfolio'); trackLinkClick('Our Services', '/services/property-management'); }}
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
