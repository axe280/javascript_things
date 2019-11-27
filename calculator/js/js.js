'use strict';
const CREDIT_MIN = 0;
const CREDIT_MAX = 500000;

const CONTRIBUTION_MAX = 500000;

const RETURN_MIN = 0;
const RETURN_MAX = 30;


const creditText = document.querySelector('#creditText');
const creditRange = document.querySelector('#creditRange');

const firstContributionText = document.querySelector('#firstContributionText');
const firstContributionRange = document.querySelector('#firstContributionRange');

const returnPeriodText = document.querySelector('#returnPeriodText');
const returnPeriodRange = document.querySelector('#returnPeriodRange');

const formatterNumber = new Intl.NumberFormat('ru');
const formatterCurrency = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});


creditText.addEventListener('input', function(event) {
  let number = filterInputValue(this, 0);

  number = sortInputValue(number, CREDIT_MIN, CREDIT_MAX);

  creditRange.value = number;
  number = formatterNumber.format(number);
  this.value = number;
});

creditText.addEventListener('focus', focusHandleCurrency);
creditText.addEventListener('blur', blurHandleCurrency);

creditRange.addEventListener('input', function(event) {
  creditText.value = formatterCurrency.format(parseInt(this.value));
});


firstContributionText.addEventListener('input', function(event) {
  let number = filterInputValue(this, 0);

  number = sortInputValue(number, null, CONTRIBUTION_MAX);

  firstContributionRange.value = number;
  number = formatterNumber.format(number);
  this.value = number;
});

firstContributionText.addEventListener('focus', focusHandleCurrency);
firstContributionText.addEventListener('blur', blurHandleCurrency);

firstContributionRange.addEventListener('input', function(event) {
  firstContributionText.value = formatterCurrency.format(parseInt(this.value));
});


returnPeriodText.addEventListener('input', function(event) {
  let number = filterInputValue(this, 0);

  number = sortInputValue(number, RETURN_MIN, RETURN_MAX);

  returnPeriodRange.value = number;
  this.value = number;
});

returnPeriodText.addEventListener('focus', focusHandleCurrency);

returnPeriodText.addEventListener('blur', function(event) {
  let number = filterInputValue(this, 0);
  this.value = number + ' лет';
});

returnPeriodRange.addEventListener('input', function(event) {
  returnPeriodText.value = parseInt(this.value) + ' лет';
});


function focusHandleCurrency(event) {
  let number = filterInputValue(this, 0);
  this.value = formatterNumber.format(number);
}

function blurHandleCurrency(event) {
  let number = filterInputValue(this, 0);
  this.value = formatterCurrency.format(number);
}

function filterInputValue(element = null, number = 0) {
  for (const letter of element.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  return number;
}

function sortInputValue(number, min, max) {
  if (min && number < min) {
    return number = min;
  }

  if (max && number > max) {
    return number = max;
  }

  return number;
}


