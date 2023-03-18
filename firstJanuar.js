function firstJanuary() {
  const dateArr = [];
  for (let i = 2014; i <= 2500; i++) {
    const date = new Date(`${i}`);
    // check if 1st January is on Sunday. getDay returns days of the week as numbers starting from 0. And 0 is Sunday.
    if (date.getDay() === 0) {
      dateArr.push(date.getFullYear());
    }
  }
  return dateArr;
}

console.log(firstJanuary());
