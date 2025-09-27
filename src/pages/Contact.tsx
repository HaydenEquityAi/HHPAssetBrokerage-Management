import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Building, Home, Users, Send } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry_type: '',
    property_address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const inquiryTypes = [
    'Property Analysis',
    'Consultation',
    'Multifamily Management',
    'Residential Management', 
    'Commercial Management',
    'HUD & Specialized Housing',
    'RentalAi Demo',
    'General Inquiry'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          inquiry_type: formData.inquiry_type || null,
          property_address: formData.property_address || null,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry_type: '',
        property_address: '',
        message: ''
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
            <h1 className="hero-title text-white mb-8">
              Contact HHP Asset Management
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12">
              Experience the future of property management. Schedule a consultation to see how our AI-native platform delivers institutional-grade results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="premium-card">
              <h2 className="section-title text-hhp-navy mb-8">Get Started Today</h2>
              
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
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hhp-navy mb-2">
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => setFormData({...formData, inquiry_type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hhp-navy mb-2">
                    Property Address (Optional)
                  </label>
                  <Input
                    type="text"
                    value={formData.property_address}
                    onChange={(e) => setFormData({...formData, property_address: e.target.value})}
                    placeholder="Property address for analysis or management"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-hhp-navy mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your property management needs..."
                    className="w-full h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Email</h4>
                      <a 
                        href="mailto:info@hhpasset.com" 
                        className="text-hhp-charcoal hover:text-hhp-navy transition-colors duration-200"
                      >
                        info@hhpasset.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Market Coverage</h4>
                      <p className="text-hhp-charcoal">
                        Full-Stack Multi-Asset Management Nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Specialization</h4>
                      <p className="text-hhp-charcoal">
                        AI-Native Property Management Platform
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Platform</h4>
                      <p className="text-hhp-charcoal">
                        RentalAi - America's First AI-Native Property Management System
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Building className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Client Base</h4>
                      <p className="text-hhp-charcoal">
                        REITs, Private Equity, Family Offices, Institutional Investors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <TrendingUp className="h-6 w-6 icon-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-hhp-navy mb-1">Expansion</h4>
                      <p className="text-hhp-charcoal">
                        Actively expanding across the Midwest and Southwest, with national licensing opportunities for RentalAi technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Options */}
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6">How We Can Help</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 icon-accent" />
                    <span className="text-hhp-charcoal">Property Owners: Schedule Your Free Property Consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 icon-accent" />
                    <span className="text-hhp-charcoal">Real Estate Investors: Explore National Investment Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 icon-accent" />
                    <span className="text-hhp-charcoal">Current Tenants: Access Tenant Services & Support</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="premium-card">
                <h3 className="text-xl font-display font-semibold text-hhp-navy mb-6">Why Choose HHP?</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-1">$2.0B+</div>
                    <div className="text-sm text-hhp-charcoal">Real Estate Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-1">40+</div>
                    <div className="text-sm text-hhp-charcoal">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-1">24/7</div>
                    <div className="text-sm text-hhp-charcoal">Emergency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-hhp-navy mb-1">AI</div>
                    <div className="text-sm text-hhp-charcoal">Technology Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-8 max-w-3xl mx-auto">
            Join sophisticated investors nationwide who trust HHP Asset Management for institutional-grade, technology-driven property management solutions.
          </p>
          <p className="text-lg text-hhp-accent font-medium">
            We typically respond within 2 hours during business hours
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;