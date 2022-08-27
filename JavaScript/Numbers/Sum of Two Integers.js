// 371 Sum of Two Integers
/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/

function getSumRecusively(a, b) {
    if (!a) return b;
    if (!b) return a; 

    if (b == 0) { 
        return a; 
    } else {
        let sum = a ^ b; // Handles case 0 + 1 or 1 + 0
        let carry = (a & b) << 1; // Shift left, finds all bit positions with case 1 + 1, which results in 0. Add carry to the position
        return getSum(sum, carry);
    }
}

function getSum(a, b) {
    if (!a) return b;
    if (!b) return a; 

    while (b != 0) {
        let carry = (a & b);
        a = a ^ b;
        b = carry << 1;
    }

    return a;
}

var a = 3, b = -2;
console.log(getSum(a, b));