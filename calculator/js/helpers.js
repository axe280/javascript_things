function sortMinMaxNumber(number, min, max) {
  if (min && number < min) {
    return number = min;
  }

  if (max && number > max) {
    return number = max;
  }

  return number;
}

function formatYears(value, yearVariants) {
  const result1 = value % 100;
  const result2 = value % 10;

  if (result1 >= 5 && result1 <= 20) {
    return yearVariants[0];
  }

  if (result2 == 1) {
    return yearVariants[1];
  }

  if (result2 >= 2 && result2 <=4) {
    return yearVariants[2];
  }

  return yearVariants[0];
}