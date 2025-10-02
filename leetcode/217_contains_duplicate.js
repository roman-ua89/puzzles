/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
};

const nums1 = [1,2,3,1];
console.log('res1: ', containsDuplicate(nums1)); // true

const nums2 = [1,2,3,4];
console.log('res2: ', containsDuplicate(nums2)); // false

