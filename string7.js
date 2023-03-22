// Write a JavaScript program to capitalize the first letter of each word of a given string.

const titleCaseString = (str) => {
  return str
    .split(" ")
    .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
    .join(" ");
};

console.log(titleCaseString("javascript is fun"));
