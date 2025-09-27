import { Link } from 'react-router-dom';

interface PremiumCTABannerProps {
  title: string;
  description: string;
  primaryCTA: string;
  primaryLink: string;
  secondaryCTA?: string;
  secondaryLink?: string;
}

const PremiumCTABanner = ({ 
  title, 
  description, 
  primaryCTA, 
  primaryLink,
  secondaryCTA,
  secondaryLink 
}: PremiumCTABannerProps) => {
  return (
    <section className="bg-hhp-navy text-white section-spacing">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-white mb-6">{title}</h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to={primaryLink} 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
            >
              {primaryCTA}
            </Link>
            {secondaryCTA && secondaryLink && (
              <Link 
                to={secondaryLink} 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
              >
                {secondaryCTA}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTABanner;
