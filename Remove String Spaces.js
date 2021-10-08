/*link https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript */

function noSpace(x) {
  return x
    .split(" ")
    .filter((a) => a !== "")
    .join("");
}
