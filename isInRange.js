// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

const isTrue = (elem) => {
  return elem >= 50 && elem <= 99 ? true : false;
};

const areInRange = (a, b) => {
  return isTrue(a) || isTrue(b) ? true : false;
};

console.log(areInRange(3, 49));
console.log(areInRange(33, 89));
console.log(areInRange(50, 99));

const ofThree = (a, b, c) => {
  return isTrue(a) || isTrue(b) || isTrue(c) ? true : false;
};

console.log(areInRange(3, 49, -56));
console.log(areInRange(33, 89, 22));
console.log(areInRange(50, 99, 12));
console.log(areInRange(50, 99, 72));
