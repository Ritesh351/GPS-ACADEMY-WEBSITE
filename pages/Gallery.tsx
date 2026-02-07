import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="bg-gps-navy text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Campus Gallery</h1>
          <p className="text-lg text-slate-300">Glimpses of life at GPS Academy</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.gallery.map((url, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group relative">
               <img 
                 src={url} 
                 alt={`Gallery image ${index + 1}`} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;