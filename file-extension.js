const fileName = "package.json";

const getFileExtension = (file) => {
  const index = file.indexOf(".");
  return file.slice(index + 1);
};

console.log(getFileExtension(fileName));

const getFileExten = (file) => {
  return file.split(".").pop();
};

console.log(getFileExten(fileName));
