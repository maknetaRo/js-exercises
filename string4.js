// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const strManipulation = (s) => {
  if (s.length >= 3) {
    const lastThree = s.slice(-3);
    return lastThree + s + lastThree;
  } else {
    return "The string should contain at least 3 characters.";
  }
};

console.log(strManipulation("put"));
console.log(strManipulation("A"));
console.log(strManipulation("banana"));
