// Is there a vowel in there?
//  https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

// Description:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

//
// Solution:
function isVow(inp) {
    var obj = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u'
    }
    return inp.map((a) => obj[a] ? obj[a] : a);
}

console.log(isVow([100,100,116,105,117,121])); // [100,100,116,"i","u",121]