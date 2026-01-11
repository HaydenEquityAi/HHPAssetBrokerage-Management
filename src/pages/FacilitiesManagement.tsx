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
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="section-title text-hhp-navy mb-6">Introduction</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
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
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
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
              
              <Accordion type="single" collapsible className="w-full">
                {/* Engineering & Building Systems */}
                <AccordionItem value="engineering" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Engineering & Building Systems
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Mechanical, electrical, and plumbing system oversight</li>
                      <li>Preventive maintenance programs</li>
                      <li>Troubleshooting and repair coordination</li>
                      <li>Utility monitoring and optimization</li>
                      <li>Life-safety system inspections and testing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Preventive Maintenance & Inspections */}
                <AccordionItem value="maintenance" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Preventive Maintenance & Inspections
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Scheduled maintenance planning and execution</li>
                      <li>Regular building and system inspections</li>
                      <li>Condition assessments and reporting</li>
                      <li>Maintenance history tracking</li>
                      <li>Capital planning support based on condition data</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Vendor & Contractor Management */}
                <AccordionItem value="vendor" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Vendor & Contractor Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Vendor sourcing and qualification</li>
                      <li>Bidding and contract negotiation</li>
                      <li>Work order management and oversight</li>
                      <li>Quality control and performance monitoring</li>
                      <li>Vendor relationship management</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Safety & Regulatory Compliance */}
                <AccordionItem value="safety" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Safety & Regulatory Compliance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Building code compliance monitoring</li>
                      <li>Fire safety and life safety system maintenance</li>
                      <li>ADA compliance oversight</li>
                      <li>Environmental compliance tracking</li>
                      <li>Safety inspection coordination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Landscaping & Exterior Maintenance */}
                <AccordionItem value="landscaping" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Landscaping & Exterior Maintenance
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Landscaping and grounds maintenance</li>
                      <li>Exterior building maintenance and repairs</li>
                      <li>Roofing system oversight</li>
                      <li>Parking lot and pavement maintenance</li>
                      <li>Seasonal maintenance coordination</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Parking & Common Area Management */}
                <AccordionItem value="parking" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Parking & Common Area Management
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
                      <li>Parking lot maintenance and striping</li>
                      <li>Common area cleaning and maintenance</li>
                      <li>Signage and wayfinding management</li>
                      <li>Lighting system maintenance</li>
                      <li>Access control system oversight</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Commercial Cleaning & Janitorial Services */}
                <AccordionItem value="cleaning" className="border-b border-gray-300 py-3">
                  <AccordionTrigger className="font-heading font-bold text-gray-600 uppercase tracking-wide text-xl py-8 hover:no-underline">
                    Commercial Cleaning & Janitorial Services
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-8">
                    <ul className="space-y-2 text-base leading-relaxed text-gray-600 list-disc list-inside ml-4">
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
                <p className="text-lg leading-relaxed text-gray-600 italic">
                  Our facilities platform is designed to protect asset condition, operational standards, and tenant experience today while preserving flexibility and value for future ownership decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach Chart */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-premium">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-8 sm:mb-12 text-hhp-navy tracking-[0.06em] uppercase">
            OUR FACILITIES MANAGEMENT APPROACH
          </h2>
          <div className="flex justify-center">
            <img 
              src="/images/our-vertically-integrated-approach.png" 
              alt="Our Facilities Management Approach"
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mid-Page Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
        {/* LEFT: Large property/building image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/images/about-us-image.jpg" 
            alt="Facilities Management"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* RIGHT: Dark overlay with text and CTA */}
        <div className="bg-gray-800 text-white flex items-center p-8 sm:p-12 lg:p-16">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>
            <p className="text-lg text-white mb-10 leading-relaxed">
              HHP Asset Management is an operator-led real estate platform combining 
              institutional discipline with hands-on execution. We specialize in vertically 
              integrated asset management, bringing together property management, facilities 
              operations, financial oversight, and strategic advisory under one integrated 
              approach.
            </p>
            <div className="pt-8 border-t border-gray-500">
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 tracking-widest text-white">
                DISCOVER<br/>WHAT WE DO
              </h3>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-gray-800 px-8 py-4 rounded font-heading font-semibold tracking-[0.06em] uppercase hover:bg-gray-100 transition"
                onClick={() => {
                  trackButtonClick('contact_us_cta', 'facilities_management_split');
                  trackLinkClick('Contact Us', '/contact');
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With & How We Differ */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Who We Work With */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hhp-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <h2 className="section-title text-hhp-navy">Who We Work With</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
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
                <ul className="space-y-3 text-gray-600">
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

      {/* Careers Section */}
      <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center bg-cover bg-center bg-no-repeat">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/consulting-image.webp)' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container-premium w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
              INTERESTED IN WORKING<br/>FOR OUR TEAM?
            </h2>
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-white/90 transition-all duration-300 flex-shrink-0"
              onClick={() => {
                trackButtonClick('submit_resume_cta', 'facilities_management_careers');
                trackLinkClick('Submit your resume', '/contact');
              }}
            >
              Submit your resume
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container-premium">
          <div className="border border-gray-300 rounded-lg my-4 sm:my-6 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-hhp-navy">
                HAVE MORE QUESTIONS?
              </h3>
              <Link 
                to="/faq" 
                className="bg-hhp-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition flex-shrink-0"
                onClick={() => {
                  trackButtonClick('visit_faq_cta', 'facilities_management_faq');
                  trackLinkClick('Visit our FAQ page', '/faq');
                }}
              >
                Visit our FAQ page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-premium text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 bg-hhp-navy text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-[0.06em] uppercase hover:bg-hhp-navy/90 transition-all duration-200 shadow-lg w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
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

