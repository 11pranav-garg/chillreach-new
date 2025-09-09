import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Target, Shield, Mail, Calendar, ArrowRight, CheckCircle, Zap, BarChart3 } from 'lucide-react';

export function ServicesPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const roiFeatures = [
    "Complete cold email campaign strategy",
    "Target audience research and list building",
    "Compelling email copywriting and design",
    "Advanced deliverability optimization",
    "A/B testing and performance optimization",
    "Meeting booking and calendar management",
    "Detailed ROI tracking and reporting"
  ];

  const deliverabilityFeatures = [
    "Email infrastructure setup and optimization",
    "SPF, DKIM, and DMARC configuration",
    "IP warming and reputation management",
    "Ongoing monitoring and maintenance",
    "Blacklist monitoring and removal",
    "Inbox placement optimization",
    "Technical support and updates"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen elegant-background water-pattern premium-overlay">
        <Navigation />

        {/* HERO SECTION */}
        <section className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Target className="h-5 w-5 text-chillreach-600 mr-3" />
              <span className="text-slate-700 font-semibold">Our Services</span>
            </div>
            
            <h1 className="hero-title">
              Email Marketing
              <br />
              That Delivers Results
            </h1>
            
            <p className="hero-subtitle">
              We specialize in two core services that drive real business growth: 
              ROI-focused cold email campaigns and bulletproof email deliverability. 
              Zero effort on your part, maximum results for your business.
            </p>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* ROI-FOCUSED COLD EMAIL SERVICE */}
              <div className="service-card p-12 scroll-reveal">
                <div className="service-icon mb-8">
                  <Target className="h-12 w-12 text-slate-600" />
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  ROI-Focused Cold Email Campaigns
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We focus on ROI by booking calls with brands you want to work with through 
                  strategic cold emails. We create, manage and run everything with 0 effort on your part.
                </p>

                <div className="space-y-4 mb-10">
                  {roiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-chillreach-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-chillreach-50 to-chillreach-100 p-6 rounded-xl mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <BarChart3 className="h-8 w-8 text-chillreach-600" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">What You Get</h3>
                      <p className="text-slate-600">Complete hands-off solution</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Qualified meetings booked directly to your calendar</li>
                    <li>• Detailed campaign performance reports</li>
                    <li>• Continuous optimization for better results</li>
                    <li>• Complete campaign management and monitoring</li>
                  </ul>
                </div>

                <button className="hero-cta-primary w-full magnetic">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book ROI Strategy Call
                  <ArrowRight className="h-5 w-5 ml-3" />
                </button>
              </div>

              {/* DELIVERABILITY MANAGEMENT SERVICE */}
              <div className="service-card p-12 scroll-reveal" style={{ animationDelay: '0.3s' }}>
                <div className="service-icon mb-8">
                  <Shield className="h-12 w-12 text-slate-600" />
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  Email Deliverability Management
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Your email setup, we just help manage it and maintain and update as and when required. 
                  Ensure your emails always reach the inbox with our expert deliverability management.
                </p>

                <div className="space-y-4 mb-10">
                  {deliverabilityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-chillreach-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Zap className="h-8 w-8 text-chillreach-600" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">What You Get</h3>
                      <p className="text-slate-600">Ongoing technical excellence</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 99%+ inbox placement rates</li>
                    <li>• 24/7 monitoring and maintenance</li>
                    <li>• Proactive issue resolution</li>
                    <li>• Regular performance reports</li>
                  </ul>
                </div>

                <button className="hero-cta-primary w-full magnetic">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book Deliverability Audit
                  <ArrowRight className="h-5 w-5 ml-3" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="section-header scroll-reveal">
              <h2 className="section-title">Why Choose Chillreach?</h2>
              <p className="section-subtitle">
                We don't just send emails - we engineer results. Here's what sets us apart 
                from other email marketing agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-card scroll-reveal">
                <div className="service-icon mb-6">
                  <Target className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="service-title">Zero Effort Required</h3>
                <p className="service-description">
                  We handle everything from strategy to execution. You focus on closing deals, 
                  we focus on getting you those meetings.
                </p>
              </div>

              <div className="service-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <div className="service-icon mb-6">
                  <BarChart3 className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="service-title">ROI-Focused Approach</h3>
                <p className="service-description">
                  Every campaign is designed with one goal: generating qualified meetings 
                  that convert into revenue for your business.
                </p>
              </div>

              <div className="service-card scroll-reveal" style={{ animationDelay: '0.4s' }}>
                <div className="service-icon mb-6">
                  <Shield className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="service-title">Technical Excellence</h3>
                <p className="service-description">
                  Advanced deliverability management ensures your emails reach the inbox, 
                  not the spam folder. We maintain 99%+ delivery rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 relative overflow-hidden premium-overlay">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Ready to Start
                <br />
                Generating Results?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Choose the service that fits your needs. Both are designed to deliver 
                maximum ROI with zero effort on your part.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="hero-cta-primary magnetic">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book ROI Strategy Call
                </button>
                <button className="hero-cta-secondary magnetic">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book Deliverability Audit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 md:py-16 relative overflow-hidden bg-white w-full">
          <div className="w-full px-4 md:px-8">
            <div className="text-center mb-12 scroll-reveal">
              <img 
                src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/svg/Color%20logo%20-%20no%20background.svg" 
                alt="Chillreach" 
                className="h-8 md:h-12 w-auto mx-auto mb-4 md:mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">Email Marketing Excellence</h3>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                We help businesses create meaningful connections through exceptional email experiences. 
                From strategy to execution, we deliver results that matter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 scroll-reveal max-w-6xl mx-auto">
              <div>
                <h4 className="text-slate-900 font-bold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
                <a href="/team" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">Team</a>
                <a href="/testimonials" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">Testimonials</a>
                <a href="/contact" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">Contact</a>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
                <a href="/privacy-policy" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">Privacy Policy</a>
                <a href="/terms-conditions" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">Terms & Conditions</a>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-3 md:mb-4 text-sm md:text-base">Connect</h4>
                <a href="https://linkedin.com/company/chillreach" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">LinkedIn</a>
                <a href="mailto:sai@chillreach.org" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">sai@chillreach.org</a>
                <a href="mailto:pranav@chillreach.org" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">pranav@chillreach.org</a>
                <a href="tel:+919392274091" className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 mb-2 text-xs md:text-sm">+91-9392274091</a>
                <span className="block text-slate-600 text-xs md:text-sm">Vishakhapatnam, India</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-4 md:pt-6 text-center scroll-reveal">
              <p className="text-slate-500 text-xs md:text-sm">
                © 2024 Chillreach. Crafting exceptional email experiences.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}