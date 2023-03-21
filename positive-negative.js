// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

const isTrue = (a, b) => {
  if (a > 0 && b < 0) {
    return true;
  }
  if (a < 0 && b > 0) {
    return true;
  }
  return false;
};

console.log(isTrue(3, 4));
console.log(isTrue(-3, 4));
console.log(isTrue(-3, -4));
console.log(isTrue(3, -4));
