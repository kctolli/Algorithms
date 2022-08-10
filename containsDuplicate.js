/** https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 1) return false;
    return duplicatesLoop(nums);
};

var duplicatesLoop = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] == nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    if (i > 0) return true;
    return false;
}

module.exports = containsDuplicate;
