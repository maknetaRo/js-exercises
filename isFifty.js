// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const isFifty = (a, b) => {
  if (a === 50 || b === 50) {
    return true;
  } else if (a + b === 50) {
    return true;
  }
  return false;
};

console.log(isFifty(3, 5));
console.log(isFifty(3, 50));
console.log(isFifty(23, 27));
console.log(isFifty(50, 5));
console.log(isFifty(50, 50));
console.log(isFifty(32, 15));
