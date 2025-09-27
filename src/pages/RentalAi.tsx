import { useState } from 'react';
import { Bot, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Brain, Clock } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const RentalAi = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    property_count: '',
    interested_features: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const features = [
    'AI Leasing Concierge',
    'Built-In Compliance Engine',
    'Conversational AI for Tenants',
    'Predictive Property Care',
    'Automated Financial Intelligence'
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interested_features: checked 
        ? [...prev.interested_features, feature]
        : prev.interested_features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('rental_ai_waitlist')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          property_count: formData.property_count ? parseInt(formData.property_count) : null,
          interested_features: formData.interested_features.length > 0 ? formData.interested_features : null
        }]);

      if (error) throw error;

      toast({
        title: "Welcome to RentalAi Beta!",
        description: "We'll contact you soon to schedule your exclusive demo.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        property_count: '',
        interested_features: []
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Bot className="h-16 w-16 text-hhp-accent" />
              <h1 className="hero-title text-white">
                Property Management, Reinvented by AI
              </h1>
            </div>
            
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              RentalAi is the only AI-native property management platform engineered for institutional performance — unifying leasing, compliance, operations, and financials across multifamily, office, industrial, retail, mixed-use, senior living, and specialized housing assets.
            </p>
            
            <div className="bg-hhp-accent/20 border border-hhp-accent rounded-lg p-6 mb-12">
              <p className="text-lg font-medium text-white">
                🚀 Now in Beta - Reserve Your Demo Today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">The RentalAi Operating System</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              While traditional property management companies react to problems, RentalAi predicts and prevents them. Our AI-native approach transforms property management from a cost center into a national performance engine—delivering institutional-grade results at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Leasing Concierge */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Leasing & Resident Experience</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Autonomous Leasing Intelligence</h4>
                  <p className="text-hhp-charcoal text-sm">24/7 AI-powered leasing that engages prospects instantly, qualifies leads with precision, and drives higher conversion without additional staff.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Intelligent Tenant Communications</h4>
                  <p className="text-hhp-charcoal text-sm">Always-on enterprise chat and messaging that increases resident satisfaction while reducing staff workload.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Resident Retention Engine</h4>
                  <p className="text-hhp-charcoal text-sm">Predictive analytics identify at-risk residents and trigger automated engagement strategies to reduce turnover and increase renewals.</p>
                </div>
              </div>
            </div>

            {/* Built-In Compliance Engine */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Compliance & Risk Management</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Advanced Compliance Automation</h4>
                  <p className="text-hhp-charcoal text-sm">Built-in HUD, LIHTC, and regulatory compliance that generates audit-ready documentation automatically.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Fraud & Risk Detection</h4>
                  <p className="text-hhp-charcoal text-sm">AI-driven anomaly detection flags financial irregularities, fraudulent applications, and compliance risks before they become problems.</p>
                </div>
              </div>
            </div>

            {/* Conversational AI for Tenants */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Brain className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Asset & Operations Optimization</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Predictive Asset Management</h4>
                  <p className="text-hhp-charcoal text-sm">AI-driven maintenance forecasting that prevents costly breakdowns, extends asset life, and protects NOI.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Automated Vendor & Procurement Optimization</h4>
                  <p className="text-hhp-charcoal text-sm">Intelligent vendor scorecards and procurement workflows that ensure cost savings, compliance, and accountability.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Dynamic Rent & Market Pricing</h4>
                  <p className="text-hhp-charcoal text-sm">Machine learning algorithms continuously adjust rents to market demand, maximizing occupancy and revenue.</p>
                </div>
              </div>
            </div>

            {/* Predictive Property Care */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Financial & Portfolio Intelligence</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Institutional Financial Intelligence</h4>
                  <p className="text-hhp-charcoal text-sm">Automated accounting, analytics, and investor reporting that meet institutional standards for transparency and performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Portfolio Intelligence & Benchmarking</h4>
                  <p className="text-hhp-charcoal text-sm">Real-time AI benchmarking across multifamily, office, industrial, retail, mixed-use, senior living, and specialized housing assets against market comps and KPIs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hhp-navy mb-1">Technology Infrastructure</h4>
                  <p className="text-hhp-charcoal text-sm">Scalable API & system integration with Yardi, RealPage, MRI, Entrata, and accounting systems ensure RentalAi plugs seamlessly into existing infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RentalAi Wins */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-8">Competitive Advantage</h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              "While traditional property management companies react to problems, RentalAi predicts and prevents them. Our AI-native approach transforms property management from a cost center into a national performance engine—delivering institutional-grade results at scale."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <Brain className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">AI-Native</h3>
                  <p className="text-white/90">Built from scratch with AI at the core, not bolted on</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <Zap className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Predictive</h3>
                  <p className="text-white/90">Anticipates needs before they become problems</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <TrendingUp className="h-12 w-12 text-hhp-accent mx-auto mb-4" />
                  <h3 className="text-lg font-display font-semibold text-white mb-2">Performance</h3>
                  <p className="text-white/90">Measurably improves NOI and reduces operational costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-hhp-navy mb-6">See the Future. Start with RentalAi.</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Join the exclusive beta program and be among the first to experience the future of property management.
              </p>
            </div>

            <div className="premium-card max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-hhp-navy mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hhp-navy mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-hhp-navy mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hhp-navy mb-2">
                      Number of Properties
                    </label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.property_count}
                      onChange={(e) => setFormData({...formData, property_count: e.target.value})}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hhp-navy mb-4">
                    Interested Features (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.interested_features.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                        />
                        <label htmlFor={feature} className="text-sm text-hhp-charcoal">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? 'Reserving Your Demo...' : 'Reserve Your Demo Today'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RentalAi;