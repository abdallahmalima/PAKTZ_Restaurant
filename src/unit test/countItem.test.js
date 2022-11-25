/**
 * @jest-environment jsdom
 */
import countItem from '../modules/countItem.js';
import createMockDocument from '../modules/mocks/documentMock.js';

describe('Count Items that display on the browser', () => {
  it('Meal List is empty!', () => {
    createMockDocument();
    const mealList = document.querySelector('.mealList');
    const result = countItem(mealList);
    expect(result).toBe(0);
  });
  it('Meal List is empty!', () => {
    createMockDocument();
    const mealList = document.querySelector('.mealList');
    const firstItem = document.createElement('li');
    mealList.appendChild(firstItem);
    const result = countItem(mealList);
    expect(result).toBe(1);
  });
  it('Meal List is empty!', () => {
    createMockDocument();
    const mealList = document.querySelector('.mealList');
    for (let i = 0; i < 6; i += 1) {
      const firstItem = document.createElement('li');
      mealList.appendChild(firstItem);
    }

    const result = countItem(mealList);
    expect(result).toBe(6);
  });
});