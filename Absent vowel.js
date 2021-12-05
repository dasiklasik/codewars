/*link https://www.codewars.com/kata/56414fdc6488ee99db00002c/solutions/javascript*/

function absentVowel(x){
    x = x.toLowerCase();
    if (!x.includes('a')) {
        return 0
    } else if (!x.includes('e')) {
        return 1
    } else if (!x.includes('i')) {
        return 2
    } else if (!x.includes('o')) {
        return 3
    } else if (!x.includes('u')) {
        return 4
    }
}