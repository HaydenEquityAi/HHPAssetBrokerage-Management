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
                The Future of Property Management, Built with AI
              </h1>
            </div>
            
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              RentalAi is the first AI-native property management platform designed to handle everything — multifamily, HUD, residential, and mixed-use portfolios. Unlike outdated systems that require endless manual input, RentalAi automates the entire workflow. From leasing and compliance to maintenance and accounting, RentalAi eliminates inefficiency, empowers owners with real-time insights, and frees managers to focus on growth.
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
            <h2 className="section-title text-hhp-navy mb-6">Breakthrough Features</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              RentalAi doesn't just digitize old processes — it reimagines property management from the ground up with artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Leasing Concierge */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Bot className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">AI Leasing Concierge</h3>
              </div>
              <p className="text-hhp-charcoal leading-relaxed mb-4">
                Automates lead responses, tour scheduling, applications, and screenings — instantly and 24/7. Never lose another prospect to slow response times.
              </p>
              <div className="flex items-center space-x-2 text-hhp-accent font-medium">
                <Clock className="h-4 w-4" />
                <span>Response time: Under 30 seconds</span>
              </div>
            </div>

            {/* Built-In Compliance Engine */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Shield className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Built-In Compliance Engine</h3>
              </div>
              <p className="text-hhp-charcoal leading-relaxed mb-4">
                HUD and LIHTC compliance handled automatically, with audit-ready reporting. Eliminate compliance stress and human error.
              </p>
              <div className="flex items-center space-x-2 text-hhp-accent font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>100% audit-ready reports</span>
              </div>
            </div>

            {/* Conversational AI for Tenants */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <Brain className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Conversational AI for Tenants</h3>
              </div>
              <p className="text-hhp-charcoal leading-relaxed mb-4">
                Smart chatbots manage tenant requests, updates, and communication around the clock. Reduce workload while improving satisfaction.
              </p>
              <div className="flex items-center space-x-2 text-hhp-accent font-medium">
                <Zap className="h-4 w-4" />
                <span>24/7 instant support</span>
              </div>
            </div>

            {/* Predictive Property Care */}
            <div className="premium-card">
              <div className="flex items-center space-x-4 mb-6">
                <TrendingUp className="h-12 w-12 icon-accent" />
                <h3 className="text-xl font-display font-semibold text-hhp-navy">Predictive Property Care</h3>
              </div>
              <p className="text-hhp-charcoal leading-relaxed mb-4">
                AI-driven maintenance forecasting to prevent failures and extend asset life. Transform reactive maintenance into proactive care.
              </p>
              <div className="flex items-center space-x-2 text-hhp-accent font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>Prevent 80% of emergency repairs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RentalAi Wins */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white mb-8">Why RentalAi Wins</h2>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              "Property management software today reacts. RentalAi predicts. It learns, adapts, and executes — turning management from a reactive chore into a proactive advantage. With RentalAi, owners unlock efficiency, compliance, and performance no legacy system can match."
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