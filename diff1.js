// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

const getDiff = (num) => {
  if (typeof num === "number") {
    if (num > 13) {
      return Math.abs(13 - num) * 2;
    } else {
      return 13 - num;
    }
  } else {
    return "It's not a number";
  }
};

console.log(getDiff(7));
console.log(getDiff(17));
console.log(getDiff(-7));
console.log(getDiff(0));
console.log(getDiff("Ela"));
