const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const getMealsDetails = async (idMeal) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);
  const meals = await response.json();
  return meals;
};

const updateMealDetailsUI = ({ meals }) => {
  const mealDetailContainer = document.querySelector('.meal-detail-containerr');
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
    <h3 class="meal-title">Meal Name: ${strMeal}</h3>
    <h4 class="meal-title">Ingredients</h4>
    <div class='ingredients'>
    <div class="ingredient-pair">
    <p>${strIngredient1}</p>
    <p>${strIngredient2}</p>
    </div>
    <div class="ingredient-pair">
      <p>${strIngredient3}</p>
      <p>${strIngredient4}</p>
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

const handleCommentBtnClick = (e) => {
  const idMeal = e.target.id;
  const mealDetailsPopup = document.querySelector('#pop-container');
  mealDetailsPopup.style.display = 'flex';
  displayMealsDetails(idMeal);
};

const addEventListerForCommentBtn = (commentBtn) => {
  commentBtn.addEventListener('click', handleCommentBtnClick);
};

const registerCommentBtnEventListener = () => {
  const commentBtns = document.querySelectorAll('.comments');
  commentBtns.forEach(addEventListerForCommentBtn);
};

export default registerCommentBtnEventListener;