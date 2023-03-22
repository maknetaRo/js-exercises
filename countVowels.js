// Write a JavaScript program to count the number of vowels in a given string.

const countVowels = (str) => {
  const vowels = "aeiou";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  return arr.length;
};

console.log(countVowels("Javascript"));
console.log(countVowels("banana rama"));

const countVowels2 = (str) => {
  return [...str].filter(
    (char) =>
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
  ).length;
};

console.log(countVowels2("Javascript"));
console.log(countVowels2("banana rama"));
