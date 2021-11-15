/*link https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript*/

String.prototype.toJadenCase = function () {
    let string = this;
    let arr = string.split(' ');

    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('');
        [arr2[0]] = [arr2[0].toUpperCase()];
        arr2 = arr2.join('');
        [arr[i]] = [arr2]
    }

    return arr.join(' ')
};
