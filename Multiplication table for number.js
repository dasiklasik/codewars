function multiTable(number) {
  let res = "";
  let sum;

  for (let i = 1; i < 11; i++) {
    if (i === 1) {
      sum = i * number;
      res += i + " * " + number + " = " + sum;
    } else {
      sum = i * number;
      res += "\n" + i + " * " + number + " = " + sum;
    }
  }

  return res;
}
