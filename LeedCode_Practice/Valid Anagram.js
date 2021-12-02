// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {}
    for (let value of s) {
        if (!sMap[value]) {
            sMap[value] = 1;
        } else {
            sMap[value] += 1;
        }
    }
    for (let val of t) {
        if (val in sMap && sMap[val] !== 0) {
            sMap[val] -= 1;
        } else {
            return false
        }
    }
    const sum = Object.values(sMap).reduce((a, b) => a + b)
    if (sum === 0) {
        return true
    }
    return false
};
