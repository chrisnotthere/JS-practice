const form  = document.getElementsByTagName('form')[0];

const emailInput = document.querySelector('#f1');
const emailError = document.querySelector('#emailError');
const countryInput = document.querySelector('#f2');
const countryError = document.querySelector('#countryError');
const postalInput = document.querySelector('#f3');
const postalError = document.querySelector('#postalError');
const passwordInput = document.querySelector('#f4');
const passwordError = document.querySelector('#passwordError');
const passwordConfirmInput = document.querySelector('#f5');
const passwordConfirmError = document.querySelector('#passwordConfirmError');
const pwdInfo = document.querySelector('.pwdInfo');

emailInput.addEventListener('blur', validateEmail);
countryInput.addEventListener('blur', validateCountry);
postalInput.addEventListener('blur', validatePostal);
passwordInput.addEventListener('blur', validatePassword);
passwordConfirmInput.addEventListener('blur', validatePasswordConfirm);


// check all inputs before submitting the form
form.addEventListener('submit', function (event) {

  if(!emailInput.validity.valid) {
    // If the email isn't valid, we display an appropriate error message
    validateEmail();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(!countryInput.validity.valid) {
    // If the country isn't valid, display an error message
    validateCountry();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(!postalInput.validity.valid) {
    // If the postal isn't valid, display an error message
    validatePostal();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(!passwordInput.validity.valid){
    // If the password isn't valid, display an error message
    validatePassword();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(passwordInput.value !== passwordConfirmInput.value){
    // If the two password fields dont match, display an error
    validatePasswordConfirm();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    // success message if all validation tests pass
    alert ('High five!');
  }
});

function validateEmail(){

  if (emailInput.validity.valid) {
    // In case there is an error message visible in the field, remove the error message.
    emailError.textContent = '';  // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    if(emailInput.validity.valueMissing) {
      // If the field is empty,
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if(emailInput.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(emailInput.validity.tooShort) {
      // If the data is too short,
      emailError.textContent = `Email should be at least ${ emailInput.minLength } characters; you entered ${ emailInput.value.length }.`;
    }
    // Set the styling appropriately
    emailError.className = 'error active';
  }
}

function validateCountry(){

  if (countryInput.validity.valid) {
    countryError.textContent = ''; 
    countryError.className = 'error'; 
  } else {
    if(countryInput.validity.valueMissing) {
      // If the field is empty,
      countryError.textContent = 'You need to enter a country.';
    } else if(countryInput.validity.tooShort) {
      // If the data is too short,
      countryError.textContent = `Country name should be at least ${ countryInput.minLength } characters; you entered ${ countryInput.value.length }.`;
    } else if(countryInput.validity.tooLong) {
      // If the data is too long,
      countryError.textContent = `Country name should be at most ${ countryInput.maxLength } characters; you entered ${ countryInput.value.length }.`;
    }
    // Set the styling appropriately
    countryError.className = 'error active';
  }
}

function validatePostal(){

  if (postalInput.validity.valid) {
    postalError.textContent = ''; 
    postalError.className = 'error'; 
  } else {
    if(postalInput.validity.valueMissing) {
      // If the field is empty,
      postalError.textContent = 'Please enter a postal code.';
    } 
    // if field doesnt match regex pattern
    else if(postalInput.validity.patternMismatch){
      postalError.textContent = 'Invalid postal code';
    }
    // Set the styling appropriately
    postalError.className = 'error active';
  }
}

function validatePassword(){

  if (passwordInput.validity.valid) {
    passwordError.textContent = ''; 
    passwordError.className = 'error';
    pwdInfo.style.display = 'none'; 
  } else {
    if(passwordInput.validity.valueMissing) {
      // If the field is empty,
      passwordError.textContent = 'Please enter a password.';
    } 
    // if field doesnt match regex pattern
    else if(passwordInput.validity.patternMismatch){
      passwordError.textContent = 'Invalid password, see password requirements';
      //show password requirements
      pwdInfo.style.display = 'block';
    }
    // Set the styling appropriately
    passwordError.className = 'error active';
  }
}

function validatePasswordConfirm(){

  if (passwordConfirmInput.validity.valid && passwordConfirmInput.value === passwordInput.value) {
    passwordConfirmError.textContent = ''; 
    passwordConfirmError.className = 'error';
  }
  else {
    if(passwordConfirmInput.validity.valueMissing) {
      // If the field is empty,
      passwordConfirmError.textContent = 'Please confirm your password.';
    } 
    else if (passwordConfirmInput.value !== passwordInput.value){
      // if password fields dont match
      passwordConfirmError.textContent = 'Passwords entered do not match';
    }
    // Set the styling appropriately
    passwordConfirmError.className = 'error active';
  }

}
