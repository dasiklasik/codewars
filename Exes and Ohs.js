/*link https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript*/

function XO(str) {
    let x = 0;
    let o = 0;


    str.toLowerCase().split('').map(t => (t === 'x') ? x +=1 : (t === 'o') ? o+=1: '' )

    return x === o
}