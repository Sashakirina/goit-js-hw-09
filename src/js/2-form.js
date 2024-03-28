const formEl = document.querySelector(`.feedback-form`);

const STORAGE_KEY = "feedback-form-state"

formEl.addEventListener(`input`, handleInput);
formEl.addEventListener(`submit`, handleSubmit);


const {email, message} = formEl.elements;

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

email.value = formData.email || '';
message.value = formData.message || '';

function handleInput(event){

   formData[event.target.name] = event.target.value.trim();
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function handleSubmit(event){
    event.preventDefault();
    if (email.value.trim() === `` ||
    message.value.trim() === ``){
alert(`Поля повинні бути заповнені`);
    }else{
      email.value = ``;
    message.value = ``;
 localStorage.removeItem(STORAGE_KEY);
console.log(formData); 
    }
    }