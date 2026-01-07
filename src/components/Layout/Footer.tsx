import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium py-8 sm:py-10">
        {/* Top Row: Logo + Horizontal Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/HHP Logo White Letters.png" 
              alt="HHP Asset Group" 
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          {/* Horizontal Navigation Links */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <Link to="/asset-management" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Services
              </Link>
              <Link to="/asset-types" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Asset Types
              </Link>
              <Link to="/technology" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Technology
              </Link>
              <Link to="/insights" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Insights
              </Link>
              <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                About
              </Link>
              <Link to="/opportunities" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Opportunities
              </Link>
              <Link to="/resident-login" className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Resident Login →
              </Link>
              <Link to="/owner-login" className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap py-2 min-h-[44px] flex items-center">
                Owner Login →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: Contact + Follow Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/80 flex-shrink-0" />
                <a 
                  href="mailto:info@hhpasset.com" 
                  className="text-sm text-white/80 hover:text-white transition-colors min-h-[44px] flex items-center"
                >
                  info@hhpasset.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white/80 flex-shrink-0" />
                <span className="text-sm text-white/80 min-h-[44px] flex items-center">
                  Tulsa, Oklahoma
                </span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/hhpasset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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