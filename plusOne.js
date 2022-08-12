/** https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    console.log(digits);

    for (let i = digits.length - 1; i >= 0; i--){
        if (digits[0] >= 10) {
            digits[0] -= 10;
            digits.unshift(1);
        } else if (digits[i] >= 10) {
            digits[i] -= 10;
            digits[i - 1] += 1;
        }
    }

    return digits;
};

module.exports = plusOne;
