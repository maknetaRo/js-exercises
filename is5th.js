// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const is5th = (str) => {
  if (str.slice(4).includes("Script")) {
    return str.slice(0, 4) + str.slice(4 + "Script".length);
  } else {
    return str;
  }
};

console.log(is5th("JavaScript"));
console.log(is5th("JavaScript2012"));
console.log(is5th("javascript"));
console.log(is5th("print"));
