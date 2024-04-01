const formEl = document.querySelector(`.feedback-form`);

const STORAGE_KEY = "feedback-form-state"

formEl.addEventListener(`input`, handleInput);
formEl.addEventListener(`submit`, handleSubmit);


const {email, message} = formEl.elements;

console.log(email);


let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
if(formData){
  email.value = formData.email || ``;
message.value = formData.message || ``;
}



function handleInput(event){

localStorage.removeItem(STORAGE_KEY);

formData = {
  email : email.value.trim(),
  message : message.value.trim(),
};
 
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event){
    event.preventDefault();
    if (email.value.trim() === `` ||
    message.value.trim() === ``){
alert(`Поля повинні бути заповнені`);
    }else{
      event.target.reset();
      localStorage.removeItem(STORAGE_KEY);
    console.log(formData); 
  }
    }

