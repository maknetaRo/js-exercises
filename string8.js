//  Write a JavaScript program to convert the letters of a given string in alphabetical order.

const sortLetters = (str) => {
  return str
    .split("")
    .sort((a, b) => {
      return a.localeCompare(b, "en", { sensitivity: "base" });
    })
    .join("");
};

console.log(sortLetters("Javascript"));
