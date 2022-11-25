const BASE_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.INVOLVEMENT_API_KEY}/comments?item_id=`;

const getMealComments = async (idMeal) => {
  const response = await fetch(`${BASE_URL}${idMeal}`);
  if (response.status >= 400) return [];
  const meals = await response.json();
  return meals;
};

const getCommentCounts = (comments) => comments.length;

const updateCommentCountsUI = (commentLength) => {
  let commentCountsText = 'Comment(0)';
  if (commentLength === 1) {
    commentCountsText = `Comment(${commentLength})`;
  } else if (commentLength > 1) {
    commentCountsText = `Comments(${commentLength})`;
  }
  const commentCounts = document.querySelector('.comment_counts');
  commentCounts.innerText = commentCountsText;
};

const updateMealCommentsUI = (comments) => {
  const commentLength = getCommentCounts(comments);
  updateCommentCountsUI(commentLength);

  const commentList = document.querySelector('.comments-lists');
  const lists = comments.map(({ username, comment }) => `<li><b>${username}</b>:${comment} </li>`).join('');
  commentList.innerHTML = lists;
};

const displayMealComments = async (idMeal) => {
  getMealComments(idMeal).then(updateMealCommentsUI);
};

export default displayMealComments;
export { getCommentCounts };