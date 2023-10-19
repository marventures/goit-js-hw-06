const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');
const outputElContent = outputEl.textContent;

inputEl.addEventListener('input', (event) => {    
    let inputValidation = event.currentTarget.value > ''
        ? outputEl.textContent = event.currentTarget.value
        : outputEl.textContent = outputElContent;
    return inputValidation;
});