// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const stringManipulation = (i, s) => {
  return s.slice(0, i) + s.slice(i + 1);
};

console.log(stringManipulation(3, "Javascript"));
console.log(stringManipulation(0, "Python"));
console.log(stringManipulation(5, "Białystok"));
