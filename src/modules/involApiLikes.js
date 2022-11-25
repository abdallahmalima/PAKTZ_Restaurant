// involment api
const invoApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiKey = `${process.env.INVOLVEMENT_API_KEY}`;
const invoURL = `${invoApiUrl}${apiKey}/likes`;

const addLikes = async (itemId) => {
  await fetch(invoURL, {
    method: 'POST',
    body: JSON.stringify(itemId),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const likesArr = async () => {
  const result = await fetch(invoURL)
    .then((response) => response.json());
  const likesArray = [];
  for (let i = 1; i < result.length; i += 1) {
    likesArray.push(result[i].likes);
  }
  return likesArray;
};

const updatesLikes = async (likeId, likesCounter) => {
  const result = await fetch(invoURL)
    .then((response) => response.json());
  for (let i = 1; i < result.length; i += 1) {
    if (likeId === result[i].item_id) {
      likesCounter.innerHTML = `${result[i].likes + 1} likes`;
    }
  }
};

export { addLikes, likesArr, updatesLikes };