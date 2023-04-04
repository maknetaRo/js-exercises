const stringInOrder = (str) => {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => char.toLowerCase() !== char.toUpperCase())
    .sort()
    .join("");
};

console.log(stringInOrder("Cherries are my favourite."));
