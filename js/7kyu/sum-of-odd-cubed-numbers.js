// Sum of Odd Cubed Numbers
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

// Description:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Solution

function cubeOdd(arr) {
    if (!arr.every(a => Number.isInteger(a)))
        return undefined;

    return arr.reduce((c, a, i) => {
        return c = c + (a%2 != 0 ? Math.pow(a, 3) : 0)
    }, 0);
}

console.log('\n\n<=======================>');

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);
console.log(cubeOdd([ -5, -5, 5, 5 ]), 0);
console.log(cubeOdd([ 27, -3, 41, 37 ]), 139230);
console.log(cubeOdd([ 6, 30, 10, 15 ]), 3375);
console.log(cubeOdd([ 1, 49, -1, 25, 38, 17 ]), 138187);