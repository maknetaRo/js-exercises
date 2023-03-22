// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearst = (x, y) => {
  return Math.abs(100 - x) < Math.abs(100 - y) ? x : y;
};

console.log(nearst(99, 37));
console.log(nearst(50, 50));
console.log(nearst(76, 67));
