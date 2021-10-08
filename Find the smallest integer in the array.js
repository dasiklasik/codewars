/*link https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript */

function findSmallestInt(args) {
  let minInteger = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < minInteger) {
      minInteger = args[i];
    }
  }
  return minInteger;
}
