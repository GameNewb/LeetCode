// 832 Flipping an Image
/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/

// Brute force - O(n^2)
function flipAndInvertImage(A) {
    var reversedArray = [];
    var invertedArray = [];

    for(let i = 0; i < A.length; i++) {
        reversedArray[i] = A[i].reverse();
        invertedArray[i] = [];

        for (let j = 0; j < reversedArray[i].length; j++){
            invertedArray[i][j] = (reversedArray[i][j] == 1) ? 0 : 1;
        }
    }

    return invertedArray;
}

function flipAndInvertImageDirect(A) {

    var arrayLength = A.length;

    for(let row = 0; row < arrayLength; row++) {
        for (let j = 0; j < arrayLength / 2; j++) {
            // In-place sorting
            let temp = row[j] ^ 1;
            row[j] = row[arrayLength - 1 - j] ^ 1;
            row[arrayLength - 1 - j] = temp;
        }
    }

    return A;
}

function flipAndInvertImageOneLiner(A) {
    // For each matrix, reverse it. After, map each number and use XOR
    return A.map(row => row.reverse().map(num => num^1));
}

var input = [[1,1,0],[1,0,1],[0,0,0]];
var input2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
console.log(flipAndInvertImage(input));
console.log(flipAndInvertImageOneLiner(input2));
console.log(flipAndInvertImageDirect(input));