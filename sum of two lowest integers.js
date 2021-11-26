/*link https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript*/

function sumTwoSmallestNumbers(numbers) {
    let sortedNumbers = numbers.sort((a,b) => a > b ? 1: -1)

    return sortedNumbers[0] + sortedNumbers[1]
}