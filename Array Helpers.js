/*link https://www.codewars.com/kata/525d50d2037b7acd6e000534/solutions/javascript*/

Array.prototype.square = function () {
  return this.map(item => Math.pow(item, 2))
}

Array.prototype.cube = function () {
  return this.map(item => Math.pow(item, 3))
}

Array.prototype.average = function () {
  if (this.length === 0) return NaN
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum/this.length
}

Array.prototype.sum = function () {
  let commonSum = 0;
  for (let i = 0; i < this.length; i++) {
    commonSum += this[i]
  }
  return commonSum
}

Array.prototype.even = function () {
  return this.filter(item => item % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter(item => item % 2 !== 0)
}