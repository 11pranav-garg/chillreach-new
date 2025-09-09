import React, { useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Star, Users, X } from 'lucide-react';

export function TestimonialsPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Chillreach transformed our email marketing completely. We saw a 340% increase in conversions within just 3 months. Their strategic approach and attention to detail is unmatched.",
      rating: 5,
      results: "340% increase in conversions"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The most sophisticated email platform we've ever used. Their deliverability expertise helped us reach 98% inbox placement rate consistently.",
      rating: 5,
      results: "98% inbox placement rate"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Our open rates doubled within the first month. The team's creative approach and data-driven strategies delivered results beyond our expectations.",
      rating: 5,
      results: "200% increase in open rates"
    },
    {
      id: 4,
      name: "David Park",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Chillreach's team is exceptional. They understand our business perfectly and consistently deliver campaigns that drive real revenue growth.",
      rating: 5,
      results: "450% ROI improvement"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "ScaleUp",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The ROI we've achieved is beyond our wildest expectations. Their systematic approach to email marketing is truly revolutionary.",
      rating: 5,
      results: "600% revenue increase"
    },
    {
      id: 6,
      name: "James Wilson",
      company: "Enterprise Inc",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Professional, reliable, and results-driven. Their expertise in email deliverability and campaign optimization is unmatched in the industry.",
      rating: 5,
      results: "99.2% deliverability rate"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen elegant-background water-pattern premium-overlay">
        <Navigation />

        <div className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-8">
            {/* HEADER */}
            <div className="text-center mb-32" ref={heroRef}>
              <div className="hero-badge mb-8">
                <Users className="h-5 w-5 text-chillreach-600 mr-3" />
                <span className="text-slate-700 font-semibold">Client Success Stories</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                Real Results from
                <br />
                Real Clients
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Discover how businesses like yours have transformed their email marketing 
                and achieved extraordinary results with Chillreach's expert strategies and execution.
              </p>
            </div>
            
            {/* VIDEO TESTIMONIALS */}
            <div className="mb-32">
              <div className="section-header scroll-reveal">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                  Hear From Our
                  <br />
                  Clients Directly
                </h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Watch real clients share their success stories and the impact 
                  Chillreach has had on their business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="video-testimonial scroll-reveal">
                  <video 
                    controls 
                    className="w-full h-auto rounded-xl"
                  >
                    <source src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/feedback1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Harry</h3>
                    <p className="text-sm text-chillreach-600 font-medium mb-4">Co-Founder of LeadR Marketing</p>
                  </div>
                </div>

                <div className="video-testimonial scroll-reveal" style={{ animationDelay: '0.3s' }}>
                  <video 
                    controls 
                    className="w-full h-auto rounded-xl"
                  >
                    <source src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/feedback2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Hollis Cameron</h3>
                    <p className="text-sm text-chillreach-600 font-medium mb-4">Founder HMC Marketing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WRITTEN TESTIMONIALS */}
            <div className="mb-32">
              <div className="section-header scroll-reveal">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                  What Our Clients
                  <br />
                  Are Saying
                </h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Read detailed testimonials from businesses that have transformed 
                  their email marketing with our expert strategies and execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-card scroll-reveal"
                    style={{ 
                      '--delay': index,
                      animationDelay: `${index * 0.15}s` 
                    } as React.CSSProperties}
                  >
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-base text-slate-700 mb-6 leading-relaxed italic relative">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-lg"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
                          <p className="text-chillreach-600 font-medium text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-600">{testimonial.results}</div>
                        <div className="text-xs text-slate-500">Results Achieved</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESULTS SHOWCASE */}
            <div className="mb-24">
              <div className="section-header scroll-reveal">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">The Numbers Don't Lie</h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Beyond testimonials, beyond case studies - this is raw proof of performance. Real screenshots 
                  from our campaigns showing the results that speak louder than any words ever could.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
                {/* Result 1 */}
                <div className="service-card scroll-reveal">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Multi-Campaign Mastery</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result1.png"
                      alt="Multiple high-performing campaigns running simultaneously with exceptional results"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result1.png")}
                    />
                    <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Active
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Multiple campaigns delivering consistent excellence - this is what expertise looks like in action.
                  </p>
                </div>

                {/* Result 2 */}
                <div className="service-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Performance Excellence</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result2.png"
                      alt="Superior performance metrics showcasing exceptional engagement and optimization"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result2.png")}
                    />
                    <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Optimized
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Every metric optimized for maximum performance - proof of our strategic approach to email marketing.
                  </p>
                </div>

                {/* Result 3 */}
                <div className="service-card scroll-reveal" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Enterprise Scale</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result3.png"
                      alt="Massive scale campaigns executed with precision and exceptional performance"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result3.png")}
                    />
                    <div className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Scale
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Handling enterprise volumes while maintaining precision - this is advanced email marketing mastery.
                  </p>
                </div>

                {/* Result 4 */}
                <div className="service-card scroll-reveal" style={{ animationDelay: '0.6s' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Growth Engineering</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result4.png"
                      alt="Strategic growth patterns showing consistent upward performance trends"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result4.png")}
                    />
                    <div className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Trending
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Engineered growth that delivers consistent upward trends - strategic email marketing at its finest.
                  </p>
                </div>

                {/* Result 5 */}
                <div className="service-card scroll-reveal" style={{ animationDelay: '0.8s' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Precision Execution</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result5.png"
                      alt="Precise campaign execution with optimized performance across all metrics"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result5.png")}
                    />
                    <div className="absolute top-6 right-6 bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Precise
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Every detail optimized, every metric maximized - this is what precision email marketing delivers.
                  </p>
                </div>

                {/* Result 6 */}
                <div className="service-card scroll-reveal" style={{ animationDelay: '1.0s' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Strategic Command</h3>
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                    <img 
                      src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result6.png"
                      alt="Strategic campaign oversight delivering comprehensive performance and insights"
                      className="w-full h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage("https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/results/result6.png")}
                    />
                    <div className="absolute top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Strategic
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 text-base leading-relaxed">
                    Strategic oversight that transforms complex data into clear business growth and measurable success.
                  </p>
                </div>
              </div>

              {/* Trust Statement */}
              <div className="service-card scroll-reveal text-center" style={{ animationDelay: '1.2s' }}>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Pure Performance, Zero Fluff</h3>
                <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  These aren't testimonials or case studies - they're raw proof. Real screenshots from our actual 
                  campaigns showing the performance that matters. When expertise meets execution, these are the 
                  results you get. No fluff, no promises - just measurable, exceptional performance.
                </p>
                <div className="flex items-center justify-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-600">Raw Performance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-600">Proven Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                    <span className="text-sm text-slate-600">Zero Fluff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA SECTION */}
            <div className="text-center scroll-reveal">
              <div className="service-card p-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's create your own success story. Get started with a free consultation 
                  and discover how we can transform your email marketing results.
                </p>
                <button className="hero-cta-primary magnetic">
                  Start Your Success Story
                </button>
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