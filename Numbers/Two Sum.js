// 1 Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target
// Assume that each input would have exactly one solution. Cannot use the same element twice
// Given nums = [2, 7, 11, 15], target = 9,
// nums[0] + nums[1] = 2 + 7 = 9 ==> return [0,1]

var input = [2, 7, 11, 15];
var input2 = [5, 8, 25, 30];
var target = 9;
var target2 = 55;

function twoSum(nums, target) {
    const hashMap = {};

    // Iterate through each element, using the hashmap as a comparison check
    for (let i = 0; i < nums.length; i++) {
        // Grab the needed number on each iteration
        const numberNeeded = target - nums[i];

        // If the hashmap has the needed number, return the two indexes
        if (numberNeeded in hashMap) {
            return [hashMap[numberNeeded], i];
        }

        // Key=Number : Value=Index
        hashMap[nums[i]] = i;
    }

    return "No pairs for the specified target number.";
}

console.log(twoSum(input, target));
console.log(twoSum(input2, target2));
console.log(twoSum(input, target2));
console.log(twoSum(input2, target));