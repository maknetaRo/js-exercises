function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(isLeapYear(2100));
console.log(isLeapYear(2024));
console.log(isLeapYear(1600));

const today = new Date();
const year = today.getFullYear();

// check actual year

const isLeapY = isLeapYear(year);
function sentence(isLeapY, year) {
  if (isLeapY) {
    return `${year} is a leap year.`;
  }
  return `${year} is not a leap year.`;
}

console.log(sentence(isLeapY, year));
console.log(sentence(isLeapYear(2100), 2100));
console.log(sentence(isLeapYear(1992), 1992));
