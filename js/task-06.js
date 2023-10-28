const inputEl = document.getElementById('validation-input');

const handleLength = function () {
  const inputValue = this.value.trim().length;

  // const inputValue = e.currentTarget.value.trim().length -> make sure to use e as parameter in the handler function (except arrow functions)
  // NOTE: You can either used the code above this line, which you are currently using, I used 'this' keyword because, 'this' in a handler function is the element calling itself right? in this case it's the same as input element :))
  const requiredLength = this.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', handleLength);

// const handleLength = function () {
//   const inputValue = this.value.trim().length;
//   const requiredLength = this.dataset.length;

//   if (inputValue === parseInt(requiredLength)) {
//     this.style.borderColor = '#4caf50';
//   } else {
//     this.style.borderColor = '#f44336';
//   }
// };

// inputEl.addEventListener('blur', handleLength);
