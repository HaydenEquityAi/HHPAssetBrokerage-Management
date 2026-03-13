import { DollarSign, Shield, Wrench, Camera, Phone, BarChart3 } from 'lucide-react';

const platformCapabilities = [
  {
    icon: DollarSign,
    title: 'Financial Intelligence',
    description: 'Plaid-connected banking with automated cash flow monitoring, anomaly detection, and real-time owner visibility. No more waiting until the 10th for a PDF.',
    status: 'live' as const,
  },
  {
    icon: Shield,
    title: 'Compliance Engine',
    description: 'Automated compliance monitoring, certification tracking, and inspection readiness scoring. Built for operators who need continuous audit readiness — not quarterly scrambles.',
    status: 'live' as const,
  },
  {
    icon: Wrench,
    title: 'AI-Powered Maintenance',
    description: 'Work order triage via AI routing, predictive maintenance flagging, and automated vendor dispatch through HHP Facility Services. Every request tracked, every pattern surfaced.',
    status: 'live' as const,
  },
  {
    icon: Camera,
    title: 'Surveillance & Security',
    description: 'Camera network with AI-assisted monitoring, wireless bridge infrastructure, and integrated access control across every managed property.',
    status: 'coming' as const,
  },
  {
    icon: Phone,
    title: 'Communications Hub',
    description: 'Integrated phone system with call logging, automated follow-up, and centralized messaging across properties. Every tenant interaction recorded and searchable.',
    status: 'live' as const,
  },
  {
    icon: BarChart3,
    title: 'Owner Intelligence',
    description: 'AI-generated monthly commentary alongside financials — variance analysis, trend forecasting, budget-to-actual with explanations. Not just numbers, insight.',
    status: 'coming' as const,
  },
];

const ApexPlatformSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 relative z-30">
      <div className="container-premium">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8" style={{ backgroundColor: 'rgba(200,149,46,0.15)', border: '1px solid rgba(200,149,46,0.25)', color: '#C8952E' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8952E' }} />
          Our Proprietary AI Platform
        </div>
        <h2 className="section-title text-hhp-navy mb-6">
          APEX: The AI Operating System<br className="hidden sm:block" />
          Behind Every Property
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-hhp-charcoal max-w-3xl mb-12 sm:mb-16">
          APEX is HHP's proprietary command center — a purpose-built AI platform that powers how we operate every property, every day. Seven integrated layers working together so nothing falls through the cracks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className="platform-card-hover bg-white border border-gray-200 rounded-xl p-8 sm:p-10">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(200,149,46,0.12)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#C8952E' }} />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-hhp-navy mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 mb-5">
                  {cap.description}
                </p>
                <span className={cap.status === 'live' ? 'status-badge-live' : 'status-badge-coming'}>
                  ● {cap.status === 'live' ? 'Live' : 'Coming Soon'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApexPlatformSection;
