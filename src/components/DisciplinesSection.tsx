const disciplines = [
  {
    number: '01',
    title: 'Asset Management',
    description: 'AI-driven portfolio intelligence that transforms how owners understand and optimize their assets.',
    features: [
      'Capital planning & rent optimization',
      'Real-time financial dashboards',
      'Budget vs. actual with AI commentary',
      'Replacement reserve strategy',
      'Owner reporting & board communications',
    ],
  },
  {
    number: '02',
    title: 'Property Management',
    description: 'Day-to-day operations powered by APEX, with compliance built into every workflow — not bolted on after.',
    features: [
      'Compliance automation & monitoring',
      'Tenant certification & recertification',
      'On-site management & leasing',
      '24/7 emergency response protocol',
      'Accounting & financial reporting',
    ],
  },
  {
    number: '03',
    title: 'Facility Services',
    description: 'In-house maintenance capability through HHP Facility Services, LLC — AI-dispatched, owner-accountable.',
    features: [
      'AI-routed work order dispatch',
      'Preventive maintenance scheduling',
      'Grounds & exterior management',
      'Storm damage & insurance coordination',
      'Vendor management & QC',
    ],
  },
];

const DisciplinesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-premium">
        <div className="section-tag-gold mb-4">What We Do</div>
        <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-medium text-hhp-navy mb-5 leading-tight">
          Three Disciplines.<br />
          One Integrated Platform.
        </h2>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          We don't list tasks — we deliver outcomes. Every service line is powered by APEX and built around the metrics that actually matter to owners.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {disciplines.map((d, i) => (
            <div key={i} className="discipline-card bg-hhp-navy rounded-xl p-8 sm:p-10">
              <span className="card-number">{d.number}</span>
              <h3 className="font-garamond text-2xl sm:text-3xl font-semibold text-white mb-4 relative z-10">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 mb-6 relative z-10">
                {d.description}
              </p>
              <div className="flex flex-col gap-3 relative z-10">
                {d.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#C8952E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
