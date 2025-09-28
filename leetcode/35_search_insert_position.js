
var searchInsert = function(nums, target) {

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;

};

const res1 = searchInsert([1,3,5,6], 5);
console.log('res1', res1); // 2

const res2 = searchInsert([1,3,5,6], 2);
console.log('res2', res2); // 1

const res3 = searchInsert([1,3,5,6], 7);
console.log('res3', res3); // 4

const res4 = searchInsert([3,5,6], 2);
console.log('res4', res4); // 0