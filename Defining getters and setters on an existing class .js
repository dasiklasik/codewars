/*link https://www.codewars.com/kata/55bcf04de45497c54a0000d0/solutions/javascript*/

Person.prototype.__defineGetter__('name', function () {return this.firstName + ' ' + this.lastName})
Person.prototype.__defineSetter__('name', function(value) {
  const arr = value.split(' ');
  this.firstName = arr[0]
  this.lastName = arr[1]
})