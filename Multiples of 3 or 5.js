/*link https://www.codewars.com/kata/514b92a657cdc65150000006/javascript */

function solution(number) {
  let res = 0;

  for (let i = 1; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      res += i;
    }
  }
  return res;
}
