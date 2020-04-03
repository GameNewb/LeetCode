// 202 Happy Number
/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

function squareSum(n) {
    return n.toString().split('').reduce((sum, num) => (sum + Math.pow(num, 2)), 0);
}

function isHappy(n) {
    // Use an array to keep track of the numbers we've gone through already
    // Memoization - prevents infite loop (e.g. 27 causes infinite loop without it)
    var seen = {};
    while(n !== 1 && !seen[n]) {
        seen[n] = true;
        n = squareSum(n);
    }
    
    return n === 1;
}

var input = 19;
console.log(isHappy(input));
console.log(isHappy(27));