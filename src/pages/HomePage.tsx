import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Mail, Target, BarChart3, Shield, Zap, Users, ArrowRight, Star, CheckCircle, X } from 'lucide-react';

interface TestimonialData {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export function HomePage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Chillreach transformed our email marketing completely. 340% increase in conversions within 3 months!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The most sophisticated email platform we've ever used. Incredible deliverability and results.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Our open rates doubled within the first month. Outstanding service and support!",
      rating: 5
    },
    {
      id: 4,
      name: "David Park",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Chillreach's team is exceptional. They understand our business perfectly and deliver results.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "ScaleUp",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The ROI we've achieved is beyond our wildest expectations. Truly amazing platform!",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      company: "Enterprise Inc",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Professional, reliable, and results-driven. Highly recommend to any serious business!",
      rating: 5
    }
  ];

  const workStages = [
    {
      number: "01",
      title: "Email Infrastructure Setup",
      description: "We establish your email foundation with proper domain authentication, SPF, DKIM, and DMARC records. Our technical team ensures your emails have the best chance of reaching the inbox from day one.",
      icon: Shield
    },
    {
      number: "02", 
      title: "Strategic Campaign Planning",
      description: "Our strategists analyze your audience and create data-driven email campaigns. We segment your lists, craft compelling messaging, and design conversion-focused templates that resonate with your customers.",
      icon: Target
    },
    {
      number: "03",
      title: "Creative Design & Development", 
      description: "Our designers create stunning, responsive email templates that work across all devices and email clients. Every design is optimized for engagement and conversion while maintaining your brand identity.",
      icon: Zap
    },
    {
      number: "04",
      title: "Launch & Performance Optimization",
      description: "We launch your campaigns with precision timing and continuously monitor performance. Using real-time analytics, we optimize open rates, click-through rates, and conversions to maximize your ROI.",
      icon: BarChart3
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Email Strategy & Planning",
      description: "Comprehensive email marketing strategies tailored to your business goals and audience behavior."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics", 
      description: "Deep insights and actionable data to continuously optimize your campaigns for maximum ROI."
    },
    {
      icon: Shield,
      title: "Deliverability Management",
      description: "Expert deliverability services ensuring your emails reach the inbox, not the spam folder."
    },
    {
      icon: Zap,
      title: "Creative Design Services",
      description: "Beautiful, responsive email designs that engage your audience and drive conversions."
    },
    {
      icon: Users,
      title: "List Management",
      description: "Professional list building, segmentation, and maintenance to maximize engagement rates."
    },
    {
      icon: Mail,
      title: "Campaign Management",
      description: "Full-service campaign management from strategy to execution and optimization."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px'
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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <PageTransition>
      <div className="min-h-screen elegant-background">
        <Navigation />

        {/* HERO SECTION */}
        <section className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Mail className="h-5 w-5 text-chillreach-600 mr-3" />
              <span className="text-slate-700 font-semibold">Email Marketing Excellence</span>
            </div>
            
            <h1 className="hero-title">
              Emails That
              <br />
              Actually Work
            </h1>
            
            <p className="hero-subtitle">
              We don't follow trends. We create them. Experience email marketing 
              that's as sophisticated as your business deserves. From strategy to execution, 
              we deliver results that matter.
            </p>
            
            <div className="hero-cta-group">
              <button className="hero-cta-primary magnetic">
                Transform Your Emails
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <button className="hero-cta-secondary magnetic">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* HOW WE CREATE EMAIL SUCCESS - FLOW DOWN ROADMAP */}
        <section className="flow-roadmap-section elegant-background">
          <div className="max-w-7xl mx-auto px-8">
            <div className="section-header scroll-reveal">
              <h2 className="section-title">
                How We Create
                <br />
                Email Success
              </h2>
              <p className="section-subtitle">
                Our proven 4-stage methodology that transforms your email marketing from ordinary to extraordinary. 
                Each phase is strategically designed to deliver maximum impact and measurable results.
              </p>
            </div>

            <div className="flow-roadmap-container">
              <div className="flow-roadmap-line"></div>
              
              {workStages.map((stage, index) => (
                <div key={index} className="flow-roadmap-step scroll-reveal">
                  <div className="flow-step-content">
                    <div className="flow-step-number">
                      {stage.number}
                    </div>
                    <div className="flow-step-info">
                      <div className="flow-step-card">
                        <h3 className="flow-step-title">{stage.title}</h3>
                        <p className="flow-step-description">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 md:py-24 relative overflow-hidden elegant-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="section-header scroll-reveal">
              <h2 className="section-title">Our Core Services</h2>
              <p className="section-subtitle">
                We specialize in two powerful services: ROI-focused cold email campaigns that book qualified meetings, 
                and expert deliverability management that ensures your emails always reach the inbox.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* ROI-FOCUSED COLD EMAIL */}
              <div className="service-card p-6 md:p-10 magnetic scroll-reveal">
                <div className="service-icon mb-6">
                  <Target className="h-8 md:h-10 w-8 md:w-10 text-slate-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">ROI-Focused Cold Email</h3>
                <p className="service-description mb-6">
                  We book qualified meetings with your ideal clients through strategic cold email campaigns. 
                  Complete hands-off solution with zero effort required from you.
                </p>
                <ul className="space-y-2 mb-6 md:mb-8">
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    Target audience research & list building
                  </li>
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    Compelling email copy & campaign management
                  </li>
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    Meeting booking & calendar integration
                  </li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-sm md:text-base text-chillreach-600 font-semibold hover:text-chillreach-700 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Link>
              </div>

              {/* DELIVERABILITY MANAGEMENT */}
              <div className="service-card p-6 md:p-10 magnetic scroll-reveal" style={{ animationDelay: '0.3s' }}>
                <div className="service-icon mb-6">
                  <Shield className="h-8 md:h-10 w-8 md:w-10 text-slate-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Email Deliverability Management</h3>
                <p className="service-description mb-6">
                  Your email setup, we manage and maintain it. Ensure 99%+ inbox placement with our 
                  expert deliverability management and ongoing technical support.
                </p>
                <ul className="space-y-2 mb-6 md:mb-8">
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    Email infrastructure setup & optimization
                  </li>
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    24/7 monitoring & maintenance
                  </li>
                  <li className="flex items-center text-sm md:text-base text-slate-600">
                    <div className="w-2 h-2 bg-chillreach-500 rounded-full mr-3"></div>
                    Ongoing updates & technical support
                  </li>
                </ul>
                <Link to="/services" className="inline-flex items-center text-sm md:text-base text-chillreach-600 font-semibold hover:text-chillreach-700 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-3 md:h-4 w-3 md:w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SHOWCASE */}
        <section className="py-16 md:py-20 relative overflow-hidden elegant-background premium-overlay">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="section-header scroll-reveal">
              <h2 className="section-title">Proven Performance</h2>
              <p className="section-subtitle">
                This is what expertise looks like. Real screenshots from our actual campaigns showing the 
                results we deliver. No testimonials needed - the numbers speak for themselves.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Result 1 */}
              <div className="service-card scroll-reveal">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Multi-Campaign Excellence</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result1.png"
                    alt="Multiple high-performing email campaigns running simultaneously with exceptional metrics"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result1.png")}
                  />
                  <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Active
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Multiple campaigns delivering consistent results with optimized performance across all sequences.
                </p>
              </div>

              {/* Result 2 */}
              <div className="service-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Performance Mastery</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result2.png"
                    alt="Superior campaign performance with exceptional engagement rates and growth trends"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result2.png")}
                  />
                  <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Optimized
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Exceptional performance metrics showcasing our ability to maximize engagement and minimize bounces.
                </p>
              </div>

              {/* Result 3 */}
              <div className="service-card scroll-reveal" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Scale & Precision</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result3.png"
                    alt="Large-scale campaigns executed with precision, delivering exceptional results at enterprise volume"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result3.png")}
                  />
                  <div className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Scale
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Handling massive volumes while maintaining precision - proof of our enterprise-level expertise.
                </p>
              </div>

              {/* Result 4 */}
              <div className="service-card scroll-reveal" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Growth Engineering</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result4.png"
                    alt="Strategic growth optimization showing consistent upward trends and performance improvements"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result4.png")}
                  />
                  <div className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Trending
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Engineered growth patterns that consistently deliver upward trends and measurable improvements.
                </p>
              </div>

              {/* Result 5 */}
              <div className="service-card scroll-reveal" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Precision Execution</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result5.png"
                    alt="Precise campaign execution with detailed performance tracking and optimization metrics"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result5.png")}
                  />
                  <div className="absolute top-6 right-6 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Precise
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Every metric optimized, every detail tracked - this is what precision email marketing looks like.
                </p>
              </div>

              {/* Result 6 */}
              <div className="service-card scroll-reveal" style={{ animationDelay: '1.0s' }}>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Strategic Command</h3>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <img 
                    src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result6.png"
                    alt="Strategic campaign oversight with comprehensive performance data and tactical insights"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result6.png")}
                  />
                  <div className="absolute top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Strategic
                  </div>
                </div>
                <p className="text-slate-600 mt-6 text-base leading-relaxed">
                  Strategic oversight that transforms data into actionable insights and measurable business growth.
                </p>
              </div>
            </div>

            {/* Trust Statement */}
            <div className="service-card scroll-reveal text-center" style={{ animationDelay: '1.4s' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">This Is What Expertise Delivers</h3>
              <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                No testimonials needed. No case studies required. These screenshots from our actual campaigns 
                show exactly what we deliver - consistent, measurable, exceptional results. This is the proof 
                of our expertise and the power of strategic email marketing done right.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-slate-600">Real Performance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-slate-600">Proven Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                  <span className="text-xs md:text-sm text-slate-600">Measurable Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 md:py-20 relative overflow-hidden premium-overlay">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Ready to Start
                <br />
                Your Success Story?
              </h2>
              <p className="text-base md:text-lg text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses that trust Chillreach for their email marketing success. 
                Let's create something extraordinary together.
              </p>
              <div className="flex justify-center">
                <button className="hero-cta-primary magnetic w-full md:w-auto">
                  Transform Your Emails Today
                  <ArrowRight className="ml-3 h-4 md:h-5 w-4 md:w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 md:py-16 relative overflow-hidden bg-white w-full">
          <div className="w-full px-4 md:px-8">
            <div className="text-center mb-12 scroll-reveal">
              <img 
                src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/svg/Color%20logo%20-%20no%20background.svg" 
                alt="Chillreach" 
                className="h-8 md:h-12 w-auto mx-auto mb-4 md:mb-6"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900">Email Marketing Excellence</h3>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
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

        {/* FULL SCREEN IMAGE MODAL */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Full screen view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}