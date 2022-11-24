import './style.css';
import './img/PAKtZ.png';
import { likesArr } from './modules/involApiLikes.js';
import poplauteItem from './modules/populate.js';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';

const getMealList = async () => {
  const result = await likesArr(); // getting likes from involvement API
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      poplauteItem(json.meals, result);
    });
};

getMealList();
