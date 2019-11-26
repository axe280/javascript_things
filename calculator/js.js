'use strict';
const CREDIT_MIN = 0;
const CREDIT_MAX = 500000;

const CONTRIBUTION_MAX = 500000;

const RETURN_MIN = 1;
const RETURN_MAX = 30;


const creditText = document.querySelector('#creditText');
const creditRange = document.querySelector('#creditRange');

const firstContributionText = document.querySelector('#firstContributionText');
const firstContributionRange = document.querySelector('#firstContributionRange');

const returnPeriodText = document.querySelector('#returnPeriodText');
const returnPeriodRange = document.querySelector('#returnPeriodRange');

const formatterNumber = new Intl.NumberFormat('eng');
const formatterCurrency = new Intl.NumberFormat('eng', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});


creditText.addEventListener('input', function(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  if (number < CREDIT_MIN) {
    number = CREDIT_MIN;
  }

  if (number > CREDIT_MAX) {
    number = CREDIT_MAX;
  }

  creditRange.value = number;
  number = formatterNumber.format(number);
  this.value = number;
});

creditText.addEventListener('focus', focusHandle);
creditText.addEventListener('blur', blurHandle);

creditRange.addEventListener('input', function(event) {
  creditText.value = formatterCurrency.format(parseInt(this.value));
});


firstContributionText.addEventListener('input', function(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  if (number > CONTRIBUTION_MAX) {
    number = CONTRIBUTION_MAX;
  }

  firstContributionRange.value = number;
  number = formatterNumber.format(number);
  this.value = number;
});

firstContributionText.addEventListener('focus', focusHandle);
firstContributionText.addEventListener('blur', blurHandle);


firstContributionRange.addEventListener('input', function(event) {
  firstContributionText.value = formatterCurrency.format(parseInt(this.value));
});


returnPeriodText.addEventListener('focus', function(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  this.value = number;
});


returnPeriodText.addEventListener('input', function(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  if (number < RETURN_MIN) {
    number = RETURN_MIN;
  }

  if (number > RETURN_MAX) {
    number = RETURN_MAX;
  }

  returnPeriodRange.value = number;
  this.value = number;
});


returnPeriodText.addEventListener('blur', function(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);
  this.value = number + ' лет';
});

returnPeriodRange.addEventListener('input', function(event) {
  returnPeriodText.value = parseInt(this.value) + ' лет';
});


function focusHandle(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  this.value = formatterNumber.format(number);
}

function blurHandle(event) {
  let number = 0;

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = parseInt(number);

  this.value = formatterCurrency.format(number);
}


