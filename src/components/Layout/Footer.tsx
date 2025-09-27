import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import equalHousingLogo from '@/assets/equal-housing.png';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">HHP Asset Group</h3>
            <p className="text-white/90 leading-relaxed">
              America's first AI-native, full-service commercial real estate firm. Delivering institutional-grade brokerage, management, and advisory solutions.
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src={equalHousingLogo} 
                alt="Equal Housing Opportunity" 
                className="h-12 w-auto opacity-90"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-white transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/rental-ai" className="text-white/90 hover:text-white transition-colors duration-200">
                  RentalAi Platform
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/multifamily" className="text-white/90 hover:text-white transition-colors duration-200">
                  Multifamily Management
                </Link>
              </li>
              <li>
                <Link to="/services/office" className="text-white/90 hover:text-white transition-colors duration-200">
                  Office Management
                </Link>
              </li>
              <li>
                <Link to="/services/industrial" className="text-white/90 hover:text-white transition-colors duration-200">
                  Industrial & Warehouse
                </Link>
              </li>
              <li>
                <Link to="/services/retail" className="text-white/90 hover:text-white transition-colors duration-200">
                  Retail Management
                </Link>
              </li>
              <li>
                <Link to="/services/mixed-use" className="text-white/90 hover:text-white transition-colors duration-200">
                  Mixed-Use Development
                </Link>
              </li>
              <li>
                <Link to="/services/senior-living" className="text-white/90 hover:text-white transition-colors duration-200">
                  Senior Living
                </Link>
              </li>
              <li>
                <Link to="/services/hud-housing" className="text-white/90 hover:text-white transition-colors duration-200">
                  HUD & Specialized Housing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@hhpasset.com" 
                    className="text-white/90 hover:text-white transition-colors duration-200"
                  >
                    info@hhpasset.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  Full-Stack Multi-Asset Management Nationwide
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  Institutional-Grade Service Delivery<br />
                  AI-Powered Platform Operations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-center md:text-left">
              © 2024 HHP Asset Management. All rights reserved. Licensed • Insured • Institutionally Owned • AI-Powered
            </p>
            <p className="text-white/80 text-center md:text-right">
              Hayden Ashley, Managing Principal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;