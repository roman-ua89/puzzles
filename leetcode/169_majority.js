/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  let keyS = null
  let valueS = null;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let counter = map.get(nums[i]);
      map.set(nums[i], counter += 1);
    }
  }

  map.forEach((value, key) => {
    if (value > valueS) {
      keyS = key;
      valueS = value;
    }
  })

  return keyS;

};

const nums1 = [3,2,3];
console.log('res1: ', majorityElement(nums1));

const nums2 = [2,2,1,1,1,2,2];
console.log('res2: ', majorityElement(nums2));