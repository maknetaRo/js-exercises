// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const isMultiple = (num) => {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  }
  return false;
};

console.log(isMultiple(3));
console.log(isMultiple(21));
console.log(isMultiple(19));
console.log(isMultiple(14));
