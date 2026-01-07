import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Building, Home, Users, Send } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { trackFormSubmission, trackContactFormInteraction, trackButtonClick, trackConversion } from '@/utils/analytics';

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
    'Brokerage Services',
    'Management Services',
    'Technology Platform',
    'Investment Sales',
    'Leasing Services',
    'Capital Markets',
    'Valuations & Advisory',
    'SaaS Licensing',
    'General Inquiry'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form interaction start
    trackContactFormInteraction('start', 'contact');

    // Basic client-side validation (defensive)
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      toast({
        title: 'Missing required fields',
        description: 'Please provide your name, email, and a message.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Prepare shared payload
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      inquiry_type: formData.inquiry_type || null,
      property_address: formData.property_address || null,
      message: formData.message,
      submitted_at: new Date().toISOString()
    };

    // Only n8n webhook (notifications/automation)
    let webhookOk = false;
    let webhookErrMsg = '';
    try {
      const res = await fetch('https://n8n.capitalaiadvisors.com/webhook/hhp-contact', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          phone: payload.phone ?? 'Not provided',
          inquiry_type: payload.inquiry_type ?? 'General Inquiry',
          property_address: payload.property_address ?? 'Not provided',
        })
      });
      if (res.ok) {
        webhookOk = true;
      } else {
        webhookErrMsg = `Webhook ${res.status} ${res.statusText}`;
      }
    } catch (err: any) {
      webhookErrMsg = err?.message || String(err);
    }

    if (webhookOk) {
      // Success if either path worked
      trackFormSubmission('contact_form', formData.inquiry_type || 'general');
      trackContactFormInteraction('complete', 'contact');
      trackConversion('contact_form_submission');

      toast({
        title: 'Message Sent Successfully!',
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
    } else {
      // Both failed – show most relevant error and log details
      trackContactFormInteraction('error', 'contact');
      console.error('Contact form error:', { webhookErrMsg });
      toast({
        title: 'Submission failed',
        description: webhookErrMsg || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hhp-navy section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in px-4">
            <h1 className="hero-title text-white mb-4 sm:mb-6 lg:mb-8">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 mb-8 sm:mb-10 lg:mb-12">
              Ready to transform your real estate operations? Let's discuss how HHP Asset Group can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-hhp-charcoal leading-relaxed mb-6 sm:mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[48px] text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiry_type} onValueChange={(value) => setFormData({ ...formData, inquiry_type: value })}>
                      <SelectTrigger className="min-h-[48px] text-base">
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
                  <label htmlFor="property_address" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                    Property Address (if applicable)
                  </label>
                  <Input
                    id="property_address"
                    type="text"
                    value={formData.property_address}
                    onChange={(e) => setFormData({ ...formData, property_address: e.target.value })}
                    className="w-full min-h-[48px] text-base"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-hhp-charcoal mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[120px] text-base"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base"
                  onClick={() => trackButtonClick('contact_form_submit', 'contact_page')}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-white">Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span className="text-white">Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="section-title text-hhp-navy mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-sm sm:text-base text-hhp-charcoal leading-relaxed mb-6 sm:mb-8">
                  Reach out to us through any of these channels for immediate assistance.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-hhp-navy/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hhp-navy mb-1">Email</h3>
                    <p className="text-hhp-charcoal">info@hhpassetgroup.com</p>
      
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-hhp-navy/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hhp-navy mb-1">Phone</h3>
                    <p className="text-hhp-charcoal">(918) 899-1650</p>
                
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-hhp-navy/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hhp-navy mb-1">Office</h3>
                    <p className="text-hhp-charcoal">1617 S Cincinnati Ave, Tulsa, OK 74119</p>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-hhp-navy/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-hhp-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-hhp-navy mb-1">Business Hours</h3>
                    <p className="text-hhp-charcoal">Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-hhp-navy mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Building className="w-4 h-4 mr-2" />
                    Schedule Property Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Home className="w-4 h-4 mr-2" />
                    Request Management Quote
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Join Our Network
                  </Button>
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
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Don't wait to transform your real estate operations. Contact us today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-white text-hhp-navy hover:bg-white/90 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              className="bg-hhp-navy text-white hover:bg-hhp-navy/90 w-auto max-w-[300px] sm:max-w-none mx-auto sm:mx-0"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;