import createItem from './createItem.js';

const mealList = document.querySelector('main');
const poplauteItem = (meals) => {
  mealList.innerHTML = '';
  const list = document.createElement('ul');
  meals.forEach((element) => {
    createItem(element, list);
  });
  mealList.appendChild(list);
};

export default poplauteItem;