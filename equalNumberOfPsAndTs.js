// Write a JavaScript program to check whether a given string contains equal number of p's and t's.

const isEqual = (str) => {
  return (str.match(/p/g) || []).length == (str.match(/t/g) || []).length
    ? true
    : false;
};

console.log(isEqual("proton"));
console.log(isEqual("parapet"));

const isEqual2 = (str) => {
  return str.split("p").length == str.split("t").length ? true : false;
};
console.log(isEqual2("proton"));
console.log(isEqual2("parapet"));
