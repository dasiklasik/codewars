/*link https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript*/

function findOutlier(integers){
    let odd = 0;
    let even = 0;
    let evenRes;
    let oddRes;

    for (let i = 0; i<integers.length; i++) {
        if (integers[i] % 2 === 0) {
            even++
            evenRes = integers[i]
        } else {
            odd++
            oddRes = integers[i]
        }
    }
    return odd === 1 ? oddRes : evenRes
}