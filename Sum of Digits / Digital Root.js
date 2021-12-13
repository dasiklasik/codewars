/*link https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript*/

function digital_root(n) {
    let sum = n;
    for (let i=0; i < sum.toString().length; i++ ) {
        let arr = sum.toString().split('');
        for (let j = 0; j < arr.length; j++) {
            if (j === 0) {
                sum = +arr[j]
            } else {
                sum += +arr[j]
            }
        }

        if (sum.toString().length !== 1 && i === sum.toString().length-1) {
            i = 0;
        }

    }
    return sum
}