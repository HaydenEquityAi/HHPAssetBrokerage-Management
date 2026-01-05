import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import equalHousingLogo from '@/assets/equal-housing.png';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8">
          
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">HHP Asset Group</h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Next-generation real estate partner delivering boutique, client-focused service enhanced by proprietary analytics platforms.
            </p>
            <img 
              src={equalHousingLogo} 
              alt="Equal Housing Opportunity" 
              className="h-10 sm:h-12 w-auto opacity-90"
            />
          </div>

          {/* Main Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/asset-management" className="block text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/asset-types" className="block text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                  Asset Types
                </Link>
              </li>
              <li>
                <Link to="/technology" className="block text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/insights" className="block text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                  About
                </Link>
              </li>
            </ul>

            {/* Login Links */}
            <div className="pt-3 sm:pt-4 space-y-2">
              <Link to="/resident-login" className="block text-sm text-white/70 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                Resident Login →
              </Link>
              <Link to="/owner-login" className="block text-sm text-white/70 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center">
                Owner Login →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info@hhpassetgroup.com" 
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center"
                >
                  info@hhpasset.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+1-918-899-1650" 
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors min-h-[32px] sm:min-h-[40px] flex items-center"
                >
                  (918) 899-1650
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/80 min-h-[32px] sm:min-h-[40px] flex items-center">
                  Tulsa, Oklahoma
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 sm:pt-4">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/hhpasset" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-xs sm:text-sm text-center sm:text-left">
            <p className="text-white/70">
              © 2024 HHP Asset Group. All rights reserved.
            </p>
            <p className="text-white/70">
              Licensed • Insured • AI-Powered
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;