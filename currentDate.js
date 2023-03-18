const now = new Date();
const nowToString = now.toISOString();
const date = nowToString.slice(0, nowToString.indexOf("T"));
console.log(date);

function formatDate(item) {
  if (item.toString().length === 1) {
    item = `0${item}`;
  }
  return item;
}
const [day, month, year] = [
  now.getDate(),
  now.getMonth() + 1,
  now.getFullYear(),
];
const formatedDay = formatDate(day);
const formatedMonth = formatDate(month);
const date1 = `${formatedDay}/${formatedMonth}/${year}`;
const date2 = `${formatedDay}-${formatedMonth}-${year}`;
const date3 = `${formatedDay}.${formatedMonth}.${year}`;
const dateMyFav = `${year}.${formatedMonth}.${formatedDay}`;
console.log(dateMyFav);
console.log(date1);
console.log(date2);
console.log(date3);

const dateLocale = now.toDateString();
console.log(dateLocale);
