//  Write a JavaScript program to find the largest of three given integers.

const theLargest = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};

console.log(theLargest(100, 210, 93));
console.log(theLargest(-1, -2, -3));

const theLargest2 = (a, b, c) => {
  let maxValue = 0;
  if (a > b) {
    maxValue = a;
  } else {
    maxValue = b;
  }
  if (c > maxValue) {
    maxValue = c;
  }
  return maxValue;
};

console.log(theLargest(1, 2, 3));
console.log(theLargest(71, 22, 53));
