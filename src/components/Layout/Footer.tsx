import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium py-8 sm:py-10">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          
          {/* LEFT: Logo/Branding */}
          <div className="flex items-start">
            <img 
              src="/images/HHP Logo White Letters.png" 
              alt="HHP Asset Group" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          {/* CENTER-LEFT: Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/asset-management" className="block text-sm text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/asset-types" className="block text-sm text-white/80 hover:text-white transition-colors">
                  Asset Types
                </Link>
              </li>
              <li>
                <Link to="/technology" className="block text-sm text-white/80 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/insights" className="block text-sm text-white/80 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-sm text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="block text-sm text-white/80 hover:text-white transition-colors">
                  Opportunities
                </Link>
              </li>
            </ul>

            {/* Login Links */}
            <div className="pt-3 space-y-2">
              <Link to="/resident-login" className="block text-sm text-white/70 hover:text-white transition-colors">
                Resident Login →
              </Link>
              <Link to="/owner-login" className="block text-sm text-white/70 hover:text-white transition-colors">
                Owner Login →
              </Link>
            </div>
          </div>

          {/* CENTER-RIGHT: Contact */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:info@hhpasset.com" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  info@hhpasset.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white/80 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Tulsa, Oklahoma
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Social Media */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/hhpasset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/20 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-white/70 text-center">
            © 2024 HHP Asset Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;