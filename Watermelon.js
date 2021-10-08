/*link  https://www.codewars.com/kata/55192f4ecd82ff826900089e/javascript*/

function divide(weight) {
  if (weight === 2) {
    return false;
  }

  let a = weight - 2;
  if (+a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
