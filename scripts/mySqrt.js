/** https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    return Math.floor(x ** (1/2));
};

module.exports = mySqrt;
