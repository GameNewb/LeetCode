// 41 First Missing Positive
/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

function findMissingPositive(nums) {

    let positiveArray = [];
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        // We only care about positive integers AND the smallest missing positive integer
        // If nums[i] is > than the array length, then we know it's not going to be the number missing since there will be smaller numbers in between
        if(nums[i] > 0 && nums[i] <= nums.length) {
            positiveArray[nums[i]] = 1;
            max = Math.max(max, nums[i]);
        }
    }

    for (let i = 1; i <= max + 1; i++) {
        if (!positiveArray[i]) return i;
    }
}

// Use a hashmap to store all positive numbers that are less than the length
// Not O(1) space since hashmaps are O(n)
function findMissingPositiveMap(nums) {
    if (nums.length == 0) return 1;

    const map = {};
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1; 
        } else {
            map[nums[i]]++;
        }

        // Get the maximum number
        max = Math.max(max, nums[i]);
    }

    // Use-case where the array elements are all <= 0
    if (max <= 0) return 1;

    // Use the max number as the stopping point
    for (let i = 1; i <= max + 1; i++) {
        if (!map[i]) return i;
    }
}

var input1 = [1,2,0];
var input2 = [3,4,-1,1];
var input3 = [7,8,9,11,12];
var input4 = [-13, 0, -5, -6];
var input5 = [];
var input6 = [1];
console.log(findMissingPositiveMap(input2));
console.log(findMissingPositiveMap(input4));
console.log(findMissingPositiveMap(input5));
console.log(findMissingPositiveMap(input6));
console.log(findMissingPositive(input1));
console.log(findMissingPositive(input2));
console.log(findMissingPositive(input4));
console.log(findMissingPositive(input5));
console.log(findMissingPositive(input6));