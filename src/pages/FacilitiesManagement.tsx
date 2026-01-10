import Layout from '@/components/Layout/Layout';
import { ArrowRight, CheckCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FacilitiesManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/facilities-management-hero-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Facilities Management
            </h1>
            <p className="text-xl font-medium text-white/90 mb-6 drop-shadow-md">
              Disciplined Building Operations for Commercial Assets
            </p>
            <div className="mt-8">
              <a 
                href="#core-functions"
                className="group inline-flex items-center gap-2 bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-200 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  trackButtonClick('explore_service', 'facilities_management_hero');
                  const element = document.getElementById('core-functions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Explore Service
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Introduction</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  HHP provides facilities management services focused on operational reliability, safety, and long-term asset preservation. Our approach integrates preventive maintenance, vendor oversight, compliance management, and commercial cleaning operations to ensure buildings perform predictably — not reactively.
                </p>
                <p>
                  We manage facilities with an owner's mindset, prioritizing uptime, cost control, cleanliness standards, and risk mitigation while supporting tenant satisfaction and asset value.
                </p>
              </div>
            </div>

            {/* Philosophy Section */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Our Facilities Management Philosophy</h2>
              <div className="space-y-4 text-lg leading-relaxed text-hhp-charcoal">
                <p>
                  Effective facilities management is not about chasing work orders. It is about systems, accountability, and proactive execution.
                </p>
                <p>
                  We focus on maintaining the physical integrity, safety, and cleanliness of each asset by anticipating issues before they disrupt operations. Building systems, exterior conditions, life-safety components, and janitorial standards are managed through structured schedules, documented inspections, and disciplined vendor or in-house coordination.
                </p>
                <p>
                  Every facilities decision is evaluated through the lens of long-term performance, operating expense efficiency, and ownership objectives.
                </p>
              </div>
            </div>

            {/* Core Functions Accordion */}
            <div id="core-functions">
              <h2 className="section-title text-hhp-navy mb-6">Core Facilities Management Functions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Engineering & Building Systems */}
                <AccordionItem value="engineering" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Engineering & Building Systems
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Mechanical, electrical, and plumbing system oversight</li>
                      <li>Preventive maintenance programs</li>
                      <li>Troubleshooting and repair coordination</li>
                      <li>Utility monitoring and optimization</li>
                      <li>Life-safety system inspections and testing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Preventive Maintenance & Inspections */}
                <AccordionItem value="maintenance" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Preventive Maintenance & Inspections
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Scheduled maintenance planning and execution</li>
                      <li>Regular building and system inspections</li>
                      <li>Condition assessments and reporting</li>
                      <li>Maintenance history tracking</li>
                      <li>Capital planning support based on condition data</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Vendor & Contractor Management */}
                <AccordionItem value="vendor" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Vendor & Contractor Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Vendor sourcing and qualification</li>
                      <li>Bidding and contract negotiation</li>
                      <li>Work order management and oversight</li>
                      <li>Quality control and performance monitoring</li>
                      <li>Vendor relationship management</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Safety & Regulatory Compliance */}
                <AccordionItem value="safety" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Safety & Regulatory Compliance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Building code compliance monitoring</li>
                      <li>Fire safety and life safety system maintenance</li>
                      <li>ADA compliance oversight</li>
                      <li>Environmental compliance tracking</li>
                      <li>Safety inspection coordination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Landscaping & Exterior Maintenance */}
                <AccordionItem value="landscaping" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Landscaping & Exterior Maintenance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Landscaping and grounds maintenance</li>
                      <li>Exterior building maintenance and repairs</li>
                      <li>Roofing system oversight</li>
                      <li>Parking lot and pavement maintenance</li>
                      <li>Seasonal maintenance coordination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Parking & Common Area Management */}
                <AccordionItem value="parking" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Parking & Common Area Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Parking lot maintenance and striping</li>
                      <li>Common area cleaning and maintenance</li>
                      <li>Signage and wayfinding management</li>
                      <li>Lighting system maintenance</li>
                      <li>Access control system oversight</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Commercial Cleaning & Janitorial Services */}
                <AccordionItem value="cleaning" className="border border-gray-200 rounded-lg px-4 mb-2">
                  <AccordionTrigger className="text-xl font-display font-semibold text-hhp-navy hover:no-underline py-4">
                    Commercial Cleaning & Janitorial Services
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4">
                    <ul className="space-y-2 text-base leading-relaxed text-hhp-charcoal list-disc list-inside ml-4">
                      <li>Janitorial service coordination and oversight</li>
                      <li>Cleaning schedule management</li>
                      <li>Quality control and inspection</li>
                      <li>Specialty cleaning coordination</li>
                      <li>Supply management and procurement</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Closing Statement */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-lg leading-relaxed text-hhp-charcoal italic">
                  Our facilities platform is designed to protect asset condition, operational standards, and tenant experience today while preserving flexibility and value for future ownership decisions.
                </p>
              </div>
            </div>

            {/* Who We Work With & How We Differ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <ul className="space-y-3 text-hhp-charcoal">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Private commercial property owners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Partnerships and ownership groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Boards and associations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Owner-users with operational complexity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Assets requiring hands-on physical and cleanliness oversight</span>
                  </li>
                </ul>
              </div>

              {/* How We Differ */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">How We Differ</h2>
                </div>
                <ul className="space-y-3 text-hhp-charcoal">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Selective portfolio size to ensure accountability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Direct oversight — no call-center model</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Proactive maintenance and cleaning standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Integrated property management and advisory insight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-hhp-navy mr-3 mt-1 flex-shrink-0" />
                    <span>Clear documentation and transparent reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-premium text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            onClick={() => {
              trackButtonClick('discuss_facilities_management_alignment', 'facilities_management_cta');
              trackLinkClick('Discuss Facilities Management Alignment', '/contact');
            }}
          >
            Discuss Facilities Management Alignment
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FacilitiesManagement;

