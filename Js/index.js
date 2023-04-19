'use strict';

//selecting the form element
const form = document.querySelector('.form-date');
//selecting the label
const label = document.querySelectorAll('.label');
const labelDay = document.querySelector('#label-day');
const labelMnth = document.querySelector('#label-month');
const labelYear = document.querySelector('#label-year');

//selecting the input
const input = document.querySelectorAll('.input');
const inputMnth = document.querySelector('#month');
const inputDay = document.querySelector('#day');
const inputYear = document.querySelector('#year');
//selecting the button element
const submitBtn = document.querySelector('.submit');
//selecting the error message
const error = document.querySelectorAll('.error-text');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
//selecting the span
const years = document.querySelector('#no-of-years');
const months = document.querySelector('#no-of-months');
const days = document.querySelector('#no-of-days');

//function to show error message
function showErrorColor(inputElement) {
  // errorMsgElement.classList.remove('hidden');
  inputElement.style.borderColor = 'hsl(0, 100%, 67%)';
  inputElement.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
  // setTimeout(() => {
  //   errorMsgElement.classList.add('hidden');
  //   inputElement.style.borderColor = 'hsl(0, 0%, 86%)';
  //   inputElement.previousElementSibling.style.color = 'hsl(0, 1%, 44%)';
  // }, 2000);
}

function resetErrorColor(inputElement) {
  inputElement.style.borderColor = 'hsl(0, 0%, 86%)';
  inputElement.previousElementSibling.style.color = 'hsl(0, 1%, 44%)';
}

//Event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = parseInt(inputDay.value);
  const month = parseInt(inputMnth.value) - 1;
  const year = parseInt(inputYear.value);
  const maxDate = new Date(year, month + 1, 0).getDate(); //to get the maximum date for the selected month

  //to check for no input
  if (!date || !month || !year) {
    error.forEach((el) => {
      el.classList.remove('hidden');
      setTimeout(() => {
        el.classList.add('hidden');
      }, 2000);
    });
    label.forEach((el) => {
      el.style.color = 'hsl(0, 100%, 67%)';
      setTimeout(() => {
        el.style.color = 'hsl(0, 1%, 44%)';
      }, 2000);
    });
    input.forEach((el) => {
      el.style.borderColor = 'hsl(0, 100%, 67%)';
      setTimeout(() => {
        el.style.borderColor = 'hsl(0, 0%, 86%)';
      }, 2000);
    });
    return; //exist the event listener if there is no input
  }

  //to check the number of days not more than days of the current mnth
  if (date < 1 || date > maxDate) {
    errorDay.classList.remove('hidden');
    showErrorColor(inputDay);
    showErrorColor(inputMnth);
    showErrorColor(inputYear);
    // inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelDay.style.color = 'hsl(0, 100%, 67%)';
    // inputMnth.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelMnth.style.color = 'hsl(0, 100%, 67%)';
    // inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelYear.style.color = 'hsl(0, 100%, 67%)';
    // //set timeout
    setTimeout(() => {
      errorDay.classList.add('hidden');
      resetErrorColor(inputDay);
      resetErrorColor(inputMnth);
      resetErrorColor(inputYear);

      //   inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelDay.style.color = 'hsl(0, 1%, 44%)';
      //   inputMnth.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelMnth.style.color = 'hsl(0, 1%, 44%)';
      //   inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelYear.style.color = 'hsl(0, 1%, 44%)';
    }, 3000);
    // return; //exist the event listener if there is no valid date
  }

  //check that the number of month is within 1-12
  if (month < 0 || month > 11) {
    errorMonth.classList.remove('hidden');
    showErrorColor(inputMnth);
    showErrorColor(inputDay);
    showErrorColor(inputYear);
    // inputMnth.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelMnth.style.color = 'hsl(0, 100%, 67%)';
    // inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelDay.style.color = 'hsl(0, 100%, 67%)';
    // inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelYear.style.color = 'hsl(0, 100%, 67%)';
    // //set timeout
    setTimeout(() => {
      errorMonth.classList.add('hidden');
      resetErrorColor(inputMnth);
      resetErrorColor(inputDay);
      resetErrorColor(inputYear);
      //   inputMnth.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelMnth.style.color = 'hsl(0, 1%, 44%)';
      //   inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelDay.style.color = 'hsl(0, 1%, 44%)';
      //   inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
      //   labelYear.style.color = 'hsl(0, 1%, 44%)';
    }, 3000);
    // return; //exist the event listener if the no of monthvis not valid
  }

  const currentDate = new Date();

  //check if year is in the past or not
  if (year > currentDate.getFullYear()) {
    errorYear.classList.remove('hidden');
    showErrorColor(inputMnth);
    showErrorColor(inputDay);
    showErrorColor(inputYear);
    // inputYear.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelYear.style.color = 'hsl(0, 100%, 67%)';
    // inputDay.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelDay.style.color = 'hsl(0, 100%, 67%)';
    // inputMnth.style.borderColor = 'hsl(0, 100%, 67%)';
    // labelMnth.style.color = 'hsl(0, 100%, 67%)';
    setTimeout(() => {
      errorYear.classList.add('hidden');
      resetErrorColor(inputMnth);
      resetErrorColor(inputDay);
      resetErrorColor(inputYear);
      // inputYear.style.borderColor = 'hsl(0, 0%, 86%)';
      // labelYear.style.color = 'hsl(0, 1%, 44%)';
      // inputMnth.style.borderColor = 'hsl(0, 0%, 86%)';
      // labelMnth.style.color = 'hsl(0, 1%, 44%)';
      // inputDay.style.borderColor = 'hsl(0, 0%, 86%)';
      // labelDay.style.color = 'hsl(0, 1%, 44%)';
    }, 3000);
    // return; //exist the event listener if the num of years is not in the past
  }
  //getting the birthdate of the user
  const birthDate = new Date(year, month, date);
  // if (date && month && year) {
  //calculate the no of years
  const noOfYears = currentDate.getFullYear() - birthDate.getFullYear();
  years.textContent = `${noOfYears}`.padStart(2, 0);
  //calculate the no of months
  const noOfMonths = currentDate.getMonth() - birthDate.getMonth();
  months.textContent = `${noOfMonths}`.padStart(2, 0);
  //calculating the no of days
  const noOfDays = Math.abs(currentDate.getDate() - birthDate.getDate());
  days.textContent = `${noOfDays}`.padStart(2, 0);
  // }
  //setting back to default
  inputDay.value = '';
  inputMnth.value = '';
  inputYear.value = '';
});
