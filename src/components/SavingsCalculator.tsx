import React, { useState } from 'react';
import { calculateSavings, formatNIS } from '../utils/calculator';
import { Coins, Clock, ShoppingBag, ExternalLink } from 'lucide-react';
import { CHROME_STORE_URL } from './Navbar';

export const SavingsCalculator: React.FC = () => {
  const [familyMembers, setFamilyMembers] = useState<number>(6);
  const [weeksOrdered, setWeeksOrdered] = useState<number>(48);

  const impact = calculateSavings(familyMembers, weeksOrdered);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            מחשבון אישי
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            כמה זמן וכסף יחסוך לכם 'מוסיף למשנת'?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base text-balance">
            בחרו את מספר הנפשות בבית וכמות ההזמנות השנתית, ותראו את ההשפעה המצטברת של הזמנה חכמה.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-slate-200">
            {/* Slider 1: Family members */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="family-members-slider" className="text-sm font-bold text-slate-800">
                  נפשות במשפחה:
                </label>
                <span className="text-lg font-extrabold text-emerald-700 tabular-nums">
                  {familyMembers} נפשות
                </span>
              </div>
              <input
                id="family-members-slider"
                type="range"
                min="1"
                max="14"
                step="1"
                value={familyMembers}
                onChange={(e) => setFamilyMembers(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 (יחיד / זוג)</span>
                <span>7 (ממוצע קהילתי)</span>
                <span>14+ (משפחה מורחבת)</span>
              </div>
            </div>

            {/* Slider 2: Weeks per year */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="weeks-slider" className="text-sm font-bold text-slate-800">
                  שבועות הזמנה בשנה:
                </label>
                <span className="text-lg font-extrabold text-emerald-700 tabular-nums">
                  {weeksOrdered} שבועות
                </span>
              </div>
              <input
                id="weeks-slider"
                type="range"
                min="10"
                max="52"
                step="2"
                value={weeksOrdered}
                onChange={(e) => setWeeksOrdered(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>10 (מזדמן)</span>
                <span>35 (שגרתי)</span>
                <span>52 (קבוע בכל שבוע)</span>
              </div>
            </div>
          </div>

          {/* 3 Quantitative KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {/* Metric 1 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Coins className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums mb-1">
                {formatNIS(impact.annualMoneySaved)}
              </div>
              <div className="text-xs font-semibold text-slate-600">חיסכון שנתי ממוצע</div>
              <div className="text-[11px] text-slate-400 mt-1">
                כ- {formatNIS(impact.weeklySavings)} ש"ח נחסכים בכל הזמנה
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums mb-1">
                {impact.annualHoursSaved} שעות
              </div>
              <div className="text-xs font-semibold text-slate-600">זמן אישי שנחסך</div>
              <div className="text-[11px] text-slate-400 mt-1">
                במקום גלילה ארוכה כל יום שלישי בלילה
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 text-center shadow-xs">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums mb-1">
                {impact.missedItemsAvoided}
              </div>
              <div className="text-xs font-semibold text-slate-600">מוצרים שלא יישכחו</div>
              <div className="text-[11px] text-slate-400 mt-1">
                נמנעות קניות דחופות ויקרות במכולת השכונתית
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="text-center pt-2">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>התחילו לחסוך כבר מההזמנה הקרובה</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
