// 198 House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Input [1,2,3,1]
// Output = 4, House 1 + House 3 = 4; House 2 + House 4 = 3

// Edge case is the figuring out the right pattern to get the most money
// 2 1 2 1 1 2 1 2 1 2 
// If we go with even/odd approach, we're only getting 2 outputs and not necessarily the most money
// Do we skip two steps or multiples steps?

var input = [1,2,3,1];
var input2 = [2,7,9,3,1];
var input3 = [2,1,2,1,1,2,1,2,1,2];

// Generic approach, doesn't return the best result
function robHouses(houses) {

    let evenNumberOutput = 0;
    let oddNumberOutput = 0;

    // Rob houses with even iterations
    for (let i = 0; i < houses.length; i++) {
        if (i % 2 == 0) {
            evenNumberOutput += houses[i];
        } else {
            oddNumberOutput += houses[i];
        }
    }

    return (evenNumberOutput > oddNumberOutput) ? evenNumberOutput : oddNumberOutput;
}

function robHousesDP(houses) {

    if(houses.length == 0) return 0;
    if(houses.length === 1) return houses[0];
    if(houses.length === 2) return Math.max(houses[0], houses[1]);

    // Get the max output from first and second house
    let amount = [houses[0], Math.max(houses[0], houses[1])];

    console.log(amount);
    // Start at 3rd element since we can keep track of the previous 2 using DP/recursion
    for (let i = 2; i < houses.length; i++) {
        // Find out the max amount from the previous house and the previous previous house + current house
        // We're doing amount[i - 1] in the beginning since we already know that's the larger amount from line 43
        amount[i] = Math.max(amount[i - 1], amount[i - 2] + houses[i]);
        console.log(amount);
    }

    return amount[amount.length - 1];
}

console.log(robHousesDP(input));
console.log(robHousesDP(input2));
console.log(robHousesDP(input3));