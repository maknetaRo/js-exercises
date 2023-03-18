const now = new Date();
const day = now.getDate();
const weekday = now.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const time = now.toLocaleTimeString();
const amOrPm = time.slice(-2);
const indexOfAmOrPm = time.indexOf(amOrPm);
const hourFromTime = time.slice(0, indexOfAmOrPm);

function insertAtIndex(str, substring, index) {
  const arr = str.split(":");
  arr.splice(index, 0, substring);
  return arr.join(" :");
}
const index = hourFromTime.slice(0, time.indexOf(":"));
const actualTime = insertAtIndex(hourFromTime, amOrPm, index);

console.log(`Today is: ${weekdays[weekday]}`);
console.log(`Current time is: ${actualTime}`);
