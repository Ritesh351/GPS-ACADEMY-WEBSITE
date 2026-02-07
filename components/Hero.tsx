import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: `url("${IMAGES.heroBanner}")` }}
      ></div>
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gps-navy/90 to-gps-navy/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white max-w-4xl">
        <div className="inline-block bg-gps-gold/20 backdrop-blur-sm border border-gps-gold/50 px-4 py-1 rounded-full text-gps-gold font-semibold text-sm mb-6 animate-fade-in-up">
          Admissions Open for 2026-27
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up delay-100">
          Empowering Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gps-gold to-yellow-200">
            Leaders
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-2 italic font-serif animate-fade-in-up delay-200">
          "{SCHOOL_INFO.motto}"
        </p>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-300">
          At {SCHOOL_INFO.name}, we nurture curiosity, creativity, and character. 
          Join a community where traditional values meet modern excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
          <NavLink 
            to="/admissions" 
            className="bg-gps-gold text-gps-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2"
          >
            Enroll Today <ArrowRight size={20} />
          </NavLink>
          <NavLink 
            to="/about" 
            className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-gps-navy transition-all duration-300 flex items-center justify-center"
          >
            Learn More
          </NavLink>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;