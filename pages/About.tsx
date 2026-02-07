import React from 'react';
import { Target, Heart, Eye } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
       {/* Hero for Inner Page */}
       <div className="relative bg-gps-navy py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">About GPS Academy</h1>
            <p className="text-gps-gold text-xl font-hindi tracking-wide">{SCHOOL_INFO.hindiName}</p>
          </div>
       </div>

       <div className="container mx-auto px-4 sm:px-8 -mt-10 relative z-20">
         
         {/* Introduction Card */}
         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-gps-navy mb-6">A Legacy of Excellence</h2>
             <p className="text-slate-600 text-lg leading-relaxed mb-8">
               Established with a vision to transform education in Deoria, GPS Academy has been a beacon of knowledge. 
               We believe that education is not just about filling a bucket, but lighting a fire. Our curriculum is designed to 
               foster critical thinking, creativity, and moral integrity in every student.
             </p>
             <div className="h-1 w-20 bg-gps-gold mx-auto"></div>
           </div>
         </div>

         {/* Mission, Vision, Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gps-gold text-center hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gps-goldDark">
                 <Target size={32} />
               </div>
               <h3 className="text-xl font-bold text-gps-navy mb-3">Our Mission</h3>
               <p className="text-slate-600">To provide a safe and stimulating environment where students can discover their potential and achieve academic and personal success.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gps-navy text-center hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gps-navy">
                 <Eye size={32} />
               </div>
               <h3 className="text-xl font-bold text-gps-navy mb-3">Our Vision</h3>
               <p className="text-slate-600">To be a premier institution that nurtures global citizens who are rooted in values and equipped for the future.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gps-gold text-center hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gps-goldDark">
                 <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold text-gps-navy mb-3">Core Values</h3>
               <p className="text-slate-600">Integrity, Respect, Excellence, Responsibility, and Compassion form the bedrock of our educational philosophy.</p>
            </div>
         </div>

         {/* Principal's Message Section */}
         <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-200 min-h-[300px] relative">
               <img 
                 src={IMAGES.principal}
                 alt="Principal" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                 <div className="text-white">
                   <h3 className="font-bold text-xl">Principal's Desk</h3>
                   <p className="text-sm opacity-90">GPS Academy</p>
                 </div>
               </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gps-navy mb-4">Message from the Principal</h3>
              <p className="text-slate-600 italic mb-6 text-lg">
                "Welcome to GPS Academy. Our school is a vibrant community of learners where each day is an opportunity to grow. 
                We are committed to providing an education that goes beyond textbooks, focusing on the character and skills 
                needed for the 21st century. Join us in this journey from darkness to light."
              </p>
              <div className="font-bold text-gps-navy">
                - Principal Name
              </div>
            </div>
         </div>

       </div>
    </div>
  );
};

export default About;