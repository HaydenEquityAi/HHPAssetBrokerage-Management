import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Building2, Users, Zap, BarChart3, FileText, Home, Briefcase, Target, TrendingUp, Globe } from 'lucide-react';
import equalHousingLogo from '@/assets/equal-housing.png';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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

          {/* Brokerage Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Brokerage Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/brokerage/tenant-rep" className="text-white/90 hover:text-white transition-colors duration-200">
                  Tenant Representation
                </Link>
              </li>
              <li>
                <Link to="/brokerage/landlord-rep" className="text-white/90 hover:text-white transition-colors duration-200">
                  Landlord Representation
                </Link>
              </li>
              <li>
                <Link to="/brokerage/investment-sales" className="text-white/90 hover:text-white transition-colors duration-200">
                  Investment Sales
                </Link>
              </li>
              <li>
                <Link to="/brokerage/site-selection" className="text-white/90 hover:text-white transition-colors duration-200">
                  Site Selection & Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Asset Management Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Asset Management</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/asset-management/multifamily" className="text-white/90 hover:text-white transition-colors duration-200">
                  Multifamily Management
                </Link>
              </li>
              <li>
                <Link to="/asset-management/hud" className="text-white/90 hover:text-white transition-colors duration-200">
                  HUD & Affordable Housing
                </Link>
              </li>
              <li>
                <Link to="/asset-management/office" className="text-white/90 hover:text-white transition-colors duration-200">
                  Office Management
                </Link>
              </li>
              <li>
                <Link to="/asset-management/industrial" className="text-white/90 hover:text-white transition-colors duration-200">
                  Industrial & Warehouse
                </Link>
              </li>
              <li>
                <Link to="/asset-management/retail" className="text-white/90 hover:text-white transition-colors duration-200">
                  Retail Management
                </Link>
              </li>
              <li>
                <Link to="/asset-management/senior" className="text-white/90 hover:text-white transition-colors duration-200">
                  Senior Housing
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Technology</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/technology" className="text-white/90 hover:text-white transition-colors duration-200">
                  Technology Platform
                </Link>
              </li>
            </ul>
            
            <h3 className="text-xl font-display font-semibold text-white mt-8">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resident-login" className="text-white/90 hover:text-white transition-colors duration-200">
                  Resident Login
                </Link>
              </li>
              <li>
                <Link to="/owner-login" className="text-white/90 hover:text-white transition-colors duration-200">
                  Owner Login
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-white/90 hover:text-white transition-colors duration-200">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@hhpassetgroup.com" 
                    className="text-white/90 hover:text-white transition-colors duration-200"
                  >
                    info@hhpassetgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+1-918-899-1650" 
                    className="text-white/90 hover:text-white transition-colors duration-200"
                  >
                    (918) 899-1650
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  Tulsa, Oklahoma
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-hhp-accent mt-1 flex-shrink-0" />
                <div className="text-white/90">
                  8:00am - 6:00pm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-center md:text-left">
              © 2024 HHP Asset Group. All rights reserved. Licensed • Insured • Institutionally Owned • AI-Powered
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