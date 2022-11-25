import displayMealComments from './showMealComments.js';
import addEventListerForCommentForm from './addMealComment.js';

const BASE_URL = `https://www.themealdb.com/api/json/v1/${process.env.MEAL_API_KEY}`;

const getMealsDetails = async (idMeal) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);
  const meals = await response.json();
  return meals;
};

const updateMealDetailsUI = ({ meals }) => {
  const mealDetailContainer = document.querySelector('.meal-detail-container');
  const [{
    idMeal,
    strMeal,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  }] = meals;

  const mealDetails = `
<img class="meal-image" src="${strMealThumb}" alt="">
    <h3 class="meal-title">${strMeal}</h3>
    <h4 class="meal-ingrediant">Ingredients</h4>
    <div class='ingredients'>
    <div class="ingredient-pair">
    <p>${strIngredient1.toUpperCase()}</p>
    <p>${strIngredient2.toUpperCase()}</p>
    </div>
    <div class="ingredient-pair">
      <p>${strIngredient3.toUpperCase()}</p>
      <p>${strIngredient4.toUpperCase()}</p>
      </div>
      </div>
      <input type="hidden"class='item_id' name="item_id" value="${idMeal}">
  </div>
`;

  mealDetailContainer.innerHTML = mealDetails;
};
const displayMealsDetails = async (idMeal) => {
  getMealsDetails(idMeal).then(updateMealDetailsUI);
};

const popUploseBtnEventlistener = () => {
  const closeBtn = document.querySelector('.fa-circle-xmark');
  closeBtn.addEventListener('click', () => {
    document.querySelector('#pop-container').style.display = 'none';
  });
};

const handleCommentBtnClick = (e) => {
  const idMeal = e.target.id;
  const mealDetailsPopup = document.querySelector('#pop-container');
  mealDetailsPopup.style.display = 'flex';
  displayMealsDetails(idMeal);
  displayMealComments(idMeal);
  addEventListerForCommentForm();
  popUploseBtnEventlistener();
};

const addEventListerForCommentBtn = (commentBtn) => {
  commentBtn.addEventListener('click', handleCommentBtnClick);
};

const registerCommentBtnEventListener = () => {
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach(addEventListerForCommentBtn);
};

export default registerCommentBtnEventListener;