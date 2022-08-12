/** https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length -1] += 1;
    console.log(digits);
    return digits;
};

module.exports = plusOne;
