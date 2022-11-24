/**
 * @jest-environment jsdom
 */
const createMockDocument = () => {
  document.body.innerHTML = `
  <ul class= "mealList">
  </ul>
  `;
};

export default createMockDocument;