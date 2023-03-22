// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

const strCheck = (char, str) => {
  return str.slice(1, 4).includes(char) ? true : false;
};

console.log(strCheck("a", "banana"));
console.log(strCheck("b", "banana"));
