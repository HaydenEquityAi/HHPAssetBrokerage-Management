import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import hhpLogo from '@/assets/hhp-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Multifamily Management', href: '/services/multifamily' },
        { name: 'HUD & Specialized Housing', href: '/services/hud-housing' },
        { name: 'Residential Management', href: '/services/residential' },
        { name: 'Commercial & Office', href: '/services/commercial' }
      ]
    },
    { name: 'RentalAi', href: '/rental-ai' },
    { name: 'Contact', href: '/contact' }
  ];

  // Services dropdown hover handlers
  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // Small delay before closing
    setServicesTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeout) {
        clearTimeout(servicesTimeout);
      }
    };
  }, [servicesTimeout]);

  return (
    <header className="bg-white shadow-subtle relative z-50">
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={hhpLogo} 
              alt="HHP Asset Management" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <button className="flex items-center text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-premium py-4 z-50"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-6 py-3 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium ${
                      location.pathname === item.href ? 'text-hhp-navy' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Login Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link 
                to="/resident-login" 
                className="bg-hhp-navy text-white px-4 py-2 rounded text-sm font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
              >
                Resident Login
              </Link>
              <Link 
                to="/owner-login" 
                className="bg-hhp-navy text-white px-4 py-2 rounded text-sm font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
              >
                Owner Login
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium py-4">
            <div className="container-premium">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-3 text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 border-l-2 border-gray-200 pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-2 text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Login Buttons */}
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
                <Link 
                  to="/resident-login" 
                  className="bg-hhp-navy text-white px-6 py-3 rounded text-center font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Resident Login
                </Link>
                <Link 
                  to="/owner-login" 
                  className="bg-hhp-navy text-white px-6 py-3 rounded text-center font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Owner Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;