import createItem from './createItem.js';
import registerCommentBtnEventListener from './showMealDetails.js';

const mealList = document.querySelector('main');
const poplauteItem = (meals) => {
  mealList.innerHTML = '';
  const list = document.createElement('ul');
  meals.forEach((element) => {
    createItem(element, list);
  });
  mealList.appendChild(list);
  registerCommentBtnEventListener();
};

export default poplauteItem;