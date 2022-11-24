import createItem from './createItem.js';

const mealList = document.querySelector('main');

const poplauteItem = (meals, likes) => {
  mealList.innerHTML = '';
  const list = document.createElement('ul');
  list.className = 'itemsList';
  meals.forEach((element, index) => {
    createItem(element, list, likes[index]);
  });
  mealList.appendChild(list);
};

export default poplauteItem;