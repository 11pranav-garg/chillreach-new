import React, { useEffect, useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageTransition } from '../components/PageTransition';
import { Mail, Linkedin, Award, Users, MapPin, Star } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
}

function TeamMember({ name, role, image, email, linkedin }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
      {/* Full Card Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Name and Role - Always Visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-cyan-300 font-semibold text-lg">{role}</p>
        </div>
        
        {/* Hover Buttons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a 
            href={`mailto:${email}`} 
            className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
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

  const teamMembers = [
    {
      name: "Sai Krishna",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      email: "sai@chillreach.org",
      linkedin: "https://linkedin.com/in/saikrishna"
    },
    {
      name: "Pranav Kumar",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80&w=400&h=400",
      email: "pranav@chillreach.org",
      linkedin: "https://linkedin.com/in/pranavkumar"
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      email: "sarah@chillreach.org",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      email: "marcus@chillreach.org",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    {
      name: "Aisha Patel",
      role: "Account Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      email: "aisha@chillreach.org",
      linkedin: "https://linkedin.com/in/aishapatel"
    },
    {
      name: "David Kumar",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
      email: "david@chillreach.org",
      linkedin: "https://linkedin.com/in/davidkumar"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 water-pattern premium-overlay">
        <Navigation />

        <div className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-8">
            {/* HERO HEADER */}
            <div className="text-center mb-20" ref={heroRef}>
              <div className="hero-badge mb-8">
                <Users className="h-5 w-5 text-chillreach-600 mr-3" />
                <span className="text-slate-700 font-semibold">Meet Our Expert Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
                The Minds Behind
                <br />
                <span className="bg-gradient-to-r from-cyan-600 to-slate-600 bg-clip-text text-transparent">Your Success</span>
              </h1>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Meet the passionate experts who make email marketing magic happen. Our diverse team combines 
                technical excellence with creative innovation to deliver results that exceed expectations.
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                  <div className="text-slate-600 font-medium">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
                  <div className="text-slate-600 font-medium">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">99.5%</div>
                  <div className="text-slate-600 font-medium">Inbox Delivery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                  <div className="text-slate-600 font-medium">Expert Support</div>
                </div>
              </div>
            </div>
            
            {/* TEAM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="scroll-reveal" 
                  style={{ 
                    '--delay': index,
                    animationDelay: `${index * 0.1}s` 
                  } as React.CSSProperties}
                >
                  <TeamMember
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    email={member.email}
                    linkedin={member.linkedin}
                  />
                </div>
              ))}
            </div>
            
            {/* TEAM VALUES */}
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100 scroll-reveal">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  The principles that guide everything we do and drive our commitment to excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                  <p className="text-slate-600">We strive for perfection in every campaign, every strategy, and every client interaction.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
                  <p className="text-slate-600">We work as one team with our clients, combining expertise to achieve extraordinary results.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                  <p className="text-slate-600">We continuously push boundaries and explore new technologies to stay ahead of the curve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="py-8 md:py-16 relative overflow-hidden bg-white w-full">
          <div className="w-full px-4 md:px-8">
            <div className="text-center mb-12 scroll-reveal">
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