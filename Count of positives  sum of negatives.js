/*link https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript*/

function countPositivesSumNegatives(input) {
    if (input === null) {
        return []
    }
    let pos = 0;
    let nev = 0;
    input.forEach((i) => i > 0 ? pos += 1 : nev += i)
    return pos === 0 && nev === 0 ? [] : [pos, nev]
}