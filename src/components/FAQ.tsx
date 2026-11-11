import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'האם התוסף עולה כסף או שיש אותיות קטנות?',
    answer:
      'התוסף חינמי לחלוטין (100% חינם), ללא דמי מנוי, ללא פרסומות קופצות וללא עלות מוסתרת. הוא פותח כפרויקט שירות קהילתי לטובת רוכשי משנת יוסף.',
  },
  {
    question: 'האם התוסף פותח על ידי הנהלת משנת יוסף הרשמית?',
    answer:
      'לא. מדובר ביוזמה עצמאית של מפתח מהקהילה לרווחת המשתמשים. התוסף אינו מנוהל או מופעל באופן רשמי ע"י הנהלת משנת יוסף, אלא פועל מעל הממשק הקיים כדי לייעל את חווית ההזמנה.',
  },
  {
    question: 'כיצד התוסף שומר על אבטחה ופרטיות?',
    answer:
      'התוסף פועל מקומית בלבד בתוך הדפדפן שלכם (Client-Side). הוא אינו שומר סיסמאות, אינו נוגע בפרטי כרטיסי אשראי או תשלום, ואינו שולח נתונים אישיים לשום שרת צד שלישי.',
  },
  {
    question: 'מה קורה אם מוצר קבוע חסר במלאי המכירה השבוע?',
    answer:
      'התוסף סורק רק את הפריטים שזמינים במכירה הפעילה של השבוע. אם מוצר קבוע אינו זמין השבוע, התוסף יתריע על כך ברשימה מסודרת ולא יבצע שגיאה בסל.',
  },
  {
    question: 'באילו דפדפנים ניתן להתקין את התוסף?',
    answer:
      'בכל דפדפן מחשב מבוסס Chromium, כולל Google Chrome, Microsoft Edge, Brave ו-Opera. התוסף מיועד לשימוש במחשבים שולחניים ולפטופים (רוב דפדפני המובייל אינם תומכים בתוספי כרום).',
  },
  {
    question: 'איך התוסף יודע מהם המוצרים הקבועים שלי?',
    answer:
      'התוסף סורק את היסטוריית ההזמנות שלכם בחשבון ומזהה מוצרים שהזמנתם בתדירות גבוהה (למשל 3 פעמים ומעלה). בנוסף, תוכלו לסמן או להסיר מוצרים מרשימת הקבועים בקלות.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            מידע שימושי
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            שאלות נפוצות ותשובות
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            כל מה שחשוב לדעת לפני שמתקינים את התוסף לדפדפן.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
