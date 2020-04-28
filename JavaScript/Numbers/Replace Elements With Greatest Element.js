// 1299 Replace ELements with Greatest Element on Right Side
/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/

function replaceElements(arr) {

    // Copy the array and fill -1 at the end since we know the last element will be -1
    var results = new Array(arr.length);
    results[arr.length-1] = -1;

    // Start at the end
    for (let i = arr.length - 1; i > 0; i--) {
        // Compare each element from the beginning and it's end, then store it
        results[i - 1] = Math.max(arr[i], results[i]);
    }
    return results;
}

var input = [17,18,5,4,6,1];
console.log(replaceElements(input));
