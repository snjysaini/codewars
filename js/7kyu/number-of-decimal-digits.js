// Number of Decimal Digits
// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript

function digits(n) {
    return n.toString().split('').length
}

console.log(digits(0), 1);
console.log(digits(9), 1);
console.log(digits(66), 2);
console.log(digits(12345), 5);
console.log(digits(128685), 6);
console.log(digits(9876543210), 10);
console.log(digits(9007199254740991), 16);