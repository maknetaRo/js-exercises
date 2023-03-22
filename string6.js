// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const changeString = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let charIndex;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    charIndex = alphabet.indexOf(str.toLowerCase()[i]);
    arr.push(alphabet[charIndex + 1]);
  }
  return arr.join("");
};

console.log(changeString("abcdefg"));
console.log(changeString("Magda"));
