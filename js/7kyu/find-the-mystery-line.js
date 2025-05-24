// Find the mystery line
// https://www.codewars.com/kata/67a11f616a791e028b86582f/train/javascript

function findMysteryEquation(func) {
    var a = func(0);
    var b = func(1);
    return [b-a, a];
}

