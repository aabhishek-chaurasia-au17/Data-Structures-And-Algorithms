// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let L = 0
    let R = 0
    let result = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'L'){
            L ++
        }else if(s[i] === 'R'){
            R ++
        }
        
        if(L === R){
            result ++
        }
    }
    
    return result
};