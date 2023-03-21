// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const diff = (num) => {
  if (num > 19) {
    return Math.abs(19 - num) * 3;
  } else {
    return Math.abs(19 - num);
  }
};

console.log(diff(3));
console.log(diff(19));
console.log(diff(20));
console.log(diff(-1));
