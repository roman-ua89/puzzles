/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];

  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {

    for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
      if (firstIndex !== secondIndex) {
        if ((nums[firstIndex] + nums[secondIndex]) === target) {
          result = [firstIndex, secondIndex];
          break;
        }
      }
    }

    if (result.length) break;

  }

  return result;
};

// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,3], 6))