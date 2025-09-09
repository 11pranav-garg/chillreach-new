import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== scrolled) {
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-3 md:top-6 left-3 md:left-6 right-3 md:right-6 z-50 transition-all duration-1000 ${scrolled ? 'shadow-2xl' : ''}`}
         style={{
           backdropFilter: 'blur(20px) saturate(180%)',
           background: 'rgba(255, 255, 255, 0.95)',
           border: '1px solid rgba(255, 255, 255, 0.2)',
           borderRadius: '16px',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
         }}>
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <Link to="/" className="magnetic">
          <img 
            src="https://rjogrcexebenouodzjhk.supabase.co/storage/v1/object/public/Chillreach/svg/Color%20logo%20-%20no%20background.svg" 
            alt="Chillreach" 
            className="h-8 md:h-12 w-auto transition-all duration-300"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 text-base ${
                isActive(item.path) ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-300 transform -translate-x-1/2 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link to="/contact" className="hidden lg:block bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 relative overflow-hidden magnetic hover:scale-105 hover:-translate-y-1"
              style={{
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
              }}>
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-slate-700 mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-300 ${
                  isActive(item.path) ? 'text-slate-900 font-semibold bg-slate-50' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}