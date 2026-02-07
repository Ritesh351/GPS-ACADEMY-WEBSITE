import React from 'react';
import { SCHOOL_INFO, DOCUMENTS } from '../constants';
import { CheckCircle2, Download, FileText } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="pt-8 pb-16 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gps-navy text-white py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-lg text-slate-300">Join the GPS Academy Family</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-2/3 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-gps-navy mb-6">Admission Procedure</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gps-gold flex items-center justify-center font-bold text-gps-navy shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Registration</h3>
                    <p className="text-slate-600">Collect the admission form from the school office between 9:00 AM to 2:00 PM.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gps-gold flex items-center justify-center font-bold text-gps-navy shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Entrance Test / Interaction</h3>
                    <p className="text-slate-600">A basic assessment of the student's aptitude (for higher classes) or an interaction with parents (for kindergarten).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gps-gold flex items-center justify-center font-bold text-gps-navy shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Documentation</h3>
                    <p className="text-slate-600">Submit required documents: Birth Certificate, Transfer Certificate (if applicable), Photographs, and Aadhar Card.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gps-gold flex items-center justify-center font-bold text-gps-navy shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Fee Payment</h3>
                    <p className="text-slate-600">Complete the admission formalities by depositing the fees.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-gps-navy mb-6">Eligibility Criteria</h2>
              <ul className="space-y-3">
                {['PG: 2.5+ years', 'Nursery: 3+ years', 'UKG: 5+ years', 'Class 1: 6+ years'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-green-500" size={20} />
                    {item} as of March 31st.
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 space-y-6">
            <div className="bg-gps-navy text-white p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6 text-slate-300">Our admissions team is here to assist you.</p>
              <div className="space-y-2 mb-6">
                <p className="font-bold text-gps-gold text-lg">{SCHOOL_INFO.phone1}</p>
                <p className="font-bold text-gps-gold text-lg">{SCHOOL_INFO.phone2}</p>
                <p className="font-bold text-gps-gold text-lg">{SCHOOL_INFO.phone3}</p>
              </div>
              <a href="tel:+918542029379" className="block w-full bg-white text-gps-navy font-bold py-3 rounded hover:bg-gps-gold transition-colors">
                Call Now
              </a>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
               <h3 className="font-bold text-gps-navy mb-4 flex items-center gap-2"><Download size={20}/> Resources</h3>
               <ul className="space-y-3">
                 {DOCUMENTS.brochure ? (
                   <li>
                     <a href={DOCUMENTS.brochure} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline transition-colors group">
                       <FileText size={18} className="group-hover:scale-110 transition-transform" />
                       Download Brochure
                     </a>
                   </li>
                 ) : null}
                 
                 {DOCUMENTS.feeStructure ? (
                   <li>
                     <a href={DOCUMENTS.feeStructure} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline transition-colors group">
                       <FileText size={18} className="group-hover:scale-110 transition-transform" />
                       Fee Structure 2026-27
                     </a>
                   </li>
                 ) : null}

                 {!DOCUMENTS.brochure && !DOCUMENTS.feeStructure && (
                   <li className="text-slate-500 italic text-sm">
                     Downloadable resources will be available soon. Please contact the school office for details.
                   </li>
                 )}
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;