// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

const integersManipulation = (a, b) => {
  if (a === b) {
    return 2 * a * 3;
  } else {
    return a + b;
  }
};

console.log(integersManipulation(3, 3));
console.log(integersManipulation(0, 3));
console.log(integersManipulation(13, 3));
console.log(integersManipulation(11, 11));
