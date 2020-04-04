// #53 Maximum Subarray
/* OPTIMIZATION PROBLEM
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function maxSubArray(nums) {
    // Create a temporary array to keep track of the sums that we have
    var maxSumArray = [];

    // O(n)
    // for each element, make a note of each number and compare it to the previous value
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            // Initiliaze the first element of temp array so that we can use it for comparison
            maxSumArray[i] = nums[i];
        } else {
            // For then next few indexes, we add the current number to the previous number that we have in the maxSumArray
            // If the sum is bigger than previous value, we store it
            // This way, we keep track of which contiguous sub-array has the most value
            maxSumArray[i] = Math.max(nums[i], nums[i] + maxSumArray[i - 1]);
        }
    }

    // Returns 6 from [0, 1, -2, 4, 3, 6, 1, 5] -> Contiguous sub-array is [4,-1,2,1]
    return Math.max(...maxSumArray);
}

var input = [-2,1,-3,4,-1,2,1,-5,4];
var input2 = [1];
var input3 = [-2, -1];
console.log(maxSubArray(input));
console.log(maxSubArray(input2));
console.log(maxSubArray(input3));
