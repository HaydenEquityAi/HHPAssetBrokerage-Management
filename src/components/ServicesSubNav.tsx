import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ServicesSubNav = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const services = [
    { name: 'Multifamily', href: '/management/multifamily' },
    { name: 'HUD', href: '/management/hud' },
    { name: 'Office', href: '/management/office' },
    { name: 'Retail', href: '/management/retail' },
    { name: 'Industrial', href: '/management/industrial' },
    { name: 'Senior Housing', href: '/management/senior' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white border-b border-gray-200 transition-all duration-300 ${
      isSticky ? 'sticky top-0 z-50 shadow-sm' : ''
    }`}>
      <div className="container-premium">
        <div className="flex flex-wrap justify-center gap-1 py-4">
          {services.map((service) => {
            const isActive = location.pathname === service.href;
            return (
              <Link
                key={service.href}
                to={service.href}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-hhp-navy text-white shadow-sm'
                    : 'text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50'
                }`}
              >
                {service.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSubNav;
