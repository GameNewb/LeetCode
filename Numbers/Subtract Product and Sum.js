// 1281 Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits
// Input n = 234
// Output = 15
// Product = 2 * 3 * 4 = 24, Sum = 2 + 3 + 4 = 9, Result = 24 - 9

var input = 234;
var input2 = 4421;
var input3 = 6291;

function subtractProductAndSum(num) {

    /* Convert number to array
     * Array.from(String(num), Number) = converts the number into a shallow-copy array
     * .reduce((num1, num2) => num1 + num2) = iterates through the array values and add each one
     */
    let sum = Array.from(String(num), Number).reduce((num1, num2) => num1 + num2);
    let product = Array.from(String(num), Number).reduce((num1, num2) => num1 * num2);

    return product - sum;
}

function oneLiner(num) {
    return Array.from(String(num), Number).reduce((num1, num2) => num1 * num2) - Array.from(String(num), Number).reduce((num1, num2) => num1 + num2);
}

console.log(subtractProductAndSum(input));
console.log(oneLiner(input));
console.log(oneLiner(input2));
console.log(oneLiner(input3));
