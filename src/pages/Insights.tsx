import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, FileText, TrendingUp, CheckCircle, ArrowRight, Calendar, Users, Building, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { useToast } from '@/hooks/use-toast';

const Insights = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to n8n webhook
      const response = await fetch('https://n8n.capitalaiadvisors.com/webhook/hhp-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subscribed_at: new Date().toISOString(),
          source: 'Website - Insights Page'
        })
      });

      if (response.ok) {
        toast({
          title: "Successfully Subscribed!",
          description: "Check your email for a welcome message.",
        });
        setEmail(''); // Reset form
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
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
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/insights-image.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="hero-title text-white mb-8 drop-shadow-lg">
              Insights & Intelligence
            </h1>
            <p className="text-xl leading-relaxed text-white/90 mb-12 drop-shadow-md">
              AI-driven market analysis, case studies, and thought leadership from America's first AI-native real estate firm. Stay ahead with data-driven insights and institutional-grade intelligence.
            </p>
            <Link to="/contact" className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 shadow-elegant">
              Subscribe to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">AI-Driven Market Reports</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Comprehensive market analysis powered by our proprietary AI platforms, providing institutional-grade insights across all major asset classes and markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Q4 2024 Market Report */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Q4 2024 Market Report</h3>
                    <p className="text-sm text-hhp-charcoal">December 2024</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Comprehensive analysis of multifamily, office, industrial, and retail markets with AI-powered predictions for 2025.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Download PDF</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>

              {/* AI in Real Estate Report */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">AI in Real Estate</h3>
                    <p className="text-sm text-hhp-charcoal">November 2024</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  How artificial intelligence is transforming commercial real estate operations and investment strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Read More</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>

              {/* Capital Markets Outlook */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Capital Markets Outlook</h3>
                    <p className="text-sm text-hhp-charcoal">October 2024</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Debt and equity market trends, interest rate impacts, and financing strategies for institutional investors.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">View Report</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Proven Results</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Real-world case studies demonstrating the power of our AI-native approach and institutional-grade expertise across diverse portfolios and markets.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Multifamily NOI Growth Case Study */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Multifamily NOI Growth</h3>
                    <p className="text-hhp-charcoal">RentalAi Implementation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">23%</div>
                      <div className="text-sm text-hhp-charcoal">NOI Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">18 Months</div>
                      <div className="text-sm text-hhp-charcoal">Implementation</div>
                    </div>
                  </div>
                  <p className="text-hhp-charcoal">
                    How RentalAi's predictive analytics and automated compliance transformed a 500-unit multifamily portfolio, reducing vacancy rates and optimizing rent pricing.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-hhp-navy">Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 text-hhp-navy" />
                  </div>
                </div>
              </div>

              {/* Office Leasing Velocity Case Study */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Office Leasing Velocity</h3>
                    <p className="text-hhp-charcoal">LeaseAi Optimization</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">50%</div>
                      <div className="text-sm text-hhp-charcoal">Faster Leasing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">95%</div>
                      <div className="text-sm text-hhp-charcoal">Occupancy Rate</div>
                    </div>
                  </div>
                  <p className="text-hhp-charcoal">
                    LeaseAi's tenant matching and renewal scoring helped a Class A office building achieve record occupancy and reduce tenant turnover.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-hhp-navy">Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 text-hhp-navy" />
                  </div>
                </div>
              </div>

              {/* Capital Markets Transaction Case Study */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <DollarSign className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">Capital Markets Success</h3>
                    <p className="text-hhp-charcoal">BrokerAi Deal Matching</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">$150M</div>
                      <div className="text-sm text-hhp-charcoal">Transaction Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">30 Days</div>
                      <div className="text-sm text-hhp-charcoal">From Listing to Close</div>
                    </div>
                  </div>
                  <p className="text-hhp-charcoal">
                    BrokerAi's predictive buyer matching and automated underwriting accelerated a complex industrial portfolio sale by 60%.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-hhp-navy">Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 text-hhp-navy" />
                  </div>
                </div>
              </div>

              {/* HUD Compliance Excellence Case Study */}
              <div className="premium-card">
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="h-10 w-10 icon-accent" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-hhp-navy">HUD Compliance Excellence</h3>
                    <p className="text-hhp-charcoal">RentalAi Automation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">100%</div>
                      <div className="text-sm text-hhp-charcoal">Audit Compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-hhp-navy">75%</div>
                      <div className="text-sm text-hhp-charcoal">Time Savings</div>
                    </div>
                  </div>
                  <p className="text-hhp-charcoal">
                    Automated HUD compliance and audit preparation reduced administrative overhead while maintaining perfect compliance records.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-hhp-navy">Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 text-hhp-navy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="bg-white section-spacing">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-hhp-navy mb-6">Thought Leadership</h2>
              <p className="text-xl leading-relaxed text-hhp-charcoal max-w-4xl mx-auto">
                Industry insights and forward-thinking perspectives from our leadership team on the future of AI-native real estate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The AI-Native Real Estate Firm */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">The AI-Native Real Estate Firm</h3>
                    <p className="text-sm text-hhp-charcoal">By Hayden Ashley</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  How artificial intelligence is fundamentally changing the way we approach commercial real estate, from transaction execution to property management.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Read Article</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>

              {/* Predictive Analytics in Leasing */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">Predictive Analytics in Leasing</h3>
                    <p className="text-sm text-hhp-charcoal">By Jenni Pollard</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Leveraging AI to predict tenant behavior, optimize lease terms, and maximize occupancy rates across diverse property portfolios.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Read Article</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>

              {/* AI Compliance in HUD Management */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">AI Compliance in HUD Management</h3>
                    <p className="text-sm text-hhp-charcoal">By Phil Ashley</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  How automated compliance systems are revolutionizing affordable housing management and reducing regulatory risk.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Read Article</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>

              {/* The Future of Real Estate Technology */}
              <div className="premium-card hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="h-8 w-8 icon-accent" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-hhp-navy">The Future of Real Estate Technology</h3>
                    <p className="text-sm text-hhp-charcoal">By Hannah Fanning</p>
                  </div>
                </div>
                <p className="text-hhp-charcoal mb-4">
                  Emerging technologies and trends that will shape the next decade of commercial real estate operations and investment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-hhp-navy">Read Article</span>
                  <ArrowRight className="h-4 w-4 text-hhp-navy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-hhp-navy mb-6">Stay Ahead with Our Insights</h2>
            <p className="text-xl leading-relaxed text-hhp-charcoal mb-12">
              Subscribe to our monthly newsletter for the latest market reports, case studies, and thought leadership from the forefront of AI-native real estate.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-elegant">
              <div className="max-w-md mx-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hhp-navy focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-hhp-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-hhp-navy/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-sm text-hhp-charcoal mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hhp-navy text-white section-spacing">
        <div className="container-premium text-center">
          <h2 className="section-title text-white mb-6">
            Ready to Transform Your Portfolio?
          </h2>
          <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-3xl mx-auto">
            Let our AI-native expertise and institutional-grade insights work for your real estate investments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-hhp-navy px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/technology" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-hhp-navy transition-all duration-300 inline-block"
            >
              Explore Our Technology
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;