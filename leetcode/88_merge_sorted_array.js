
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b)

};

const nums1 = [1,2,3,0,0,0];
const m1 = 3;
const nums2 = [2,5,6];
const n1 = 3;

merge(nums1, m1, nums2, n1);
console.log('nums1', nums1);



const nums1_2 = [1];
const m2 = 1;
const nums2_2 = [];
const n2 = 0;

merge(nums1_2, m2, nums2_2, n2);
console.log('nums2', nums1_2);



const nums1_3 = [4,5,6,0,0,0];
const m3 = 3;
const nums2_3 = [1,2,3];
const n3 = 3;

merge(nums1_3, m3, nums2_3, n3);
console.log('nums3', nums1_3);