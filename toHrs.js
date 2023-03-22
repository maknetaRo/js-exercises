//  Write a JavaScript program to convert a given number to hours and minutes.

const toHrsMin = (number) => {
  return `${number} is ${Math.round(number / 60)} hours and ${
    number % 60
  } minutes `;
};

console.log(toHrsMin(125));
