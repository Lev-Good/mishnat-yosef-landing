import React from 'react';
import { ShoppingCart, ExternalLink, ShieldCheck } from 'lucide-react';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/jccmoihhcmpgneadjmgkdccenecmpjgd?utm_source=item-share-cb';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-slate-900 font-bold text-xl tracking-tight whitespace-nowrap shrink-0 hover:text-emerald-700 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <span>מוסיף למשנת</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#features"
            className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0"
          >
            יתרונות
          </a>
          <a
            href="#simulator"
            className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0"
          >
            הדמיה אינטראקטיבית
          </a>
          <a
            href="#calculator"
            className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0"
          >
            מחשבון חיסכון
          </a>
          <a
            href="#how-it-works"
            className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0"
          >
            איך זה עובד
          </a>
          <a
            href="#faq"
            className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0"
          >
            שאלות ותשובות
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
          >
            <span>התקנה בחינם מכרום</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
