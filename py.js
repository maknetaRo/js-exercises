// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const pyLang = (item) => {
  if (typeof item === "string") {
    if (item.startsWith("Py")) {
      return item;
    } else {
      return "Py" + item;
    }
  } else {
    return "It's must be a word";
  }
};

console.log(pyLang(3));
console.log(pyLang("Python"));
console.log(pyLang("pyramid"));
console.log(pyLang("tron"));
