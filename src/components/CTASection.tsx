import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Share2, Sparkles } from 'lucide-react';
import { CHROME_STORE_URL } from './Navbar';

export const CTASection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(CHROME_STORE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const shareText = encodeURIComponent(
    'מצאתי תוסף מעולה לכרום שנקרא "מוסיף למשנת" – מזהה מוצרים קבועים ומכניס אותם לסל של משנת יוסף בלחיצה אחת: ' +
      CHROME_STORE_URL
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-800/40 border border-emerald-600/30 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>זמין עכשיו להורדה מיידית</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-balance">
          מוכנים לחסוך זמן וכסף בהזמנה השבועית הבאה?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          התקינו את "מוסיף למשנת" ישירות מחנות התוספים הרשמית של גוגל, ותיהנו מחוויית הזמנה נוחה,
          מהירה ומדויקת כבר מהמכירה הקרובה.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.73c-.947-3.79-3.963-6.545-7.73-6.545H12zm-7.625 6.07A11.956 11.956 0 0 0 0 12c0 5.482 3.682 10.104 8.672 11.55l3.954-6.848a5.455 5.455 0 0 1-5.696-2.636l-4.555-7.996zm8.125 7.385a5.45 5.45 0 0 1-1.045-.101l-3.953 6.848C9.096 23.36 10.495 24 12 24c6.627 0 12-5.373 12-12 0-.616-.046-1.222-.135-1.815H13.68c.552.887.875 1.93.875 3.055 0 .265-.018.526-.055.78z" />
            </svg>
            <span>התקנה בחינם מ-Chrome Web Store</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>הקישור הועתק!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-300" />
                <span>העתקת קישור לשיתוף</span>
              </>
            )}
          </button>

          <a
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white bg-green-600/80 hover:bg-green-600 border border-green-500/40 rounded-xl transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>שיתוף בוואטסאפ</span>
          </a>
        </div>

        <p className="text-xs text-slate-400">
          ללא תשלום · ללא התחייבות · עובד על כל מחשב עם דפדפן Google Chrome או Microsoft Edge
        </p>
      </div>
    </section>
  );
};
