import registerCommentBtnEventListener from "./showMealDetails";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';

const getMeals = async () => {
  const response = await fetch(`${BASE_URL}`);
  const meals = await response.json();
  return meals;
};

const updateMealListUI = ({ meals }) => {

  const tableContainer = document.querySelector('table');
  const tableRows = meals.map(({ idMeal, strMeal,strMealThumb }) => `<tr><td>${idMeal}:${strMeal} 
  <img src='${strMealThumb }'/> 
  <button id='${idMeal}'>Details</button></td></tr>`).join('');
  tableContainer.innerHTML = tableRows;
  registerCommentBtnEventListener()
};

const displayMeals = async () => {
  getMeals().then(updateMealListUI);
};

export default displayMeals;