// Alex & snooker: points earned.
// https://www.codewars.com/kata/58b96d99404be9187c000003/train/javascript

// Description
// Alex is a great fan of snooker and he likes recording the results of his favourite players by recording the balls that fall into the pockets of the table. He asks you to help him with a program that calculates the points a player scored in a given set using his notes. Unfortunately, his notes are quite a mess... Sometimes Alex forgets that he already wrote down a color and records it multiple times.

// Given his short hand notation as string, calculate the points a player scored in a set.

// He codes the ball colors with letters:

// - R  = red     -->  1 point
// - Y  = yellow  -->  2 points
// - G  = green   -->  3 points
// - Bn = brown   -->  4 points
// - Be = blue    -->  5 points
// - P  = pink    -->  6 points
// - Bk = black   -->  7 points
// - W  = white   -->  no points because it's a foul

// Solution:
var blz = { R: 1, Y: 2, G: 3, Bn: 4, Be: 5, P: 6, Bk: 7 };
function frame(balls) {
  if (balls.includes('W'))
    return 'Foul';
  Object.entries(blz).forEach((a) => {
    balls = balls.replaceAll(a[0], '--' + a[1] + '*')
  })
  var section = balls.split('--');
  section = section.filter(a => a);
  var result = section.reduce((a, c, i) => {
    var split = c.split('*');
    var sum = parseInt(split[0])*(split[1] ? parseInt(split[1]) : 1);
    a = a+sum;
    return a;
  }, 0);
  if (result > 147)
    return 'invalid data';

  return result;
}

console.log(frame("R15Bk15YGBnBePBk"), 147);
console.log(frame("Bk16YGBnBeP"), 132);
console.log(frame("R9RGBn4BkRBeP"), 48);
console.log(frame("R15Bk16GYGBnBWeP"), "Foul");
console.log(frame("R8Bk17YGBnBk5BePBk1"), "invalid data");
