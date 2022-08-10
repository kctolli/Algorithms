/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    if (nums.length===1) return nums[0];
    return singleNumLoop(nums);
};

 var singleNumLoop = function(nums) {
    let result = 0;
    nums.forEach(e => {result = result ^ e;});
    return result;
};

module.exports = singleNumber;
