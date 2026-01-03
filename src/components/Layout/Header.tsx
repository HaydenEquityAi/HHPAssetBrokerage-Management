import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { trackNavigationClick, trackLinkClick, trackButtonClick } from '@/utils/analytics';

const Header = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  
  // Refs for dropdown containers and click outside detection
  const servicesRef = useRef<HTMLDivElement>(null);
  const assetTypesRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // New navigation structure
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Property Management', href: '/services/property-management' },
        { name: 'Advisory & Site Selection', href: '/services/advisory-site-selection' },
        { name: 'Investment Sales', href: '/services/investment-sales' },
        { name: 'Landlord Representation', href: '/services/landlord-representation' },
        { name: 'Tenant Representation', href: '/services/tenant-representation' },
        { name: 'divider' }, // Visual divider
        { name: 'Acquisitions', href: '/services/acquisitions' },
        { name: 'Development', href: '/services/development' },
        { name: 'divider' }, // Visual divider
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {
      name: 'Asset Types',
      href: '/asset-types',
      submenu: [
        { name: 'Multifamily', href: '/asset-types/multifamily' },
        { name: 'HUD & Affordable Housing', href: '/asset-types/hud-affordable' },
        { name: 'Office', href: '/asset-types/office' },
        { name: 'Retail', href: '/asset-types/retail' },
        { name: 'Industrial', href: '/asset-types/industrial' },
        { name: 'Senior Housing', href: '/asset-types/senior-housing' }
      ]
    },
    {
      name: 'Technology',
      href: '/technology',
      submenu: [
        { name: 'AI Platforms', href: '/technology/ai-platforms' },
        { name: 'Advisory & Analytics', href: '/technology/advisory-analytics' },
        { name: 'Custom Solutions', href: '/technology/custom-solutions' }
      ]
    },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' }
  ];

  // Contact as primary CTA
  const contactCTA = {
    name: 'Get in Touch',
    href: '/contact',
    isPrimary: true
  };

  // Check if current path matches dropdown items
  const isServicesActive = location.pathname.startsWith('/services');
  const isAssetTypesActive = location.pathname.startsWith('/asset-types');
  const isTechnologyActive = location.pathname.startsWith('/technology');

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    }, 200);
    setHoverTimeout(timeout);
  };

  // Handle dropdown click
  const handleDropdownClick = (dropdownName: string) => {
    clearHoverTimeout();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle main button click (for Services and Asset Types)
  const handleMainButtonClick = (dropdownName: string, href: string) => {
    // Navigate to the main page
    navigate(href);
    trackNavigationClick(dropdownName);
    trackLinkClick(dropdownName, href);
    // Close dropdown if open
    setActiveDropdown(null);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, dropdownName: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        // Navigate to main page for Services, Asset Types, and Technology
        if (dropdownName === 'Services') {
          handleMainButtonClick(dropdownName, '/asset-management');
        } else if (dropdownName === 'Asset Types') {
          handleMainButtonClick(dropdownName, '/asset-types');
        } else if (dropdownName === 'Technology') {
          handleMainButtonClick(dropdownName, '/technology');
        } else {
          handleDropdownClick(dropdownName);
        }
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (activeDropdown === dropdownName) {
          // Focus first menu item
          const firstMenuItem = document.querySelector(`[role="menu"] [role="menuitem"]`) as HTMLElement;
          firstMenuItem?.focus();
        } else {
          setActiveDropdown(dropdownName);
        }
        break;
    }
  };

  // Handle keyboard navigation within dropdown
  const handleDropdownKeyDown = (event: React.KeyboardEvent, dropdownName: string, itemIndex: number) => {
    const menuItems = document.querySelectorAll(`[role="menu"] [role="menuitem"]`);
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextItem = menuItems[itemIndex + 1] as HTMLElement;
        nextItem?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevItem = menuItems[itemIndex - 1] as HTMLElement;
        prevItem?.focus();
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
      case 'Tab':
        if (event.shiftKey && itemIndex === 0) {
          event.preventDefault();
          setActiveDropdown(null);
          const trigger = document.querySelector(`[aria-controls="${dropdownName.toLowerCase().replace(' ', '-')}-menu"]`) as HTMLElement;
          trigger?.focus();
        }
        break;
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside any dropdown
      if (servicesRef.current && !servicesRef.current.contains(target) &&
          assetTypesRef.current && !assetTypesRef.current.contains(target) &&
          technologyRef.current && !technologyRef.current.contains(target)) {
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

  // Mobile accordion state
  const [mobileAccordions, setMobileAccordions] = useState<{[key: string]: boolean}>({});
  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <header className={`bg-white shadow-subtle relative z-50 transition-all duration-300 ${
      isSticky ? 'sticky top-0 py-2' : ''
    }`}>
      <div className="container-premium">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isSticky ? 'h-14 md:h-16' : 'h-20 sm:h-20 md:h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-4 md:-ml-8 lg:-ml-32">
            <img 
              src="/brand/HHP Asset Group Logo.png" 
              alt="HHP Asset Group" 
              className={`transition-all duration-300 ${
                isSticky 
                  ? 'h-9 sm:h-11 md:h-12' 
                  : 'h-12 sm:h-14 md:h-16'
              } w-auto max-w-[140px] sm:max-w-[180px] md:max-w-none`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="menubar">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    ref={
                      item.name === 'Services' ? servicesRef :
                      item.name === 'Asset Types' ? assetTypesRef :
                      technologyRef
                    }
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex items-center">
                      <button 
                        className={`transition-colors duration-200 font-medium ${
                          (item.name === 'Services' && isServicesActive) ||
                          (item.name === 'Asset Types' && isAssetTypesActive) ||
                          (item.name === 'Technology' && isTechnologyActive)
                            ? 'text-hhp-navy border-b-2 border-hhp-navy' 
                            : 'text-hhp-charcoal hover:text-hhp-navy'
                        }`}
                        onClick={() => {
                          // Navigate to main page for Services, Asset Types, and Technology
                          if (item.name === 'Services') {
                            handleMainButtonClick(item.name, '/asset-management');
                          } else if (item.name === 'Asset Types') {
                            handleMainButtonClick(item.name, '/asset-types');
                          } else if (item.name === 'Technology') {
                            handleMainButtonClick(item.name, '/technology');
                          } else {
                            handleDropdownClick(item.name);
                          }
                        }}
                        onKeyDown={(e) => handleKeyDown(e, item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-haspopup="menu"
                        aria-controls={`${item.name.toLowerCase().replace(' ', '-')}-menu`}
                      >
                        {item.name}
                      </button>
                      <button
                        className="ml-1 p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                        onClick={() => handleDropdownClick(item.name)}
                        aria-label={`Toggle ${item.name} menu`}
                      >
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    </div>
                    
                    {activeDropdown === item.name && (
                      <div 
                        id={`${item.name.toLowerCase().replace(' ', '-')}-menu`}
                        className="absolute top-full left-0 mt-2 min-w-[450px] bg-white rounded-lg shadow-premium py-6 z-50 border border-gray-200"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.submenu.map((subItem, index) => (
                          subItem.name === 'divider' ? (
                            <hr key={`divider-${index}`} className="my-5 border-gray-200" />
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-8 py-5 text-hhp-charcoal hover:text-hhp-navy hover:bg-gray-50 transition-colors duration-200 group"
                              role="menuitem"
                              tabIndex={0}
                              onClick={() => {
                                setActiveDropdown(null);
                                trackNavigationClick(item.name, subItem.name);
                                trackLinkClick(subItem.name, subItem.href);
                              }}
                              onKeyDown={(e) => handleDropdownKeyDown(e, item.name, index)}
                            >
                              <div className="font-medium text-base">{subItem.name}</div>
                            </Link>
                          )
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
                    onClick={() => {
                      trackNavigationClick(item.name);
                      trackLinkClick(item.name, item.href);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Contact CTA */}
            <Link
              to={contactCTA.href}
              className="bg-hhp-navy text-white px-6 py-3 rounded font-medium hover:bg-hhp-navy/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('contact_cta', 'header');
                trackLinkClick('Get in Touch', contactCTA.href);
              }}
            >
              {contactCTA.name}
            </Link>

            {/* Utility Links */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-300">
              <Link 
                to="/resident-login" 
                className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  trackButtonClick('resident_login', 'header');
                  trackLinkClick('Resident Login', '/resident-login');
                }}
              >
                Resident Login
              </Link>
              <Link 
                to="/owner-login" 
                className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200"
                onClick={() => {
                  trackButtonClick('owner_login', 'header');
                  trackLinkClick('Owner Login', '/owner-login');
                }}
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium border-t border-gray-200">
            <div className="container-premium py-4">
              {/* Main Navigation Items */}
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <button
                          className="flex-1 py-3 text-left text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium"
                          onClick={() => {
                            // Navigate to main page for Services, Asset Types, and Technology
                            if (item.name === 'Services') {
                              handleMainButtonClick(item.name, '/asset-management');
                              setIsMobileMenuOpen(false);
                            } else if (item.name === 'Asset Types') {
                              handleMainButtonClick(item.name, '/asset-types');
                              setIsMobileMenuOpen(false);
                            } else if (item.name === 'Technology') {
                              handleMainButtonClick(item.name, '/technology');
                              setIsMobileMenuOpen(false);
                            } else {
                              toggleMobileAccordion(item.name);
                            }
                          }}
                        >
                          {item.name}
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
                          onClick={() => toggleMobileAccordion(item.name)}
                          aria-label={`Toggle ${item.name} menu`}
                        >
                          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                            mobileAccordions[item.name] ? 'rotate-90' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {mobileAccordions[item.name] && (
                        <div className="ml-4 space-y-3">
                          {item.submenu.map((subItem, index) => (
                            subItem.name === 'divider' ? (
                              <hr key={`mobile-divider-${index}`} className="my-4 border-gray-200" />
                            ) : (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-4 px-2 text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="font-medium text-base">{subItem.name}</div>
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  to={contactCTA.href}
                  className="block w-full bg-hhp-navy text-white px-6 py-4 rounded font-medium text-center hover:bg-hhp-navy/90 transition-colors duration-200 mb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contactCTA.name}
                </Link>
              </div>
              
              {/* Mobile Utility Links */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link 
                  to="/resident-login" 
                  className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resident Login
                </Link>
                <Link 
                  to="/owner-login" 
                  className="text-hhp-charcoal hover:text-hhp-navy text-sm font-medium transition-colors duration-200 py-2"
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