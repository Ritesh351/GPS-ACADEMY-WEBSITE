import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO, NAVIGATION_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Navy Background */}
      <div className="bg-gps-navy text-white text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
        <p className="font-medium tracking-wide">{SCHOOL_INFO.motto} | {SCHOOL_INFO.mottoTranslation}</p>
        <div className="flex gap-4 items-center">
          <a href={`tel:${SCHOOL_INFO.phone1}`} className="flex items-center gap-1 hover:text-gps-gold transition-colors">
            <Phone size={14} /> <span>{SCHOOL_INFO.phone1}</span>
          </a>
          <a href={`mailto:${SCHOOL_INFO.email}`} className="hidden sm:flex items-center gap-1 hover:text-gps-gold transition-colors">
            <Mail size={14} /> <span>{SCHOOL_INFO.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-4 group">
          <img 
            src={SCHOOL_INFO.logo} 
            alt="GPS Academy Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gps-navy tracking-tight leading-none group-hover:text-blue-800 transition-colors">
              {SCHOOL_INFO.name}
            </h1>
            <span className="text-xs sm:text-sm font-hindi font-semibold text-gps-goldDark mt-0.5">
              {SCHOOL_INFO.hindiName}
            </span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-slate-700">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 transition-colors duration-300 hover:text-gps-navy ${
                  isActive ? 'text-gps-navy font-bold border-b-2 border-gps-gold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/admissions"
            className="bg-gps-gold hover:bg-gps-goldDark text-gps-navy font-bold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Apply Now
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gps-navy p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 max-h-screen' : 'scale-y-0 opacity-0 max-h-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium px-4 py-2 rounded-md ${
                  isActive ? 'bg-blue-50 text-gps-navy' : 'text-slate-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/admissions"
            onClick={() => setIsOpen(false)}
            className="text-center bg-gps-gold text-gps-navy font-bold py-3 rounded-md mt-2"
          >
            Apply Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;