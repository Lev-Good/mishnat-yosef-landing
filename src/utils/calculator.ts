/**
 * Calculation logic and helper utilities for "מוסיף למשנת"
 */

export interface GroceryItem {
  id: string;
  name: string;
  category: string;
  price: number; // Mishnat Yosef price in ILS
  supermarketPrice: number; // Regular supermarket price in ILS
  timesOrdered: number; // Frequency in previous orders
  unit: string;
  isRegular?: boolean;
}

export interface BudgetStatus {
  percentage: number;
  remaining: number;
  isOverBudget: boolean;
  status: 'safe' | 'warning' | 'exceeded';
}

export interface AnnualImpact {
  weeklySavings: number;
  annualMoneySaved: number;
  annualHoursSaved: number;
  missedItemsAvoided: number;
}

/**
 * Calculate annual time and financial savings based on family size and ordering frequency
 */
export function calculateSavings(familyMembers: number, weeksOrdered: number): AnnualImpact {
  const members = Math.max(1, Math.min(20, familyMembers));
  const weeks = Math.max(1, Math.min(52, weeksOrdered));

  // Average saving per family member per week on basic staples in Mishnat Yosef
  const weeklySavings = Math.round(members * 48);
  const annualMoneySaved = weeklySavings * weeks;

  // Average time spent manually scouring hundreds of items vs 1-click extension (approx 25 minutes saved per week)
  const annualMinutes = weeks * 25;
  const annualHoursSaved = Math.round(annualMinutes / 60);

  // Forgetfulness rate: ~2 staple items forgotten per order without automatic reminders
  const missedItemsAvoided = weeks * 2;

  return {
    weeklySavings,
    annualMoneySaved,
    annualHoursSaved,
    missedItemsAvoided,
  };
}

/**
 * Filter items that meet the threshold to be deemed "regular items" (מוצרים קבועים)
 */
export function filterRegularItems(items: GroceryItem[], minThreshold = 3): GroceryItem[] {
  return items.filter((item) => item.timesOrdered >= minThreshold);
}

/**
 * Compute budget progress, alert state, and remaining balance
 */
export function calculateBudgetStatus(currentTotal: number, budgetLimit: number): BudgetStatus {
  if (budgetLimit <= 0) {
    return {
      percentage: 0,
      remaining: 0,
      isOverBudget: false,
      status: 'safe',
    };
  }

  const rawPercent = Math.round((currentTotal / budgetLimit) * 100);
  const remaining = Math.max(0, budgetLimit - currentTotal);
  const isOverBudget = currentTotal > budgetLimit;

  let status: 'safe' | 'warning' | 'exceeded' = 'safe';
  if (isOverBudget) {
    status = 'exceeded';
  } else if (rawPercent >= 80) {
    status = 'warning';
  }

  return {
    percentage: Math.min(100, rawPercent),
    remaining,
    isOverBudget,
    status,
  };
}

/**
 * Format currency in Israeli Shekels
 */
export function formatNIS(amount: number): string {
  return `₪${amount.toLocaleString('he-IL')}`;
}
