// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) { //"race a car"
    let mid = Math.floor(s.length/2)
    
    let str = s.toLowerCase().replace(/[^a-z0-9]/ig, "")
    
    let j = str.length-1 
    for(let i = 0; i < mid ;i++){
        if(str[i]!== str[j-i]){
            return false
        }
    } return true
};
