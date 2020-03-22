// 1365 How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]


var nums = [8,1,2,2,3];
var nums2 = [6,5,4,8];
var nums3 = [7,7,7,7];

// Brute force
function countSmallerNumbers(numArray) {
    var output = [];

    for (let i = 0; i < numArray.length; i++) {
        
        // Store current values
        let currentNum = numArray[i];
        output[i] = 0;

        for (let j = 0; j < numArray.length; j++) {
            
            // If current number is bigger than next number, increment count
            if (currentNum > numArray[j]) {
                output[i]++;
            }
            
        }
    }

    return output;
}

console.log(countSmallerNumbers(nums));
console.log(countSmallerNumbers(nums2))
console.log(countSmallerNumbers(nums3))

function countSmallerNumbersJSFunctions(numArray) {
    // Create a new array, sort it and return
    const sortedArray = Array.from(numArray).sort((n1, n2) => n2 - n1);
    console.log(sortedArray);

    // Create a map (key-value pair) with the count
    const map = new Map(sortedArray.map((num, index) => [num, numArray.length - index - 1]));

    // Return the value only
    return numArray.map(num => map.get(num));
}

console.log(countSmallerNumbersJSFunctions(nums));
console.log(countSmallerNumbersJSFunctions(nums2))
console.log(countSmallerNumbersJSFunctions(nums3))

