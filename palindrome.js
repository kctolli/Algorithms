/** https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var palindrome = function(x) {
    if (x < 0) return false;
    return x.toString() === x.toString().split('').reverse().join('');
};

module.exports = palindrome;
