import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSavings,
  filterRegularItems,
  calculateBudgetStatus,
  formatNIS,
  type GroceryItem,
} from './calculator';

test('calculateSavings calculates realistic annual metrics correctly', () => {
  const result = calculateSavings(5, 48); // Family of 5, 48 weeks a year
  assert.equal(result.weeklySavings, 240); // 5 * 48
  assert.equal(result.annualMoneySaved, 11520); // 240 * 48
  assert.equal(result.annualHoursSaved, 20); // (48 * 25) / 60 = 20
  assert.equal(result.missedItemsAvoided, 96); // 48 * 2
});

test('calculateSavings handles minimum boundary clamping', () => {
  const result = calculateSavings(0, 0);
  assert.equal(result.weeklySavings, 48); // clamped to 1
  assert.equal(result.annualMoneySaved, 48);
  assert.equal(result.annualHoursSaved, 0); // 25 / 60 rounded
});

test('filterRegularItems correctly extracts products ordered 3 times or more', () => {
  const sampleItems: GroceryItem[] = [
    { id: '1', name: 'חלב 3%', category: 'חלב וביצים', price: 6.2, supermarketPrice: 7.2, timesOrdered: 8, unit: 'ליטר' },
    { id: '2', name: 'ביצים L תבנית', category: 'חלב וביצים', price: 13.9, supermarketPrice: 17.5, timesOrdered: 5, unit: 'תבנית' },
    { id: '3', name: 'עוגיות פריכות', category: 'מאפים', price: 10.0, supermarketPrice: 14.0, timesOrdered: 1, unit: 'מארז' },
    { id: '4', name: 'עגבניות חממה', category: 'ירקות ופירות', price: 3.5, supermarketPrice: 6.9, timesOrdered: 3, unit: 'ק"ג' },
  ];

  const regularItems = filterRegularItems(sampleItems, 3);
  assert.equal(regularItems.length, 3);
  assert.deepEqual(regularItems.map(i => i.id), ['1', '2', '4']);
});

test('calculateBudgetStatus returns correct status and progress', () => {
  // Safe zone (<80%)
  const safe = calculateBudgetStatus(200, 400);
  assert.equal(safe.percentage, 50);
  assert.equal(safe.remaining, 200);
  assert.equal(safe.isOverBudget, false);
  assert.equal(safe.status, 'safe');

  // Warning zone (80%-100%)
  const warning = calculateBudgetStatus(340, 400);
  assert.equal(warning.percentage, 85);
  assert.equal(warning.remaining, 60);
  assert.equal(warning.isOverBudget, false);
  assert.equal(warning.status, 'warning');

  // Exceeded zone (>100%)
  const exceeded = calculateBudgetStatus(450, 400);
  assert.equal(exceeded.percentage, 100);
  assert.equal(exceeded.remaining, 0);
  assert.equal(exceeded.isOverBudget, true);
  assert.equal(exceeded.status, 'exceeded');
});

test('formatNIS formats Shekel strings correctly', () => {
  assert.match(formatNIS(150), /₪150/);
});
