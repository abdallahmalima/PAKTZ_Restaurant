import displayMealComments from "./showMealComments";

const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const getPostParams = (body) => ({
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  );

  const postNewComment = async (comment) => {
  
    const response = await fetch(`${BASE_URL}/apps/${process.env.INVOLVEMENT_API_KEY}/comments`, getPostParams(comment));
    return response;
  };

 const clearForm=({target})=>{
  target.uname.value='';
  target.ucomment.value='';
 }; 
let handleCommentFormSubmit=(e)=>{
    e.preventDefault();
    const uname=e.target.uname.value.trim();
    const ucomment=e.target.ucomment.value.trim();
    const itemId=document.querySelector('.item_id');
    const uitemId=itemId.value.trim();
    
    if(uname.length===0  || ucomment.length===0) return;
    clearForm(e);
    
    postNewComment({ item_id: uitemId,username:uname,comment:ucomment})
    .then((response) => displayMealComments(uitemId)).catch((err)=> err);
   
}

let addEventListerForCommentForm=()=>{
    const commentForm=document.querySelector('.comment-form');
   commentForm.addEventListener('submit',handleCommentFormSubmit);
 
}

export default  addEventListerForCommentForm;