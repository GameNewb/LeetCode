// 268 Missing Number
/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

function missingNumberSorted(nums) {

    // Sorting it will lead to possible O(nlogn) solution, since JS is using mergesort
    const sortedArray = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if(i != sortedArray[i]) {
            return i;
        }
    }
}

function missingNumber(nums) {
    let sum = 0;
    let total = 0;
    
    // Since we're trying to find the missing number, and we can make the assumption that only one is missing
    // Just add up the ith element together then subtract it later to the total
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        total += i + 1;
    }

    return total - sum;
}

var input = [9,6,4,2,3,5,7,0,1];
var input2 = [3,0,1];
console.log(missingNumber(input));
console.log(missingNumber(input2));