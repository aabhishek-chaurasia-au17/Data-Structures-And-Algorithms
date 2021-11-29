// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function(numRows) {
    var res = [];
      for (let i = 0; i < numRows; i++) {
        res.push([]);
        res[i][0] = 1;
        res[i][i] = 1;
        for (let j = 1; j < i; j++) {
          res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
      }
  return res;
};