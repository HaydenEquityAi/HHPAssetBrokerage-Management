import Layout from '@/components/Layout/Layout';
import { ArrowRight, Building2, Users, CheckCircle, BarChart3, Clock, DollarSign, Target, TrendingUp, FileText, Calendar, Zap, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8">
              Property Management Reinvented
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Operational excellence, tenant retention, and performance optimization.
            </p>
            
            {/* KPI Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">22%</div>
                <div className="text-white/90">Delinquency Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">8%</div>
                <div className="text-white/90">NOI Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90">Tenant Satisfaction</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => {
                trackButtonClick('partner_with_hhp_cta', 'property_management_hero');
                trackLinkClick('Partner with HHP', '/contact');
              }}
            >
              Partner with HHP
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-hhp-navy mb-8 text-center">Overview</h2>
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Property management today demands more than collecting rent and fixing repairs. It requires delivering predictable returns, 
                retaining tenants, and maintaining compliance in a market of rising costs and shifting expectations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                HHP blends the discipline of an institutional manager with the care of a boutique operator.. Our HUD expertise, 
                multifamily specialization, and AI-native platforms make us the next generation of property management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Core Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <FileText className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Lease Administration</h3>
                  <p className="text-hhp-charcoal">Zero-miss AI tracking of renewals, expirations, compliance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Tenant Retention Analytics</h3>
                  <p className="text-hhp-charcoal">RentalAi predicts churn risk, driving targeted retention efforts.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Compliance Automation</h3>
                  <p className="text-hhp-charcoal">HUD 50059, EIV logs, and digital file audits done automatically.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Zap className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Predictive Maintenance</h3>
                  <p className="text-hhp-charcoal">IoT sensors forecast equipment failures before they happen.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <BarChart3 className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Financial Transparency</h3>
                  <p className="text-hhp-charcoal">Live NOI dashboards replace static reports.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Monitor className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Resident Engagement</h3>
                  <p className="text-hhp-charcoal">Seamless portals for payments, service requests, communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Our Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Discovery & Onboarding</h3>
                  <p className="text-hhp-charcoal">Audit leases, HUD files, goals.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Data Integration</h3>
                  <p className="text-hhp-charcoal">Connect RentalAi, Yardi/RealPage, IoT feeds.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Benchmarking</h3>
                  <p className="text-hhp-charcoal">Compare turnover, OpEx, maintenance vs peers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Optimization</h3>
                  <p className="text-hhp-charcoal">Tenant retention, predictive scheduling, expense controls.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Execution</h3>
                  <p className="text-hhp-charcoal">Daily management + tenant care.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-hhp-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-semibold text-hhp-navy mb-2">Transparent Reporting</h3>
                  <p className="text-hhp-charcoal">Dashboards + quarterly owner reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Data & Technology Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">RentalAi Dashboards</h3>
                  <p className="text-hhp-charcoal">Forecast NOI, delinquency, and turnover in real time.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Zap className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">IoT Maintenance AI</h3>
                  <p className="text-hhp-charcoal">Predictive alerts slash emergency repairs.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Compliance AI</h3>
                  <p className="text-hhp-charcoal">Auto-validates HUD checklists.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <Monitor className="h-8 w-8 text-hhp-navy mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Owner Portals</h3>
                  <p className="text-hhp-charcoal">Live variance tracking, benchmarking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <h2 className="section-title text-hhp-navy mb-12 text-center">Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Case Study
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "22% Delinquency Reduction"
                </h3>
                <p className="text-hhp-charcoal text-sm">in a 150-unit HUD asset.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Report
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "Tenant Experience 2025"
                </h3>
                <p className="text-hhp-charcoal text-sm">Comprehensive industry analysis.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "NOI vs Expense Ratio"
                </h3>
                <p className="text-hhp-charcoal text-sm">dashboard insights.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <span className="inline-block bg-hhp-accent/10 text-hhp-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Thought Leadership
                </span>
                <h3 className="text-lg font-semibold text-hhp-navy mb-2">
                  "The Future of Property Management"
                </h3>
                <p className="text-hhp-charcoal text-sm">Industry transformation insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-8">
            Ready to turn management into measurable growth?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
            onClick={() => {
              trackButtonClick('request_proposal_cta', 'property_management_banner');
              trackLinkClick('Request a Proposal', '/contact');
            }}
              >
            Request a Proposal
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyManagement;