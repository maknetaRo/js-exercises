// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const isJava = (str) => {
  if (str.startsWith("Java")) {
    return true;
  }
  return false;
};

console.log(isJava("Python"));
console.log(isJava("Json"));
console.log(isJava("JavaScript"));
