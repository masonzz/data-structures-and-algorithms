/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr = new Array(m + n);
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            arr[k++] = nums1[i++];
        } else {
            arr[k++] = nums2[j++];
        }
    }
    while(i < m) {
        arr[k++] = nums1[i++];
    }
    while(j < n) {
        arr[k++] = nums2[j++];
    }
    for(i = 0; i < k; i++) {
        nums1[i] = arr[i];
    }
};

var nums1 = [1,2,3,0,0,0]
var nums2 = [2,5,6]
merge(nums1, 3, nums2, 3);
console.log(nums1);