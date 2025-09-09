import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Shield } from 'lucide-react';

export function PrivacyPolicyPage() {
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

  return (
    <PageTransition>
      <div className="min-h-screen bg-white water-pattern premium-overlay">
        <Navigation />

        <div className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-8">
            {/* HEADER */}
            <div className="text-center mb-16">
              <div className="hero-badge mb-8">
                <Shield className="h-5 w-5 text-chillreach-600 mr-3" />
                <span className="text-slate-700 font-semibold">Privacy Policy</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* CONTENT */}
            <div className="prose prose-slate max-w-none">
              <div className="service-card scroll-reveal mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Information We Collect</h2>
                <p className="text-slate-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  subscribe to our newsletter, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Communication preferences</li>
                  <li>Messages and correspondence with us</li>
                </ul>
              </div>

              <div className="service-card scroll-reveal mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">How We Use Your Information</h2>
                <p className="text-slate-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Provide and deliver our email marketing services</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve our services</li>
                </ul>
              </div>

              <div className="service-card scroll-reveal mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Information Sharing</h2>
                <p className="text-slate-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div className="service-card scroll-reveal mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Data Security</h2>
                <p className="text-slate-600">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="service-card scroll-reveal mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Your Rights</h2>
                <p className="text-slate-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </div>

              <div className="service-card scroll-reveal">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Contact Us</h2>
                <p className="text-slate-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-slate-600">
                  <p>Email: <a href="mailto:sai@chillreach.org" className="text-chillreach-600 hover:text-chillreach-700">sai@chillreach.org</a></p>
                  <p>Email: <a href="mailto:pranav@chillreach.org" className="text-chillreach-600 hover:text-chillreach-700">pranav@chillreach.org</a></p>
                  <p>Phone: <a href="tel:+919392274091" className="text-chillreach-600 hover:text-chillreach-700">+91-9392274091</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

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