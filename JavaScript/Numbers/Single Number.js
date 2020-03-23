// 136 Single Number
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Input = [2,2,1] ; Output = 1
// Algorithm should have linear runtime complexity. Implement it without using extra memory?

var input = [2,2,1];
var input2 = [4,1,2,1,2];
var input3 = [3,3,3,3];

function singleNumber(nums) {

    const hashmap = {};

    // O(n)
    for (let i = 0; i < nums.length; i++) {
        
        // Store in hashmap
        if (hashmap[nums[i]]) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }

    // Return the appropriate number or return a string, O(n) as well
    return (Object.keys(hashmap).find(key => hashmap[key] === 1)||0);
}

function singleNumberOneLine(nums) {
    // Bitwise XOR ^
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}



console.log(singleNumber(input));
console.log(singleNumber(input2));
console.log(singleNumber(input3));

console.log(singleNumberOneLine(input));
console.log(singleNumberOneLine(input2));
console.log(singleNumberOneLine(input3));