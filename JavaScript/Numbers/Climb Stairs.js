/* 
 70 Climbing Stairs
 You are climbing a stair case. It takes n steps to reach to the top.
 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 Note: Given n will be a positive integer.
 Input: 3, Output: 3
 Explanation: There are three ways to climb to the top.
 1. 1 step + 1 step + 1 step
 2. 1 step + 2 steps
 3. 2 steps + 1 step
 */ 

var input = 3;
var biginput = 90;
var output = 0;

// steps[i-1] = One Step
// steps[i-2] = Two Steps
// This question is basically like Fibonacci sequence

// Times out at higher inputs
// O(2^n) --> exponential, so it times out
function climbStairsRecusively(n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    return climbStairsRecusively(n - 1) + climbStairsRecusively(n - 2);
}

 // O (n)
function climbStairsMemoization(n, cache) {

    // Store the memory results using memoization
    if (n in cache) {
        return cache[n];
    } else {
        // Base cases
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        cache[n] = climbStairsMemoization(n - 1, cache) + climbStairsMemoization(n - 2, cache);
        return cache[n];
    }

}

 // O(n)
function climbStairs(n) {
    // Base case
    if (n <= 3) return n;

    let steps = [1, 2, 3];
    
    for (let i = 3; i < n; i++) {
        steps.push(steps[i - 1] + steps[i - 2]);
    }

    return steps.pop();
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function climbStairsO1(n) {

    let oneStep = 1, twoStep = 2, allSteps = 0;

    // Base case
    if (n <= 2) return n;

    for (let i = 2; i < n; i++) {
        allSteps = oneStep + twoStep;
        // Store previous steps
        oneStep = twoStep; // This is basically steps[i - 2]
        twoStep = allSteps; // This is basically steps[i - 1]
    }

    return allSteps;
 }

 console.log(climbStairsRecusively(5));
 console.log(climbStairs(10));
 console.log(climbStairsMemoization(10, {}));
 console.log(climbStairsO1(2));

