import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building, TrendingUp, Shield, Users, Target, BarChart3 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface AssetTypePageProps {
  // Hero Section
  heroImage: string;
  title: string;
  tagline: string;
  
  // Market Context
  marketText: string;
  valueProposition: string;
  valuePropositionTitle?: string; // Optional: defaults to "HHP's Value Proposition"
  
  // Services Context (descriptions for each service relevant to this asset type)
  services: {
    propertyManagement: string;
    advisorySiteSelection: string;
    investmentSales: string;
    landlordRepresentation: string;
    tenantRepresentation: string;
    acquisitionsDevelopment: string;
  };
  servicesTitle?: string; // Optional: defaults to "Our Integrated Services for {title}"
  servicesSubtitle?: string; // Optional: defaults to "Comprehensive solutions tailored to..."
  serviceTitles?: {
    propertyManagement?: string;
    advisorySiteSelection?: string;
    investmentSales?: string;
    landlordRepresentation?: string;
    tenantRepresentation?: string;
    acquisitionsDevelopment?: string;
  }; // Optional: custom service card titles
  
  // Technology Advantages
  technologyAdvantages: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
  technologyTitle?: string; // Optional: defaults to "AI-Driven Advantage for {title}"
  technologySubtitle?: string; // Optional: defaults to "Our proprietary platforms..."
  
  // Insights
  insights: Array<{
    title: string;
    description: string;
    date: string;
  }>;
  insightsTitle?: string; // Optional: defaults to "Insights for {title}"
  insightsSubtitle?: string; // Optional: defaults to "Stay ahead with our latest..."
  
  // CTA Section
  ctaImage: string;
  ctaTitle: string;
  heroButtonText?: string; // Optional: defaults to "Talk to Our Experts"
}

const AssetTypePage = ({
  heroImage,
  title,
  tagline,
  marketText,
  valueProposition,
  valuePropositionTitle,
  services,
  servicesTitle,
  servicesSubtitle,
  serviceTitles,
  technologyAdvantages,
  technologyTitle,
  technologySubtitle,
  insights,
  insightsTitle,
  insightsSubtitle,
  ctaImage,
  ctaTitle,
  heroButtonText
}: AssetTypePageProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('asset-contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hhp-navy/40"></div>
        <div className="relative z-10 container-premium text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
        </div>
      </section>

      {/* Market Context & Value Prop */}
      <section className="py-20 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy">Market Context</h2>
            </div>
            <div className="border-l-4 border-hhp-accent pl-6">
              <h3 className="text-xl font-semibold text-hhp-navy mb-3">{valuePropositionTitle || "HHP's Value Proposition"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{valueProposition}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Integration */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center mb-8">
              <h2 className="section-title text-hhp-navy mb-6">
                {servicesTitle || `Our Integrated Services for ${title}`}
              </h2>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="w-full">
                {/* Property Management */}
                <AccordionItem value="property-management" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.propertyManagement || "Property Management"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.propertyManagement}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Advisory & Site Selection */}
                <AccordionItem value="advisory-site-selection" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.advisorySiteSelection || "Advisory & Site Selection"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.advisorySiteSelection}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Investment Sales */}
                <AccordionItem value="investment-sales" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.investmentSales || "Investment Sales"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.investmentSales}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Landlord Representation */}
                <AccordionItem value="landlord-representation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.landlordRepresentation || "Landlord Representation"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.landlordRepresentation}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Tenant Representation */}
                <AccordionItem value="tenant-representation" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.tenantRepresentation || "Tenant Representation"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.tenantRepresentation}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Acquisitions & Development */}
                <AccordionItem value="acquisitions-development" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    {serviceTitles?.acquisitionsDevelopment || "Acquisitions & Development"}
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {services.acquisitionsDevelopment}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Data Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy mb-6">
              {technologyTitle || `AI-Driven Advantage for ${title}`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mx-auto mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">{advantage.title}</h3>
                <p className="text-hhp-charcoal leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Thought Leadership */}
      <section className="py-20 bg-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy mb-6">
              {insightsTitle || `Insights for ${title}`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link 
                key={index}
                to="/insights"
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-hhp-navy text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  {insight.date}
                </div>
                <h3 className="text-xl font-semibold text-hhp-navy mb-4">{insight.title}</h3>
                <p className="text-hhp-charcoal leading-relaxed mb-4">{insight.description}</p>
                <span className="text-hhp-navy font-medium">Read More →</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/insights"
              className="bg-hhp-navy text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-hhp-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Insights
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section 
        id="asset-contact"
        className="relative py-20 flex items-center justify-center"
        style={{ backgroundImage: `url(${ctaImage})` }}
      >
        <div className="absolute inset-0 bg-hhp-navy/50"></div>
        <div className="relative z-10 container-premium text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaTitle}</h2>
          <Link 
            to="/contact"
            className="bg-white text-hhp-navy px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
          >
            Schedule a Consultation
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AssetTypePage;
