import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Mail, Phone, Send, CheckCircle, Linkedin, MapPin } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!heroRef.current) return;
      
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 25 + 25) + 's';
        heroRef.current.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      if (heroRef.current) {
        const particles = heroRef.current.querySelectorAll('.particle');
        particles.forEach(particle => particle.remove());
      }
    };
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white water-pattern premium-overlay">
        <Navigation />

        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8">
            {/* INEVITABLE HEADER */}
            <div className="text-center mb-24" ref={heroRef}>
              <div className="floating-orb floating-orb-1"></div>
              <div className="floating-orb floating-orb-2"></div>
              
              <div className="hero-badge mb-8">
                <Mail className="h-5 w-5 text-chillreach-600 mr-3" />
                <span className="text-slate-700 font-semibold">Let's Connect</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                Ready to Get
                <br />
                Started?
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us about your goals and we'll create a custom email marketing strategy 
                that transforms your business. Let's build something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* CONTACT INFO */}
              <div className="space-y-8">
                <div className="service-card magnetic scroll-reveal">
                  <div className="service-icon mb-6">
                    <Mail className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="service-title">Email Us</h3>
                  <p className="service-description mb-6">
                    Ready to start your email marketing journey? Send us a message and we'll get back to you within 24 hours.
                  </p>
                  <div className="text-chillreach-600 font-bold text-lg">
                    <a href="mailto:hello@chillreach.com" className="hover:text-chillreach-700 transition-colors duration-300">
                      hello@chillreach.com
                    </a>
                  </div>
                </div>

                <div className="service-card magnetic scroll-reveal" style={{ animationDelay: '0.2s' }}>
                  <div className="service-icon mb-6">
                    <Phone className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="service-title">Call Us</h3>
                  <p className="service-description mb-6">
                    Prefer to talk? We're here to discuss your email marketing needs and answer any questions.
                  </p>
                  <div className="text-chillreach-600 font-bold text-lg">
                    <a href="tel:+15551234567" className="hover:text-chillreach-700 transition-colors duration-300">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="service-card magnetic scroll-reveal" style={{ animationDelay: '0.4s' }}>
                  <div className="service-icon mb-6">
                    <Linkedin className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="service-title">Connect with Us</h3>
                  <p className="service-description mb-6">
                    Follow us on LinkedIn for the latest email marketing insights and industry updates.
                  </p>
                  <div className="text-chillreach-600 font-bold text-lg">
                    <a href="https://linkedin.com/company/chillreach" target="_blank" rel="noopener noreferrer" className="hover:text-chillreach-700 transition-colors duration-300">
                      @chillreach
                    </a>
                  </div>
                </div>

                <div className="service-card magnetic scroll-reveal" style={{ animationDelay: '0.6s' }}>
                  <div className="service-icon mb-6">
                    <MapPin className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="service-title">Visit Us</h3>
                  <p className="service-description mb-6">
                    Located in the beautiful coastal city of Vishakhapatnam, we're here to serve clients globally.
                  </p>
                  <div className="text-chillreach-600 font-bold text-lg">
                    Vishakhapatnam, India
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="scroll-reveal" style={{ animationDelay: '0.8s' }}>
                <div className="service-card p-12">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Tell us about your project</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-6 py-4 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-chillreach-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="What are your email marketing goals? How can we help you succeed?"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full hero-cta-primary magnetic"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 ml-3" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gradient-to-r from-chillreach-500 to-chillreach-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-6">Message Sent!</h3>
                      <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. We'll get back to you within 24 hours with a 
                        custom strategy tailored to your needs.
                      </p>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-chillreach-600 mb-2">24h</div>
                          <div className="text-slate-500 text-sm font-medium">Response</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-chillreach-600 mb-2">Free</div>
                          <div className="text-slate-500 text-sm font-medium">Consultation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-chillreach-600 mb-2">Custom</div>
                          <div className="text-slate-500 text-sm font-medium">Strategy</div>
                        </div>
                      </div>
                    </div>
                  )}
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