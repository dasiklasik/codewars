/*link https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript*/

function digitize(n) {
    return n.toString().split('').reverse().map(t => Number(t));
}