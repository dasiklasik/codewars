/*link https://www.codewars.com/kata/54df2067ecaa226eca000229 */

function f(n) {
  if (n === undefined) {
    return false;
  } else if (typeof n !== "number") {
    return false;
  } else if (Number.isInteger(n) === false) {
    return false;
  } else if (n === 0) {
    return false;
  } else if (n < 0) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
