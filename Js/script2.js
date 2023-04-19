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
//selecting the error message
const error = document.querySelectorAll('.error-text');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
//selecting the span
const years = document.querySelector('#no-of-years');
const months = document.querySelector('#no-of-months');
const days = document.querySelector('#no-of-days');

const currentDate = new Date();

//function to show error message
function showErrorColor(inputElement) {
  inputElement.style.borderColor = 'hsl(0, 100%, 67%)';
  inputElement.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
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
  if (!(date && month && year)) {
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
    return;
  }
  if (!(date >= 1 && date <= maxDate)) {
    errorDay.classList.remove('hidden');
    showErrorColor(inputDay);
    showErrorColor(inputMnth);
    showErrorColor(inputYear);

    setTimeout(() => {
      errorDay.classList.add('hidden');
      resetErrorColor(inputDay);
      resetErrorColor(inputMnth);
      resetErrorColor(inputYear);
    }, 3000);
    return;
  }

  //check that the number of month is within 1-12
  else if (month < 0 || month > 11) {
    errorMonth.classList.remove('hidden');
    showErrorColor(inputMnth);
    showErrorColor(inputDay);
    showErrorColor(inputYear);

    setTimeout(() => {
      errorMonth.classList.add('hidden');
      resetErrorColor(inputMnth);
      resetErrorColor(inputDay);
      resetErrorColor(inputYear);
    }, 3000);
    return;
  }
  if (year > currentDate.getFullYear()) {
    errorYear.classList.remove('hidden');
    showErrorColor(inputMnth);
    showErrorColor(inputDay);
    showErrorColor(inputYear);
    setTimeout(() => {
      errorYear.classList.add('hidden');
      resetErrorColor(inputMnth);
      resetErrorColor(inputDay);
      resetErrorColor(inputYear);
    }, 3000);
    return;
  }

  const birthDate = new Date(year, month, date);
  toCalcAgeMnthsDays(currentDate, birthDate);

  //setting back to default
  inputDay.value = '';
  inputMnth.value = '';
  inputYear.value = '';
});
function toCalcAgeMnthsDays(now, past) {
  const noOfYears = now.getFullYear() - past.getFullYear();
  years.textContent = `${noOfYears}`.padStart(2, 0);
  const noOfMonths = Math.abs(now.getMonth() - past.getMonth());
  months.textContent = `${noOfMonths}`.padStart(2, 0);
  const noOfDays = Math.abs(now.getDate() - past.getDate());
  days.textContent = `${noOfDays}`.padStart(2, 0);
}
