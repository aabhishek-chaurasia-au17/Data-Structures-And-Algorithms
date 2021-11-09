// 1. Two Sum

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

const array = [5, 6, 7, 9, 3, 8]
let target = 15

function twosum(array, target) {
    const map = {}
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = i
    }
    for (let j = 0; j < array.length; j++) { 
        let remain = target - array[j]; 
        
        if (map[remain]) {
            return [j, map[remain]];
        }
    }
    
}

// Time complexity = O(n)
// Space complexity = O(n)
