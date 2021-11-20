// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1 || n == 2){
        return n
    }  
    let a = 1
    let b = 2
    for(let i = 2; i < n; i++){
        let sum = a + b
        a = b
        b = sum
    }
    return b
};