const theLongestWord = (str) => {
  let newArr = [];
  let strArr = str.split(" ");
  let max = strArr[0].length;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > max) {
      max = strArr[i].length;
      newArr.push(strArr[i]);
    }
  }
  return newArr.join(" ");
};

console.log(theLongestWord("The longest word"));
