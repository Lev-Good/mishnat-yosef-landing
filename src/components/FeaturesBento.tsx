import React from 'react';
import {
  Zap,
  Target,
  TrendingDown,
  Printer,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const FeaturesBento: React.FC = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            יכולות מרכזיות
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            כל מה שצריך כדי להזמין חכם, מהר ובשליטה
          </h2>
          <p className="text-slate-600 text-sm sm:text-base text-balance">
            בנוי במיוחד עבור האתגרים הייחודיים של אתר משנת יוסף – מכירות שבועיות עמוסות עם אלפי פריטים.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1: 1-Click Regulars (Span 2 cols on desktop) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                01. הוספת מוצרים קבועים בלחיצת כפתור אחת
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                נמאס לכם לחפש כל שבוע מחדש את החלב, הלחם, הביצים והגבינות בקטלוג ענק?
                התוסף סורק את המכירה הפתוחה, מוצא את כל הפריטים שהזמנתם בקביעות ומכניס אותם לסל
                בשבריר שנייה.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-emerald-600">85%</span>
                <span className="text-xs text-slate-600">
                  קיצור זמן ההזמנה הממוצע בקרב משפחות משתמשות
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>מוכן לשימוש מיידי</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Price Comparison */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                <TrendingDown className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                02. השוואת מחירים וחיסכון בזמן אמת
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                רואים בדיוק כמה שקלים חסכתם בכל שורה בסל הקניות בהשוואה לרשתות השיווק הגדולות.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 aspect-[4/3] bg-slate-100">
              <img
                src="./assets/images/savings_calculator_preview_1794349767584.jpg"
                alt="מחשבון חיסכון והשוואת מחירים מול רשתות השיווק"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Card 3: Budget Management */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                03. ניהול תקציב והתראות חריגה
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                קובעים יעד שבועי בשקלים (למשל ₪450). התוסף מציג סרגל התקדמות חי שמתריע לפני שתחרגו
                ממה שתכננתם, כדי שסוף החודש לא יפתיע אתכם.
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 text-xs text-amber-900">
              <span className="font-bold block mb-1">שליטה מלאה בהוצאות הבית</span>
              ללא הפתעות בחיוב האשראי, עם חלוקה ברורה לפי סכומי קטגוריות.
            </div>
          </div>

          {/* Bento Card 4: Printable Order (Span 2 cols on desktop) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                04. הדפסה חכמה לפי עמדות חלוקה
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                יום האיסוף הגיע? התוסף מייצר עבורכם דף איסוף מעוצב, ברור וקריא, שמסודר בדיוק לפי
                סדר התחנות במוקד החלוקה. תסמנו ב-V וחזרו הביתה תוך דקות ספורות.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>עיצוב מותאם להדפסה</span>
                <span aria-hidden="true">·</span>
                <span>חלוקה לתחנת קירור/יבשים/ירקות</span>
              </div>
            </div>

            <div className="w-full sm:w-60 h-44 rounded-xl border border-slate-200 overflow-hidden shrink-0">
              <img
                src="./assets/images/family_grocery_pickup_1794349767334.jpg"
                alt="משפחה פורקת ארגזי משנת יוסף בבית"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Card 5: Local & Private */}
          <div className="lg:col-span-3 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-emerald-800 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    05. אבטחה ופרטיות מקסימלית – 100% מקומי
                  </h3>
                  <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                    התוסף רץ אך ורק בדפדפן שלכם. הוא אינו שומר סיסמאות, אינו נוגע בפרטי תשלום, ואינו
                    שולח שום מידע אישי לשרת חיצוני. הבטיחות שלכם היא מעל הכל.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-3.5 py-2 rounded-xl border border-emerald-700/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>מאושר ע"י Google Chrome Web Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
