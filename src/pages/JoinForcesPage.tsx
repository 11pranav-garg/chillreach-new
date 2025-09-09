import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Handshake, Mail, TrendingUp, Users, Building2, Code, Megaphone, AlertCircle, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface PartnerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FormErrors {
  email?: string;
  phone?: string;
  firstName?: string;
  company?: string;
}

function PartnerCard({ icon, title, description }: PartnerCardProps) {
  return (
    <div className="bg-glass-card p-8 rounded-xl hover-glass-effect transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-2xl font-semibold ml-4 font-display">{title}</h3>
      </div>
      <p className="text-slate-600 font-mono leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function JoinForcesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[\d\s-()]{10,}$/;
    return re.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validate required fields
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setNotification({
        type: 'error',
        message: 'Please fill in all required fields correctly'
      });
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNotification({
        type: 'success',
        message: 'Form submitted successfully! We\'ll be in touch soon.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: ''
      });
      
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
      setTimeout(() => setNotification(null), 3000);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const partners = [
    {
      icon: <Code className="h-12 w-12 text-chillreach-600" />,
      title: "Technology Partners",
      description: "Integrate with our API and build powerful email solutions together",
    },
    {
      icon: <Megaphone className="h-12 w-12 text-chillreach-600" />,
      title: "Marketing Agencies",
      description: "Partner with us to offer premium email services to your clients",
    },
    {
      icon: <Building2 className="h-12 w-12 text-chillreach-600" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise email infrastructure and white-label solutions",
    },
    {
      icon: <Users className="h-12 w-12 text-chillreach-600" />,
      title: "Consultants",
      description: "Help businesses optimize their email marketing with our platform",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-chillreach-600" />,
      title: "Growth Partners",
      description: "Scale your business with our referral and reseller programs",
    },
    {
      icon: <Mail className="h-12 w-12 text-chillreach-600" />,
      title: "Email Service Providers",
      description: "Enhance your offerings with our deliverability expertise",
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative water-pattern premium-overlay">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-chillreach-400/20 to-chillreach-600/20 rounded-full blur-3xl"></div>

        <Navigation />

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-chillreach-50 border border-chillreach-200 rounded-full mb-6">
                <Handshake className="h-4 w-4 text-chillreach-600 mr-2" />
                <span className="text-chillreach-700 font-medium text-sm">Agency Partnerships</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-display text-slate-900">
                Work with
                <br />
                <span className="text-gradient">Chillreach</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Partner with our email marketing agency to offer your clients world-class email marketing services. 
                Let's grow together and deliver exceptional results.
              </p>
              <button className="button-primary flex items-center justify-center mx-auto">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Who We're Looking to Partner With */}
        <div className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                <span className="text-gradient">Partnership Opportunities</span>
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mx-auto">
                Discover how we can work together to deliver exceptional email marketing solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-glass-effect">
                  <div className="mb-6">
                    {partner.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-display text-slate-900">{partner.title}</h3>
                  <p className="text-slate-600 mb-6">{partner.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-chillreach-500 mr-2">→</span>
                      <span className="text-slate-600 text-sm">Dedicated partner support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-chillreach-500 mr-2">→</span>
                      <span className="text-slate-600 text-sm">Competitive revenue sharing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-chillreach-500 mr-2">→</span>
                      <span className="text-slate-600 text-sm">Marketing and sales resources</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Partner with Ninternet */}
        <div className="py-32 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                <span className="text-gradient">Why Choose Chillreach?</span>
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mx-auto">
                Join a proven platform that delivers results for businesses worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-glass-effect relative">
                <div className="number-background">1</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 font-display text-slate-900">Industry-Leading Deliverability</h3>
                  <p className="text-slate-600">Partner with a platform that consistently achieves 98%+ inbox placement rates across all major email providers.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-glass-effect relative">
                <div className="number-background">2</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 font-display text-slate-900">Comprehensive Partner Support</h3>
                  <p className="text-slate-600">Get dedicated account management, technical support, and marketing resources to help you succeed.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-glass-effect relative">
                <div className="number-background">3</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 font-display text-slate-900">Competitive Revenue Sharing</h3>
                  <p className="text-slate-600">Earn attractive commissions and recurring revenue with our flexible partnership models.</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-glass-effect relative">
                <div className="number-background">4</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 font-display text-slate-900">Proven Track Record</h3>
                  <p className="text-slate-600">Join thousands of successful partners who trust Chillreach for their email marketing needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {notification && (
          <div className={`notification ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`}>
            {notification.type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 mr-2" />
            )}
            {notification.message}
          </div>
        )}

        {/* Footer with Contact Form */}
        <footer className="relative z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 md:py-16 border-t border-slate-200 w-full">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-display text-slate-900">Ready to Partner with Us?</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 px-4">
                Take the first step towards a successful partnership with Chillreach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1 font-mono required-field">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.firstName}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 required-field">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 required-field">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1 required-field">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border ${errors.company ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Company Name"
                  />
                  {errors.company && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{errors.company}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Role"
                  />
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`button-primary w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}