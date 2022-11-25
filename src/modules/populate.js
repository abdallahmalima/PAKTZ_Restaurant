import createItem from './createItem.js';
import countItem from './countItem.js';
import registerCommentBtnEventListener from './showMealDetails.js';

const mealList = document.querySelector('main');

const poplauteItem = (meals, likes) => {
  mealList.innerHTML = '';
  const list = document.createElement('ul');
  list.className = 'itemsList';
  meals.forEach((element, index) => {
    createItem(element, list, likes[index]);
  });
  mealList.appendChild(list);
  const product = document.querySelector('.item2 a');
  product.innerHTML = '';
  product.innerHTML = `Product (${countItem(list)})`;
  registerCommentBtnEventListener();
};

export default poplauteItem;