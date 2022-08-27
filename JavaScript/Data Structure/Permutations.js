// 46. Permutations
/* 
    Input: [1,2,3]
    Output:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
*/

function permute(nums) {
    if (!nums) return [];

    let result = [];

    // Brute force - O(n^2)
    for (let i = 0; i < nums.length; i++) {
        result[i] = []
        for (let j = 0; j < nums.length; j++) {
            result[i[j]] = nums[j];
            console.log(result[i]);
            console.log(nums[j]);
           // result[i[j]] = nums[j];
        }
    }

    return result;
}

var input = [1,2,3];
console.log(permute(input));