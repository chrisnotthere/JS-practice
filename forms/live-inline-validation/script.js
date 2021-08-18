const form  = document.getElementsByTagName('form')[0];

const emailInput = document.querySelector('#f1');
const emailError = document.querySelector('#emailError');
const countryInput = document.querySelector('#f2');
const countryError = document.querySelector('#countryError');
const postalInput = document.querySelector('#f3');
const postalError = document.querySelector('#postalError');
const postalRegExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const regex = /^\d{5}$/;

emailInput.addEventListener('blur', validateEmail);
countryInput.addEventListener('blur', validateCountry);
postalInput.addEventListener('blur', validatePostal);



// check all inputs before submitting the form
form.addEventListener('submit', function (event) {

  if(!emailInput.validity.valid) {
    // If it email isn't valid, we display an appropriate error message
    validateEmail();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(!countryInput.validity.valid) {
    // If it country isn't valid, display an error message
    validateCountry();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if(!postalInput.validity.valid) {
    // If it postal isn't valid, display an error message
    validatePostal();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }


});

function validateEmail(){

  if (emailInput.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    //showError();
    if(emailInput.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if(emailInput.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(emailInput.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      emailError.textContent = `Email should be at least ${ emailInput.minLength } characters; you entered ${ emailInput.value.length }.`;
    }
    // Set the styling appropriately
    emailError.className = 'error active';
  }
}

function validateCountry(){
  let countryValue = countryInput.value
  console.log(countryValue);

  if (countryInput.validity.valid) {
    countryError.textContent = ''; 
    countryError.className = 'error'; 
  } else {
    if(countryInput.validity.valueMissing) {
      // If the field is empty,
      countryError.textContent = 'You need to enter an country.';
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
  let postalValue = postalInput.value
  console.log(postalValue);
  console.log(regex.test(postalValue));

  if (postalInput.validity.valid) {
    postalError.textContent = ''; 
    postalError.className = 'error'; 
  } else {
    if(postalInput.validity.valueMissing) {
      // If the field is empty,
      postalError.textContent = 'Please enter a postal code.';
    } else if(!regex.test(postalValue)){
      postalError.textContent = 'must be at least 5 digits';
    }
    // else if(!postalRegExp.test(postalValue)) {
    //   postalError.textContent = 'Invalid postal code.';
    // } 

    // Set the styling appropriately
    postalError.className = 'error active';

  }
  
}

