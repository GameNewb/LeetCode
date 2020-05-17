// 20 Valid Parentheses
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
*/

function isValid(s) {
    // If s is empty or it's not even length
    // We know that each parentheses has a corresponding pair, so it will always be even length
    if (!s || s.length % 2 != 0) return false;

    let map = [];
    map[")"] = "(";
    map["}"] = "{";
    map["]"] = "[";

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // Push the left-facing values onto the stack
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            // Else check the stack and pop the corresponding element
            if (map[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } 
            else {
                return false;
            }
        }
    }

    return stack.length == 0;
}

var input= "()";
var input2 = "()[]{}";
var input3 = "(]";
var input4 = "([)]";
var input5 = "{[]}";

console.log(isValid(input));
console.log(isValid(input2));
console.log(isValid(input3));
console.log(isValid(input4));
console.log(isValid(input5));