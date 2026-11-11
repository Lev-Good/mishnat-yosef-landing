import React from 'react';
import { Download, ShoppingCart, CheckCircle2, ExternalLink } from 'lucide-react';
import { CHROME_STORE_URL } from './Navbar';

export const InstallationSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'התקנה בלחיצה אחת',
      description:
        'נכנסים לחנות התוספים הרשמית של גוגל כרום ולוחצים על הכפתור הכחול "הוסף ל-Chrome". התהליך נמשך פחות מ-10 שניות.',
      icon: Download,
    },
    {
      step: '02',
      title: 'כניסה לאתר משנת יוסף',
      description:
        'פותחים את אתר משנת יוסף כרגיל ונכנסים לאזור המכירה השבועית. תוסף "מוסיף למשנת" יזהה את הדף באופן אוטומטי.',
      icon: ShoppingCart,
    },
    {
      step: '03',
      title: 'קנייה בלחיצה ובשליטה מלאה',
      description:
        'לוחצים על "הוסף קבועים לסל", מוודאים שהתקציב בטווח הירוק, ומשלימים את ההזמנה במהירות שיא. פשוט, נקי ומהיר!',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            איך מתחילים?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            3 צעדים פשוטים – וזה כבר אצלכם בדפדפן
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            ללא רישום, ללא הזנת כרטיס אשראי וללא התקנות מורכבות במחשב.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-200 tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <span>מעבר להתקנה בחנות התוספים הרשמית</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
