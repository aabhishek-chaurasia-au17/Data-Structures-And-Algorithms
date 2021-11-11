// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

 
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) { // nums array [1, 2, 3, 4]
    
    for(let i = 1; i < nums.length; i++){ // i = 1, 1 < 4, 2 < 4, 3 < 4, 
       nums[i] += nums[i-1]              //  2 = 1 + 2, 3 = 3 + 6, 4 = 4 + 6
    }
    return nums                          //  [1, 3, 6, 10]
};