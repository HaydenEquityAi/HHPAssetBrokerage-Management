import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import equalHousingLogo from '@/assets/equal-housing.png';

const Footer = () => {
  return (
    <footer className="bg-hhp-navy text-white">
      <div className="container-premium py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">HHP Asset Group</h3>
            <p className="text-white/80 leading-relaxed">
            Next-generation real estate partner delivering boutique, client-focused service enhanced by proprietary analytics platforms.
            </p>
            <img 
              src={equalHousingLogo} 
              alt="Equal Housing Opportunity" 
              className="h-12 w-auto opacity-90"
            />
          </div>

          {/* Main Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/asset-management" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/asset-types" className="text-white/80 hover:text-white transition-colors">
                  Asset Types
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/80 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-white/80 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>

            {/* Login Links */}
            <div className="pt-4 space-y-2">
              <Link to="/resident-login" className="block text-white/70 hover:text-white transition-colors text-sm">
                Resident Login →
              </Link>
              <Link to="/owner-login" className="block text-white/70 hover:text-white transition-colors text-sm">
                Owner Login →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info@hhpassetgroup.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@hhpasset.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+1-918-899-1650" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (918) 899-1650
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hhp-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Tulsa, Oklahoma
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/hhpasset" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1JLHp25e3N/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm">
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