const titleCase = (str) => {
  return str
    .split(" ")
    .map((elem) => elem.slice(0, 1).toUpperCase() + elem.slice(1))
    .join(" ");
};

console.log(titleCase("the quick brown fox"));
