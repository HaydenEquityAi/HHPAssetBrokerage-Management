import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Building2, Shield } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const OwnerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    trackButtonClick('owner_login_submit', 'owner_login_page');

    // Simulate API call (replace with actual authentication)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: 'Login successful',
        description: 'Redirecting to your owner portal...',
      });

      // In a real application, you would:
      // 1. Call your authentication API
      // 2. Store the token/session
      // 3. Redirect to the owner portal
      // window.location.href = '/owner-portal';
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Owner Login - HHP Asset Group</title>
        <meta name="description" content="Access your owner portal to manage properties, view financial reports, track performance metrics, and manage your accounts." />
      </Helmet>

      {/* Hero/Header Section */}
      <section className="bg-hhp-navy text-white py-16 sm:py-20 lg:py-24">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Owner Login
            </h1>
            <p className="text-lg sm:text-xl text-white/90">
              Manage your properties and accounts
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="max-w-md mx-auto">
            {/* Owner Portal Benefits */}
            <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8 mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Building2 className="h-6 w-6 text-hhp-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-hhp-navy mb-2">Owner Portal Access</h3>
                  <p className="text-sm text-hhp-charcoal leading-relaxed">
                    Access real-time property performance, financial reports, tenant information, and portfolio analytics. 
                    Manage multiple properties from a single secure dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email/Username Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hhp-charcoal mb-2">
                    Email Address or Username *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-hhp-charcoal/50" />
                    <Input
                      id="email"
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 min-h-[48px] text-base ${
                        errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-hhp-charcoal mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-hhp-charcoal/50" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                        if (errors.password) setErrors({ ...errors, password: undefined });
                      }}
                      className={`w-full pl-10 pr-12 py-3 min-h-[48px] text-base ${
                        errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''
                      }`}
                      placeholder="Enter your password"
                      aria-invalid={!!errors.password}
                      aria-describedby={errors.password ? 'password-error' : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hhp-charcoal/50 hover:text-hhp-charcoal transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-hhp-charcoal cursor-pointer select-none"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/contact"
                    className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors"
                    onClick={() => {
                      trackLinkClick('Forgot Password - Owner', '/contact');
                      trackButtonClick('forgot_password', 'owner_login_page');
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Security Notice */}
                <div className="flex items-start space-x-2 bg-blue-50 border border-blue-200 rounded-md p-3">
                  <Shield className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-hhp-charcoal">
                    Your account information is protected with enterprise-grade security. 
                    All data transmission is encrypted.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Signing in...</span>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>

                {/* Support Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-hhp-charcoal mb-2">
                    Don't have an account?
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                    onClick={() => {
                      trackLinkClick('Contact Team - Owner Login', '/contact');
                      trackButtonClick('contact_team', 'owner_login_page');
                    }}
                  >
                    Contact our team
                  </Link>
                </div>
              </form>
            </div>

            {/* Footer Links */}
            <div className="mt-8 space-y-4 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-hhp-charcoal hover:text-hhp-navy transition-colors"
                onClick={() => trackLinkClick('Back to Home', '/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="text-sm text-hhp-charcoal">
                <span className="mr-2">Need resident access?</span>
                <Link
                  to="/resident-login"
                  className="text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                  onClick={() => {
                    trackLinkClick('Resident Login', '/resident-login');
                    trackButtonClick('resident_login_link', 'owner_login_page');
                  }}
                >
                  Resident Login
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-elegant p-4">
                <p className="text-sm font-medium text-hhp-charcoal mb-2">
                  Need access to the owner portal?
                </p>
                <p className="text-xs text-hhp-charcoal/70 mb-2">
                  Contact HHP Asset Group to request owner portal access for your properties.
                </p>
                <a
                  href="mailto:info@hhpasset.com"
                  className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                  onClick={() => trackButtonClick('email_access_request', 'owner_login_page')}
                >
                  info@hhpasset.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OwnerLogin;

