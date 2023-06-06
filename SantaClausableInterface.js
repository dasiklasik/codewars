/*link https://www.codewars.com/kata/52b50a20fa0e77b304000103/solutions/javascript*/

function isSantaClausable(obj) {
  let res = true;
  ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].forEach((el) => {
    if (!obj.hasOwnProperty(el) && typeof obj[el] !== 'function') res = false
  })
  return res
}