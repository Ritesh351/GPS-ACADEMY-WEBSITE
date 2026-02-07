import React from 'react';
import Hero from '../components/Hero';
import NoticeBoard from '../components/NoticeBoard';
import { FEATURES, SCHOOL_INFO, IMAGES } from '../constants';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Intro & Notices Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Welcome Content */}
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 text-gps-navy font-bold uppercase tracking-wider text-sm">
                <span className="w-8 h-1 bg-gps-gold"></span> Welcome to GPS Academy
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Shaping Minds, <span className="text-gps-goldDark">Building Futures</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Located in the heart of Deoria, {SCHOOL_INFO.name} is a premier institution dedicated to academic excellence and holistic development. 
                Guided by our motto <em>"{SCHOOL_INFO.motto}"</em>, we strive to remove the darkness of ignorance with the light of knowledge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <img 
                  src={IMAGES.homeIntro1}
                  alt="Student Studying" 
                  className="rounded-lg shadow-md object-cover h-48 w-full hover:scale-[1.02] transition-transform"
                />
                <img 
                  src={IMAGES.homeIntro2} 
                  alt="Science Lab" 
                  className="rounded-lg shadow-md object-cover h-48 w-full hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>

            {/* Notice Board Sidebar */}
            <div className="lg:w-1/3">
              <NoticeBoard />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gps-navy text-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gps-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose {SCHOOL_INFO.name}?</h2>
            <div className="w-24 h-1 bg-gps-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-gps-gold/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-gps-gold rounded-lg flex items-center justify-center text-gps-navy mb-6 group-hover:rotate-6 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Visual Gallery Strip */}
      <section className="py-0">
        <div className="flex flex-wrap">
          {IMAGES.gallery.slice(0, 6).map((url, i) => (
            <div key={i} className="w-1/2 md:w-1/3 h-64 overflow-hidden relative group">
              <img src={url} alt="School Life" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gps-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Star className="text-gps-gold animate-spin-slow" size={32} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gps-navy/95 p-8 text-center">
            <Link to="/gallery" className="inline-block border-2 border-gps-gold text-gps-gold hover:bg-gps-gold hover:text-gps-navy px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                View Full Gallery
            </Link>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gps-gold">
         <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-gps-navy mb-6">Ready to start the journey?</h2>
             <p className="text-xl text-gps-navy/80 mb-8 max-w-2xl mx-auto font-medium">
               Admissions are now open for the upcoming academic session. Secure your child's future with GPS Academy.
             </p>
             <div className="flex justify-center gap-4">
               <Link to="/contact" className="bg-gps-navy text-white px-8 py-4 rounded-md font-bold text-lg hover:shadow-xl hover:bg-blue-900 transition-all">
                 Contact Us
               </Link>
               <Link to="/admissions" className="bg-white text-gps-navy px-8 py-4 rounded-md font-bold text-lg hover:shadow-xl transition-all">
                 Admissions Info
               </Link>
             </div>
         </div>
      </section>
    </>
  );
};

export default Home;