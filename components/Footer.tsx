import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

const Footer: React.FC = () => {
  const SOCIAL_LINKS = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61572997856024" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/gpsacademyofficial/" }
  ];

  return (
    <footer className="bg-gps-navy text-white pt-16 pb-8 border-t-4 border-gps-gold">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
                <img 
                    src={SCHOOL_INFO.logo} 
                    alt="GPS Academy" 
                    className="w-20 h-20 object-contain bg-white rounded-full p-1 shadow-lg"
                />
                <div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{SCHOOL_INFO.name}</h2>
                    <p className="text-gps-gold font-hindi text-lg leading-tight">{SCHOOL_INFO.hindiName}</p>
                </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-sm">
              Dedicated to illuminating young minds and fostering holistic growth through academic excellence and moral values.
            </p>
            <p className="text-sm font-semibold italic text-gps-gold border-l-2 border-gps-gold pl-3">
              "{SCHOOL_INFO.motto}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-gps-gold inline-block pb-1 mb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Admissions Process', path: '/admissions' },
                { name: 'Academic Curriculum', path: '/academics' },
                { name: 'School Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-slate-300 hover:text-gps-gold transition-colors flex items-center gap-2 group">
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-gps-gold inline-block pb-1 mb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="text-gps-gold shrink-0 mt-1" size={20} />
                <span className="leading-tight">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="text-gps-gold shrink-0 mt-1" size={20} />
                <div className="flex flex-col gap-1">
                    <a href={`tel:${SCHOOL_INFO.phone1}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone1}</a>
                    <a href={`tel:${SCHOOL_INFO.phone2}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone2}</a>
                    <a href={`tel:${SCHOOL_INFO.phone3}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone3}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="text-gps-gold shrink-0" size={20} />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors break-all">{SCHOOL_INFO.email}</a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  target={href !== "#" ? "_blank" : "_self"}
                  rel={href !== "#" ? "noopener noreferrer" : ""}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gps-gold hover:text-gps-navy transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
          <p className="text-xs text-slate-500">Designed with ❤️ for Education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;