import { addLikes, updatesLikes } from './involApiLikes.js';

const createItem = (obj, list, item) => {
  const li = document.createElement('li');
  const image = document.createElement('IMG');
  image.setAttribute('src', obj.strMealThumb);
  const name = document.createElement('h2');
  name.innerHTML = obj.strMeal;
  const like = document.createElement('i');
  like.className = 'fa-solid fa-heart';
  like.id = obj.idMeal;
  const comments = document.createElement('button');
  comments.type = 'button';
  comments.className = 'comments';
  comments.id = obj.idMeal;
  comments.innerHTML = 'Comments';
  const reservation = document.createElement('button');
  reservation.type = 'button';
  reservation.className = 'reservation';
  reservation.innerHTML = 'Reservation';
  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'buttonWrapper';
  const nameWrapper = document.createElement('div');
  nameWrapper.className = 'nameWrapper';
  const likesCounter = document.createElement('h4');
  likesCounter.innerHTML = `${item} likes`;
  li.appendChild(image);
  nameWrapper.appendChild(name);
  nameWrapper.appendChild(like);
  li.appendChild(nameWrapper);
  li.appendChild(likesCounter);
  buttonWrapper.appendChild(comments);
  buttonWrapper.appendChild(reservation);
  li.appendChild(buttonWrapper);
  list.appendChild(li);

  like.addEventListener('click', (e) => {
    addLikes({ item_id: obj.idMeal });
    const item = e.target.id;
    updatesLikes(item, likesCounter);
  });
};

export default createItem;