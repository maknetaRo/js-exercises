const reverseNumber = (number) => {
  return Number(number.toString().split("").reverse().join(""));
};

console.log(reverseNumber(32243));
