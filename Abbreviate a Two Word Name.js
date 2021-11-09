/*link https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript*/

function abbrevName(name){
    name = name.toUpperCase();
    let arr = name.split(' ');
    let res = arr[0].slice(0, 1) + '.' + arr[1].slice(0, 1)

    return res

}