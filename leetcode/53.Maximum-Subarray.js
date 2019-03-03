// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路：当当前子数组的和 小于 0 时，再累加肯定小于下一个元素自己单独作为子数组
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let curSum = 0;
    let maxSum = nums[0];
    nums.forEach((item) => {
        curSum = curSum + item;
        if (curSum < 0) {
            curSum = 0;
        } else {
            maxSum = Math.max(curSum, maxSum);
        }
    });

    return maxSum;
};
