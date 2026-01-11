import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building, TrendingUp, Shield, Users, Target, BarChart3 } from 'lucide-react';

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
      <section className="py-20 bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-hhp-navy mb-6">
              {servicesTitle || `Our Integrated Services for ${title}`}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/services/property-management"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.propertyManagement || "Property Management"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.propertyManagement}</p>
            </Link>

            <Link 
              to="/services/advisory-site-selection"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.advisorySiteSelection || "Advisory & Site Selection"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.advisorySiteSelection}</p>
            </Link>

            <Link 
              to="/services/investment-sales"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.investmentSales || "Investment Sales"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.investmentSales}</p>
            </Link>

            <Link 
              to="/services/landlord-representation"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.landlordRepresentation || "Landlord Representation"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.landlordRepresentation}</p>
            </Link>

            <Link 
              to="/services/tenant-representation"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.tenantRepresentation || "Tenant Representation"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.tenantRepresentation}</p>
            </Link>

            <Link 
              to="/services/acquisitions"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-hhp-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">{serviceTitles?.acquisitionsDevelopment || "Acquisitions & Development"}</h3>
              <p className="text-hhp-charcoal leading-relaxed">{services.acquisitionsDevelopment}</p>
            </Link>
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
