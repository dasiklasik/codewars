/*https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript */

function findOdd(A) {
  let res = 0;
  for (let i = 0; i < A.length; i++) {
    if (A.filter((a) => a === A[i]).length % 2 !== 0) {
      res = A[i];
      console.log(A.filter((a) => a === A[i]).lenght);
    }
  }
  return res;
}
