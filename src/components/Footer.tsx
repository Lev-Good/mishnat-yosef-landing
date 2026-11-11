import React from 'react';
import { ShoppingCart, ExternalLink, Heart } from 'lucide-react';
import { CHROME_STORE_URL } from './Navbar';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-lg mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <ShoppingCart className="w-3.5 h-3.5" />
              </div>
              <span>מוסיף למשנת</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              תוסף כרום חכם לניהול הזמנות מהירות, זיהוי מוצרים קבועים ומעקב תקציב שבועי באתר משנת יוסף.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">
              יתרונות
            </a>
            <a href="#simulator" className="hover:text-white transition-colors">
              הדמיה
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              מחשבון חיסכון
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              איך זה עובד
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              שאלות נפוצות
            </a>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
            >
              <span>חנות התוספים</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl leading-relaxed">
            הבהרה: תוסף 'מוסיף למשנת' הינו כלי עזר עצמאי שנבנה לטובת ציבור המזמינים. התוסף אינו
            משויך, אינו מופעל ואינו נתמך באופן רשמי על ידי הנהלת 'משנת יוסף'.
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <span>נבנה באהבה עבור הקהילה</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
