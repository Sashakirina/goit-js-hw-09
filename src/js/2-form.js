const formEl = document.querySelector(`.feedback-form`);

formEl.addEventListener(`input`, handleInput);
// formEl.addEventListener(`submit`, handleSubmit);

function handleInput(event){
    console.log(event.target.value);
    const info = [event.target.value.trim()];
    
localStorage.setItem(`feedback-form-state`, JSON.stringify(info))
}

