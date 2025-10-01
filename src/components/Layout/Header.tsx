import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  
  // Separate refs for each dropdown
  const assetManagementRef = useRef<HTMLDivElement>(null);
  const brokerageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Navigation configuration
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Asset Management',
      href: '/asset-management',
      submenu: [
        { name: 'Multifamily', href: '/asset-management/multifamily' },
        { name: 'HUD & Affordable Housing', href: '/asset-management/hud' },
        { name: 'Office', href: '/asset-management/office' },
        { name: 'Industrial', href: '/asset-management/industrial' },
        { name: 'Retail', href: '/asset-management/retail' },
        { name: 'Senior Housing', href: '/asset-management/senior' }
      ]
    },
    { 
      name: 'Brokerage', 
      href: '/brokerage',
      submenu: [
        { name: 'Tenant Representation', href: '/brokerage/tenant-rep' },
        { name: 'Landlord Representation', href: '/brokerage/landlord-rep' },
        { name: 'Investment Sales', href: '/brokerage/investment-sales' },
        { name: 'Site Selection & Advisory', href: '/brokerage/site-selection' }
      ]
    },
    { name: 'Technology', href: '/technology' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Check if current path matches dropdown items
  const isAssetManagementActive = location.pathname.startsWith('/asset-management');
  const isBrokerageActive = location.pathname.startsWith('/brokerage');

  // Clear hover timeout helper
  const clearHoverTimeout = () => {
    if (hoverTimeout) {
      window.clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  // Handle dropdown hover enter
  const handleDropdownEnter = (dropdownName: string) => {
    clearHoverTimeout();
    setActiveDropdown(dropdownName);
  };

  // Handle dropdown hover leave
  const handleDropdownLeave = () => {
    const timeout = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Increased to 300ms for better UX
    setHoverTimeout(timeout);
  };

  // Handle dropdown click
  const handleDropdownClick = (dropdownName: string) => {
    clearHoverTimeout();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, dropdownName: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleDropdownClick(dropdownName);
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside both dropdowns
      if (assetManagementRef.current && !assetManagementRef.current.contains(target) &&
          brokerageRef.current && !brokerageRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  return (
    <header className="bg-white shadow-subtle relative z-50">
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-32">
            <img 
              src="/brand/HHP Asset Group Logo.png" 
              alt="HHP Asset Group" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={item.name === 'Asset Management' ? assetManagementRef : brokerageRef}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button 
                      className={`flex items-center transition-colors duration-200 font-medium ${
                        (item.name === 'Asset Management' && isAssetManagementActive) || 
                        (item.name === 'Brokerage' && isBrokerageActive)
                          ? 'text-hhp-navy border-b-2 border-hhp-navy' 
                          : 'text-hhp-charcoal hover:text-hhp-navy'
                      }`}
                      onClick={() => handleDropdownClick(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-premium py-4 z-50"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-6 py-3 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 transition-colors duration-200"
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
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
                      location.pathname === item.href ? 'text-hhp-navy border-b-2 border-hhp-navy' : ''
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
                className="border border-hhp-navy text-hhp-navy px-4 py-2 rounded text-sm font-medium hover:bg-hhp-navy hover:text-white transition-colors duration-200"
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium py-4">
            <div className="container-premium">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-3 text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
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
                          onClick={() => setIsMobileMenuOpen(false)}
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
                  className="border border-hhp-navy text-hhp-navy px-6 py-3 rounded text-center font-medium hover:bg-hhp-navy hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resident Login
                </Link>
                <Link 
                  to="/owner-login" 
                  className="bg-hhp-navy text-white px-6 py-3 rounded text-center font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
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