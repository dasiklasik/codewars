/*link https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript*/

const countBits = function(n) {
    let num = n.toString(2);
    let arr = num.split('');
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1') {
            res += 1;
        }
    }
    return res
};
