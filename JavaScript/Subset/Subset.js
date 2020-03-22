// Given a set of distinct (unique) integers, return all possible subsets
// For example, [1, 2, 3]
/*
// Output - 
 [], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]
*/
// Recursion, can use DFS

var numberArray = [1, 2, 3];


function subsets(nums) {
    var output = [];
    // Initialize it for the beginning of the array
    dfs([], 0);

    function dfs(current, index) {
        // Push current input
        output.push(current);
        console.log("Pushing array: "  + current);
        
        // Recursively go through the array number
        // Each time concatenating the subset of each array starting from index 0
        for(let i = index; i < nums.length; i++) {
            console.log(nums[i]);

            // Concat/merge the current index
            dfs(current.concat(nums[i]), i+1);
        }
    }

    return output;
}

console.log(subsets(numberArray));