'use strict';
const CREDIT_MIN = 0;
const CREDIT_MAX = 500000;

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

const formatterYears = {
  format(number) {
    return `${number} ${formatYears(number, ['лет', 'год', 'года'])}`
  }
};


setHandlersForInput(
  creditText,
  creditRange,
  CREDIT_MIN,
  CREDIT_MAX,
  formatterCurrency
);

setHandlersForInput(
  firstContributionText,
  firstContributionRange,
  CREDIT_MIN,
  CREDIT_MAX,
  formatterCurrency
);

setHandlersForInput(
  returnPeriodText,
  returnPeriodRange,
  RETURN_MIN,
  RETURN_MAX,
  formatterYears
);

setReaction(
  creditText,
  creditRange,
  firstContributionText,
  firstContributionRange,
  returnPeriodText,
  returnPeriodRange,
  mainProcess
);

mainProcess();


function setHandlersForInput(textElement, rangeElement, min, max, goalFormatter) {
  textElement.addEventListener('input', textInputHandler);
  textElement.addEventListener('focus', textFocusHandler);
  textElement.addEventListener('blur', textBlurHandler);

  rangeElement.addEventListener('input', rangeInputHandler);


  function textInputHandler() {
    let number = filterToNumberValue(this, 0);

    number = sortMinMaxNumber(number, min, max);

    rangeElement.value = number;
    number = formatterNumber.format(number);
    this.value = number;
  }

  function textFocusHandler() {
    let number = filterToNumberValue(this, 0);
    this.value = formatterNumber.format(number);
  }

  function textBlurHandler() {
    let number = filterToNumberValue(this, 0);
    this.value = goalFormatter.format(number);
  }

  function rangeInputHandler() {
    textElement.value = goalFormatter.format(this.value);
  }

  function filterToNumberValue(element = null, number = 0) {
    for (const letter of element.value) {
      if ('0123456789'.includes(letter)) {
        number += letter;
      }
    }

    number = parseInt(number);

    return number;
  }
}


function setReaction(...args) {
  const handler = args.splice(-1)[0];

  for (const element of args) {
    element.addEventListener('input', function(event) {
      handler.call(this, event, args.slice());
    });
  }
}


function mainProcess() {
  const credit = parseInt(creditRange.value);
  const firstContribution = parseInt(firstContributionRange.value);
  const returnPeriod = parseInt(returnPeriodRange.value);

  const percent = 10;
  document.querySelector('#percentNumber').value = `${percent} %`;

  const subpayment = credit * percent / 100;
  document.querySelector('#subpayment').textContent = formatterCurrency.format(subpayment);

  let commonDebit = credit + subpayment;
  document.querySelector('#common').textContent = formatterCurrency.format(commonDebit);

  const payment = (credit - firstContribution) / (returnPeriod * 12);
  document.querySelector('#payment').textContent = formatterCurrency.format(payment);
}





