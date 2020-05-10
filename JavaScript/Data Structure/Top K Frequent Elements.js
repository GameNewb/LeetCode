// 347 Top K Frequent Elements
/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

// Use HashMap then sort it, problem is it's not better than O(nlogn)
function topKFrequentMap(nums, k) {
    if (!nums || !k) return 0;

    let result = [];
    let map = new Map();

    // Initialize map 
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    // nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

    // Sort map
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(sortedArray[i][0]);
    }
    return result;
}

var nums = [1,1,1,2,2,3], k = 2;
var nums = [-1, -2, -1, 1, 0, 1], k = 2;
console.log(topKFrequentMap(nums, k));