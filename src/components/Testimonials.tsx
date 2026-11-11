import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'שרה קופרמן',
      location: 'בני ברק',
      role: 'אמא ל-6 ילדים',
      text: 'בכל יום שלישי הייתי יושבת עם רשימה מודפסת ומחפשת אחד אחד את המוצרים שוב ושוב. עכשיו עם "מוסיף למשנת" אני לוחצת על כפתור אחד, הכל בפנים, ונותר לי רק להוסיף 2-3 דברים משתנים. חסך לי לפחות 25 דקות בכל שבוע.',
    },
    {
      name: 'מנדי ליברמן',
      location: 'מודיעין עילית',
      role: 'לקוח קבוע 4 שנים',
      text: 'מד התקציב השבועי הוא מציל חיים. במשנת יוסף קל מאוד להיסחף ולהוסיף עוד ועוד מבצעים בלי לשים לב. כשיש סרגל ברור שמתריע כשאני מתקרב ל-₪450, אני שומר על התקציב המשפחתי במדויק.',
    },
    {
      name: 'אליהו רוזנברג',
      location: 'ירושלים (רוממה)',
      role: 'רכז הזמנות משפחתי',
      text: 'האפשרות להדפיס רשימת איסוף שמסודרת מראש לפי העמדות במתחם החלוקה פשוט מבריקה. במקום לרוץ בין התחנות הלוך ושוב עם הארגזים, סיימתי את האיסוף ב-5 דקות. תודה ענקית למפתח!',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
            תגובות מהשטח
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            מה אומרים בקהילת משתמשי משנת יוסף?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            משפחות שכבר עברו להזמין בקלות ובמהירות מדי שבוע.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-emerald-600/40 mb-3" />
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-500 mt-0.5">{item.role}</div>
                </div>
                <span className="text-slate-500 font-medium bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
