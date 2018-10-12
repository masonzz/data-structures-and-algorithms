/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    var length = nums.length;
    for (let i = 1; i < length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

var arr = [5, 6, 6, 7, 5, 7, 1];
console.log(singleNumber(arr));