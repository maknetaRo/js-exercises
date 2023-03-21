// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const stringManipulation = (s) => {
  const char = s.slice(0, 1);
  return char + s + char;
};

console.log(stringManipulation("Javascript"));
console.log(stringManipulation("t"));
