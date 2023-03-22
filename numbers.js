// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const isTheSame = (x, y, z) => {
  return (x.toString().slice(-1) == y.toString().slice(-1)) ==
    z.toString().slice(-1)
    ? true
    : false;
};

console.log(isTheSame(11, 21, 31));
console.log(isTheSame(11, 22, 33));
