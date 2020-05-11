// 118 Pascal's Triangle
/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

function generate(numRows) {
    if (!numRows) return [];

    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];

        // For every row, create the appropriate data
        for (let j = 0; j <= i; j++) {
            // Use-case for the left and right end of the triangle
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }

    return result;
}

var input = 5;
console.log(generate(input));