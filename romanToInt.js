/** https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    let skip = false;
    for (let i = 0; i < s.length; i++) {
       if (skip){
           skip = false;
           continue;
       }
       currIteration = s[i]
       nextIteration = s[i+1]
       if (subtractionMapper[currIteration] && subtractionMapper[currIteration].includes(nextIteration)) {
           total += valueMapper[nextIteration] - valueMapper[currIteration];
           skip = true;
           continue;
       } else {
           total += valueMapper[currIteration];
       }
    }
    return total;
};

/**
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */

const valueMapper = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const subtractionMapper = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
}

module.export = romanToInt;