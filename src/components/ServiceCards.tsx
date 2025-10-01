import { ReactNode } from 'react';

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceCardsProps {
  services: ServiceCard[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ServiceCards = ({ services, title, subtitle, className = "" }: ServiceCardsProps) => {
  return (
    <section className={`bg-white section-spacing ${className}`}>
      <div className="container-premium">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="section-title text-hhp-navy mb-6">{title}</h2>}
            {subtitle && (
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="premium-card text-center">
              <div className="icon-accent mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-hhp-navy mb-4">
                {service.title}
              </h3>
              <p className="text-hhp-charcoal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
