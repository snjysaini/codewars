// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Description:
// Given an array of integers, return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.


// Solution:
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    return input.reduce((acc, num) => {
        if (Math.sign(num) === 1) {
            acc[0]++;
        } else if (num < 0) {
            acc[1] += num;
        }
        return acc;
    }, [0, 0]);
}

// Test cases:
console.log(countPositivesSumNegatives([1, 2, 3, -4, -5])); // [3, -9]