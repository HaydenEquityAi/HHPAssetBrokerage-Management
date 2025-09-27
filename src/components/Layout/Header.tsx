import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import hhpLogo from '@/assets/hhp-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrokerageOpen, setIsBrokerageOpen] = useState(false);
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const [brokerageTimeout, setBrokerageTimeout] = useState<NodeJS.Timeout | null>(null);
  const [managementTimeout, setManagementTimeout] = useState<NodeJS.Timeout | null>(null);
  const brokerageRef = useRef<HTMLDivElement>(null);
  const managementRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Brokerage', 
      href: '/brokerage',
      submenu: [
        { name: 'Investment Sales', href: '/brokerage/investment-sales' },
        { name: 'Leasing Services', href: '/brokerage/leasing' },
        { name: 'Capital Markets', href: '/brokerage/capital-markets' },
        { name: 'Valuations & Advisory', href: '/brokerage/valuations' }
      ]
    },
    {
      name: 'Management',
      href: '/management',
      submenu: [
        { name: 'Multifamily', href: '/management/multifamily' },
        { name: 'HUD', href: '/management/hud' },
        { name: 'Office', href: '/management/office' },
        { name: 'Retail', href: '/management/retail' },
        { name: 'Industrial', href: '/management/industrial' },
        { name: 'Senior Housing', href: '/management/senior' }
      ]
    },
    { name: 'Technology', href: '/technology' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ];

  // Brokerage dropdown hover handlers
  const handleBrokerageMouseEnter = () => {
    if (brokerageTimeout) {
      clearTimeout(brokerageTimeout);
      setBrokerageTimeout(null);
    }
    setIsBrokerageOpen(true);
  };

  const handleBrokerageMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsBrokerageOpen(false);
    }, 200);
    setBrokerageTimeout(timeout);
  };

  // Management dropdown hover handlers
  const handleManagementMouseEnter = () => {
    if (managementTimeout) {
      clearTimeout(managementTimeout);
      setManagementTimeout(null);
    }
    setIsManagementOpen(true);
  };

  const handleManagementMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsManagementOpen(false);
    }, 200);
    setManagementTimeout(timeout);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (brokerageTimeout) {
        clearTimeout(brokerageTimeout);
      }
      if (managementTimeout) {
        clearTimeout(managementTimeout);
      }
    };
  }, [brokerageTimeout, managementTimeout]);

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
                    ref={item.name === 'Brokerage' ? brokerageRef : managementRef}
                    className="relative"
                    onMouseEnter={item.name === 'Brokerage' ? handleBrokerageMouseEnter : handleManagementMouseEnter}
                    onMouseLeave={item.name === 'Brokerage' ? handleBrokerageMouseLeave : handleManagementMouseLeave}
                  >
                    <button className="flex items-center text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {(item.name === 'Brokerage' ? isBrokerageOpen : isManagementOpen) && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-premium py-4 z-50"
                        onMouseEnter={item.name === 'Brokerage' ? handleBrokerageMouseEnter : handleManagementMouseEnter}
                        onMouseLeave={item.name === 'Brokerage' ? handleBrokerageMouseLeave : handleManagementMouseLeave}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-6 py-3 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => {
                              setIsBrokerageOpen(false);
                              setIsManagementOpen(false);
                            }}
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
            
            {/* CTA Button */}
            <div className="flex items-center space-x-3 ml-6">
              <Link 
                to="/contact" 
                className="bg-hhp-navy text-white px-6 py-2 rounded text-sm font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
              >
                Schedule Consultation
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
              
              {/* Mobile CTA Button */}
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="bg-hhp-navy text-white px-6 py-3 rounded text-center font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule Consultation
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