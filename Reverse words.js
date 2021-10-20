/*link https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript*/

function spinWords(string){
    let arr = string.split(' ');
    let res = [];
    let a;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            a = arr[i].split('').reverse().join('');
            res.push(a);
        } else {
            res.push(arr[i]);
        }
    }
    return res.join(' ');
}