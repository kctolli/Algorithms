/** https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    return duplicatesLoop(nums);
};

var duplicatesLoop = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

module.exports = removeDuplicates;
