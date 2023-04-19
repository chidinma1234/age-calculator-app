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

function handleInvalidInput() {
  error.forEach((el) => el.classList.remove('hidden'));
  label.forEach((el) => el.classList.add('label-error'));
  input.forEach((el) => el.classList.add('input-error'));

  setTimeout(() => {
    error.forEach((el) => el.classList.add('hidden'));
    label.forEach((el) => el.classList.remove('label-error'));
    input.forEach((el) => el.classList.remove('input-error'));
  }, 2000);
}

function showErrorColor(inputElement) {
  inputElement.classList.add('input-error');
  inputElement.previousElementSibling.classList.add('label-error');
}

function resetErrorColor(inputElement) {
  inputElement.classList.remove('input-error');
  inputElement.previousElementSibling.classList.remove('label-error');
}

function toCheckValidityOfDateInput() {
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
}

function toCheckValidityOfMonthInput() {
  errorMonth.classList.remove('hidden');
  showErrorColor(inputDay);
  showErrorColor(inputMnth);
  showErrorColor(inputYear);

  setTimeout(() => {
    errorMonth.classList.add('hidden');
    resetErrorColor(inputDay);
    resetErrorColor(inputMnth);
    resetErrorColor(inputYear);
  }, 3000);
}

function toCheckValidityOfYearInput() {
  errorYear.classList.remove('hidden');
  showErrorColor(inputDay);
  showErrorColor(inputMnth);
  showErrorColor(inputYear);

  setTimeout(() => {
    errorYear.classList.add('hidden');
    resetErrorColor(inputDay);
    resetErrorColor(inputMnth);
    resetErrorColor(inputYear);
  }, 3000);
}

//function to calculate the age
function toCalcAgeMnthsDays(now, past) {
  const noOfYears = now.getFullYear() - past.getFullYear();
  years.textContent = ```${noOfYears}`.padStart(2, 0)``;
  const noOfMonths = Math.abs(now.getMonth() - past.getMonth());
  months.textContent = ```${noOfMonths}`.padStart(2, 0)``;
  const noOfDays = Math.abs(now.getDate() - past.getDate());
  days.textContent = ```${noOfDays}`.padStart(2, 0)``;
}

function resetInputFields() {
  inputDay.value = '';
  inputMnth.value = '';
  inputYear.value = '';
}

function handleSubmit(e) {
  e.preventDefault();

  const date = parseInt(inputDay.value);
  const month = parseInt(inputMnth.value) - 1;
  const year = parseInt(inputYear.value);
  const maxDate = new Date(year, month + 1, 0).getDate();
  const birthDate = new Date(year, month, year);

  //if the field is empty
  if (!(date && month && year)) {
    handleInvalidInput();
    return;
  }

  if (!(date >= 1 && date <= maxDate)) {
    toCheckValidityOfDateInput();
    return; //exist the even listener when dere is an error
  }
  if (month < 0 || month > 11) {
    toCheckValidityOfMonthInput();
    return;
  }

  if (year > currentDate.getFullYear()) {
    toCheckValidityOfYearInput();
    resetInputFields();
    return;
  }
  toCalcAgeMnthsDays(currentDate, birthDate);
  resetInputFields();
}

//Event listener
form.addEventListener('submit', handleSubmit);
