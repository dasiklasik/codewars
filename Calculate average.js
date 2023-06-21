/*link https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript*/

function findAverage(array) {
  if (array.length === 0) return 0
  return (array.reduce((acc, item) => acc + item))/array.length
}