import './style.css';
import './img/PAKtZ.png';

import poplauteItem from './modules/populate.js';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';

const getMealList = async () => {
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      poplauteItem(json.meals);
    });
};

getMealList();