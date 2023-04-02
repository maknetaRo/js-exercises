const palindromeChecker = (item) => {
  const newItem = item
    .toLowerCase()
    .split("")
    .filter((char) => char !== " ");
  return newItem.join("") === newItem.reverse().join("");
};

console.log(palindromeChecker("Anna"));
console.log(palindromeChecker("nurses run"));
console.log(palindromeChecker("madam"));
console.log(palindromeChecker("banana"));
