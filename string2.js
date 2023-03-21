// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

const stringManipulation = (item) => {
  if (item.length > 1) {
    const first = item.slice(0, 1);
    const second = item.slice(-1);
    return second + item.slice(1, -1) + first;
  } else if (item.length === 1) {
    return item;
  } else {
    return "String should have at least 1 character";
  }
};

console.log(stringManipulation("Python"));
console.log(stringManipulation("3"));
console.log(stringManipulation(2));
console.log(stringManipulation("las vegas"));
