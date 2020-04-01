// 1304. Find N Unique Integers Sum up to Zero
/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]

1 <= n <= 1000
*/

function sumZero(n) {

    // Parse it in half
    var num = parseInt(n/2);
    var results = [];

    for (let i = 1; i <= num; i++) {
        // Push the symmetrical values in the array
        // We know that adding the positive and negative numbers of each digit will just return 0
        results.push(i, -i);
    }

    // If n is odd, just push a 0
    if(n % 2) {
        results.push(0);
    }

    return results;
}

var input = 5;
console.log(sumZero(input));