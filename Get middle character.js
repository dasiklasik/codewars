/*link https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/javascript*/

function getMiddle(s)
{

    if (s.length === 1 || s.length === 2) {
        return s;
    } else if (s.length%2 === 0) {
        return  s[s.length-((s.length/2)+1)] + s[s.length-(s.length/2)];
    } else {
        return s[s.length-(Math.floor(s.length/2)+1)];
    }
}