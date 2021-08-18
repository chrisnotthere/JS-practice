function validateEmail(emailInput){
  console.log(emailInput);
  console.log(emailInput.value);
}


const emailInput = document.querySelector('#f1');

emailInput.addEventListener('change', validateEmail(emailInput));
//emailInput.addEventListener('keyup', validateEmail(emailInput));

