/*link https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript*/

function persistence(num) {
  let persistenceNum = 0;
  const arr = num.toString().split('');

  function calc(arg) {
    persistenceNum++
    const arr = arg.toString().split('');
    let sum = arr.reduce((acc, rec) => acc * rec);


    if (sum.toString().split('').length !== 1) return calc(sum)
  }

  if (arr.length !== 1) {
    calc(num)
  }

  return persistenceNum
}