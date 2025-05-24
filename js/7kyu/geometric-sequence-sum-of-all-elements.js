// Geometric sequence - sum of all elements
// https://www.codewars.com/kata/55cb000321ca31039e00007d/train/javascript

// A geometric progression / series is the sum of a geometric sequence.

// A geometric sequence is a sequence of numbers that scale by a common ratio, usually denoted as r. To get the next term, multiply the current term by this value. The first term is provided for this kata.

// For example, the first 4 terms of the geometric sequence with first term 2 and ratio 3 is 2, 6, 18, 54. Notice that, given any term, it is 3 times larger than the last term for this case.

// A geometric series is just the first n terms of the sequence summed together. For instance, the sum of the first four terms of the example provided above is 
// 2
// +
// 6
// +
// 18
// +
// 54
// =
// 80
// 2+6+18+54=80.


// Solution

function GeometricSequenceSum(a, r, n) {
    var ary = [a];
    for (let i = 1; i < n; i++) {
        var j = ary[i-1]*r;
        ary.push(j);
    }
    return ary.reduce((c, a) => c+a, 0);
}

console.log('<============Test Cases===========>');

console.log(GeometricSequenceSum(2, 3, 5), 242);
console.log(GeometricSequenceSum(1, 1, 2), 2);
console.log(GeometricSequenceSum(2, 2, 10), 2046);
console.log(GeometricSequenceSum(1, -2, 10), -341);
console.log(GeometricSequenceSum(1, 0.5, 10), 1.998046875);