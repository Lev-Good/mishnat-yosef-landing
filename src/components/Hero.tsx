import React from 'react';
import { ExternalLink, Zap, ShieldCheck, Clock, ArrowDown, Sparkles } from 'lucide-react';
import { CHROME_STORE_URL } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          {/* Subtle kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-200/60 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>תוסף Chrome בלעדי לרוכשי משנת יוסף</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6 text-balance">
            הזמנה שבועית ממשנת יוסף ב-2 דקות בלבד במקום חצי שעה
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto text-balance">
            תוסף הדפדפן החכם שמזהה אוטומטית את המוצרים הקבועים שאתם תמיד קונים, מכניס אותם לסל
            בלחיצת כפתור אחת, שומר על מסגרת התקציב השבועי ומחשב בדיוק כמה חסכתם.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.73c-.947-3.79-3.963-6.545-7.73-6.545H12zm-7.625 6.07A11.956 11.956 0 0 0 0 12c0 5.482 3.682 10.104 8.672 11.55l3.954-6.848a5.455 5.455 0 0 1-5.696-2.636l-4.555-7.996zm8.125 7.385a5.45 5.45 0 0 1-1.045-.101l-3.953 6.848C9.096 23.36 10.495 24 12 24c6.627 0 12-5.373 12-12 0-.616-.046-1.222-.135-1.815H13.68c.552.887.875 1.93.875 3.055 0 .265-.018.526-.055.78z" />
              </svg>
              <span>הוסף ל-Chrome בחינם</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm"
            >
              <span>התנסו בהדמיה חיה</span>
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Trust proof indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% חינם לחלוטין
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              התקנה ב-10 שניות
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-500" />
              חוסך מעל 20 שעות בשנה
            </span>
          </div>
        </div>

        {/* Visual Mockup Container */}
        <div className="relative max-w-5xl mx-auto rounded-2xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-xl">
          <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/9] group">
            <img
              src="./assets/images/hero_extension_mockup_1794349767772.jpg"
              alt="תצוגת תוסף מוסיף למשנת על גבי ממשק משנת יוסף"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Interactive Feature Overlays */}
            <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 bg-slate-900/85 backdrop-blur text-white px-3.5 py-2 rounded-lg text-xs font-medium border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>זיהוי 12 מוצרים קבועים של המשפחה</span>
            </div>

            <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 bg-emerald-600/95 backdrop-blur text-white px-4 py-2.5 rounded-lg text-xs font-semibold shadow-lg">
              <Zap className="w-4 h-4" />
              <span>הוספה בלחיצה אחת לסל ב-0.3 שניות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
