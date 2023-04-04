// Grab clear button element
let clearButtonEl = document.querySelector('#clear-button');
clearButtonEl.addEventListener("click", () => {
    let formEl = document.querySelector('#form-reset');
    formEl.reset();
});

