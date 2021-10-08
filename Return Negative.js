/*link https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript */

function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  num = "-" + num;
  return +num;
}
