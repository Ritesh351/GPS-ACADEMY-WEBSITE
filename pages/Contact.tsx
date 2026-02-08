import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    try {
      // Sending data to your Formspree endpoint
      const response = await fetch("https://formspree.io/f/xpqjznar", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        console.error("Form submission failed:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
       <div className="bg-gps-navy text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
               <h2 className="text-2xl font-bold text-gps-navy mb-6">Get in Touch</h2>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-gps-navy">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">Visit Us</h3>
                     <p className="text-slate-600 max-w-xs">{SCHOOL_INFO.address}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-gps-navy">
                     <Phone size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">Call Us</h3>
                     <p className="text-slate-600">{SCHOOL_INFO.phone1}</p>
                     <p className="text-slate-600">{SCHOOL_INFO.phone2}</p>
                     <p className="text-slate-600">{SCHOOL_INFO.phone3}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-gps-navy">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">Email Us</h3>
                     <p className="text-slate-600">{SCHOOL_INFO.email}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-full text-gps-navy">
                     <Clock size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">Office Hours</h3>
                     <p className="text-slate-600">Mon - Sat: 8:00 AM - 02:00 PM</p>
                     <p className="text-slate-600">Sunday: Closed</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-slate-200 h-64 rounded-xl overflow-hidden shadow-inner relative group">
               <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-500 pointer-events-none">
                 <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 text-gps-navy" />
                    <p className="font-bold">View on Google Maps</p>
                    <p className="text-sm">Kotwa Chauraha, Deoria</p>
                 </div>
               </div>
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28543.92443156675!2d83.836928!3d26.5846784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c3006a985459%3A0xa86cda01605a5072!2sGyaana%20International%20play%20school%20%26%20GPS%20ACADEMY!5e0!3m2!1sen!2sin!4v1770472563959!5m2!1sen!2sin"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10"
                 title="School Location"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gps-gold">
            <h2 className="text-2xl font-bold text-gps-navy mb-2">Send us a Message</h2>
            <p className="text-slate-500 mb-8">Have a question? Fill out the form below and we'll get back to you shortly.</p>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for contacting GPS Academy. We have received your inquiry and will get back to you soon.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-green-700 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="student_name" className="block text-sm font-medium text-slate-700 mb-2">Student Name</label>
                    <input type="text" id="student_name" name="student_name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="parent_name" className="block text-sm font-medium text-slate-700 mb-2">Parent Name</label>
                    <input type="text" id="parent_name" name="parent_name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all" placeholder="+91 99999 99999" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <div>
                    <label htmlFor="class_interested" className="block text-sm font-medium text-slate-700 mb-2">Class Interested In</label>
                    <select id="class_interested" name="class_interested" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all bg-white">
                      <option value="">Select Class</option>
                      <option value="PG">PG</option>
                      <option value="Nursery">Nursery</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                    </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gps-gold focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gps-navy text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;