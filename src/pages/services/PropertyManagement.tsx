import Layout from '@/components/Layout/Layout';
import { ArrowRight, Users, CheckCircle, BarChart3, Zap, Monitor, Shield, Award, PieChart, LineChart, FileText, Target, TrendingUp, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';

const PropertyManagement = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced with subtle pattern overlay */}
      <section className="relative bg-hhp-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMCAxNnY4aDh2LThoLTh6bS0xNiAwdjhoOHYtOGgtOHptMCAxNnY4aDh2LThoLTh6bTE2IDB2OGg4di04aC04em0xNi0zMnY4aDh2LThoLTh6bTAtMTZ2OGg4di04aC04em0tMTYgMHY4aDh2LThoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')"}}></div>
        
        <div className="relative container-premium section-spacing">
          <div className="max-w-4xl mx-auto text-center fade-in">
            {/* Premium Overline Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Award className="h-4 w-4 text-hhp-accent" />
              <span className="text-sm font-medium text-white">Institutional-Grade Property Management</span>
            </div>
            
            <h1 className="hero-title text-white mb-8">
              Property Management Reinvented
            </h1>
            
            <p className="text-xl leading-relaxed text-white/90 mb-8">
              Operational excellence, tenant retention, and performance optimization powered by institutional discipline and AI-driven insights.
            </p>
            
            {/* Enhanced KPI Callouts with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-hhp-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-hhp-accent/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-hhp-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">22%</div>
                <div className="text-white/90 font-medium mb-1">Delinquency Reduction</div>
                <div className="text-xs text-white/70">Year-over-year improvement</div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-hhp-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-hhp-accent/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-hhp-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">8%</div>
                <div className="text-white/90 font-medium mb-1">NOI Growth</div>
                <div className="text-xs text-white/70">Portfolio average increase</div>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-hhp-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-hhp-accent/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-hhp-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-white/90 font-medium mb-1">Tenant Satisfaction</div>
                <div className="text-xs text-white/70">Verified resident feedback</div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-hhp-accent hover:text-white transition-all duration-200 shadow-lg"
              onClick={() => {
                trackButtonClick('partner_with_hhp_cta', 'property_management_hero');
                trackLinkClick('Partner with HHP', '/contact');
              }}
            >
              Partner with HHP
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-hhp-accent uppercase tracking-wider mb-4">Overview</span>
              <h2 className="section-title text-hhp-navy mb-6">Beyond Traditional Management</h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-hhp-charcoal">
              <p className="text-lg leading-relaxed mb-6">
                Property management today demands more than collecting rent and fixing repairs. It requires <span className="font-semibold text-hhp-navy">delivering predictable returns</span>, 
                retaining tenants, and maintaining compliance in a market of rising costs and shifting expectations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                HHP blends the <span className="font-semibold text-hhp-navy">discipline of an institutional manager</span> with the care of a boutique operator. Our HUD expertise, 
                multifamily specialization, and AI-native platforms make us the next generation of property management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Enhanced with gradient icon backgrounds */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-hhp-accent uppercase tracking-wider mb-4">Core Capabilities</span>
            <h2 className="section-title text-hhp-navy mb-6">What Sets Us Apart</h2>
            <p className="text-lg text-hhp-charcoal max-w-3xl mx-auto">Comprehensive solutions designed for institutional-grade performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Lease Administration</h3>
              <p className="text-hhp-charcoal leading-relaxed">Zero-miss AI tracking of renewals, expirations, and compliance requirements with automated alerts and documentation.</p>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Tenant Retention Analytics</h3>
              <p className="text-hhp-charcoal leading-relaxed">RentalAi predicts churn risk and identifies at-risk tenants, driving targeted retention efforts and reducing turnover costs.</p>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Compliance Automation</h3>
              <p className="text-hhp-charcoal leading-relaxed">HUD 50059, EIV logs, and digital file audits completed automatically with full audit trail documentation.</p>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Predictive Maintenance</h3>
              <p className="text-hhp-charcoal leading-relaxed">IoT sensors and AI algorithms forecast equipment failures before they occur, minimizing downtime and emergency repairs.</p>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Financial Transparency</h3>
              <p className="text-hhp-charcoal leading-relaxed">Live NOI dashboards and real-time financial reporting replace static monthly statements with actionable insights.</p>
            </div>

            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-hhp-accent/30 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-navy rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-hhp-navy mb-3">Resident Engagement</h3>
              <p className="text-hhp-charcoal leading-relaxed">Seamless resident portals for payments, service requests, and communication that enhance satisfaction and retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Timeline - Enhanced with visual timeline */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-hhp-accent uppercase tracking-wider mb-4">Our Process</span>
            <h2 className="section-title text-hhp-navy mb-6">Systematic Excellence</h2>
            <p className="text-lg text-hhp-charcoal max-w-3xl mx-auto">A proven methodology that delivers consistent results</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hhp-accent via-hhp-navy to-hhp-accent opacity-20"></div>
              
              <div className="space-y-10">
                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    1
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Discovery & Onboarding</h3>
                    <p className="text-hhp-charcoal">Comprehensive audit of leases, HUD files, and portfolio goals with stakeholder alignment.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    2
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Data Integration</h3>
                    <p className="text-hhp-charcoal">Seamless connection of RentalAi, Yardi/RealPage, and IoT sensor feeds for unified operations.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    3
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Benchmarking</h3>
                    <p className="text-hhp-charcoal">Detailed comparison of turnover rates, operating expenses, and maintenance metrics versus market peers.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    4
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Optimization</h3>
                    <p className="text-hhp-charcoal">Implementation of tenant retention strategies, predictive scheduling, and expense control measures.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    5
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Execution</h3>
                    <p className="text-hhp-charcoal">Daily property management operations combined with exceptional tenant care and responsiveness.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="flex-shrink-0 w-24 h-24 bg-hhp-navy rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:bg-hhp-accent transition-all duration-300 z-10">
                    6
                  </div>
                  <div className="ml-8 flex-1 bg-gray-50 rounded-xl p-6 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-hhp-navy mb-2">Transparent Reporting</h3>
                    <p className="text-hhp-charcoal">Real-time dashboards with quarterly strategic reviews and continuous performance monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Technology Integration */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-hhp-accent uppercase tracking-wider mb-4">Technology Platform</span>
            <h2 className="section-title text-white mb-6">Data & Technology Integration</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">Enterprise-grade systems that power operational excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-hhp-accent/50 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <LineChart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">RentalAi Dashboards</h3>
              <p className="text-white/80 leading-relaxed">Real-time forecasting of NOI, delinquency rates, and unit turnover with predictive analytics and trend analysis.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-hhp-accent/50 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IoT Maintenance AI</h3>
              <p className="text-white/80 leading-relaxed">Predictive maintenance alerts that reduce emergency repairs by up to 40% through early detection and prevention.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-hhp-accent/50 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compliance AI</h3>
              <p className="text-white/80 leading-relaxed">Automated validation of HUD checklists, regulatory requirements, and documentation with 99.9% accuracy.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-hhp-accent/50 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-hhp-accent rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Owner Portals</h3>
              <p className="text-white/80 leading-relaxed">Live variance tracking, peer benchmarking, and customizable reporting that provides complete portfolio visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section - Enhanced with richer cards */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-hhp-accent uppercase tracking-wider mb-4">Insights & Results</span>
            <h2 className="section-title text-hhp-navy mb-6">Proven Performance</h2>
            <p className="text-lg text-hhp-charcoal max-w-3xl mx-auto">Real results from real properties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-hhp-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <span className="inline-flex items-center gap-2 bg-hhp-accent/10 text-hhp-accent px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="h-4 w-4" />
                Case Study
              </span>
              <h3 className="text-xl font-bold text-hhp-navy mb-2">
                22% Delinquency Reduction
              </h3>
              <p className="text-hhp-charcoal text-sm mb-4">Achieved in a 150-unit HUD affordable housing asset through targeted intervention strategies.</p>
              <div className="text-hhp-accent font-semibold group-hover:gap-2 flex items-center gap-1 transition-all text-sm">
                Read case study
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-hhp-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <span className="inline-flex items-center gap-2 bg-hhp-accent/10 text-hhp-accent px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
                <FileText className="h-4 w-4" />
                Report
              </span>
              <h3 className="text-xl font-bold text-hhp-navy mb-2">
                Tenant Experience 2025
              </h3>
              <p className="text-hhp-charcoal text-sm mb-4">Comprehensive industry analysis on resident expectations and engagement trends.</p>
              <div className="text-hhp-accent font-semibold group-hover:gap-2 flex items-center gap-1 transition-all text-sm">
                Download report
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-hhp-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <span className="inline-flex items-center gap-2 bg-hhp-accent/10 text-hhp-accent px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
                <BarChart3 className="h-4 w-4" />
                Visualization
              </span>
              <h3 className="text-xl font-bold text-hhp-navy mb-2">
                NOI vs Expense Ratio
              </h3>
              <p className="text-hhp-charcoal text-sm mb-4">Interactive dashboard insights showing portfolio optimization opportunities.</p>
              <div className="text-hhp-accent font-semibold group-hover:gap-2 flex items-center gap-1 transition-all text-sm">
                View dashboard
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gray-50 rounded-xl p-8 border-2 border-gray-100 hover:border-hhp-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <span className="inline-flex items-center gap-2 bg-hhp-accent/10 text-hhp-accent px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Target className="h-4 w-4" />
                Thought Leadership
              </span>
              <h3 className="text-xl font-bold text-hhp-navy mb-2">
                The Future of Property Management
              </h3>
              <p className="text-hhp-charcoal text-sm mb-4">Industry transformation insights and emerging technology trends.</p>
              <div className="text-hhp-accent font-semibold group-hover:gap-2 flex items-center gap-1 transition-all text-sm">
                Read article
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Management Into Measurable Growth?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join leading institutional investors who trust HHP for operational excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center gap-2 bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-hhp-accent hover:text-white transition-all duration-200 shadow-lg"
              onClick={() => {
                trackButtonClick('request_proposal_cta', 'property_management_banner');
                trackLinkClick('Request a Proposal', '/contact');
              }}
            >
              Request a Proposal
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/case-studies" 
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-200"
              onClick={() => {
                trackButtonClick('view_case_studies_cta', 'property_management_banner');
                trackLinkClick('View Case Studies', '/case-studies');
              }}
            >
              View Case Studies
              <FileText className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO-rich structured data section (hidden but crawlable) */}
      <div className="sr-only">
        <h2>Property Management Services</h2>
        <p>HHP provides institutional-grade property management services including lease administration, tenant retention analytics, compliance automation, predictive maintenance, financial transparency, and resident engagement solutions for multifamily and affordable housing properties.</p>
        
        <h3>Property Management Technology</h3>
        <p>RentalAi dashboards, IoT maintenance AI, compliance automation, owner portals, HUD 50059 processing, EIV logs management, Yardi integration, RealPage integration, predictive analytics, NOI forecasting, delinquency tracking, turnover analysis.</p>
        
        <h3>Service Areas</h3>
        <p>Multifamily property management, affordable housing management, HUD property management, Section 8 management, LIHTC property management, workforce housing management, mixed-income property management.</p>
        
        <h3>Key Performance Indicators</h3>
        <p>22% delinquency reduction, 8% NOI growth, 95% tenant satisfaction, 40% reduction in emergency repairs, institutional-grade reporting, real-time financial dashboards, predictive maintenance scheduling.</p>
      </div>
    </Layout>
  );
};

export default PropertyManagement;