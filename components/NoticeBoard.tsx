import React, { useEffect, useState } from 'react';
import { Bell, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { NOTICES, NOTICE_SHEET_URL } from '../constants';
import { Notice } from '../types';

const NoticeBoard: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>(NOTICES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Only fetch if a URL is provided in constants.ts
    if (NOTICE_SHEET_URL.trim() !== "") {
      setLoading(true);
      fetch(NOTICE_SHEET_URL)
        .then(response => {
          if (!response.ok) throw new Error("Failed to fetch");
          return response.text();
        })
        .then(csvText => {
          // Simple CSV parsing logic
          const rows = csvText.split('\n').slice(1); // Remove header row
          
          const parsedNotices: Notice[] = rows.map((row, index) => {
            // Split by comma, handling potential quotes roughly or just standard split
            // Note: For simplicity, we assume the user doesn't use commas in titles or wraps them in quotes
            // Regex to match CSV fields: 
            const parts = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            
            if (parts.length >= 2) {
              const date = parts[0]?.trim().replace(/^"|"$/g, '');
              const title = parts[1]?.trim().replace(/^"|"$/g, '').replace(/""/g, '"');
              const isNewStr = parts[2]?.trim().toLowerCase();
              const isNew = isNewStr === 'true' || isNewStr === 'yes';

              // Only return if we have at least a date and title
              if (date && title) {
                return {
                  id: index + 1000, // Offset IDs to avoid conflicts
                  date,
                  title,
                  isNew
                };
              }
            }
            return null;
          }).filter((n): n is Notice => n !== null);

          if (parsedNotices.length > 0) {
            setNotices(parsedNotices);
          }
        })
        .catch(err => {
          console.error("Error loading notices:", err);
          setError(true);
          // We keep the default NOTICES as fallback
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden h-full flex flex-col">
      <div className="bg-gps-navy p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Bell className="text-gps-gold" size={24} />
            <h3 className="text-xl font-bold text-white">Notice Board</h3>
        </div>
        {loading && <Loader2 className="text-gps-gold animate-spin" size={18} />}
      </div>
      
      <div className="p-4 bg-slate-50 flex-grow overflow-y-auto custom-scrollbar min-h-[300px]">
        {error && (
            <div className="mb-4 text-xs text-red-500 flex items-center gap-1 bg-red-50 p-2 rounded">
                <AlertCircle size={12} /> Using offline backup data
            </div>
        )}
        
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gps-gold hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex justify-between items-start mb-2">
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  <Calendar size={12} /> {notice.date}
                </span>
                {notice.isNew && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-slate-800 font-medium group-hover:text-gps-goldDark transition-colors">
                {notice.title}
              </p>
            </div>
          ))}
          
          {notices.length === 0 && (
             <div className="text-center py-10 text-slate-400">
                 No active notices at the moment.
             </div>
          )}

          <div className="text-center pt-2">
            <button className="text-sm text-gps-navy font-semibold hover:underline">View All Notices</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;