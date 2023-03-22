// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const rightmost = (x, y, z) => {
  return x % 10 == y % 10 || y % 10 == z % 10 || x % 10 == z % 10
    ? true
    : false;
};

console.log(rightmost(28, 38, 11));
console.log(rightmost(28, 38, 58));
console.log(rightmost(25, 39, 51));
