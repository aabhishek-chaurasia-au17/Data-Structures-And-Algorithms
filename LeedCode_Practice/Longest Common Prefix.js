// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function(strs) { //["flower","flow","flight"]
    let firtvalue = strs[0].split("")      // [f,l,o,w,e,r]
    let newstr = ""                        // ""
    
    for(let i = 0; i < firtvalue.length; i++){  
        for(let j = 1; j < strs.length; j++){ 
            if(firtvalue[i] !== strs[j][i]){
                return newstr
            }
        }
        newstr += firtvalue[i]
    }
    return newstr
};