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
      console.error('RentalAi form error:', error);
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
      <section className="bg-gradient-to-br from-hhp-navy via-hhp-navy to-blue-900 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Bot className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">RentalAi Beta Program</span>
            </div>
            
            <h1 className="hero-title text-white mb-8">
              The Future of Property Management is Here
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Join the exclusive beta for RentalAi — our revolutionary AI platform that transforms how you manage properties, interact with tenants, and optimize operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg"
                className="bg-white text-hhp-navy hover:bg-white/90"
                onClick={() => document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Beta Program
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-hhp-navy"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="section-title text-hhp-navy mb-6">
              Revolutionary AI Features
            </h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal max-w-3xl mx-auto">
              RentalAi combines cutting-edge artificial intelligence with deep property management expertise to deliver unprecedented efficiency and tenant satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">AI Leasing Concierge</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                Intelligent virtual assistant that handles initial inquiries, schedules tours, and qualifies prospects 24/7.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Instant response to inquiries
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated tour scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Lead qualification & scoring
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Built-In Compliance Engine</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                Automated compliance monitoring ensures you never miss a regulation update or deadline.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time regulation updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated document generation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Audit trail maintenance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Conversational AI for Tenants</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                Natural language processing enables tenants to get instant answers and submit requests conversationally.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Natural language understanding
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Context-aware responses
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Predictive Property Care</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                Machine learning algorithms predict maintenance needs before they become costly problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Predictive maintenance alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cost optimization recommendations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Vendor performance tracking
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border border-red-100">
              <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">Automated Financial Intelligence</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                AI-powered financial analysis provides real-time insights and automated reporting.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time P&L analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated financial reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cash flow optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100">
              <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-hhp-navy mb-4">24/7 Operations</h3>
              <p className="text-hhp-charcoal leading-relaxed mb-6">
                Round-the-clock AI monitoring ensures nothing falls through the cracks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Continuous monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Emergency response automation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Proactive issue resolution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Signup Form */}
      <section id="beta-form" className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-hhp-navy mb-6">
                Join the RentalAi Beta
              </h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal">
                Be among the first to experience the future of property management. Limited spots available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-premium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-hhp-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-hhp-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-hhp-charcoal mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="property_count" className="block text-sm font-medium text-hhp-charcoal mb-2">
                      Number of Properties
                    </label>
                    <Input
                      id="property_count"
                      type="number"
                      value={formData.property_count}
                      onChange={(e) => setFormData({ ...formData, property_count: e.target.value })}
                      className="w-full"
                      placeholder="e.g., 50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hhp-charcoal mb-4">
                    Features of Interest (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <Checkbox
                          id={feature}
                          checked={formData.interested_features.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                        />
                        <label htmlFor={feature} className="text-sm text-hhp-charcoal cursor-pointer">
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining Beta...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4" />
                      <span>Join Beta Program</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Don't wait for the future — create it. Join RentalAi beta and be at the forefront of property management innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-white text-hhp-navy hover:bg-white/90"
              onClick={() => document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Beta Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-hhp-navy"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RentalAi;