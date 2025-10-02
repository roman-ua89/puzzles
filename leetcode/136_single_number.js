/**
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
  let buffer = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!buffer.has(nums[i])) {
      buffer.add(nums[i]);
    } else {
      buffer.delete(nums[i]);
    }
  }
  return buffer.values().next().value;
};

const  nums1 = [2,2,1];
console.log('nums1: ', singleNumber(nums1)); // 1


const  nums2 = [4,1,2,1,2];
console.log('nums2: ', singleNumber(nums2)); // 4