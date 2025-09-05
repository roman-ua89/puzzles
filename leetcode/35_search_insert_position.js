
var searchInsert = function(nums, target) {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;

};

const res1 = searchInsert([1,3,5,6], 5);
console.log('res1', res1); // 2

const res2 = searchInsert([1,3,5,6], 2);
console.log('res2', res2); // 1

const res3 = searchInsert([1,3,5,6], 7);
console.log('res3', res3); // 4

const res4 = searchInsert([3,5,6], 2);
console.log('res4', res4); // 0