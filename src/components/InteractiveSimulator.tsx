import React, { useState, useMemo } from 'react';
import {
  Zap,
  ShoppingCart,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
  TrendingDown,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import {
  calculateBudgetStatus,
  formatNIS,
  type GroceryItem,
} from '../utils/calculator';

const SAMPLE_CATALOG: GroceryItem[] = [
  {
    id: 'milk',
    name: 'חלב 3% בשקית תנובה',
    category: 'חלב וביצים',
    price: 5.9,
    supermarketPrice: 7.2,
    timesOrdered: 8,
    unit: 'ליטר',
    isRegular: true,
  },
  {
    id: 'eggs',
    name: 'תבנית ביצים L (12 יח׳)',
    category: 'חלב וביצים',
    price: 13.8,
    supermarketPrice: 17.5,
    timesOrdered: 7,
    unit: 'תבנית',
    isRegular: true,
  },
  {
    id: 'bread',
    name: 'לחם אחיד פרוס אנג׳ל',
    category: 'מאפייה',
    price: 6.5,
    supermarketPrice: 8.4,
    timesOrdered: 6,
    unit: 'כיכר',
    isRegular: true,
  },
  {
    id: 'tomatoes',
    name: 'עגבניות חממה מובחרות',
    category: 'ירקות ופירות',
    price: 3.9,
    supermarketPrice: 6.9,
    timesOrdered: 5,
    unit: 'ק"ג',
    isRegular: true,
  },
  {
    id: 'cucumbers',
    name: 'מלפפון שדה טרי',
    category: 'ירקות ופירות',
    price: 3.2,
    supermarketPrice: 5.5,
    timesOrdered: 5,
    unit: 'ק"ג',
    isRegular: true,
  },
  {
    id: 'cheese',
    name: 'גבינה צהובה נועם פרוסה 400 גרם',
    category: 'חלב וביצים',
    price: 15.9,
    supermarketPrice: 22.9,
    timesOrdered: 4,
    unit: 'מארז',
    isRegular: true,
  },
  {
    id: 'oil',
    name: 'שמן קנולה מזוכך 1 ליטר',
    category: 'מזווה',
    price: 7.9,
    supermarketPrice: 11.9,
    timesOrdered: 2,
    unit: 'בקבוק',
    isRegular: false,
  },
  {
    id: 'shampoo',
    name: 'שמפו הוואי לשיער רגיל',
    category: 'פארם',
    price: 9.9,
    supermarketPrice: 15.9,
    timesOrdered: 1,
    unit: 'יח׳',
    isRegular: false,
  },
];

export const InteractiveSimulator: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [budgetLimit, setBudgetLimit] = useState<number>(100);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lastActionMessage, setLastActionMessage] = useState<string | null>(null);

  // Cart totals
  const { mishnatTotal, supermarketTotal, totalItemsCount } = useMemo(() => {
    let mTotal = 0;
    let sTotal = 0;
    let count = 0;

    Object.entries(cart).forEach(([itemId, qty]) => {
      const item = SAMPLE_CATALOG.find((i) => i.id === itemId);
      if (item && qty > 0) {
        mTotal += item.price * qty;
        sTotal += item.supermarketPrice * qty;
        count += qty;
      }
    });

    return {
      mishnatTotal: Number(mTotal.toFixed(2)),
      supermarketTotal: Number(sTotal.toFixed(2)),
      totalItemsCount: count,
    };
  }, [cart]);

  const moneySaved = Math.max(0, Number((supermarketTotal - mishnatTotal).toFixed(2)));
  const savingsPercent =
    supermarketTotal > 0 ? Math.round((moneySaved / supermarketTotal) * 100) : 0;

  const budgetStatus = calculateBudgetStatus(mishnatTotal, budgetLimit);

  // 1-Click add all regular products
  const handleAddRegulars = () => {
    const newCart = { ...cart };
    let addedCount = 0;
    SAMPLE_CATALOG.forEach((item) => {
      if (item.isRegular) {
        newCart[item.id] = (newCart[item.id] || 0) + 1;
        addedCount++;
      }
    });
    setCart(newCart);
    setLastActionMessage(`התוסף הוסיף ${addedCount} מוצרים קבועים לסל ברגע אחד!`);
    setTimeout(() => setLastActionMessage(null), 4000);
  };

  const handleUpdateQty = (itemId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const handleReset = () => {
    setCart({});
    setLastActionMessage(null);
  };

  const regularCount = SAMPLE_CATALOG.filter((i) => i.isRegular).length;

  const filteredCatalog = useMemo(() => {
    if (activeCategory === 'regulars') {
      return SAMPLE_CATALOG.filter((i) => i.isRegular);
    }
    if (activeCategory !== 'all') {
      return SAMPLE_CATALOG.filter((i) => i.category === activeCategory);
    }
    return SAMPLE_CATALOG;
  }, [activeCategory]);

  return (
    <section id="simulator" className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
            התנסות מעשית
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            נסו עכשיו: כך זה עובד באתר משנת יוסף
          </h2>
          <p className="text-slate-600 text-sm sm:text-base text-balance">
            הסימולטור הבא ממחיש את המכירה השבועית: לחצו על כפתור התוסף כדי לראות איך כל המוצרים
            הקבועים נטענים לסל ברגע, כולל מעקב תקציב והשוואת מחירים.
          </p>
        </div>

        {/* Extension Banner Controller Mockup */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 sm:p-6 text-white shadow-lg mb-8 border border-slate-700">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            {/* Widget Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-white">פאנל 'מוסיף למשנת'</h3>
                  <span className="text-xs bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    פעיל בדף המכירה
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  זיהינו <span className="font-bold text-emerald-400">{regularCount} מוצרים קבועים</span> מההזמנות האחרונות שלכם.
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAddRegulars}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <Zap className="w-4 h-4 fill-current text-slate-950" />
                <span>הוסף {regularCount} קבועים לסל בלחיצה</span>
              </button>

              <button
                onClick={handleReset}
                title="איפוס סל הקניות"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors whitespace-nowrap"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">איפוס</span>
              </button>
            </div>
          </div>

          {/* Action toast confirmation */}
          {lastActionMessage && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lastActionMessage}</span>
            </div>
          )}
        </div>

        {/* Two-Column Workspace: Products Catalog + Realtime Smart Cart Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Catalog Column (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                כל המוצרים ({SAMPLE_CATALOG.length})
              </button>
              <button
                onClick={() => setActiveCategory('regulars')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  activeCategory === 'regulars'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>מוצרים קבועים ({regularCount})</span>
              </button>
              <button
                onClick={() => setActiveCategory('חלב וביצים')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'חלב וביצים'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                חלב וביצים
              </button>
              <button
                onClick={() => setActiveCategory('ירקות ופירות')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'ירקות ופירות'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                ירקות ופירות
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredCatalog.map((item) => {
                const qty = cart[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      qty > 0
                        ? 'border-emerald-500 bg-emerald-50/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-slate-900 leading-tight">
                            {item.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                          <span>{item.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>לפי {item.unit}</span>
                          {item.isRegular && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-emerald-700 font-medium">
                                הוזמן {item.timesOrdered} פעמים
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {item.isRegular && (
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                          קבוע ⭐
                        </span>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline justify-between mt-3 pt-2 border-t border-slate-100">
                      <div>
                        <div className="text-base font-extrabold text-slate-900">
                          {formatNIS(item.price)}
                        </div>
                        <div className="text-[11px] text-slate-400 line-through">
                          בסופר: {formatNIS(item.supermarketPrice)}
                        </div>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2">
                        {qty > 0 ? (
                          <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg p-1">
                            <button
                              onClick={() => handleUpdateQty(item.id, -1)}
                              aria-label={`הפחת ${item.name}`}
                              className="w-7 h-7 flex items-center justify-center rounded-md bg-white hover:bg-slate-200 text-slate-800 shadow-xs"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-slate-900 tabular-nums">
                              {qty}
                            </span>
                            <button
                              onClick={() => handleUpdateQty(item.id, 1)}
                              aria-label={`הוסף עוד ${item.name}`}
                              className="w-7 h-7 flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleUpdateQty(item.id, 1)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>הוסף לסל</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Realtime Extension Companion Sidebar (4 cols) */}
          <div className="lg:col-span-4 sticky top-20 space-y-4">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-bold text-sm text-slate-900">סיכום סל משנת יוסף</h3>
                </div>
                <span className="text-xs font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 tabular-nums">
                  {totalItemsCount} פריטים
                </span>
              </div>

              {/* Budget Slider */}
              <div className="py-4 border-b border-slate-200">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700">תקרת תקציב שבועי:</span>
                  <span className="font-extrabold text-slate-900 tabular-nums">
                    {formatNIS(budgetLimit)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="250"
                  step="10"
                  value={budgetLimit}
                  onChange={(e) => setBudgetLimit(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                {/* Progress bar */}
                <div className="mt-2.5">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-slate-500">
                      נוצל: {formatNIS(mishnatTotal)} ({budgetStatus.percentage}%)
                    </span>
                    <span
                      className={`font-semibold ${
                        budgetStatus.status === 'exceeded'
                          ? 'text-red-600'
                          : budgetStatus.status === 'warning'
                          ? 'text-amber-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {budgetStatus.status === 'exceeded'
                        ? 'חריגה מהתקציב!'
                        : `נותרו ${formatNIS(budgetStatus.remaining)}`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        budgetStatus.status === 'exceeded'
                          ? 'bg-red-500'
                          : budgetStatus.status === 'warning'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                      style={{ width: `${Math.min(100, budgetStatus.percentage)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Price comparison breakdown */}
              <div className="py-4 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>סה"כ מחיר משנת יוסף:</span>
                  <span className="font-bold text-slate-900 tabular-nums" dir="ltr">
                    {formatNIS(mishnatTotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>עלות משוערת ברשת שיווק:</span>
                  <span className="line-through tabular-nums" dir="ltr">
                    {formatNIS(supermarketTotal)}
                  </span>
                </div>

                {moneySaved > 0 && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-100/70 border border-emerald-300/60 text-emerald-900 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4 text-emerald-700" />
                      <span className="font-bold">חיסכון בקנייה זו:</span>
                    </div>
                    <span className="font-black text-sm text-emerald-800 tabular-nums" dir="ltr">
                      {formatNIS(moneySaved)} ({savingsPercent}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Status Note */}
              <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  באתר משנת יוסף האמיתי, התוסף מציג את כל הנתונים הללו בשכבה שקופה ונקייה שאינה
                  מאטה את הדפדפן.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile quick-floating cart strip */}
        {totalItemsCount > 0 && (
          <div className="lg:hidden fixed bottom-4 inset-x-4 z-40 bg-slate-900 text-white p-3 rounded-xl shadow-xl border border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold">{totalItemsCount} פריטים בסל</span>
              <span className="text-slate-400">|</span>
              <span className="font-bold text-emerald-400" dir="ltr">{formatNIS(mishnatTotal)}</span>
            </div>
            {moneySaved > 0 && (
              <span className="text-xs bg-emerald-600/90 text-white font-semibold px-2 py-0.5 rounded-md" dir="ltr">
                חיסכון {formatNIS(moneySaved)}
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
