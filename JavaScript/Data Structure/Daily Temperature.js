// 739. Daily Temperatures
/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/


function dailyTemperatures(T) {

    // Create result array
    var res = new Array(T.length).fill(0);
    res.fill(0);
    
    // Use stack to go through input
    // Stack will contain the index of the temperature
    var stack = [];
    for (let i = 0; i < T.length; i++) {
        // T[stack[stack.length-1]] - top of the stack
        while (stack.length > 0 && T[stack[stack.length-1]] < T[i]) {
            // J = top of the stack
            let j = stack.pop();

            // For the specific index we just popped, set the value for the days
            res[j] = i - j;
        }
        // Push index 
        stack.push(i);
    }

    return res;
}

var input = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(input));