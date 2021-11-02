/*link https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript*/

function squareSum(numbers){
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res = res + numbers[i]*numbers[i];
    }

    return res;
}