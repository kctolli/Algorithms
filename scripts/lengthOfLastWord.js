/** https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArray = s.trim().split(' ');
    return strArray[strArray.length - 1].length;
};

module.exports = lengthOfLastWord;
